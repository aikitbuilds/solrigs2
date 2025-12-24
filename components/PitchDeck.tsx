
import React from 'react';
import {
  TrendingUp, ShieldAlert, Zap, Globe, Database,
  BarChart3, CheckCircle2, ArrowRight, ExternalLink,
  Target, Rocket, Lock, Sun, Battery, Activity, Users
} from 'lucide-react';
import Footer from './Footer';

// --- VISUAL COMPONENTS FOR CHARTS ---

const BarChart = () => (
  <div className="w-full h-64 flex items-end justify-between gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
    <div className="flex flex-col items-center gap-2 w-1/4 group">
      <div className="text-xs font-bold text-slate-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">2014</div>
      <div className="w-full bg-slate-700 rounded-t-lg relative group-hover:bg-[#208080] transition-colors" style={{ height: '20%' }}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-xs">0.5GW</div>
      </div>
      <div className="h-1 w-full bg-slate-800 rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2 w-1/4 group">
      <div className="text-xs font-bold text-slate-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">2018</div>
      <div className="w-full bg-slate-600 rounded-t-lg relative group-hover:bg-[#208080] transition-colors" style={{ height: '40%' }}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-xs">1.2GW</div>
      </div>
      <div className="h-1 w-full bg-slate-800 rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2 w-1/4 group">
      <div className="text-xs font-bold text-slate-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">2022</div>
      <div className="w-full bg-slate-500 rounded-t-lg relative group-hover:bg-[#208080] transition-colors" style={{ height: '70%' }}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-xs">2.0GW</div>
      </div>
      <div className="h-1 w-full bg-slate-800 rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2 w-1/4 group">
      <div className="text-xs font-bold text-[#D4AF37] mb-2">2024</div>
      <div className="w-full bg-rose-500 rounded-t-lg relative animate-pulse" style={{ height: '95%' }}>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-rose-500 font-bold text-sm bg-rose-950/80 px-2 py-1 rounded border border-rose-500">2.6 TRILLION</div>
      </div>
      <div className="h-1 w-full bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>
      <div className="text-[10px] font-black uppercase text-rose-500 mt-2">Queue Value</div>
    </div>
  </div>
);

const LineChart = () => (
  <div className="relative w-full h-64 bg-slate-900/50 rounded-2xl border border-slate-800 p-6 overflow-hidden">
    {/* Grid */}
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
      {[...Array(24)].map((_, i) => <div key={i} className="border border-slate-500"></div>)}
    </div>

    {/* Lines */}
    <svg className="absolute inset-0 w-full h-full p-6 overflow-visible" preserveAspectRatio="none">
      {/* Diesel Costs (Red) */}
      <polyline points="0,50 100,60 200,55 300,70 400,80 500,90" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      <text x="350" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">Diesel Cost (Rising)</text>

      {/* Grid Power (Grey) */}
      <polyline points="0,150 100,150 200,150 300,150 400,150 500,150" fill="none" stroke="#64748b" strokeWidth="2" />
      <text x="10" y="140" fill="#64748b" fontSize="10" fontWeight="bold">Grid Baseline</text>

      {/* SolRigs Yield (Gold) */}
      <polyline points="0,200 50,180 150,120 250,100 350,60 450,20 500,10" fill="none" stroke="#D4AF37" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      <text x="50" y="100" fill="#D4AF37" fontSize="12" fontWeight="bold">SolRigs AI Yield (+45%)</text>
    </svg>
  </div>
);

const MarketBubbles = () => (
  <div className="w-full h-64 relative bg-slate-900/50 rounded-2xl border border-slate-800 p-6 flex items-center justify-center">
    <div className="absolute w-64 h-64 border-2 border-slate-700/50 rounded-full flex items-center justify-center">
      <span className="absolute -top-6 text-slate-500 text-xs font-black uppercase">TAM: $30B</span>
    </div>
    <div className="absolute w-40 h-40 border-2 border-[#208080]/50 bg-[#208080]/5 rounded-full flex items-center justify-center">
      <span className="absolute -top-6 text-[#208080] text-xs font-black uppercase">SAM: $5B</span>
    </div>
    <div className="absolute w-20 h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
      <span className="text-white text-xs font-black text-center leading-tight">SOM<br />$55M</span>
    </div>
  </div>
);


const PitchDeck: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-20 pb-40">

      {/* 1. HERO - THE HOOK */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-[url('/nano_banana_invest_hero.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>

        <div className="relative z-10 max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-widest animate-pulse">
            <Lock size={14} /> Confidential Memo
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]">
            Energy <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#208080] to-[#D4AF37]">Unchained</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
            The grid is broken. Interconnection takes 7 years. SolRigs deploys independently in 4 weeks.
          </p>
          <div className="pt-8">
            <a href="#ask" className="px-10 py-4 bg-[#D4AF37] hover:bg-[#b08d26] text-black font-black uppercase tracking-widest rounded-full transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 inline-flex items-center gap-3">
              See The Deal <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE CRISIS - DATA CHART */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 border-t border-slate-900">
        <div className="flex-1 space-y-8">
          <div className="inline-block p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-500 font-black uppercase tracking-widest text-xs">The Problem</div>
          <h2 className="text-5xl font-black uppercase text-white tracking-tight">The Interconnection <br />Death Spiral</h2>
          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            The US Grid has a backbone problem. There is <span className="text-white font-bold">2.6 Trillion Dollars</span> of energy projects stuck in the "Interconnection Queue".
            <br /><br />
            Wait times have exploded from <span className="text-emerald-400">2 years</span> (2014) to <span className="text-rose-500">7+ years</span> (2024). Industrial operators, Data Centers, and Homesteaders are starving for power.
          </p>
        </div>
        <div className="flex-1 w-full">
          <BarChart />
          <p className="text-center text-xs font-black text-slate-600 uppercase mt-4 tracking-widest">Source: Berkeley Lab (LBNL) 2024 Report</p>
        </div>
      </section>

      {/* 3. THE SOLUTION - PRODUCT */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase text-white tracking-tight mb-6">The Solution: <span className="text-[#208080]">Skip The Grid</span></h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">SolRigs builds "Island Mode" infrastructure. We don't ask for permission to connect. We generate, store, and consume locally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#208080] text-white p-8 rounded-3xl md:col-span-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/nano_banana_invest_hero.png')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <Zap size={40} className="mb-6" />
              <h3 className="text-3xl font-black uppercase mb-4">SolStation</h3>
              <p className="text-lg font-medium opacity-90 max-w-md">Mobile Solar Trailers & Skids. 8kW - 300kW. Deploys in minutes via standard pickup truck.</p>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden hover:border-[#D4AF37]/50 transition-colors group">
            <ShieldAlert size={40} className="text-[#D4AF37] mb-6" />
            <h3 className="text-2xl font-black uppercase text-white mb-4">SolSentry</h3>
            <p className="text-slate-400 font-medium">EMP-Hardened resilience for when the grid fails completely.</p>
          </div>
        </div>
      </section>

      {/* 4. THE UNFAIR ADVANTAGE - AI CHART */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20 text-[#D4AF37] font-black uppercase tracking-widest text-xs">Proprietary Tech</div>
          <h2 className="text-5xl font-black uppercase text-white tracking-tight">RigCompass AI</h2>
          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            Hardware is a commodity. Intelligence is the moat.
            <br /><br />
            Our <span className="text-[#D4AF37] font-bold">RigCompass Controller</span> uses computer vision and weather APIs to actively track the sun and manage battery health, delivering <span className="text-white font-bold">+45% more yield</span> than fixed panels.
          </p>
        </div>
        <div className="flex-1 w-full">
          <LineChart />
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <p className="text-3xl font-black text-[#D4AF37]">+45%</p>
              <p className="text-[10px] items-center justify-center font-bold text-slate-500 uppercase">Energy Yield</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
              <p className="text-3xl font-black text-[#208080]">-30%</p>
              <p className="text-[10px] items-center justify-center font-bold text-slate-500 uppercase">LCOE vs Diesel</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARKET SIZE - BUBBLES */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 text-center">
        <h2 className="text-5xl font-black uppercase text-white tracking-tight mb-12">The <span className="text-[#208080]">$30 Billion</span> Gap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MarketBubbles />
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-200 uppercase">TAM: $30B+</h3>
              <p className="text-slate-500 font-medium">Global Off-Grid & Disaster Recovery. Replacing 50GW of Diesel Generators.</p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#208080] uppercase">SAM: $5B</h3>
              <p className="text-slate-500 font-medium">US-based Industrial, Construction, and High-End Residential Resilience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#D4AF37] uppercase">SOM: $55M</h3>
              <p className="text-slate-500 font-medium">Our 5-Year Execution Target. Focusing on California, Texas, and Florida markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS MODEL - UNIT ECONOMICS */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-5xl font-black uppercase text-white tracking-tight mb-16 text-center">Money Machine</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><TrendingUp size={100} /></div>
            <h3 className="text-xl font-black uppercase text-white mb-2">Hardware Sales</h3>
            <p className="text-4xl font-black text-white mb-4">$150k <span className="text-sm text-slate-500 align-middle">/ unit</span></p>
            <p className="text-sm font-bold text-[#208080] uppercase tracking-widest mb-6">30% Gross Margin</p>
            <ul className="space-y-2 text-slate-400 text-sm font-medium">
              <li>• Direct B2B Sales</li>
              <li>• Construction Firms</li>
              <li>• Gov/Defense Contracts</li>
            </ul>
          </div>
          <div className="p-8 bg-[#208080] border border-[#208080] rounded-3xl text-white relative shadow-2xl scale-105 z-10">
            <h3 className="text-xl font-black uppercase mb-2">Power-as-a-Service</h3>
            <p className="text-4xl font-black mb-4">$4k <span className="text-sm text-white/70 align-middle">/ month</span></p>
            <p className="text-sm font-bold text-black/50 uppercase tracking-widest mb-6">Recurring Revenue</p>
            <ul className="space-y-2 text-white/90 text-sm font-medium">
              <li>• 36-Month Contracts</li>
              <li>• Zero CapEx for Client</li>
              <li>• Includes Maintenance</li>
            </ul>
          </div>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><Users size={100} /></div>
            <h3 className="text-xl font-black uppercase text-white mb-2">JV Financing</h3>
            <p className="text-4xl font-black text-white mb-4">15% <span className="text-sm text-slate-500 align-middle">Rev Share</span></p>
            <p className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6">The "JV Bridge"</p>
            <ul className="space-y-2 text-slate-400 text-sm font-medium">
              <li>• Partner-funded Inventory</li>
              <li>• Tax Credit Pass-through</li>
              <li>• Rapid Fleet Expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. COMPETITION - MATRIX */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-5xl font-black uppercase text-white tracking-tight mb-16 text-center">Why We Win</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-6 text-slate-500 uppercase text-xs font-black tracking-widest">Feature</th>
                <th className="p-6 text-[#D4AF37] uppercase text-sm font-black tracking-widest bg-[#D4AF37]/5 rounded-t-xl border-t border-x border-[#D4AF37]/20">SolRigs</th>
                <th className="p-6 text-slate-500 uppercase text-xs font-black tracking-widest">Diesel Gen</th>
                <th className="p-6 text-slate-500 uppercase text-xs font-black tracking-widest">Rooftop Solar</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-medium">
              <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-6 font-bold text-white">Deployment Time</td>
                <td className="p-6 font-black text-[#208080] bg-[#D4AF37]/5 border-x border-[#D4AF37]/20">4 Weeks</td>
                <td className="p-6">1 Week</td>
                <td className="p-6 text-rose-500">6-12 Months</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-6 font-bold text-white">Fuel Cost</td>
                <td className="p-6 font-black text-[#208080] bg-[#D4AF37]/5 border-x border-[#D4AF37]/20">$0 / kWh</td>
                <td className="p-6 text-rose-500">$0.80 / kWh</td>
                <td className="p-6">$0 / kWh</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-6 font-bold text-white">Permitting</td>
                <td className="p-6 font-black text-[#208080] bg-[#D4AF37]/5 border-x border-[#D4AF37]/20">None (Mobile)</td>
                <td className="p-6">Minimal</td>
                <td className="p-6 text-rose-500">Heavy Grid App</td>
              </tr>
              <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-6 font-bold text-white">Emissions</td>
                <td className="p-6 font-black text-[#208080] bg-[#D4AF37]/5 border-x border-[#D4AF37]/20">Zero</td>
                <td className="p-6 text-rose-500">Available (Dirty)</td>
                <td className="p-6">Zero</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. ROADMAP */}
      <section className="min-h-screen max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-5xl font-black uppercase text-white tracking-tight mb-16 text-center">Path to $55M</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:bg-[#208080] group-[.is-active]:text-white group-[.is-active]:shadow-[0_0_20px_#208080] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <CheckCircle2 size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-800 rounded-3xl">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-black text-slate-500 text-xs uppercase tracking-widest">Q3 2024</div>
              </div>
              <div className="text-white font-bold text-xl mb-2">Prototype & IP</div>
              <div className="text-slate-400 text-sm">Completed functional SolStation V1. Filed provisional patents for RigCompass AI tracking logic.</div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:bg-[#D4AF37] group-[.is-active]:text-black group-[.is-active]:shadow-[0_0_20px_#D4AF37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <Activity size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-800 rounded-3xl border-t-[#D4AF37]/50">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-black text-[#D4AF37] text-xs uppercase tracking-widest">Current Status</div>
              </div>
              <div className="text-white font-bold text-xl mb-2">Pre-Seed Launch</div>
              <div className="text-slate-400 text-sm">Raising $30k for initial inventory and NABCEP certification. Establishing 506(b) Private Network.</div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <Rocket size={20} className="text-slate-600" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900/50 border border-slate-800 rounded-3xl grayscale opacity-70">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-black text-slate-600 text-xs uppercase tracking-widest">Q2 2025</div>
              </div>
              <div className="text-white font-bold text-xl mb-2">Market Expansion</div>
              <div className="text-slate-400 text-sm">Deploying first 10 commercial units to Texas Oil & Gas partners. Reaching $1.5M ARR run rate.</div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. THE ASK / CALL TO ACTION */}
      <section id="ask" className="min-h-screen max-w-4xl mx-auto px-6 py-20 border-t border-slate-900 flex flex-col justify-center text-center">
        <div className="p-10 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-[50px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
          <h2 className="text-6xl font-black uppercase text-white tracking-tight mb-8">Join The Round</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            We are raising a <span className="text-[#D4AF37] font-bold">$30,000 Pre-Seed</span> to operationalize standard manufacturing.
            <br />Revenue Participation Units (RPUs) available for accredited investors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
              <p className="text-xs font-black text-slate-500 uppercase">Valuation Cap</p>
              <p className="text-3xl font-black text-white">$2.5M</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
              <p className="text-xs font-black text-slate-500 uppercase">Min Check</p>
              <p className="text-3xl font-black text-white">$5,000</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button onClick={() => alert("Secure Data Room Access Request Sent.")} className="px-12 py-5 bg-[#D4AF37] hover:bg-[#b08d26] text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3">
              <Target size={20} /> Request Data Room
            </button>
            <button onClick={() => window.location.href = 'mailto:ir@solrigs.com'} className="px-12 py-5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3">
              Contact Michael Tran
            </button>
          </div>

          <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">506(b) Offering | Accredited Investors Only</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PitchDeck;
