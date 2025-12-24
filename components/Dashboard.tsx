
import React from 'react';
import {
  ShieldCheck, ArrowRight, Zap, Target, TrendingUp, AlertTriangle,
  CheckCircle2, Building2, Package, Rocket, Clock, Lock, Wind
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { userMemoryService } from '../services/userMemoryService';
import Footer from './Footer';

const Dashboard: React.FC = () => {
  const context = userMemoryService.getContext();

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pt-6 px-4 md:px-0">
      <div className="fixed inset-0 pointer-events-none bg-[url('/nano_banana_portal_bg.png')] opacity-10 bg-cover bg-center"></div>

      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Wind size={12} /> Post-Race Alignment: {context.metrics.alignmentScore}%
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase">SolDashboard</h1>
          <p className="text-slate-400">Stage 6: Post-Race Recovery & Synthesis | Michael Tran</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-[10px] font-black text-slate-500 uppercase">Mission Success</p>
            <p className="text-lg font-black text-rose-500">$25.6K</p>
          </div>
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-[10px] font-black text-slate-500 uppercase">Phase</p>
            <p className="text-lg font-black text-orange-500">Recovery</p>
          </div>
        </div>
      </header>

      {/* 4 Strategic Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {context.milestones.slice(-4).map((m, i) => (
          <div key={m.id} className={`p-6 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-all ${m.status === 'active' ? 'ring-2 ring-orange-500/20 shadow-lg shadow-orange-500/10' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${m.status === 'complete' ? 'bg-emerald-500/10 text-emerald-500' : m.status === 'active' ? 'bg-orange-500/10 text-orange-500' : 'bg-slate-800 text-slate-600'}`}>
                {m.id === 'm6' ? <Wind size={20} /> : m.id === 'm5' ? <Zap size={20} /> : m.id === 'm3' ? <TrendingUp size={20} /> : <Rocket size={20} />}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${m.status === 'complete' ? 'text-emerald-500' : m.status === 'active' ? 'text-orange-400' : 'text-slate-600'}`}>
                {m.status}
              </span>
            </div>
            <h3 className="font-bold text-slate-400 text-xs uppercase mb-1">{m.name}</h3>
            <p className="text-lg font-black text-slate-100 mb-4">{m.target}</p>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${m.status === 'complete' ? 'bg-emerald-500' : m.status === 'active' ? 'bg-orange-500' : 'bg-slate-700'}`} style={{ width: m.status === 'complete' ? '100%' : m.status === 'active' ? '25%' : '0%' }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Alignment Status Card */}
        <div className="lg:col-span-2 relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-[40px]">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Target size={200} />
          </div>
          <div className="max-w-xl relative z-10">
            <h2 className="text-2xl font-black mb-4 uppercase flex items-center gap-3">
              Post-Race Synthesis
              {context.metrics.alignmentScore < 80 && <AlertTriangle className="text-rose-500" size={24} />}
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              Michael, the Snowdrop Mission was a tactical victory. We are now in the 72-hour recovery and data synthesis window. The focus is transitioning from physical grit to mental stillness (Vipassana) and Q1 deployment roadmap refinement.
            </p>
            <div className="flex gap-4">
              <NavLink to="/ai-mentor" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-orange-500/20">
                Talk to Digital COO <Wind size={18} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Next Strategic Steps */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] shadow-xl">
          <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-500 mb-6">RigBuild Queue</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-sm font-bold">Deep Bio-Recovery</p>
                <p className="text-xs text-slate-500 mt-1">Michael: Core physical status nominal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-sm font-bold">Mission Data Audit</p>
                <p className="text-xs text-slate-500 mt-1">Michael: Synthesis in progress.</p>
              </div>
            </div>
            <div className="flex gap-4 opacity-40">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-600 flex items-center justify-center flex-shrink-0">
                <Lock size={16} />
              </div>
              <div>
                <p className="text-sm font-bold">Vipassana Window</p>
                <p className="text-xs text-slate-500 mt-1">Locks in 4 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
