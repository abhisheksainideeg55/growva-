import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
  FaStripe,
  FaDatabase
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGraphql,
  SiMongodb,
  SiRedis
} from 'react-icons/si';

const TECH_STACK = [
  { name: 'React 19', icon: FaReact, color: 'text-cyan-500' },
  { name: 'Next.js 15', icon: SiNextdotjs, color: 'text-slate-900' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-500' },
  { name: 'Python & AI', icon: FaPython, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'AWS Cloud', icon: FaAws, color: 'text-amber-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-500' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
  { name: 'Figma UI/UX', icon: FaFigma, color: 'text-purple-500' },
  { name: 'Stripe Pay', icon: FaStripe, color: 'text-violet-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Redis Cache', icon: SiRedis, color: 'text-red-500' },
];

export default function TechStackMarquee() {
  const doubleList = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="py-10 bg-white/70 backdrop-blur-md border-y border-gray-100 overflow-hidden relative">
      {/* Left/Right Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-syne font-bold uppercase tracking-widest text-[#0E7490] bg-[#E0F7F6] px-3.5 py-1 rounded-full inline-block">
          Trusted Modern Tech Stack
        </span>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee-smooth flex items-center gap-6 py-2">
          {doubleList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-[#0E7490]/40 transition-all duration-300 flex-shrink-0 group cursor-default"
              >
                <Icon className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="font-syne font-semibold text-sm text-[#0F172A]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
