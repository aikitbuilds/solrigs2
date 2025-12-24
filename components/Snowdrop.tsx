
import React, { useState } from 'react';
import { 
  Activity, Heart, Award, Users, Share2, TrendingUp, 
  Layers, ExternalLink, Calendar, DollarSign, PieChart,
  Target, Info, ChevronRight, Zap, Mail, Smartphone,
  Clock, MapPin, QrCode
} from 'lucide-react';

const Snowdrop: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ultra55' | 'platform' | 'calendar' | 'tech'>('ultra55');

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500 pb-24">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest mb-4">
            <Activity size={12} /> Campaign Live: solrigs.com/snowdrop55
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter">
            Ultra 55 <Heart className="text-rose-500" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">55 Hours • One Mission • Fight Childhood Cancer</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase">Race Goal</p>
            <p className="text-lg font-black text-rose-500">$25,000</p>
          </div>
          <button className="px-6 py-3 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20 active:scale-95 transition-all flex items-center gap-2">
            <QrCode size={14} /> Get QR Shirt
          </button>
        </div>
      </header>

      {/* Navigation */}
      <div className="flex gap-1 p-1 bg-slate-900 border border-slate-800 rounded-2xl w-fit overflow-x-auto max-w-full">
        {[
          { id: 'ultra55', name: 'Snowdrop 55', icon: Target },
          { id: 'platform', name: 'Impact Platform', icon: Layers },
          { id: 'calendar', name: '2026 Calendar', icon: Calendar },
          { id: 'tech', name: 'solrigs.com Tech', icon: Zap },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <tab.icon size={14} /> {tab.name}
          </button>
        ))}
      </div>

      {activeTab === 'ultra55' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-[40px] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Target size={200} />
               </div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-black mb-6 uppercase">The Campaign: solrigs.com/snowdrop55</h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                   Dec 30 - Jan 1. 55 straight hours of running through the Permian Basin. 
                   This isn't just a race; it's the anchor for the solrigs.com launch.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl">
                     <Clock className="text-rose-500 mb-2" />
                     <p className="text-sm font-bold">55 Hours Straight</p>
                     <p className="text-xs text-slate-500">Testing the limits before the 5-year execution.</p>
                   </div>
                   <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl">
                     <MapPin className="text-rose-500 mb-2" />
                     <p className="text-sm font-bold">Permian Basin, TX</p>
                     <p className="text-xs text-slate-500">The heart of the Scout Rigs territory.</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest mb-6">Race Split Logic</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Snowdrop Foundation</span>
                    <span className="text-emerald-500 font-black">80%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{width: '80%'}}></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-bold">Mission Ops</span>
                    <span className="text-blue-500 font-black">20%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{width: '20%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Strategy</p>
                 <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                   High charity percentage builds massive trust with O&G investors for Scout Rigs.
                 </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px]">
               <h3 className="text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                 <QrCode className="text-white" /> T-Shirt QR Strategy
               </h3>
               <div className="flex gap-6">
                 <div className="w-32 h-32 bg-white p-2 rounded-xl flex-shrink-0">
                    <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center text-white text-[8px] font-black uppercase text-center p-2">
                      solrigs.com/snowdrop55
                    </div>
                 </div>
                 <div className="space-y-3">
                   <p className="text-sm font-bold text-slate-100">"Scan to Support Childhood Cancer"</p>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     Front of shirt has 2" QR code. Back has founder photo and story. 
                     Every person encountered during training or race is a funnel entry.
                   </p>
                   <button className="text-xs font-black text-blue-400 uppercase tracking-widest flex items-center gap-1">
                     View T-Shirt Design <ChevronRight size={14} />
                   </button>
                 </div>
               </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] relative overflow-hidden group">
               <div className="absolute inset-0 bg-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                 <Calendar className="text-emerald-500" /> Meditation Integration
               </h3>
               <p className="text-sm text-slate-300 leading-relaxed">
                 Post-race reset: Jan 28 - Feb 8. Dhamma Sukha, New Ulm, TX. 
                 10-day silent retreat to sharpen the mind before 5-year solar execution.
               </p>
               <div className="mt-6 flex items-center gap-4">
                 <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase rounded-lg">Mental Fortitude</div>
                 <span className="text-xs text-slate-500 font-bold">Jan 28 - Feb 8, 2026</span>
               </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'platform' && (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] animate-in fade-in slide-in-from-bottom duration-500">
           <h2 className="text-3xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
             <Layers className="text-blue-500" /> Snowdrop Platform Hub
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Monthly Challenges", desc: "Keep the sustainer loop alive with monthly runs.", val: "$10k/mo Goal" },
                { title: "Corporate Matching", desc: "Integrating with Scout Rigs enterprise partners.", val: "2X Impact" },
                { title: "Founder Updates", desc: "Monthly email connecting running to solar milestones.", val: "100% Transparency" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all">
                  <h4 className="font-bold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.val}</p>
                </div>
              ))}
           </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] animate-in fade-in slide-in-from-bottom duration-500">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">2026 Monthly Tradition</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((m, i) => (
              <div key={i} className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl flex flex-col justify-center items-center">
                <span className="text-xs font-black text-slate-500">{m}</span>
                <span className="text-sm font-bold mt-1">{i === 11 ? "ULTRA 56" : "Campaign X"}</span>
                {i === 11 && <span className="text-[10px] font-black text-rose-500 mt-1">$25k Goal</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tech' && (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] animate-in fade-in slide-in-from-bottom duration-500">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">solrigs.com Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
               {[
                 { tool: "Webflow", desc: "Host for solrigs.com architecture" },
                 { tool: "Donorbox", desc: "Embedded /snowdrop55 donation form" },
                 { tool: "Mailchimp", desc: "Welcome flow + countdown logic" },
                 { tool: "Stripe", desc: "Presale management for Sentry" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                   <span className="font-bold">{item.tool}</span>
                   <span className="text-xs text-slate-500 uppercase font-black">{item.desc}</span>
                 </div>
               ))}
            </div>
            <div className="p-6 bg-slate-950/30 border border-slate-800 rounded-3xl border-dashed">
               <h4 className="text-xs font-black uppercase text-slate-500 mb-4">Site Architecture</h4>
               <ul className="text-xs space-y-2 font-mono text-slate-400">
                 <li>solrigs.com/snowdrop55</li>
                 <li>solrigs.com/snowdrop</li>
                 <li>solrigs.com/scout-rigs</li>
                 <li>solrigs.com/presales</li>
                 <li>solrigs.com/about</li>
                 <li>solrigs.com/youtube</li>
               </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Snowdrop;
