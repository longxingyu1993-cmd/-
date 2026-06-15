import React from 'react';
import { createRoot } from 'react-dom/client';
import CountUp from './CountUp.jsx';
import LogoLoop from './LogoLoop.jsx';
import SpotlightCard from './SpotlightCard.jsx';
import StaggeredMenu from './StaggeredMenu.jsx';
import GlassIcons from './GlassIcons.jsx';
import { BarChart3, Blocks, ClipboardCheck, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const roots = new WeakMap();

function renderOnce(element, component) {
  if (!element || roots.has(element)) return;
  const root = createRoot(element);
  roots.set(element, root);
  root.render(component);
}

function mountCountUp() {
  document.querySelectorAll('[data-countup]').forEach((element) => {
    const to = Number(element.dataset.to || 0);
    const from = Number(element.dataset.from || 0);
    const suffix = element.dataset.suffix || '';
    const separator = element.dataset.separator || '';
    const duration = Number(element.dataset.duration || 1.35);

    renderOnce(
      element,
      <>
        <CountUp from={from} to={to} duration={duration} separator={separator} className="count-up-core" />
        {suffix ? <span className="count-up-suffix">{suffix}</span> : null}
      </>
    );
  });
}

const toolLogos = [
  { src: 'assets/tools/tool-sketch.svg', alt: 'Sketch' },
  { src: 'assets/tools/tool-figma.svg', alt: 'Figma' },
  { src: 'assets/tools/tool-comfyui.svg', alt: 'ComfyUI' },
  { src: 'assets/tools/tool-blender.svg', alt: 'Blender' },
  { src: 'assets/tools/tool-codex.svg', alt: 'Codex' },
  { src: 'assets/tools/tool-photoshop.svg', alt: 'Photoshop' },
  { src: 'assets/tools/tool-illustrator.svg', alt: 'Illustrator' },
  { src: 'assets/tools/tool-after-effects.svg', alt: 'After Effects' },
  { src: 'assets/tools/tool-premiere-pro.svg', alt: 'Premiere Pro' },
];

function mountLogoLoops() {
  const desktop = document.getElementById('toolLogoLoop');
  renderOnce(
    desktop,
    <LogoLoop
      logos={toolLogos}
      speed={88}
      direction="left"
      logoHeight={30}
      gap={64}
      hoverSpeed={24}
      fadeOut
      fadeOutColor="#080a09"
      scaleOnHover
      ariaLabel="设计软件与工具"
      className="portfolio-logo-loop"
    />
  );

  const mobile = document.getElementById('mobileToolLogoLoop');
  renderOnce(
    mobile,
    <LogoLoop
      logos={toolLogos}
      speed={58}
      direction="left"
      logoHeight={24}
      gap={28}
      hoverSpeed={16}
      fadeOut
      fadeOutColor="#000000"
      scaleOnHover
      ariaLabel="设计软件与工具"
      className="portfolio-logo-loop"
    />
  );
}

function mountTimelineSpotlights() {
  document.querySelectorAll('.resume-timeline-card[data-spotlight-card]').forEach((element) => {
    let bullets = [];
    try {
      bullets = JSON.parse(element.dataset.bullets || '[]');
    } catch {
      bullets = [];
    }

    renderOnce(
      element,
      <SpotlightCard className="timeline-card-shell" spotlightColor="rgba(148, 255, 39, 0.13)">
        <ul className="timeline-spotlight-list">
          {bullets.map((bullet, index) => (
            <li key={`${index}-${bullet}`}>{bullet}</li>
          ))}
        </ul>
      </SpotlightCard>
    );
  });
}

const capabilityIcons = [
  {
    icon: <Workflow />,
    color: 'linear-gradient(135deg, #94ff27 0%, #5f7cff 100%)',
    label: '复杂系统梳理',
  },
  {
    icon: <BarChart3 />,
    color: 'linear-gradient(135deg, #b6ff9f 0%, #26d7ff 100%)',
    label: '数据可视化',
  },
  {
    icon: <Blocks />,
    color: 'linear-gradient(135deg, #9bcf97 0%, #94ff27 100%)',
    label: '组件与规范',
  },
  {
    icon: <ShieldCheck />,
    color: 'linear-gradient(135deg, #76ead7 0%, #94ff27 100%)',
    label: '政企产品经验',
  },
  {
    icon: <Sparkles />,
    color: 'linear-gradient(135deg, #ff9b3d 0%, #94ff27 100%)',
    label: 'AI 多媒体输出',
  },
  {
    icon: <ClipboardCheck />,
    color: 'linear-gradient(135deg, #ff4d78 0%, #b6ff9f 100%)',
    label: '产品助理能力',
  },
];

function mountGlassIcons() {
  document.querySelectorAll('[data-glass-icon]').forEach((element) => {
    const index = Number(element.dataset.glassIcon || 0);
    const item = capabilityIcons[index] || capabilityIcons[0];
    const className = element.classList.contains('mobile-glass-icon') ? 'mobile-cap-glass-icons' : 'cap-glass-icons';

    renderOnce(element, <GlassIcons items={[item]} className={className} />);
  });
}

function mountMobileMenu() {
  const target = document.getElementById('mobileStaggeredMenu');
  renderOnce(
    target,
    <StaggeredMenu
      position="right"
      colors={['#94ff27', '#b6ff9f', '#9bcf97']}
      accentColor="#94ff27"
      items={[
        { label: '首页', ariaLabel: '返回首页', link: '#m-home' },
        { label: '简历', ariaLabel: '查看简历', link: '#m-resume' },
        { label: '作品', ariaLabel: '查看作品', link: '#m-works' },
        { label: '优势', ariaLabel: '查看个人优势', link: '#m-capability' },
        { label: '联系', ariaLabel: '查看联系方式', link: '#m-contact' },
      ]}
      socialItems={[
        { label: '18679188660', link: 'tel:18679188660' },
        { label: 'lxy152827@sina.com', link: 'mailto:lxy152827@sina.com' },
      ]}
      displaySocials
      displayItemNumbering
      isFixed
      closeOnClickAway
      menuButtonColor="#eef5f2"
      openMenuButtonColor="#eef5f2"
    />
  );
}

function mountReactBits() {
  mountCountUp();
  mountLogoLoops();
  mountTimelineSpotlights();
  mountGlassIcons();
  mountMobileMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountReactBits, { once: true });
} else {
  mountReactBits();
}

requestAnimationFrame(() => {
  mountTimelineSpotlights();
  mountGlassIcons();
});
