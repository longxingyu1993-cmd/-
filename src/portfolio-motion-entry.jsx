import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

const motionState = window.__portfolioMotionState || {};
if (motionState.cleanup) motionState.cleanup();
window.__portfolioMotionState = motionState;
window.__portfolioMotionLoaded = true;
window.__portfolioMotionVersion = 'creative-gsap-2';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const lowMemory = Number(navigator.deviceMemory || 8) <= 4;
const cleanupFns = [];

function ready(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
    return;
  }
  callback();
}

function injectMotionStyles() {
  const existing = document.getElementById('portfolio-motion-styles');
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = 'portfolio-motion-styles';
  style.textContent = `
    .motion-opening-stage {
      position: fixed;
      inset: 0;
      z-index: 120;
      overflow: hidden;
      pointer-events: none;
      background: #020302;
      color: #94ff27;
      isolation: isolate;
    }

    .motion-opening-stage::before {
      position: absolute;
      inset: -20%;
      content: "";
      background:
        linear-gradient(120deg, transparent 0 35%, rgba(148, 255, 39, 0.18) 42%, transparent 49%),
        radial-gradient(circle at 50% 42%, rgba(148, 255, 39, 0.16), transparent 28%);
      opacity: 0.78;
      transform: translate3d(-18%, 0, 0) skewX(-18deg);
    }

    .motion-opening-stage::after {
      position: absolute;
      inset: 0;
      content: "";
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 4px),
        linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.78));
      mix-blend-mode: screen;
      opacity: 0.28;
    }

    .motion-opening-index {
      position: absolute;
      left: clamp(20px, 5vw, 72px);
      bottom: clamp(22px, 6vw, 76px);
      z-index: 2;
      display: grid;
      gap: 8px;
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .motion-opening-index strong {
      display: block;
      color: #eef5f2;
      font-size: clamp(38px, 8vw, 104px);
      line-height: 0.88;
      letter-spacing: 0;
    }

    .motion-opening-slab {
      position: absolute;
      inset: 0 auto 0 0;
      z-index: 1;
      width: 62vw;
      background: #94ff27;
      transform-origin: 0 50%;
      mix-blend-mode: screen;
    }

    .motion-opening-slab.is-dark {
      left: auto;
      right: 0;
      width: 55vw;
      background: #050705;
      mix-blend-mode: normal;
      transform-origin: 100% 50%;
    }

    .motion-clip-target {
      overflow: hidden;
      will-change: transform, clip-path, opacity;
    }

    .motion-image-target {
      will-change: transform, clip-path;
      transform-origin: 50% 50%;
    }

    .motion-card-target {
      will-change: transform, clip-path, opacity, filter;
      transform-origin: 50% 100%;
    }
  `;
  document.head.appendChild(style);
  cleanupFns.push(() => style.remove());
}

function q(selector, root = document) {
  if (!selector) return null;
  return root.querySelector(selector);
}

function qa(selector, root = document) {
  if (!selector) return [];
  return Array.from(root.querySelectorAll(selector));
}

function isVisible(element) {
  if (!element) return false;
  const style = getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function textElement(root, text, tag = '*') {
  return qa(tag, root).find((element) => element.textContent.trim() === text);
}

function ensureTitleParts(title) {
  if (!title) return [];
  title.classList.add('motion-clip-target');
  if (title.children.length) return Array.from(title.children);

  const span = document.createElement('span');
  span.textContent = title.textContent;
  title.textContent = '';
  title.appendChild(span);
  return [span];
}

function waitForEnhancements() {
  return new Promise((resolve) => {
    let ticks = 0;
    const tick = () => {
      ticks += 1;
      const timelineReady = q('.resume-timeline-card .timeline-card-shell');
      const iconReady = q('.cap-card .icon-btn') || q('.mobile-skill-card .icon-btn');
      if ((timelineReady && iconReady) || ticks > 90) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function setupOpeningAnimation() {
  return; // Disabled: hero shows video only
  const frame = q('#frame');
  const mobileHero = q('.mobile-hero');
  const desktopActive = isVisible(frame);
  const root = desktopActive ? frame : mobileHero;
  if (!root) return;

  const stage = document.createElement('div');
  stage.className = 'motion-opening-stage';
  stage.innerHTML = `
    <div class="motion-opening-slab"></div>
    <div class="motion-opening-slab is-dark"></div>
    <div class="motion-opening-index"><span>Portfolio / Opening</span><strong>LXY</strong></div>
  `;
  document.body.appendChild(stage);

  const heroVideo = desktopActive ? q('.video-bg', frame) : q('video', mobileHero);
  const heroTitle = desktopActive ? q('h1', frame) : q('.mobile-title', mobileHero);
  const titleParts = ensureTitleParts(heroTitle);
  const heroKicker = desktopActive ? textElement(frame, '[PORTFOLIO]', 'p') : q('.mobile-kicker', mobileHero);
  const heroNumber = desktopActive ? q('[data-countup][data-to="10"]', frame) : q('.mobile-number', mobileHero);
  const desktopDetail = desktopActive
    ? qa('#frame > p, #frame > a.btn, #frame > div.absolute.font-cn.text-right').filter((element) => {
        const top = parseFloat(element.style.top || '9999');
        return top > 880 && top < 1030;
      })
    : [];
  const mobileDetail = desktopActive
    ? []
    : [q('.mobile-copy', mobileHero), q('.mobile-actions', mobileHero), q('.mobile-motto', mobileHero), q('.mobile-top', mobileHero)];
  const details = [heroNumber, ...desktopDetail, ...mobileDetail].filter(Boolean);

  gsap.set(stage.querySelector('.motion-opening-slab'), { scaleX: 1.12, xPercent: -8, skewX: -12 });
  gsap.set(stage.querySelector('.motion-opening-slab.is-dark'), { scaleX: 1.05, xPercent: 8, skewX: -12 });
  gsap.set(stage.querySelector('.motion-opening-index'), { y: 36, opacity: 0 });
  if (heroVideo) gsap.set(heroVideo, { scale: 1.16, filter: 'blur(12px) brightness(0.58) saturate(0.8)' });
  if (heroKicker) gsap.set(heroKicker, { clipPath: 'inset(0 100% 0 0)', opacity: 0.72 });
  if (titleParts.length) {
    gsap.set(titleParts, {
      yPercent: 118,
      scaleY: 0.46,
      skewY: 7,
      opacity: 0,
      transformOrigin: '0% 100%',
      willChange: 'transform, opacity',
    });
  }
  if (details.length) {
    gsap.set(details, { y: 68, opacity: 0, filter: 'blur(8px)' });
  }

  let fallbackTimer = 0;
  const finishOpening = () => {
    window.clearTimeout(fallbackTimer);
    stage.remove();
    gsap.set([heroVideo, heroKicker, ...titleParts, ...details].filter(Boolean), {
      clearProps: 'willChange,filter,clipPath,transform,opacity',
    });
  };

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' },
    onComplete: finishOpening,
  });
  cleanupFns.push(() => {
    window.clearTimeout(fallbackTimer);
    tl.kill();
  });
  fallbackTimer = window.setTimeout(finishOpening, 6200);

  tl.to(stage.querySelector('.motion-opening-index'), { y: 0, opacity: 1, duration: 0.9 }, 0)
    .to(stage.querySelector('.motion-opening-slab'), { xPercent: 102, scaleX: 0.72, duration: 1.55 }, 0.18)
    .to(stage.querySelector('.motion-opening-slab.is-dark'), { xPercent: -112, scaleX: 0.84, duration: 1.65 }, 0.26);

  if (heroVideo) {
    tl.to(heroVideo, { scale: 1, filter: 'blur(0px) brightness(1.02) saturate(1)', duration: 2.05 }, 0.16);
  }

  if (heroKicker) {
    tl.to(heroKicker, { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.95 }, 0.7);
  }

  if (titleParts.length) {
    tl.to(
      titleParts,
      {
        yPercent: 0,
        scaleY: 1,
        skewY: 0,
        opacity: 1,
        duration: 1.45,
        stagger: 0.15,
      },
      0.82
    );
  }

  if (details.length) {
    tl.to(details, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, stagger: 0.08 }, 1.18);
  }

  tl.to(stage, { opacity: 0, duration: 0.75, ease: 'power3.inOut' }, 1.68);
}

function makeSectionMotion({ trigger, eyebrow, heading, cards, images }) {
  const triggerEl = q(trigger);
  if (!triggerEl || !isVisible(triggerEl)) return;

  const eyebrowEl = q(eyebrow);
  const headingEl = q(heading);
  const cardEls = qa(cards).filter(isVisible);
  const imageEls = qa(images).filter(isVisible);

  [eyebrowEl, headingEl].filter(Boolean).forEach((element) => element.classList.add('motion-clip-target'));
  cardEls.forEach((element) => element.classList.add('motion-card-target'));
  imageEls.forEach((element) => element.classList.add('motion-image-target'));

  if (eyebrowEl) {
    gsap.set(eyebrowEl, {
      x: -260,
      y: 36,
      scale: 4.6,
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
      transformOrigin: '0% 50%',
    });
  }
  if (headingEl && headingEl !== eyebrowEl) {
    gsap.set(headingEl, { y: 58, opacity: 0, clipPath: 'inset(0 0 100% 0)' });
  }
  if (cardEls.length) {
    gsap.set(cardEls, {
      y: 94,
      opacity: 0,
      filter: 'blur(10px)',
      clipPath: 'inset(16% 0 0 0)',
      scale: 0.975,
    });
  }
  if (imageEls.length) {
    gsap.set(imageEls, { scale: 1.18, clipPath: 'inset(0 0 100% 0)' });
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: 'top 74%',
      once: true,
      invalidateOnRefresh: true,
    },
    defaults: { ease: 'expo.out' },
  });

  if (eyebrowEl) {
    timeline.to(eyebrowEl, { x: 0, y: 0, scale: 1, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.18 });
  }

  if (headingEl && headingEl !== eyebrowEl) {
    timeline.to(headingEl, { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.08 }, eyebrowEl ? '<0.18' : 0);
  }

  if (cardEls.length) {
    timeline.to(
      cardEls,
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        clipPath: 'inset(0% 0 0 0)',
        scale: 1,
        duration: 1.18,
        stagger: { each: 0.12, from: 'start' },
      },
      '<0.24'
    );
  }

  if (imageEls.length) {
    timeline.to(
      imageEls,
      {
        scale: 1.045,
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.28,
        stagger: { each: 0.08, from: 'start' },
      },
      '<0.08'
    );
  }

  cleanupFns.push(() => timeline.kill());
}

function setupScrollAnimations() {
  makeSectionMotion({
    trigger: '#resume',
    eyebrow: '#resumeEyebrow',
    heading: '#frame h2',
    cards: '.resume-glow-card, .resume-timeline-card',
    images: '',
  });

  makeSectionMotion({
    trigger: '#works',
    eyebrow: '#works + p',
    heading: '#works + p + h2',
    cards: '.project-card',
    images: '.project-card img',
  });

  makeSectionMotion({
    trigger: '#capability',
    eyebrow: '#capability + p',
    heading: '#capability + p + h2',
    cards: '.cap-card',
    images: '',
  });

  makeSectionMotion({
    trigger: '#contact',
    eyebrow: '#contact + p',
    heading: '#contact + p + h2',
    cards: '#contact ~ .btn',
    images: '',
  });

  makeSectionMotion({
    trigger: '#m-resume',
    eyebrow: '#m-resume .mobile-eyebrow',
    heading: '#m-resume .mobile-heading',
    cards: '#m-resume .mobile-card, #m-resume .mobile-stat, #m-resume .mobile-timeline-item',
    images: '',
  });

  makeSectionMotion({
    trigger: '#m-works',
    eyebrow: '#m-works .mobile-eyebrow',
    heading: '#m-works .mobile-heading',
    cards: '#m-works .mobile-work-card',
    images: '#m-works .mobile-work-card img',
  });

  makeSectionMotion({
    trigger: '#m-capability',
    eyebrow: '#m-capability .mobile-eyebrow',
    heading: '#m-capability .mobile-heading',
    cards: '#m-capability .mobile-skill-card',
    images: '',
  });

  makeSectionMotion({
    trigger: '#m-contact',
    eyebrow: '#m-contact .mobile-eyebrow',
    heading: '#m-contact .mobile-contact-title',
    cards: '#m-contact .mobile-btn',
    images: '',
  });

  if (coarsePointer || lowMemory) {
    ScrollTrigger.refresh();
    return;
  }

  qa('.project-card img, .mobile-work-card img').filter(isVisible).forEach((image) => {
    const trigger = image.closest('.project-card, .mobile-work-card');
    const tween = gsap.to(image, {
      y: 22,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.9,
        invalidateOnRefresh: true,
      },
    });
    cleanupFns.push(() => tween.kill());
  });

  ScrollTrigger.refresh();
}

function setupPortfolioMotion() {
  injectMotionStyles();
  setupOpeningAnimation();
  window.__portfolioMotionReady = true;

  waitForEnhancements().then(() => {
    setupScrollAnimations();
    window.setTimeout(() => ScrollTrigger.refresh(), 600);
  });
}

ready(() => {
  if (reduceMotion) {
    ScrollTrigger.killAll();
    return;
  }
  setupPortfolioMotion();
});

function cleanup() {
  cleanupFns.splice(0).forEach((fn) => fn());
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  document.querySelector('.motion-opening-stage')?.remove();
}

motionState.cleanup = cleanup;
