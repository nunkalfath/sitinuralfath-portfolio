import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Moon, Sun, ExternalLink,
  BookOpen, Code, Palette, Sprout,
  Mail, Github, Linkedin, Youtube, Facebook,
  ArrowUp, Calendar, Clock, Heart, Star,
  GraduationCap, Briefcase, Users, Home, Cpu,
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "physics", label: "Physics" },
  { id: "blog", label: "Blog" },
  { id: "garden", label: "Garden" },
  { id: "contact", label: "Contact" },
];

const TIMELINE = [
  { year: "2008–2013", Icon: GraduationCap, title: "Physics Education Student", sub: "Universitas Negeri Semarang", desc: "Fell in love with physics, mathematics, and the beauty of how the universe works. Graduated with a deep passion for teaching.", color: "#8EC5FC" },
  { year: "2013–2015", Icon: Briefcase, title: "Physics Teacher", sub: "Vocational High School", desc: "Helped Grade 10–12 students understand complex physics through storytelling, visual methods, and patient explanation.", color: "#F7D6E0" },
  { year: "2016–2018", Icon: GraduationCap, title: "Master Physics Student", sub: "Universitas Gadjah Mada", desc: "Fell in love with material physics, research, and the traveling to other countries. Graduated with a deep passion for physics.", color: "#8EC5FC" },
  { year: "2018", Icon: Heart, title: "Got Married", sub: "A new chapter begins ❤️", desc: "Married my best friend and started building a cozy, meaningful life together from a small home in Indonesia.", color: "#FFB3C1" },
  { year: "2019-2022", Icon: Home, title: "Learning New Skill from Home", sub: "Rediscovering passion", desc: "Enrolled in UI/UX and front-end courses. Built my first React project and discovered a new dimension of creativity.", color: "#A9D18E" },
  { year: "2022", Icon: Users, title: "Become a Mother", sub: "The most importance role", desc: "Welcomed our first child and chose to dedicate fully to family — learning patience, creativity, and unconditional love.", color: "#C5E2B2" },
  { year: "2024-2025", Icon: Cpu, title: "Return to Technology", sub: "Growing from home", desc: "Started data entry freelancing, gardening, explored the homestead lifestyle, and creating content for social media.", color: "#8EC5FC" },
  { year: "2026–Present", Icon: Star, title: "Building Digital Products", sub: "Creating & Sharing", desc: "Designing interfaces, writing code, teaching physics online, and building this digital home — one day at a time.", color: "#A47C5B" },
];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "ResumeCraft", category: "Design", tag: "UI", img: "/resumecraft.png", height: 200, link: "https://www.figma.com/proto/pTIN8uDQBOBooW3WHrsC6X/My-Resume-Portofolio?node-id=314-445&t=rP10JuV0Zpns6xYO-1" },
  { id: 2, title: "Pre-Order Ecommerce Management System", category: "Front-End Developer", tag: "Website", img: "photo-1551288049-bebda4e38f71", height: 260, link: "https://github.com/nunkalfath/pre-order-ecommerce" },
  { id: 3, title: "Ganin Homestead", category: "Landing Page", tag: "Landing Page", img: "photo-1503389152951-9c3d8b6d9538", height: 220, link: "https://github.com" },
  { id: 4, title: "Physics Learning App", category: "Mobile App", tag: "Mobile App", img: "photo-1635070041078-e363dbe005cb", height: 280, link: "https://github.com" },
  { id: 5, title: "Portfolio Website", category: "Website Design", tag: "Website", img: "photo-1499750310107-5fef28a66643", height: 230, link: "https://github.com" },
  { id: 6, title: "Blogger Theme", category: "Blogger Theme", tag: "Theme", img: "photo-1542435503-ec7b0b197446", height: 250, link: "https://github.com" },
  { id: 7, title: "Physics UI Kit", category: "UI Kit", tag: "UI Kit", img: "photo-1518770660439-4636190af475", height: 200, link: "https://github.com" },
  { id: 8, title: "Social Media Kit", category: "Graphic Design", tag: "Design", img: "photo-1561070791-2526d30994b5", height: 260, link: "https://github.com" },
];

type PhysicsTopic = { title: string; icon: string; lessons: number; duration: string; topics: string[] };

const PHYSICS_TOPICS: Record<string, PhysicsTopic[]> = {
  "Grade 10": [
    { title: "Kinematics", icon: "🏃", lessons: 8, duration: "4h", topics: ["Displacement & Velocity", "Acceleration", "Projectile Motion"] },
    { title: "Newton's Laws", icon: "⚖️", lessons: 6, duration: "3h", topics: ["Inertia", "Force & Mass", "Action-Reaction"] },
    { title: "Work & Energy", icon: "⚡", lessons: 7, duration: "3.5h", topics: ["Work Done", "Kinetic Energy", "Conservation Laws"] },
    { title: "Waves & Sound", icon: "🌊", lessons: 9, duration: "5h", topics: ["Wave Properties", "Sound Waves", "Resonance"] },
  ],
  "Grade 11": [
    { title: "Thermodynamics", icon: "🌡️", lessons: 8, duration: "4h", topics: ["Temperature & Heat", "Gas Laws", "Heat Transfer"] },
    { title: "Optics & Light", icon: "🔭", lessons: 7, duration: "3.5h", topics: ["Reflection", "Refraction", "Lenses & Mirrors"] },
    { title: "Electrostatics", icon: "⚡", lessons: 9, duration: "5h", topics: ["Electric Field", "Potential", "Capacitance"] },
    { title: "Magnetism", icon: "🧲", lessons: 6, duration: "3h", topics: ["Magnetic Field", "Magnetic Forces", "Induction"] },
  ],
  "Grade 12": [
    { title: "Quantum Physics", icon: "⚛️", lessons: 10, duration: "6h", topics: ["Photoelectric Effect", "Wave-Particle Duality", "Uncertainty Principle"] },
    { title: "Nuclear Physics", icon: "☢️", lessons: 8, duration: "4h", topics: ["Radioactivity", "Nuclear Reactions", "Half-Life"] },
    { title: "Special Relativity", icon: "🌌", lessons: 7, duration: "4h", topics: ["Time Dilation", "Length Contraction", "E = mc²"] },
    { title: "Exam Preparation", icon: "📝", lessons: 12, duration: "6h", topics: ["Past Papers", "Strategy & Timing", "Formula Review"] },
  ],
  "Formula Library": [
    { title: "Mechanics Formulas", icon: "📐", lessons: 25, duration: "Reference", topics: ["Kinematics, Dynamics, Energy"] },
    { title: "Waves Formulas", icon: "〰️", lessons: 15, duration: "Reference", topics: ["Wave equations, Sound, Optics"] },
    { title: "Electromagnetism", icon: "🔌", lessons: 20, duration: "Reference", topics: ["E-field, B-field, Circuits"] },
    { title: "Modern Physics", icon: "🔬", lessons: 18, duration: "Reference", topics: ["Quantum & Nuclear equations"] },
  ],
};

const BLOG_POSTS = [
  { id: 1, title: "How I Returned to Tech After 5 Years Away", category: "Career Journey", date: "Dec 15, 2024", readTime: "8 min", img: "photo-1499750310107-5fef28a66643" },
  { id: 2, title: "My Figma to React Workflow (With Real Examples)", category: "Frontend", date: "Dec 8, 2024", readTime: "12 min", img: "photo-1542435503-ec7b0b197446" },
  { id: 3, title: "Teaching Physics Through Storytelling", category: "Learning Notes", date: "Nov 28, 2024", readTime: "6 min", img: "photo-1635070041078-e363dbe005cb" },
  { id: 4, title: "Building a Design System from Scratch as a Solo Dev", category: "UI UX", date: "Nov 20, 2024", readTime: "10 min", img: "photo-1561070791-2526d30994b5" },
  { id: 5, title: "What AI Tools Actually Help Me as a Creator", category: "AI", date: "Nov 10, 2024", readTime: "7 min", img: "photo-1518770660439-4636190af475" },
  { id: 6, title: "On Productivity as a Mother Who Codes", category: "Productivity", date: "Oct 30, 2024", readTime: "5 min", img: "photo-1586717791821-3f44a563fa4c" },
];

const GARDEN_POSTS = [
  { id: 1, title: "Growing Tomatoes Vertically in a Small Space", category: "Vegetables", img: "photo-1464226184884-fa280b87c399" },
  { id: 2, title: "My Composting Journey — Month 3 Update", category: "Composting", img: "photo-1416879595882-3373a0480b5b" },
  { id: 3, title: "Hydroponic Basil: Setup & First Harvest", category: "Hydroponics", img: "photo-1585320806297-9794b3e4eeae" },
  { id: 4, title: "October Harvest Season Log", category: "Harvest", img: "photo-1506905925346-21bda4d32df4" },
  { id: 5, title: "DIY Raised Bed Garden on a Budget", category: "DIY", img: "photo-1524492412937-b28074a5d7da" },
  { id: 6, title: "Simple Recipes from Our Garden Harvest", category: "Recipe", img: "photo-1490885578174-acda8905c2c6" },
];

// ─── GLOBAL STYLES ─────────────────────────────────────────────────────────

const GLOBAL_CSS = `
  * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }

  @keyframes float-cloud {
    0%   { transform: translateX(-12px); }
    50%  { transform: translateX(12px); }
    100% { transform: translateX(-12px); }
  }
  @keyframes sway {
    0%,100% { transform: rotate(-4deg); transform-origin: bottom center; }
    50%      { transform: rotate(4deg);  transform-origin: bottom center; }
  }
  @keyframes bob {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-7px); }
  }
  @keyframes smoke {
    0%   { transform: translateY(0) scale(1);  opacity: 0.55; }
    100% { transform: translateY(-36px) scale(2.2); opacity: 0; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fade-up {
    0%   { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes role-fade {
    0%,100% { opacity: 0; transform: translateY(8px); }
    15%,85% { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer-bar {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .anim-fade-up-0 { animation: fade-up 0.7s ease-out 0s    both; }
  .anim-fade-up-1 { animation: fade-up 0.7s ease-out 0.15s both; }
  .anim-fade-up-2 { animation: fade-up 0.7s ease-out 0.3s  both; }
  .anim-fade-up-3 { animation: fade-up 0.7s ease-out 0.45s both; }
  .anim-fade-up-4 { animation: fade-up 0.7s ease-out 0.6s  both; }

  .cloud-1 { animation: float-cloud 10s ease-in-out infinite; }
  .cloud-2 { animation: float-cloud 14s ease-in-out infinite 3s; }
  .cloud-3 { animation: float-cloud 9s  ease-in-out infinite 1.5s; }
  .bob-anim { animation: bob 3s ease-in-out infinite; }

  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(142,197,252,0.25);
  }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-left {
    opacity: 0;
    transform: translateX(-28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #FFF8EF; }
  ::-webkit-scrollbar-thumb { background: #8EC5FC; border-radius: 4px; }

  .masonry { columns: 3; column-gap: 1.5rem; }
  @media (max-width: 1024px) { .masonry { columns: 2; } }
  @media (max-width: 600px)  { .masonry { columns: 1; } }
  .masonry-item { break-inside: avoid; margin-bottom: 1.5rem; }

  .glass-nav {
    background: rgba(255,248,239,0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  .dark .glass-nav {
    background: rgba(28,35,51,0.92);
  }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: #8EC5FC; color: #3F4A5A;
    padding: 0.8rem 2rem; border-radius: 9999px;
    font-weight: 600; font-size: 0.95rem;
    border: none; cursor: pointer;
    transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
    font-family: 'Poppins', sans-serif;
  }
  .btn-primary:hover {
    background: #72B5FB;
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(142,197,252,0.45);
  }
  .btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #3F4A5A;
    padding: 0.8rem 2rem; border-radius: 9999px;
    font-weight: 600; font-size: 0.95rem;
    border: 2px solid #A47C5B; cursor: pointer;
    transition: transform 0.25s, background 0.25s, color 0.25s;
    font-family: 'Poppins', sans-serif;
  }
  .btn-secondary:hover {
    background: #A47C5B; color: white;
    transform: translateY(-3px);
  }

  .dark .section-alt  { background: #1C2333; }
  .dark .section-main { background: #242D42; }
  .dark .card-bg      { background: #2E3A52 !important; }
  .dark .text-dark    { color: #E8EDF5 !important; }
  .dark .text-muted   { color: #8A9BC2 !important; }
  .dark .border-soft  { border-color: rgba(142,197,252,0.15) !important; }

  .physics-card {
    background: white;
    border-radius: 1.5rem;
    padding: 1.5rem;
    border: 1px solid rgba(142,197,252,0.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .physics-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(142,197,252,0.22);
    border-color: #8EC5FC;
  }
  .dark .physics-card { background: #2E3A52; border-color: rgba(142,197,252,0.15); }

  .footer-bg { background: #3F4A5A; }
  .dark .footer-bg { background: #111827; }

  @media (max-width: 768px) {
    .nav-desktop { display: none !important; }
    .hero-content h1 { font-size: 3rem !important; }
    .timeline-line { left: 20px !important; }
    .timeline-bubble { width: 40px !important; height: 40px !important; }
  }
`;

// ─── HELPERS ───────────────────────────────────────────────────────────────

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-5"
      style={{ background: "#F7D6E0", color: "#A47C5B" }}>
      {text}
    </span>
  );
}

function SectionTitle({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal text-center mb-16">
      <SectionLabel text={label} />
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>
        {title}
      </h2>
      {sub && <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#8A8FA8" }}>{sub}</p>}
    </div>
  );
}

function SmallFlower({ color = "#F7D6E0", size = 22 }: { color?: string; size?: number }) {
  const angles = [0, 60, 120, 180, 240, 300];
  const r = size * 0.275;
  const cx = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {angles.map(a => {
        const rad = (a * Math.PI) / 180;
        const px = cx + r * 2.2 * Math.cos(rad);
        const py = cx + r * 2.2 * Math.sin(rad);
        return (
          <ellipse key={a} cx={px} cy={py} rx={r} ry={r * 1.6}
            fill={color} opacity={0.85}
            transform={`rotate(${a},${px},${py})`} />
        );
      })}
      <circle cx={cx} cy={cx} r={r * 1.1} fill="#FFF8EF" />
    </svg>
  );
}

// ─── COZY HOUSE SVG ────────────────────────────────────────────────────────

function CozyHouse() {
  const grasses = Array.from({ length: 28 }, (_, i) => i);
  const fLFlowers = Array.from({ length: 9 }, (_, i) => i);
  const fRFlowers = Array.from({ length: 9 }, (_, i) => i);
  const flowerColors = ["#F7D6E0", "#FFB3C1", "#FFD6A5", "#8EC5FC", "#C5E2B2"];

  return (
    <svg viewBox="0 0 900 430" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C2E3FF" />
          <stop offset="65%" stopColor="#DFF0FF" />
          <stop offset="100%" stopColor="#FFF8EF" />
        </linearGradient>
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B4D89E" />
          <stop offset="100%" stopColor="#A0CB8A" />
        </linearGradient>
        <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8E6B5" />
          <stop offset="100%" stopColor="#B8D9A4" />
        </linearGradient>
        <filter id="houseShadow" x="-10%" y="-5%" width="120%" height="120%">
          <feDropShadow dx="3" dy="6" stdDeviation="8" floodColor="#A47C5B" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="900" height="430" fill="url(#sky)" />

      {/* Sun glow */}
      <circle cx="810" cy="68" r="48" fill="#FFE8A0" opacity="0.45" />
      <circle cx="810" cy="68" r="30" fill="#FFD966" opacity="0.7" />

      {/* Cloud 1 */}
      <g className="cloud-1">
        <ellipse cx="185" cy="82" rx="72" ry="26" fill="white" opacity="0.92" />
        <ellipse cx="218" cy="66" rx="52" ry="34" fill="white" opacity="0.92" />
        <ellipse cx="150" cy="78" rx="40" ry="22" fill="white" opacity="0.92" />
      </g>
      {/* Cloud 2 */}
      <g className="cloud-2">
        <ellipse cx="508" cy="58" rx="60" ry="22" fill="white" opacity="0.82" />
        <ellipse cx="534" cy="46" rx="42" ry="28" fill="white" opacity="0.82" />
        <ellipse cx="476" cy="56" rx="34" ry="18" fill="white" opacity="0.82" />
      </g>
      {/* Cloud 3 */}
      <g className="cloud-3">
        <ellipse cx="695" cy="94" rx="46" ry="17" fill="white" opacity="0.7" />
        <ellipse cx="714" cy="82" rx="32" ry="22" fill="white" opacity="0.7" />
        <ellipse cx="672" cy="90" rx="28" ry="14" fill="white" opacity="0.7" />
      </g>

      {/* Birds */}
      <g opacity="0.45">
        <path d="M345,52 Q351,46 357,52" stroke="#7BAED0" strokeWidth="1.5" fill="none" />
        <path d="M362,48 Q368,42 374,48" stroke="#7BAED0" strokeWidth="1.5" fill="none" />
        <path d="M378,55 Q382,50 386,55" stroke="#7BAED0" strokeWidth="1.2" fill="none" />
      </g>

      {/* Far hill */}
      <ellipse cx="450" cy="440" rx="640" ry="210" fill="url(#hill2)" opacity="0.55" />
      {/* Main hill */}
      <ellipse cx="450" cy="450" rx="720" ry="235" fill="url(#hill1)" />

      {/* Left tree cluster */}
      <rect x="136" y="252" width="12" height="68" rx="4" fill="#B0896A" />
      <ellipse cx="142" cy="228" rx="42" ry="38" fill="#72B85C" />
      <ellipse cx="130" cy="244" rx="32" ry="28" fill="#A9D18E" />
      <ellipse cx="158" cy="240" rx="30" ry="26" fill="#8DC47A" />
      <rect x="110" y="265" width="9" height="52" rx="3" fill="#B0896A" />
      <ellipse cx="115" cy="248" rx="30" ry="27" fill="#8DC47A" />

      {/* Right tree cluster */}
      <rect x="710" y="258" width="10" height="58" rx="3" fill="#B0896A" />
      <ellipse cx="715" cy="238" rx="34" ry="30" fill="#72B85C" />
      <ellipse cx="705" cy="250" rx="26" ry="24" fill="#A9D18E" />
      <rect x="746" y="268" width="8" height="46" rx="2" fill="#B0896A" />
      <ellipse cx="750" cy="252" rx="28" ry="25" fill="#8DC47A" />

      {/* Fence */}
      {[268, 288, 308, 328, 348, 368, 388, 408, 428, 448, 468, 488, 508, 528, 548, 568].map((x, i) => (
        <g key={i}>
          <rect x={x} y="308" width="5" height="26" rx="1.5" fill="#E0CEB4" />
          <polygon points={`${x - 1},308 ${x + 6},308 ${x + 2.5},300`} fill="#E0CEB4" />
        </g>
      ))}
      <rect x="268" y="317" width="305" height="4" rx="2" fill="#CFBD9E" />
      <rect x="268" y="325" width="305" height="3" rx="1.5" fill="#CFBD9E" />

      {/* ── HOUSE ── */}
      <g filter="url(#houseShadow)">
        {/* Chimney */}
        <rect x="378" y="184" width="24" height="48" rx="3" fill="#C4906A" />
        <rect x="372" y="180" width="36" height="8" rx="3" fill="#B4806A" />
        {/* Smoke */}
        <circle cx="390" cy="170" r="7" fill="#E5DDD5" opacity="0.5" style={{ animation: "smoke 3.2s ease-out infinite" }} />
        <circle cx="394" cy="153" r="9" fill="#E5DDD5" opacity="0.32" style={{ animation: "smoke 3.2s ease-out infinite 0.6s" }} />
        <circle cx="388" cy="137" r="11" fill="#E5DDD5" opacity="0.18" style={{ animation: "smoke 3.2s ease-out infinite 1.2s" }} />

        {/* Roof */}
        <polygon points="285,255 598,255 492,168 392,148" fill="#C07050" />
        <polygon points="285,255 598,255 492,168 392,148" fill="#8A3E20" opacity="0.15" />
        <rect x="390" y="145" width="104" height="8" rx="2.5" fill="#8A3E20" />
        {/* Roof tile lines */}
        {[340, 385, 428, 470, 512, 554].map((x, i) => (
          <line key={i} x1={x} y1="255" x2={x + 60} y2={168 + i * 14} stroke="#A04828" strokeWidth="1" opacity="0.25" />
        ))}

        {/* Body */}
        <rect x="310" y="255" width="265" height="120" rx="4" fill="#FFF8EF" />
        <rect x="310" y="358" width="265" height="17" rx="0" fill="#EEE0CC" />

        {/* Left window */}
        <rect x="326" y="272" width="62" height="52" rx="7" fill="#A8D8FF" opacity="0.75" />
        <rect x="326" y="272" width="62" height="52" rx="7" fill="none" stroke="#B08060" strokeWidth="3" />
        <line x1="357" y1="272" x2="357" y2="324" stroke="#B08060" strokeWidth="2" />
        <line x1="326" y1="298" x2="388" y2="298" stroke="#B08060" strokeWidth="2" />
        <ellipse cx="342" cy="284" rx="9" ry="6" fill="white" opacity="0.4" />
        {/* Left window box */}
        <rect x="322" y="322" width="70" height="12" rx="4" fill="#A9D18E" />
        {[333, 345, 357, 369, 381].map((x, j) => (
          <g key={j}>
            <line x1={x} y1="322" x2={x} y2="316" stroke="#7AAA60" strokeWidth="1.5" />
            <circle cx={x} cy="312" r="5" fill={flowerColors[j % flowerColors.length]} />
          </g>
        ))}

        {/* Right window */}
        <rect x="496" y="272" width="62" height="52" rx="7" fill="#A8D8FF" opacity="0.75" />
        <rect x="496" y="272" width="62" height="52" rx="7" fill="none" stroke="#B08060" strokeWidth="3" />
        <line x1="527" y1="272" x2="527" y2="324" stroke="#B08060" strokeWidth="2" />
        <line x1="496" y1="298" x2="558" y2="298" stroke="#B08060" strokeWidth="2" />
        <ellipse cx="512" cy="284" rx="9" ry="6" fill="white" opacity="0.4" />
        {/* Right window box */}
        <rect x="492" y="322" width="70" height="12" rx="4" fill="#A9D18E" />
        {[503, 515, 527, 539, 551].map((x, j) => (
          <g key={j}>
            <line x1={x} y1="322" x2={x} y2="316" stroke="#7AAA60" strokeWidth="1.5" />
            <circle cx={x} cy="312" r="5" fill={flowerColors[(j + 2) % flowerColors.length]} />
          </g>
        ))}

        {/* Door */}
        <rect x="412" y="298" width="58" height="77" rx="8 8 0 0" fill="#B08060" />
        <rect x="415" y="302" width="52" height="32" rx="5" fill="#9A6B4A" opacity="0.35" />
        <circle cx="462" cy="338" r="4.5" fill="#FFD966" opacity="0.9" />
        {/* Door mat */}
        <rect x="406" y="372" width="70" height="8" rx="3" fill="#C8B898" />
      </g>

      {/* Stone path */}
      <ellipse cx="441" cy="395" rx="30" ry="8" fill="#D8C9B0" opacity="0.65" />
      <ellipse cx="441" cy="408" rx="24" ry="6" fill="#D8C9B0" opacity="0.5" />
      <ellipse cx="441" cy="418" rx="20" ry="5" fill="#D8C9B0" opacity="0.4" />

      {/* Mailbox */}
      <rect x="268" y="325" width="18" height="20" rx="2 2 0 0" fill="#B08060" />
      <ellipse cx="277" cy="325" rx="9" ry="4.5" fill="#9A6B4A" />
      <rect x="271" y="343" width="12" height="28" rx="0 0 2 2" fill="#9A6B4A" />

      {/* Foreground flowers left */}
      {fLFlowers.map((i) => (
        <g key={`fl${i}`}
          transform={`translate(${195 + i * 13}, ${345 + (i % 3) * 8})`}
          style={{ animation: `bob ${2.2 + i * 0.25}s ease-in-out infinite` }}>
          <line x1="0" y1="0" x2={i % 2 === 0 ? "-2" : "2"} y2="20" stroke="#7AAA60" strokeWidth="2" strokeLinecap="round" />
          <circle cx={i % 2 === 0 ? "-2" : "2"} cy="-4" r="6" fill={flowerColors[i % flowerColors.length]} />
          <circle cx={i % 2 === 0 ? "-2" : "2"} cy="-4" r="2.5" fill="white" opacity="0.7" />
        </g>
      ))}

      {/* Foreground flowers right */}
      {fRFlowers.map((i) => (
        <g key={`fr${i}`}
          transform={`translate(${595 + i * 13}, ${344 + (i % 3) * 7})`}
          style={{ animation: `bob ${2.4 + i * 0.2}s ease-in-out infinite` }}>
          <line x1="0" y1="0" x2={i % 2 === 0 ? "2" : "-2"} y2="18" stroke="#7AAA60" strokeWidth="2" strokeLinecap="round" />
          <circle cx={i % 2 === 0 ? "2" : "-2"} cy="-4" r="5.5" fill={flowerColors[(i + 1) % flowerColors.length]} />
          <circle cx={i % 2 === 0 ? "2" : "-2"} cy="-4" r="2" fill="white" opacity="0.7" />
        </g>
      ))}

      {/* Foreground grass */}
      {grasses.map((i) => (
        <line key={`g${i}`}
          x1={18 + i * 32 + (i % 4) * 3}
          y1="430"
          x2={14 + i * 32 + (i % 5) * 4}
          y2={378 + (i % 6) * 7}
          stroke="#8DBE74"
          strokeWidth={1.6 + (i % 3) * 0.4}
          strokeLinecap="round"
          style={{
            animation: `sway ${2 + (i % 5) * 0.3}s ease-in-out infinite`,
            transformOrigin: `${18 + i * 32}px 430px`,
          }}
        />
      ))}
    </svg>
  );
}

// ─── NAVIGATION ────────────────────────────────────────────────────────────

function NavBar({
  dark, setDark, active, onNav,
}: {
  dark: boolean; setDark: (v: boolean) => void; active: string; onNav: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-sm" : ""}`}
      style={{ background: scrolled ? undefined : "transparent" }}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <button onClick={() => onNav("home")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#8EC5FC" }}>
            <SmallFlower color="#FFF8EF" size={18} />
          </div>
          <span className="font-bold text-lg hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif", color: dark ? "#E8EDF5" : "#3F4A5A" }}>
            Siti Nur Alfath
          </span>
        </button>

        <div className="nav-desktop hidden md:flex items-center gap-5">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => onNav(item.id)}
              className="relative text-sm font-medium pb-0.5 transition-colors duration-200"
              style={{ color: active === item.id ? "#8EC5FC" : dark ? "#CBD5E8" : "#3F4A5A" }}>
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "#8EC5FC" }} />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "#F7D6E0" }}>
            {dark
              ? <Sun size={15} style={{ color: "#A47C5B" }} />
              : <Moon size={15} style={{ color: "#A47C5B" }} />}
          </button>
          <button className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#F7D6E0" }}
            onClick={() => setMobile(m => !m)}>
            {mobile
              ? <X size={15} style={{ color: "#3F4A5A" }} />
              : <Menu size={15} style={{ color: "#3F4A5A" }} />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden px-5 pb-5 pt-1 space-y-1 glass-nav">
          {NAV_ITEMS.map(item => (
            <button key={item.id}
              onClick={() => { onNav(item.id); setMobile(false); }}
              className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{
                background: active === item.id ? "#8EC5FC" : "transparent",
                color: active === item.id ? "white" : dark ? "#CBD5E8" : "#3F4A5A",
              }}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────

const ROLES = ["UI/UX Designer", "Front-end Developer", "Physics Educator", "Content Creator", "Lifelong Learner"];

function Hero({ onNav }: { onNav: (id: string) => void }) {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden pt-20"
      style={{ background: "linear-gradient(180deg,#EEF7FF 0%,#FFF8EF 100%)" }}>
      {/* Decorative orbs */}
      <div className="absolute top-28 left-6 opacity-15 pointer-events-none" style={{ animation: "spin-slow 22s linear infinite" }}>
        <SmallFlower color="#8EC5FC" size={50} />
      </div>
      <div className="absolute top-52 right-8 opacity-15 pointer-events-none" style={{ animation: "spin-slow 16s linear infinite reverse" }}>
        <SmallFlower color="#F7D6E0" size={36} />
      </div>
      <div className="absolute bottom-60 left-1/4 opacity-10 pointer-events-none" style={{ animation: "bob 5s ease-in-out infinite" }}>
        <SmallFlower color="#A9D18E" size={28} />
      </div>

      <div className="hero-content max-w-4xl mx-auto px-6 pt-12 pb-4 text-center relative z-10 flex flex-col items-center">
        <div className="anim-fade-up-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ background: "#F7D6E0", color: "#A47C5B" }}>
          🏡 Building from a cozy home in Indonesia
        </div>

        <h1 className="anim-fade-up-1 font-bold leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem,7vw,4.5rem)", color: "#3F4A5A" }}>
          Hi, I'm<br />
          <span style={{
            background: "linear-gradient(135deg,#8EC5FC 0%,#A47C5B 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Siti Nur Alfath.
          </span>
        </h1>

        <div className="anim-fade-up-2 h-10 flex items-center justify-center mb-4">
          <span key={roleIdx} className="text-xl md:text-2xl font-semibold"
            style={{ color: "#8EC5FC", animation: "role-fade 2.8s ease-in-out" }}>
            {ROLES[roleIdx]}
          </span>
        </div>

        <p className="anim-fade-up-3 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#5A6478" }}>
          I believe learning never stops — whether it's coding, teaching physics,
          creating digital experiences, or growing vegetables in my backyard.
        </p>

        <div className="anim-fade-up-4 flex flex-wrap items-center justify-center gap-4">
          <button className="btn-primary" onClick={() => onNav("about")}>
            Explore My Journey ✨
          </button>
          <button className="btn-secondary" onClick={() => onNav("portfolio")}>
            View Portfolio
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 mt-6 anim-fade-up-4" style={{ height: 380 }}>
        <CozyHouse />
      </div>
    </section>
  );
}

// ─── WHAT I'M BUILDING ─────────────────────────────────────────────────────

const BUILD_CARDS = [
  { Icon: Palette, title: "UI/UX Design", desc: "Crafting intuitive, beautiful digital experiences — from wireframes to pixel-perfect interfaces.", color: "#8EC5FC", bg: "#EEF7FF", tags: ["Figma", "Design Systems", "Prototyping"] },
  { Icon: Code, title: "Front-end Development", desc: "Bringing designs to life with clean React code, semantic HTML, and thoughtful CSS.", color: "#A9D18E", bg: "#F0F8EB", tags: ["React", "TypeScript", "Tailwind"] },
  { Icon: BookOpen, title: "Physics Education", desc: "Teaching physics through stories, illustrations, and real-world examples that actually stick.", color: "#F7A8C4", bg: "#FFF0F5", tags: ["Grade 10–12", "Tutoring", "Content"] },
  { Icon: Sprout, title: "Gardening", desc: "Growing vegetables, composting, and exploring the homestead lifestyle one season at a time.", color: "#A47C5B", bg: "#F5EDE5", tags: ["Hydroponics", "Composting", "Harvest"] },
];

function WhatImBuilding() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="What I Do" title="What I'm Building"
          sub="A combination of technology, education, and nature — woven into one meaningful life." />
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILD_CARDS.map((c, i) => (
            <div key={i} className="rounded-2xl p-6 card-hover cursor-default"
              style={{ background: c.bg, transitionDelay: `${i * 80}ms` }}>
              <div className="w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: c.color }}>
                <c.Icon size={26} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A6478" }}>{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag, t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "white", color: c.color === "#F7A8C4" ? "#A47C5B" : c.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT / TIMELINE ──────────────────────────────────────────────────────

function TimelineItem({ item, delay }: { item: typeof TIMELINE[0]; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-left flex gap-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="timeline-bubble flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 relative shadow-md"
        style={{ background: item.color }}>
        <item.Icon size={20} color="#3F4A5A" />
      </div>
      <div className="flex-1 rounded-2xl p-5 shadow-sm mb-1"
        style={{ background: "white", border: "1px solid rgba(142,197,252,0.18)" }}>
        <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2"
          style={{ background: "#F5EDE5", color: "#A47C5B" }}>{item.year}</span>
        <h3 className="font-bold text-lg mb-0.5"
          style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>{item.title}</h3>
        <p className="text-sm font-medium mb-2" style={{ color: "#8EC5FC" }}>{item.sub}</p>
        <p className="text-sm leading-relaxed" style={{ color: "#5A6478" }}>{item.desc}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#FFF8EF" }}>
      <div className="max-w-2xl mx-auto">
        <SectionTitle label="My Story" title="A Journey of Growth"
          sub="From physics classrooms to coding bootcamps — every chapter shaped who I am today." />

        <div className="relative">
          <div className="timeline-line absolute top-0 bottom-0 rounded-full"
            style={{ left: 24, width: 2, background: "linear-gradient(to bottom,#8EC5FC,#F7D6E0,#A9D18E,#A47C5B)" }} />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={i} item={item} delay={i * 70} />
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-3xl" style={{ fontFamily: "'Caveat', cursive", color: "#A47C5B" }}>
            "Every detour was worth it. Every pause was preparation."
          </p>
          <p className="text-sm mt-3" style={{ color: "#8A8FA8" }}>— Siti Nur Alfath</p>
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ─────────────────────────────────────────────────────────────

const PORT_CATS = ["All", "Web Design", "Dashboard", "Landing Page", "Mobile App", "UI Kit", "Blogger Theme", "Graphic Design"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Portfolio" title="Selected Works"
          sub="A curated collection of design and development projects — each with its own story." />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {PORT_CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: filter === cat ? "#8EC5FC" : "#F7D6E0",
                color: filter === cat ? "white" : "#A47C5B",
                boxShadow: filter === cat ? "0 4px 14px rgba(142,197,252,0.35)" : "none",
              }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry">
          {items.map(item => (
            <div key={item.id} className="masonry-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden card-hover cursor-pointer group block"
                style={{ background: "#F7F3EE", textDecoration: "none" }}>
                <div className="relative overflow-hidden" style={{ height: item.height, background: "#E8E0D5" }}>
                  <img
                    src={item.img.startsWith("http") || item.img.startsWith("/")
                      ? item.img
                      : `https://images.unsplash.com/${item.img}?w=600&h=400&fit=crop&auto=format`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.35),transparent)" }} />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.9)" }}>
                      <ExternalLink size={13} style={{ color: "#3F4A5A" }} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold" style={{ color: "#8EC5FC" }}>{item.tag}</span>
                  <h4 className="font-semibold mt-1" style={{ color: "#3F4A5A" }}>{item.title}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PHYSICS ───────────────────────────────────────────────────────────────

const PHYSICS_TABS = Object.keys(PHYSICS_TOPICS);

function PhysicsHub() {
  const [tab, setTab] = useState(PHYSICS_TABS[0]);
  const topics = PHYSICS_TOPICS[tab];

  return (
    <section id="physics" className="py-24 px-6" style={{ background: "#FFF8EF" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Physics Hub" title="Learn Physics with Me"
          sub="From high school fundamentals to university concepts — made clear, visual, and memorable." />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {PHYSICS_TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: tab === t ? "#3F4A5A" : "white",
                color: tab === t ? "white" : "#3F4A5A",
                border: tab === t ? "none" : "1px solid rgba(142,197,252,0.3)",
                boxShadow: tab === t ? "0 4px 14px rgba(63,74,90,0.25)" : "none",
              }}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {topics.map((topic, i) => (
            <div key={i} className="physics-card">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h4 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>{topic.title}</h4>
              <div className="flex items-center gap-3 mb-4" style={{ color: "#8A8FA8", fontSize: 12 }}>
                <span className="flex items-center gap-1"><BookOpen size={11} /> {topic.lessons} lessons</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {topic.duration}</span>
              </div>
              <div className="space-y-1.5 mb-5">
                {topic.topics.map((tp, j) => (
                  <div key={j} className="flex items-center gap-2" style={{ fontSize: 12, color: "#5A6478" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#8EC5FC", flexShrink: 0 }} />
                    {tp}
                  </div>
                ))}
              </div>
              <button className="w-full py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "#EEF7FF", color: "#8EC5FC" }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = "#8EC5FC"; (e.target as HTMLButtonElement).style.color = "white"; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "#EEF7FF"; (e.target as HTMLButtonElement).style.color = "#8EC5FC"; }}>
                Start Learning →
              </button>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: "120+", label: "Physics Lessons", color: "#8EC5FC" },
            { num: "500+", label: "Practice Questions", color: "#F7A8C4" },
            { num: "50+", label: "Formula Cards", color: "#A9D18E" },
            { num: "10+", label: "Students Helped", color: "#A47C5B" },
          ].map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl shadow-sm" style={{ background: "white" }}>
              <div className="font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", color: s.color }}>{s.num}</div>
              <div className="text-sm" style={{ color: "#8A8FA8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BLOG ──────────────────────────────────────────────────────────────────

const BLOG_CATS = ["All", "Coding", "UI UX", "Frontend", "AI", "Career Journey", "Productivity", "Learning Notes"];

function Blog() {
  const [cat, setCat] = useState("All");
  const posts = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat);

  return (
    <section id="blog" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="The Blog" title="Stories & Notes"
          sub="Honest reflections on learning, building, and growing — from my home to yours." />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {BLOG_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: cat === c ? "#3F4A5A" : "#FFF8EF",
                color: cat === c ? "white" : "#3F4A5A",
              }}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="rounded-2xl overflow-hidden card-hover cursor-pointer group"
              style={{ background: "#FFF8EF" }}>
              <div className="relative overflow-hidden" style={{ height: 200, background: "#E8E0D5" }}>
                <img
                  src={`https://images.unsplash.com/${post.img}?w=500&h=300&fit=crop&auto=format`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#8EC5FC", color: "white" }}>{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold leading-snug mb-3 transition-colors group-hover:text-[#8EC5FC]"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>
                  {post.title}
                </h4>
                <div className="flex items-center gap-4" style={{ fontSize: 12, color: "#8A8FA8" }}>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GARDEN ────────────────────────────────────────────────────────────────

const GARDEN_CATS = ["All", "Vegetables", "Flowers", "Homestead", "Harvest", "DIY", "Composting", "Hydroponics", "Recipe"];

function Garden() {
  const [cat, setCat] = useState("All");
  const posts = cat === "All" ? GARDEN_POSTS : GARDEN_POSTS.filter(p => p.category === cat);

  return (
    <section id="garden" className="py-24 px-6" style={{ background: "#F0F8EB" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="The Garden" title="Growing Things"
          sub="Our little backyard is teaching me patience, cycles, and the joy of slow living." />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {GARDEN_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: cat === c ? "#A9D18E" : "white",
                color: cat === c ? "white" : "#3F4A5A",
              }}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="rounded-2xl overflow-hidden card-hover cursor-pointer group"
              style={{ background: "white" }}>
              <div className="relative overflow-hidden" style={{ height: 210, background: "#C5E2B2" }}>
                <img
                  src={`https://images.unsplash.com/${post.img}?w=500&h=350&fit=crop&auto=format`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#A9D18E", color: "white" }}>{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold leading-snug mb-2 group-hover:text-[#A9D18E] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#A47C5B" }}>
                  <Sprout size={12} /> <span>Ganin Homestead</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────

const SOCIALS = [
  { Icon: Mail, label: "Email", value: "nunkalfath@gmail.com", color: "#8EC5FC" },
  { Icon: Github, label: "GitHub", value: "github.com/nunkalfath", color: "#3F4A5A" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nunkalfath", color: "#0077B5" },
  { Icon: Youtube, label: "YouTube", value: "youtube.com/@sitinuralfath", color: "#F7A8C4" },
  { Icon: Facebook, label: "Facebook", value: "facebook.com/sitinuralfath", color: "#A9D18E" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="Say Hello" title="Let's Connect"
          sub="Whether you want to collaborate, learn together, or just say hi — my door is always open." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-2xl mb-8" style={{ fontFamily: "'Caveat', cursive", color: "#A47C5B" }}>
              "Every connection is a new seed planted."
            </p>
            <div className="space-y-3">
              {SOCIALS.map((s, i) => (
                <div key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer group transition-shadow hover:shadow-md"
                  style={{ background: "#FFF8EF" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: s.color }}>
                    <s.Icon size={17} color="white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium" style={{ color: "#8A8FA8" }}>{s.label}</div>
                    <div className="text-sm font-semibold group-hover:text-[#8EC5FC] transition-colors"
                      style={{ color: "#3F4A5A" }}>{s.value}</div>
                  </div>
                  <ExternalLink size={13} style={{ color: "#C5C9D6" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8" style={{ background: "#FFF8EF" }}>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🌸</div>
                <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>
                  Message Sent!
                </h4>
                <p className="text-sm" style={{ color: "#5A6478" }}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#3F4A5A" }}>
                  Send a Message
                </h4>
                {[
                  { key: "name", label: "Your Name", type: "text", ph: "Siti Nur Alfath" },
                  { key: "email", label: "Email Address", type: "email", ph: "nunkalfath@gmail.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "#3F4A5A" }}>{f.label}</label>
                    <input type={f.type} required
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                      placeholder={f.ph}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{ background: "white", border: "1px solid rgba(142,197,252,0.35)", color: "#3F4A5A" }}
                      onFocus={e => (e.target.style.borderColor = "#8EC5FC")}
                      onBlur={e => (e.target.style.borderColor = "rgba(142,197,252,0.35)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#3F4A5A" }}>Message</label>
                  <textarea required rows={5}
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="I'd love to collaborate on..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                    style={{ background: "white", border: "1px solid rgba(142,197,252,0.35)", color: "#3F4A5A" }}
                    onFocus={e => (e.target.style.borderColor = "#8EC5FC")}
                    onBlur={e => (e.target.style.borderColor = "rgba(142,197,252,0.35)")}
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message 🌸
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────

function Footer({ onNav }: { onNav: (id: string) => void }) {
  const decorFlowers = [
    { color: "#8EC5FC", size: 44, style: { bottom: 16, left: 24, opacity: 0.12, animation: "bob 4s ease-in-out infinite" } },
    { color: "#F7D6E0", size: 54, style: { bottom: 28, right: 40, opacity: 0.1, animation: "bob 5s ease-in-out infinite 1s" } },
    { color: "#A9D18E", size: 32, style: { top: 24, right: "30%", opacity: 0.1, animation: "bob 3.5s ease-in-out infinite 0.5s" } },
    { color: "#FFD6A5", size: 26, style: { top: 40, left: "20%", opacity: 0.08, animation: "bob 6s ease-in-out infinite 2s" } },
  ];

  return (
    <footer className="footer-bg relative overflow-hidden py-16 px-6">
      {decorFlowers.map((f, i) => (
        <div key={i} className="absolute pointer-events-none" style={f.style as React.CSSProperties}>
          <SmallFlower color={f.color} size={f.size} />
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#8EC5FC" }}>
                <SmallFlower color="#FFF8EF" size={20} />
              </div>
              <span className="font-bold text-xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Siti Nur Alfath
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              Building, Learning & Growing from Home. UI/UX Designer · Front-end Developer · Physics Educator
            </p>
            <p className="text-xl" style={{ fontFamily: "'Caveat', cursive", color: "#8EC5FC" }}>
              "Made with love from a small home in Indonesia."
            </p>
            <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
              Always Learning. Always Growing.
            </p>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>Navigate</h5>
            <div className="space-y-2">
              {NAV_ITEMS.map(item => (
                <button key={item.id} onClick={() => onNav(item.id)}
                  className="block text-sm text-left transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "#8EC5FC")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>Connect</h5>
            <div className="space-y-2">
              {["GitHub", "LinkedIn", "Behance", "YouTube", "Facebook"].map(s => (
                <a key={s} href="#" className="block text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "#8EC5FC")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © 2024 Siti Nur Alfath — Always Learning. Always Growing.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Designed & Built with ❤️ · Powered by passion
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── BACK TO TOP ───────────────────────────────────────────────────────────

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#8EC5FC", color: "white" }}>
      <ArrowUp size={18} />
    </button>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "portfolio", "physics", "blog", "garden", "contact"];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.25 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "dark" : ""}>
      <style>{GLOBAL_CSS}</style>
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <NavBar dark={dark} setDark={setDark} active={active} onNav={scrollTo} />
        <main>
          <Hero onNav={scrollTo} />
          <WhatImBuilding />
          <About />
          <Portfolio />
          <PhysicsHub />
          <Blog />
          <Garden />
          <Contact />
        </main>
        <Footer onNav={scrollTo} />
        <BackToTop />
      </div>
    </div>
  );
}
