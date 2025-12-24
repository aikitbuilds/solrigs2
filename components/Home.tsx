
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun, Box, ShieldCheck, Cpu, ArrowRight, ShieldAlert, Heart, Zap, Play
} from 'lucide-react';
import Footer from './Footer';
import { firebaseService, RWAMetrics } from '../services/firebaseService';

// --- IMAGE CONFIGURATION ---
// TO USE CUSTOM IMAGES:
// 1. Place your image files in the 'public' folder of your project (e.g. public/hero-solar.jpg)
// 2. Change the URLs below to 'public/your-image-name.jpg'
const IMAGES = {
  heroSolar: '/nano_banana_invest_hero.png', // Switched to "Nano Banana" solstation farm aesthetic
  heroTech: '/Scout_Dashboard__Real-Time_Fleet_Monitoring_and_Analytics_Platform.png',
  product100: '/Scout_Station_100__8kW_Modular_Power_Station_on_Deployment_Trailer.png',
  productSentry: '/Scout_Station_100_Deployment__Before_and_After_Case_Study.png',
  productAI: '/Scout_Compass_v2.4__AI_Sun_Tracking_Intelligence_System.png',
  missionVideo: '/Scout_Station_200__12kW_Standard_Modular_Power_System.png' // Utilizing highly visual asset for video placeholder
};

const Home: React.FC = () => {
  const [metrics, setMetrics] = useState<RWAMetrics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTelemetry = async () => {
      const data = await firebaseService.getLiveMetrics();
      setMetrics(data);
      setLoading(false);
    };
    fetchTelemetry();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 animate-in fade-in duration-1000">

      {/* 1. HERO SECTION (Urgency Hook) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Cinematic Split Screen Background */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="flex-1 bg-cover bg-center transition-all duration-1000 hover:flex-[1.1]" style={{ backgroundImage: `url(${IMAGES.heroSolar})` }}>
            <div className="absolute inset-0 bg-slate-950/50"></div>
          </div>
          <div className="flex-1 bg-cover bg-center transition-all duration-1000 hover:flex-[1.1]" style={{ backgroundImage: `url(${IMAGES.heroTech})` }}>
            <div className="absolute inset-0 bg-slate-950/50"></div>
          </div>
        </div>

        {/* Brand Overlay: Teal to Black Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#208080]/70 via-slate-950/90 to-slate-950"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] animate-pulse">
            <ShieldAlert size={14} /> DOE Alert: 100 GW Capacity Gap Detected
          </div>

          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white max-w-6xl mx-auto">
            Grid Independence, <br />
            <span className="text-[#D4AF37]">Engineered</span>.
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Deploy power in weeks, not years. SolRigs provides mobile, AI-optimized solar systems that bypass the 5–10 year grid interconnection queue, solving the structural capacity crisis for data centers and industry.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center pt-10">
            <Link to="/presales" className="px-14 py-7 bg-[#208080] hover:bg-[#1a6666] text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(32,128,128,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3 group">
              Reserve Deployment Slot <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/use-cases" className="px-14 py-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/50 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3">
              Explore Use Cases <Box size={22} className="text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 py-40 space-y-32">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black uppercase tracking-tight text-white">Modular Power for Every Mission</h2>
          <p className="text-slate-400 text-lg font-medium">Bypass utility bottlenecks with modular, containerized infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="group bg-slate-900 border border-slate-800 rounded-[48px] overflow-hidden hover:border-[#208080]/50 transition-all shadow-2xl flex flex-col">
            <div className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url(${IMAGES.product100})` }}></div>
            <div className="p-10 flex-1 flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-black uppercase text-white">SolStation 100</h3>
                <div className="p-3 bg-[#208080]/10 rounded-xl text-[#208080]"><Box size={24} /></div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                Powering field operations with guaranteed uptime. Optimized for Oil/Gas and remote industrial deployments.
              </p>
              <div className="mt-auto pt-6 flex justify-between items-center border-t border-slate-800">
                <span className="text-xs font-black text-[#208080] uppercase tracking-widest">Commercial Grade</span>
                <Link to="/scout-rigs" className="text-white hover:text-[#208080] transition-colors"><ArrowRight /></Link>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900 border border-slate-800 rounded-[48px] overflow-hidden hover:border-[#D4AF37]/50 transition-all shadow-2xl flex flex-col">
            <div className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url(${IMAGES.productSentry})` }}></div>
            <div className="p-10 flex-1 flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-black uppercase text-white">SolSentry Series</h3>
                <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]"><ShieldCheck size={24} /></div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                EMP-shielded, stealth-capable power for home backup and off-grid independence. Nondescript until activated.
              </p>
              <div className="mt-auto pt-6 flex justify-between items-center border-t border-slate-800">
                <span className="text-xs font-black text-[#D4AF37] uppercase tracking-widest">Resilience Pack</span>
                <Link to="/scout-rigs" className="text-white hover:text-[#D4AF37] transition-colors"><ArrowRight /></Link>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900 border border-slate-800 rounded-[48px] overflow-hidden hover:border-[#208080]/50 transition-all shadow-2xl flex flex-col">
            <div className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url(${IMAGES.productAI})` }}></div>
            <div className="p-10 flex-1 flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-black uppercase text-white">RigCompass AI</h3>
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Cpu size={24} /></div>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                Proprietary tracking controller increasing yield by 20–45% compared to static solar systems. The intelligence layer.
              </p>
              <div className="mt-auto pt-6 flex justify-between items-center border-t border-slate-800">
                <span className="text-xs font-black text-blue-500 uppercase tracking-widest">Proprietary IP</span>
                <Link to="/presales" className="text-white hover:text-blue-500 transition-colors"><ArrowRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RWA METRICS (Investment Appeal) */}
      <section className="bg-slate-900 py-32 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-black uppercase text-white tracking-tight leading-none">Live Asset Telemetry</h2>
              <p className="text-slate-400 font-medium">Real-time performance metrics from the SolRigs RWA Fleet.</p>
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">
              Fleet Healthy
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
              [1, 2].map(i => (
                <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-3xl animate-pulse h-40"></div>
              ))
            ) : (
              metrics.map((rig, i) => (
                <React.Fragment key={rig.rig_id}>
                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl group hover:border-[#208080]/40 transition-all">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{rig.rig_id} • {rig.location}</p>
                    <p className="text-4xl font-black text-white">{rig.kWh_produced_24h} <span className="text-lg">kWh</span></p>
                    <p className="text-xs font-bold text-slate-400 mt-1">24h Production</p>
                  </div>
                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl group hover:border-emerald-500/40 transition-all">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status: {rig.status}</p>
                    <p className="text-4xl font-black text-emerald-500">{rig.monthly_yield_percent}%</p>
                    <p className="text-xs font-bold text-slate-400 mt-1">Annualized Target</p>
                  </div>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 4. CAMPAIGN INTEGRATION */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest">
              <Heart size={12} /> The Snowdrop Mission
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-tight">Follow the <br /> 55-Hour Journey.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Michael Tran's 55-hour Permian Basin run isn't just a physical test. It's the anchor for our resilience story, proving the will behind the architecture. 80% of funds raised support childhood cancer research.
            </p>
            <div className="flex gap-4">
              <Link to="/snowdrop55" className="px-10 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all">
                Support the Mission
              </Link>
            </div>
          </div>
          <div id="video-narrative" className="relative group rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl aspect-video bg-slate-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url(${IMAGES.missionVideo})` }}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="currentColor" size={32} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Launch Episode 1: The Patch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
