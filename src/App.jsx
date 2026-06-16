import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRightOutlined,
  MailOutlined,
  PhoneOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Drawer, Image, Popover, Tag } from 'antd';
import { BarChart3, Blocks, ClipboardCheck, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import GlassIcons from './GlassIcons.jsx';

const page = (number) => `assets/portfolio-pages/page-${String(number).padStart(2, '0')}.png`;
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => page(start + index));

const navItems = [
  { label: '首页', href: '#home' },
  { label: '简历', href: '#resume' },
  { label: '作品', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
];

const pixelLetters = {
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['111', '010', '010', '010', '010', '010', '111'],
  ',': ['00', '00', '00', '00', '11', '01', '10'],
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  X: ['10001', '01010', '00100', '00100', '01010', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  G: ['01111', '10000', '10000', '10111', '10001', '10001', '01110'],
  Y: ['10001', '01010', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
};

const resumeStats = [
  { value: '10+', label: '年全链路设计经验' },
  { value: '20+', label: '落地项目' },
  { value: '95%+', label: '客户满意度' },
  { value: '5000+', label: '项目页面' },
];

const profileFacts = [
  { label: '身高', value: '178CM' },
  { label: '籍贯', value: '四川' },
  { label: '电话', value: '18679188660' },
  { label: '邮箱', value: 'lxy152827@sina.com' },
];

const tools = [
  { name: 'Sketch', mark: '◇', color: '#f7b23b' },
  { name: 'Figma', mark: 'F', color: '#a66cff' },
  { name: 'ComfyUI', mark: 'C', color: '#76ead7' },
  { name: 'Blender', mark: 'B', color: '#f28a2f' },
  { name: 'Codex', mark: '✦', color: '#8cff2e' },
  { name: 'Axure', mark: 'RP', color: '#7d6bff' },
  { name: 'Photoshop', mark: 'Ps', color: '#45a6ff' },
  { name: 'Illustrator', mark: 'Ai', color: '#ff9a28' },
  { name: 'After Effects', mark: 'Ae', color: '#9c8cff' },
  { name: 'Premiere Pro', mark: 'Pr', color: '#b58cff' },
];

const workExperiences = [
  {
    time: '2024.04 - 至今',
    company: '成都慢音科技有限公司',
    role: 'UI设计师 / 产品经理助理',
    bullets: [
      '独立负责政企安全软件与可视化产品 UI 全案设计，覆盖需求调研、原型、评审、UI 出图、交付文档、研发跟进与上线验收。',
      '负责“全流量融合分析系统”“eDARP 网络安全综合运营平台”UI 改版重构，搭建两套产品标准化 UI 组件库与统一视觉规范。',
      '承接第三方“漏洞防御系统”外包改版，搭建专属组件体系，统一页面组件、人机交互细节与体验逻辑。',
      '两年落地近 10 个政府、银行、部队、企业定制化项目，依托组件库与标准交付体系提升复用效率，全部按期验收交付。',
    ],
  },
  {
    time: '2022.09 - 2024.03',
    company: '微网优联科技（成都）有限公司',
    role: 'UI设计师',
    bullets: [
      '负责产品整体视觉风格、交互流程、原型制作与体验优化，保障界面信息清晰、符合业务目标与品牌调性。',
      '参与 PDM、文件管理、WMS、路由器后台等企业端系统，完成需求梳理、流程图、原型图、评审会与页面设计。',
      '围绕 BOM 管理、仓储盘点、调拨、收检入领退等复杂流程，拆解业务状态并转化为可交付界面。',
    ],
  },
  {
    time: '2021.03 - 2022.07',
    company: '成都明迪快闪服饰有限公司',
    role: '产品经理 / UI设计 / 测试运营',
    bullets: [
      '负责新零售项目“订衣派”的需求整理、功能设计、原型与页面设计，跟进开发、测试反馈与视频教程输出。',
      '项目以人货场为基础，面向 S2B2C 商业模式，目前已在三家大型商场使用。',
    ],
  },
  {
    time: '2019.12 - 2020.10',
    company: '四川强运科技有限公司',
    role: 'UI设计师',
    bullets: [
      '配合产品经理构思产品原型，根据真实需求与程序反馈完成原型、UI 视觉效果和交互设计。',
      '负责产品迭代、Bug 收集分析与平面物料设计。',
    ],
  },
  {
    time: '2019.02 - 2019.11',
    company: '成都威爱新经济技术研究院有限公司',
    role: 'UI设计师',
    bullets: [
      '负责部门项目设计，包括公司与中国移动通信、戴尔等合作项目的界面设计，以及后期视频剪辑、画册和 PPT。',
    ],
  },
  {
    time: '2016.05 - 2019.02',
    company: '上海柏略信息技术有限公司',
    role: 'UI设计师',
    bullets: [
      '负责用户需求调研、产品原型和 UI 视觉设计，覆盖 Web 前后台、H5、手机 App、小程序与官网设计。',
      '独立负责公司网站设计、代码与上线，并承担公司平面设计工作。',
    ],
  },
];

const projects = [
  {
    id: 'security-platform',
    title: 'eDARP 网络安全综合运营平台',
    subtitle: '政企安全 / B端平台 / 产品助理',
    type: 'Cyber Security',
    year: '2025',
    cover: 'assets/project-data-dashboard.png',
    pages: [page(33), page(34), page(35)],
    summary:
      '面向政企的一体化安全运营管理平台，用于资产管理、漏洞监测、安全告警处置、态势感知、合规自查与工单闭环。',
    detail:
      '承担产品助理与 UI 设计工作，承接碎片化口头需求，独立梳理业务逻辑、绘制原型、撰写交付文档并归档禅道；同时完成平台全页面改版和数据可视化优化。',
    achievements: [
      '独立重构 eDARP 标准化 UI 组件库与视觉规范，实现与自研全流量系统双系统视觉、交互统一。',
      '完成平台全页面改版及数据可视化优化，统一全局设计标准，降低跨系统跳转割裂感。',
      '新增功能从需求分析、原型评审、开发跟进到测试验收全流程负责。',
    ],
    scope: ['产品助理', 'UI重构', '组件库', '交付文档'],
  },
  {
    id: 'traffic-analysis',
    title: '全流量融合分析系统',
    subtitle: '网络安全硬件 / 数据分析 / B端系统',
    type: 'Data Platform',
    year: '2024',
    cover: 'assets/project-digital-twin-energy.png',
    pages: [page(36), page(37), page(38), page(39), page(40), page(41)],
    summary:
      '软硬件一体化网安硬件产品，适配通用服务器与信创服务器，覆盖安全监测、攻防对抗、业务审计等安全业务。',
    detail:
      '在无正式需求文档条件下承接产品口头需求，梳理业务、输出低保真原型、编写交付文档并推动研发落地。',
    achievements: [
      '搭建产品 B 端 UI 组件库和整套视觉规范，完成全页面设计与切图，提高多版本设计复用效率。',
      '测试阶段持续走查交互逻辑与 UI 还原，及时发现并反馈不合理问题，从源头优化产品体验。',
      '配合完成通用服务器、信创服务器双环境适配，实现商业化交付。',
    ],
    scope: ['数据分析', '可视化', 'B端规范', '研发走查'],
  },
  {
    id: 'mobile-set',
    title: 'ITEM Mobile Set',
    subtitle: 'AI工具 / 移动端合集',
    type: 'Mobile UI',
    year: '2024',
    cover: 'assets/project-ai-tools.png',
    pages: range(1, 11),
    summary: '移动端工具型产品合集，包含 AI 绘画、高清修复、对话流程与设计规范。',
    detail:
      '围绕 AI 工具、高清修复、对话流程等移动端场景建立界面结构，强调任务入口、结果呈现和轻量流程。',
    achievements: ['输出移动端主流程、设计规范和关键界面。', '沉淀适合工具型产品的清爽视觉语言和状态表达。'],
    scope: ['App UI', 'AI Tools', 'Design Code'],
  },
  {
    id: 'chuang-sports',
    title: '创运动 App',
    subtitle: '运动社区 / 移动端体验',
    type: 'Sports App',
    year: '2024',
    cover: 'assets/project-sports-app.png',
    pages: range(12, 17),
    summary: '运动社区应用，覆盖颜色体系、布局结构、产品功能与移动端页面设计。',
    detail:
      '从品牌色、布局结构、功能入口和页面细节出发，完成移动端社区与活动场景的界面表达。',
    achievements: ['建立黄色系运动品牌视觉系统。', '完成社区首页、内容浏览、活动与个人模块等关键流程。'],
    scope: ['Mobile App', 'Visual System', 'Function Flow'],
  },
  {
    id: 'web-interface',
    title: '企业后台系统合集',
    subtitle: 'PDM / 文件管理 / WMS / 路由器后台',
    type: 'Web Interface',
    year: '2023',
    cover: 'assets/project-enterprise-web.png',
    pages: range(18, 26),
    summary: '面向企业管理场景的 Web 后台界面，包含设计流程、快速登录、表格和弹窗规范。',
    detail:
      '参与产品数据管理、文件管理、仓储管理、路由器后台等企业系统设计，负责流程梳理、原型、评审与界面输出。',
    achievements: [
      '将 BOM、PN、仓储收检入领退等复杂业务拆解为清晰流程和可执行页面。',
      '提升表格、弹窗、筛选、详情等高频后台组件的一致性。',
    ],
    scope: ['Dashboard', 'Table UI', 'Web Standard'],
  },
  {
    id: 'smart-park',
    title: '智慧园区数字孪生系统',
    subtitle: '数据可视化 / 数字孪生',
    type: 'Digital Twin',
    year: '2023',
    cover: 'assets/project-digital-twin-home.png',
    pages: range(27, 41),
    summary: '智慧园区可视化大屏与数字孪生系统，强调高密度数据、能源效率与综合态势呈现。',
    detail:
      '通过数字模型模拟、监控和优化园区运营，设计可视化看板、能源效率、综合态势等关键展示页面。',
    achievements: ['建立深色科技感大屏视觉风格。', '完成多模块数据展示与可视化页面规范。'],
    scope: ['Digital Twin', 'Data Screen', 'Dark UI'],
  },
];

const strengths = [
  {
    icon: <Workflow />,
    color: 'linear-gradient(135deg, #94ff27 0%, #5f7cff 100%)',
    title: '复杂系统梳理',
    text: '把权限、流程、状态、数据关系拆成清晰的信息架构。',
  },
  {
    icon: <BarChart3 />,
    color: 'linear-gradient(135deg, #b6ff9f 0%, #26d7ff 100%)',
    title: '数据可视化',
    text: '适配政企平台、大屏、态势感知和监控分析场景。',
  },
  {
    icon: <Blocks />,
    color: 'linear-gradient(135deg, #9bcf97 0%, #94ff27 100%)',
    title: '组件与规范',
    text: '沉淀组件库、页面模板和可复用的交付标准。',
  },
  {
    icon: <ShieldCheck />,
    color: 'linear-gradient(135deg, #76ead7 0%, #94ff27 100%)',
    title: '政企产品经验',
    text: '熟悉安全平台、企业后台和长链路协作流程。',
  },
  {
    icon: <Sparkles />,
    color: 'linear-gradient(135deg, #ff9b3d 0%, #94ff27 100%)',
    title: 'AI 多媒体输出',
    text: '结合 ComfyUI、三维、动效和视频提高视觉产出效率。',
  },
  {
    icon: <ClipboardCheck />,
    color: 'linear-gradient(135deg, #ff4d78 0%, #b6ff9f 100%)',
    title: '产品助理能力',
    text: '承接需求、原型、文档、测试反馈和验收推进。',
  },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ef4936',
          colorBgBase: '#050608',
          colorTextBase: '#eef5f2',
          borderRadius: 4,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", Arial, sans-serif',
        },
      }}
    >
      <main className="portfolio-shell">
        <Hero />
        <Resume />
        <Projects onOpen={setActiveProject} />
        <Strengths />
        <Contact />
        <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
      </main>
    </ConfigProvider>
  );
}

function Hero() {
  const videoRef = useRef(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const markReady = () => setHasVideoError(false);
    const play = () => {
      const promise = video.play();
      if (promise && typeof promise.catch === 'function') promise.catch(() => {});
    };
    const playWhenVisible = () => {
      if (!document.hidden) play();
    };

    video.load();
    play();
    if (video.readyState >= 2) markReady();
    video.addEventListener('loadeddata', markReady, { once: true });
    video.addEventListener('canplay', markReady, { once: true });
    video.addEventListener('playing', markReady, { once: true });
    video.addEventListener('canplay', play, { once: true });
    document.addEventListener('visibilitychange', playWhenVisible);
    ['pointerdown', 'touchstart', 'click', 'scroll'].forEach((eventName) => {
      window.addEventListener(eventName, play, { once: true, passive: true });
    });
    return () => {
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('playing', markReady);
      video.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', playWhenVisible);
      ['pointerdown', 'touchstart', 'click', 'scroll'].forEach((eventName) => {
        window.removeEventListener(eventName, play);
      });
    };
  }, []);

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className={`hero-video${hasVideoError ? ' has-video-error' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setHasVideoError(false)}
        onCanPlay={() => setHasVideoError(false)}
        onPlaying={() => setHasVideoError(false)}
        onError={() => setHasVideoError(true)}
      >
        <source src="assets/hero-motion.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <SiteHeader />

      <div className="hero-stage">
        <div className="hero-title-block">
          <span className="hero-kicker">[PORTFOLIO]</span>
          <PixelTitle text="HI,I AM XINGYU" />
        </div>

        <div className="hero-bottom-grid">
          <div className="hero-proof">
            <strong>10+</strong>
            <span>
              年全链路 UI / UX 与企业端产品交付经验
              <br />
              把复杂业务转成清晰、稳定、可落地的产品体验。
            </span>
            <div className="hero-actions">
              <Button className="ui-button primary" href="#projects" icon={<ArrowRightOutlined />}>
                查看作品
              </Button>
              <Button className="ui-button ghost" href="mailto:lxy152827@sina.com">
                lxy152827@sina.com
              </Button>
            </div>
          </div>

          <p className="hero-line">覆盖政企安全、企业后台、数据可视化、新零售、App 与小程序。</p>

          <div className="hero-slogan">
            <b>
              <span>设计</span>不是装饰
            </b>
            <small>是结构、秩序和交付</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function PixelTitle({ text }) {
  return (
    <h1 className="pixel-title" aria-label={text}>
      {text.split('').map((char, index) => {
        if (char === ' ') return <span className="pixel-space" key={`${char}-${index}`} aria-hidden="true" />;

        const rows = pixelLetters[char.toUpperCase()] || pixelLetters.I;
        return (
          <span
            className="pixel-char"
            key={`${char}-${index}`}
            style={{ '--cols': rows[0].length }}
            aria-hidden="true"
          >
            {rows.flatMap((row, rowIndex) =>
              row.split('').map((cell, colIndex) =>
                cell === '1' ? (
                  <span className="pixel-cell" key={`${rowIndex}-${colIndex}`} style={{ gridColumn: colIndex + 1, gridRow: rowIndex + 1 }} />
                ) : null,
              ),
            )}
          </span>
        );
      })}
    </h1>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="回到首页">
        <span className="brand-mark">LXY</span>
        <small>Portfolio</small>
      </a>
      <nav className="site-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button className="ui-button header-contact" href="#contact" icon={<MailOutlined />}>
        联系我
      </Button>
    </header>
  );
}

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}

function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-inner">
        <div className="resume-grid">
          <section className="resume-profile-card resume-panel">
            <div className="resume-profile-inner">
            </div>
          </section>

          <section className="resume-about-card resume-panel">
            <h2>擅长把需求整理成清晰、可执行、可验收的视觉结果。</h2>
            <p>
              10 年全链路设计经验，覆盖 B 端后台、数据可视化大屏、S2B2C 新零售、社交 App、小程序和政企安全平台。
              熟悉从 0 到 1 以及大型系统重构，能够独立完成用户调研、需求拆解、原型交互、研发对接和上线验收。
            </p>
            <p>
              近两年重点参与政企安全平台、企业后台、全流量分析、漏洞防御系统等复杂项目，沉淀多套组件库和标准化交付规范。
              在产品岗位空缺时，可承接模块推进、需求文档、测试反馈和多方协同。
            </p>
            <div className="resume-contact-line">
              <a href="tel:18679188660">
                <PhoneOutlined />
                18679188660
              </a>
              <a href="mailto:lxy152827@sina.com">
                <MailOutlined />
                lxy152827@sina.com
              </a>
            </div>
          </section>

          <div className="resume-stat-grid">
            {resumeStats.map((item) => (
              <div className="resume-stat-card resume-panel" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="resume-timeline">
          {workExperiences.map((item) => (
            <article className="resume-timeline-item" key={`${item.company}-${item.time}`}>
              <div className="resume-timeline-meta">
                <time>{item.time}</time>
                <h3>{item.company}</h3>
                <span>{item.role}</span>
              </div>
              <div className="resume-timeline-dot" aria-hidden="true" />
              <div className="resume-timeline-content resume-panel">
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>

      <div className="resume-toolbar" aria-label="工具列表">
        <div className="resume-toolbar-inner">
          {tools.map((tool) => (
            <div className="resume-tool-item" key={tool.name}>
              <span className="resume-tool-icon">{tool.mark}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  const selectedWorks = [
    {
      project: projects[0],
      title: 'B端·网安系统/SAAS/组件库',
      type: 'B-end · Cybersecurity system',
      subtitle: '政企安全 / B端平台 / 产品助理',
      cover: 'assets/project-enterprise-web.png',
    },
    {
      project: projects[2],
      title: '移动端项目集合',
      type: 'Mobile terminal',
      subtitle: 'AI工具 / 移动端合集',
      cover: 'assets/project-ai-tools.png',
    },
    {
      project: projects[5],
      title: '可视化大屏系统',
      type: 'Visual large screen system',
      subtitle: '数据分析 / B端系统',
      cover: 'assets/project-data-dashboard.png',
    },
    {
      project: projects[6] || projects[3],
      title: '创意视觉设计',
      type: 'Visual design',
      subtitle: '平面设计',
      cover: 'assets/project-graphic-work.png',
    },
    {
      project: projects[2],
      title: 'AI概念设计',
      type: 'AI Concept design',
      subtitle: 'ComfyUI',
      cover: 'assets/project-ai-tools.png',
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner">
        <div className="works-heading">
          <p>SELECTED WORKS</p>
          <h2>作品</h2>
        </div>

        <div className="project-grid">
          {selectedWorks.map((item, index) => (
            <button
              className="case-card"
              key={`${item.project.id}-${item.title}`}
              type="button"
              onClick={() => onOpen(item.project)}
            >
              <div className="case-media">
                <img src={item.cover} alt={`${item.title}封面`} loading="lazy" />
              </div>
              <div className="case-info">
                <div className="case-meta">
                  <span>{index === 2 ? '2023' : index === 1 || index === 4 ? '2024' : '2025'}</span>
                  <span>{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDrawer({ project, onClose }) {
  return (
    <Drawer
      className="project-drawer"
      width="min(1180px, 92vw)"
      open={Boolean(project)}
      onClose={onClose}
      destroyOnHidden
      title={project ? project.title : ''}
      extra={
        project ? (
          <Button className="ui-button primary small" href="#contact" onClick={onClose}>
            沟通项目
          </Button>
        ) : null
      }
    >
      {project && (
        <div className="drawer-body">
          <div className="case-detail-hero">
            <img src={project.cover} alt={`${project.title}作品封面`} />
            <div>
              <p className="eyebrow">Case Study</p>
              <h2>{project.subtitle}</h2>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.scope.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="case-detail-grid">
            <section className="detail-block">
              <h3>项目职责</h3>
              <p>{project.detail}</p>
            </section>
            <section className="detail-block">
              <h3>项目业绩</h3>
              <ul>
                {project.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <Image.PreviewGroup>
            <div className="work-screens">
              {project.pages.map((image, index) => (
                <Image key={image} src={image} alt={`${project.title}第 ${index + 1} 页`} />
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
      )}
    </Drawer>
  );
}

function Strengths() {
  return (
    <section className="section strengths-section" id="strengths">
      <div className="section-inner">
        <div className="works-heading capability-heading">
          <p>CAPABILITY</p>
          <h2>个人优势</h2>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <GlassIcons items={[{ icon: item.icon, color: item.color, label: item.title }]} className="cap-glass-icons" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WechatContent() {
  return (
    <div className="wechat-popover">
      <img src="assets/wechat-qr-lxy.jpg" alt="微信二维码" />
    </div>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner contact-inner">
        <p className="contact-label">CONTACT</p>
        <h2>把复杂业务做清楚，把视觉做成可交付的系统。</h2>
        <div className="contact-actions">
          <Button className="ui-button primary" href="tel:18679188660" icon={<PhoneOutlined />}>
            18679188660
          </Button>
          <Popover content={<WechatContent />} trigger={['hover', 'click']} placement="top">
            <Button className="ui-button ghost" icon={<WechatOutlined />}>
              微信二维码
            </Button>
          </Popover>
          <Button className="ui-button ghost" href="mailto:lxy152827@sina.com" icon={<MailOutlined />}>
            邮箱沟通
          </Button>
        </div>
        <p className="site-footnote">龙星宇/PERSONAL PORTFOLIO WEBSITE</p>
      </div>
    </section>
  );
}

export default App;
