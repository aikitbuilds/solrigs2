
import React from 'react';
import { Layers, Users, TrendingUp, Award, Zap, Activity, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SnowdropHub: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500 pb-24">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Layers size={12} /> Impact Platform Ecosystem
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter">
            Snowdrop Hub <Activity className="text-blue-500" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">Scaling Health & Mission Integration Across Industries</p>
        </div>
        <div className="flex gap-3">
          <Link to="/snowdrop55" className="px-6 py-3 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center gap-2">
            Active Campaign <Zap size={14} />
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] relative overflow-hidden">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">The 3-Tier Supporter Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { tier: "Tier 1", name: "Annual Backers", price: "$25-$500", desc: "One-time race support.", icon: Award },
                  { tier: "Tier 2", name: "Monthly Sustainers", price: "$10-$50/mo", desc: "Recurring mission fuel.", icon: TrendingUp },
                  { tier: "Tier 3", name: "Mission Partners", price: "$500-$5k", desc: "Advisory board seats.", icon: Users }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center mb-4 text-blue-500 border border-slate-800"><item.icon size={20} /></div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.tier}</p>
                    <h4 className="font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.price}</p>
                  </div>
                ))}
              </div>
           </section>

           <section className="bg-slate-900 border border-slate-800 p-8 rounded-[40px]">
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Campaign Calendar 2026</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {["Jan Run", "Love Legs", "Spring mi", "Ambition", "Memorial", "Summer", "Independ.", "Back 2 School", "Labor Day", "Spooky", "Thanks", "Ultra 56"].map((name, i) => (
                   <div key={i} className={`p-4 rounded-2xl border text-center ${i === 11 ? 'bg-rose-500/10 border-rose-500/30 text-rose-500' : 'bg-slate-950/50 border-slate-800 text-slate-500'}`}>
                      <p className="text-[8px] font-black uppercase mb-1">M{i+1}</p>
                      <p className="text-[10px] font-bold truncate">{name}</p>
                   </div>
                 ))}
              </div>
           </section>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] text-center">
              <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-4">Total Ecosystem Target</h3>
              <p className="text-5xl font-black text-white">$34,000</p>
              <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mt-2">Annual Year 1 Goal</p>
              <div className="mt-8 pt-8 border-t border-slate-800 space-y-3">
                 <div className="flex justify-between text-[10px] font-bold uppercase">
                   <span className="text-slate-500">To Research</span>
                   <span className="text-emerald-500">$27.2K</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold uppercase">
                   <span className="text-slate-500">To Ops</span>
                   <span className="text-blue-400">$6.8K</span>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] shadow-2xl">
              <h4 className="text-sm font-black uppercase mb-4 text-slate-400">Platform Vision</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Snowdrop isn't just for Cong. In Year 2, we open the licensing platform for 5 other causes and founders who want to integrate health and venture.
              </p>
              <button onClick={() => alert("Downloading Whitepaper...")} className="w-full mt-6 py-4 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2 hover:text-white transition-all">
                Whitepaper <Share2 size={14} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SnowdropHub;
