
import React from 'react';
import {
  User, ShieldAlert, Code, Award, Search, Heart, ShieldCheck, Globe,
  Zap, Users, Presentation, ArrowRight, Linkedin, Twitter, Youtube, MessageSquare
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const About: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    alert(`Redirecting to SolRigs ${platform}...`);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in slide-in-from-right duration-500 pb-32 pt-10 px-4 md:px-0">
      {/* Hero Section */}
      <header className="space-y-6 text-center md:text-left relative py-20 overflow-hidden rounded-[3rem] px-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/nano_banana_about_hero.png')" }}></div>
        <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
            <User size={12} /> The SolRigs Story
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl mt-4">
            Michael Tran <span className="text-slate-500">&</span> <br />
            <span className="text-blue-500">SolRigs Inc.</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium leading-tight max-w-3xl mt-6 drop-shadow-md">
            Building a $55M solar infrastructure company while documenting the entire 5-year execution. Deploying <span className="text-white">SolStation</span> systems to solve the $2 trillion grid crisis.
          </p>
          <div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl border-l-4 border-l-blue-500 shadow-xl mt-8 max-w-2xl">
            <p className="text-lg font-bold italic text-slate-200 leading-relaxed">
              "We build solar solutions, not just rigs. solrigs.com is the infrastructure of independence."
            </p>
          </div>
        </div>
      </header>

      {/* The Why: Grid Crisis */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3 text-white">
            <ShieldAlert className="text-rose-500" /> The Grid Crisis Is Real
          </h2>
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">solrigs.com intelligence</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "U.S. Peak Capacity Need", value: "~100 GW", desc: "Required by 2030; data centers need 50+ GW." },
            { label: "Interconnection Queue", value: "5-10 Yrs", desc: "Average wait time for projects to go live." },
            { label: "Stranded Capital", value: "$2 Trillion", desc: "Clean energy projects stuck in permitting." },
            { label: "Blackout Risk", value: "100x", desc: "Projected increase in worst-case grid scenarios." }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl group hover:border-rose-500/30 transition-all">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[40px] border-dashed">
          <p className="text-lg text-slate-300 leading-relaxed font-medium">
            The grid is broken. Energy storage and solar sit in warehouses while customers wait a decade.
            <span className="text-blue-500 font-bold ml-1">SolRigs deploys modular SolStation arrays in 2-4 weeks.</span>
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3 text-white">
          <Code className="text-blue-500" /> Technical Foundation
        </h2>

        {/* Phase 1: Digital */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[40px] space-y-10 relative overflow-hidden">
          {/* Subtle Portal Background for Tech Section */}
          <div className="absolute inset-0 bg-[url('/nano_banana_portal_bg.png')] opacity-20 bg-cover bg-center"></div>

          <div className="relative z-10">
            <p className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-2">Michael Tran: 2018–2023</p>
            <h3 className="text-3xl font-black uppercase text-white">Digital Infrastructure & AI</h3>
            <p className="text-slate-400 mt-2 font-medium max-w-2xl">I spent 5 years building AI-driven automation. This expertise is now the soul of <span className="text-white">RigCompass AI</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-4 p-6 bg-slate-950/80 rounded-3xl border border-slate-800 backdrop-blur-sm">
              <div className="text-blue-400"><Code size={28} /></div>
              <h4 className="font-bold text-slate-100 uppercase text-xs">Fleet Optimization</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Distributed AI system coordinating multi-asset operations. Reduced operational latency by 60%.</p>
            </div>
          </div>
        </div>

        {/* Phase 2: Solar */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[40px] space-y-8 relative">
          <div>
            <p className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em] mb-2">Immersion: 2023–Present</p>
            <h3 className="text-3xl font-black uppercase text-white">Technical Credibility Sprint</h3>
            <p className="text-slate-400 mt-2 font-medium">Transitioning AI and modular design expertise entirely into the SolStation flagship product line.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="p-8 bg-slate-950/50 rounded-3xl border border-slate-800 hover:border-yellow-500/30 transition-all">
              <Award className="text-yellow-500 mb-4" size={32} />
              <h4 className="text-xl font-black uppercase mb-2 text-white">NABCEP PV Associate</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 font-medium">Michael Tran scored in the 95th percentile. Technical mastery of code compliance and electrical safety for SolRigs deployment.</p>
              <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase rounded-lg inline-block">Professional Certification Q3 2025</div>
            </div>
            <div className="p-8 bg-slate-950/50 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all">
              <Search className="text-blue-500 mb-4" size={32} />
              <h4 className="text-xl font-black uppercase mb-2 text-white">SolStation ROI Modeling</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 font-medium">Proved SolStation ROI of 18 months vs 5+ years for grid power. Identifying market gaps for containerized power.</p>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase rounded-lg inline-block">Direct Access Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Arc */}
      <section className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[40px] space-y-12">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center text-white">The Narrative Arc: Michael Tran's Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 text-center group">
            <div className="w-20 h-20 bg-rose-500 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform"><Heart size={40} /></div>
            <h4 className="text-xl font-black uppercase text-white">1. Physical Test</h4>
            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Snowdrop Mission • Dec 30, 2024</p>
            <p className="text-xs text-slate-400 leading-relaxed font-bold">Michael's 55-hour straight run. Proof of will before the SolRigs execution starts.</p>
          </div>
          <div className="space-y-4 text-center group border-x border-slate-800 px-4">
            <div className="w-20 h-20 bg-emerald-500 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform"><ShieldCheck size={40} /></div>
            <h4 className="text-xl font-black uppercase text-white">2. Mental Test</h4>
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Vipassana • Jan 28, 2025</p>
            <p className="text-xs text-slate-400 leading-relaxed font-bold">10 days of silence. Sharpening focus to execute solrigs.com without distraction.</p>
          </div>
          <div className="space-y-4 text-center group">
            <div className="w-20 h-20 bg-blue-500 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform"><Globe size={40} /></div>
            <h4 className="text-xl font-black uppercase text-white">3. Execution</h4>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Scale Mode • Feb 1, 2025</p>
            <p className="text-xs text-slate-400 leading-relaxed font-bold">Deploying SolStation pilots across O&G networks and commercial sites.</p>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Customers", t: "SolStation Deployment", path: "/presales", icon: Zap, color: "blue" },
          { l: "Partners", t: "Join JV Network", path: "/presales", icon: Users, color: "yellow" },
          { l: "Investors", t: "SolRigs Pitch Deck", path: "/pitch-deck", icon: Presentation, color: "emerald" },
          { l: "Mission", t: "Snowdrop Mission Live", path: "/snowdrop55", icon: Heart, color: "rose" }
        ].map((cta, i) => (
          <NavLink key={i} to={cta.path} className="p-8 bg-slate-900 border border-slate-800 rounded-[32px] hover:border-blue-500/30 transition-all group relative overflow-hidden">
            <div className={`w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-${cta.color}-500/10 text-${cta.color}-500`}><cta.icon size={20} /></div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{cta.l}</p>
            <p className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center justify-between">
              {cta.t} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </p>
          </NavLink>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default About;
