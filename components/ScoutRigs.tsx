
import React from 'react';
import {
  Sun, Rocket, Presentation, Bitcoin, Box, ShieldCheck, ArrowRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

// --- IMAGE CONFIGURATION ---
// TO USE CUSTOM IMAGES:
// 1. Place your image files in the 'public' folder of your project.
// 2. Change the URLs below to 'public/your-image-name.png'
const IMAGES = {
  // SolStation (Industrial)
  solStation300: '/Scout_Station_300__16kW_Enterprise_Off-Grid_Power_System.png',
  solStation200: '/Scout_Station_200__12kW_Standard_Modular_Power_System.png',
  solStation100: '/Scout_Station_100__8kW_Modular_Power_Station_on_Deployment_Trailer.png',

  // SolSentry (Resilience)
  solSentinelMain: '/Scout_Station_100_Deployment__Before_and_After_Case_Study.png',
  // Reusing generic or other specific shots where unique files aren't available yet
  solSentry5k: '/Scout_Station_100__8kW_Modular_Power_Station_on_Deployment_Trailer.png',
  solCitadel20k: '/Scout_Station_300__16kW_Enterprise_Off-Grid_Power_System.png',

  // Tech
  rigCompass: '/Scout_Compass_v2.4__AI_Sun_Tracking_Intelligence_System.png'
};

const ScoutRigs: React.FC = () => {
  const handleDownload = () => {
    alert("Downloading SolStation Technical Specifications (PDF)...");
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500 pb-20 px-4 md:px-0 pt-6 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#208080]/10 border border-[#208080]/20 text-[#208080] text-[10px] font-black uppercase tracking-widest mb-4">
            <Rocket size={12} /> The solrigs.com Architecture
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter text-white">
            SolRigs Products <Sun className="text-[#D4AF37]" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">Grid-Independent Power Systems | Industrial & Resilience Series</p>
        </div>
        <div className="flex gap-3">
          <a href="#specs" className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">View Specs</a>
          <NavLink to="/pitch-deck" className="px-6 py-3 bg-[#D4AF37] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center gap-2">
            <Presentation size={14} /> Briefing
          </NavLink>
        </div>
      </header>

      {/* Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Bitcoin size={60} /></div>
          <div className="text-[10px] font-black text-[#208080] uppercase tracking-widest mb-4">Capital Strategy</div>
          <h3 className="text-xl font-bold mb-2 text-white">506(b) Private Network</h3>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">Michael Tran: "Raising $30k via Revenue Participation Units with a 26.7% BTC treasury hedge."</p>
          <p className="text-xs font-black text-[#208080] uppercase tracking-widest">$8k BTC Treasury Goal</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-4 border-l border-[#D4AF37] pl-3">Legal Strategy</div>
          <h3 className="text-xl font-bold mb-2 text-white">The JV Bridge</h3>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">Bypassing $100k electrician overhead through 10-15% revenue-share agreements with JV partners.</p>
          <p className="text-xs font-black text-[#D4AF37] uppercase tracking-widest">Contract-First Compliance</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">Core Tech</div>
          <h3 className="text-xl font-bold mb-2 text-white">RigCompass AI</h3>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">Proprietary ESP32 sun-tracking controller. Proves 20-45% higher yields for institutional investors.</p>
          <p className="text-xs font-black text-rose-500 uppercase tracking-widest">Digital-First Power</p>
        </div>
      </div>

      {/* Product Lines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* SolStation Commercial */}
        <div className="bg-slate-900 border border-slate-800 rounded-[40px] relative group overflow-hidden border-t-[#208080]/30 shadow-2xl">
          <img src={IMAGES.solStation300} alt="SolStation 300" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="p-8">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3 text-white">
              <Box className="text-[#208080]" /> SolStation Series
            </h2>
            <p className="text-slate-400 mb-8 font-medium italic border-l-2 border-[#208080] pl-4">"Deploying modular solar arrays for industrial ops in 2-4 weeks. The answer to the grid capacity crisis."</p>
            <div className="space-y-4">
              {[
                { name: "SolStation 100", spec: "8kW Solar / 20kWh Storage", target: "Remote RV / Homestead", img: IMAGES.solStation100 },
                { name: "SolStation 200", spec: "12kW Solar / 30kWh Storage", target: "Commercial / Ag", img: IMAGES.solStation200 },
                { name: "SolStation 300", spec: "16kW Solar / 50kWh Storage", target: "Data Centers / Oil Ops", img: IMAGES.solStation300 }
              ].map((prod, i) => (
                <div key={i} className="group/item p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex justify-between items-center hover:border-[#208080]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <img src={prod.img} className="w-12 h-12 rounded-lg object-cover grayscale group-hover/item:grayscale-0 transition-all" alt={prod.name} />
                    <div>
                      <p className="font-black text-slate-100">{prod.name}</p>
                      <p className="text-[10px] font-black text-slate-500 uppercase mt-1">{prod.spec}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-[#208080] opacity-0 group-hover/item:opacity-100 transition-all" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SolSentry Resilience */}
        <div className="bg-slate-900 border border-slate-800 rounded-[40px] relative group overflow-hidden border-t-[#D4AF37]/30 shadow-2xl">
          <img src={IMAGES.solSentinelMain} alt="SolSentinel Unit" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="p-8">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3 text-white">
              <ShieldCheck className="text-[#D4AF37]" /> SolSentry Series
            </h2>
            <p className="text-slate-400 mb-8 font-medium italic border-l-2 border-[#D4AF37] pl-4">"Military-grade, EMP-hardened systems for resilience. Stealth capable for total OpSec independence."</p>
            <div className="space-y-4">
              {[
                { name: "SolSentry 5k", spec: "5kWh Portable System", target: "Tactical / Medical", img: IMAGES.solSentry5k },
                { name: "SolSentinel 10k", spec: "10kWh Distributed Storage", target: "Family Resilience", img: IMAGES.solSentinelMain },
                { name: "SolCitadel 20k", spec: "20kWh EMP-Shielded Vault", target: "Group Survival", img: IMAGES.solCitadel20k }
              ].map((prod, i) => (
                <div key={i} className="group/item p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex justify-between items-center hover:border-[#D4AF37]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <img src={prod.img} className="w-12 h-12 rounded-lg object-cover grayscale group-hover/item:grayscale-0 transition-all" alt={prod.name} />
                    <div>
                      <p className="font-black text-slate-100">{prod.name}</p>
                      <p className="text-[10px] font-black text-slate-500 uppercase mt-1">{prod.spec}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-[#D4AF37] opacity-0 group-hover/item:opacity-100 transition-all" size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: RigCompass Spotlight */}
      <section className="bg-[#208080]/5 border border-[#208080]/10 rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src={IMAGES.rigCompass} className="rounded-3xl shadow-xl border border-slate-700" alt="RigCompass Controller" />
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-black uppercase text-white">The Brain of SolRigs: RigCompass AI</h3>
          <p className="text-slate-400 font-medium leading-relaxed">
            Our proprietary AI controller doesn't just manage power; it hunts for photons. Integrating real-time weather data with active dual-axis tracking logic to ensure your SolStation is always outperforming the market.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <p className="text-2xl font-black text-[#208080]">+45%</p>
              <p className="text-xs font-black text-slate-500 uppercase">Yield Efficiency</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <p className="text-2xl font-black text-[#D4AF37]">2.4ms</p>
              <p className="text-[10px] font-black text-slate-500 uppercase">Dispatch Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Technical Specifications */}
      <section id="specs" className="py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-[40px] overflow-hidden p-8 md:p-12">
          <h3 className="text-3xl font-black uppercase text-white mb-10 flex items-center gap-3">
            <ShieldCheck className="text-[#208080]" /> Technical Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-widest">Model</th>
                  <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-widest">Solar (kW)</th>
                  <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-widest">Storage (kWh)</th>
                  <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-widest">Output</th>
                  <th className="p-4 text-xs font-black text-slate-500 uppercase tracking-widest">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 font-medium text-sm">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolStation 100</td>
                  <td className="p-4">8 kW</td>
                  <td className="p-4">20 kWh</td>
                  <td className="p-4">120V / 240V</td>
                  <td className="p-4 text-xs text-[#208080] uppercase tracking-wider font-bold">Mobile Trailer</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolStation 200</td>
                  <td className="p-4">12 kW</td>
                  <td className="p-4">30 kWh</td>
                  <td className="p-4">120V / 240V / 3-Phase</td>
                  <td className="p-4 text-xs text-[#208080] uppercase tracking-wider font-bold">Remote Ops</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolStation 300</td>
                  <td className="p-4">16 kW</td>
                  <td className="p-4">50 kWh</td>
                  <td className="p-4">480V 3-Phase</td>
                  <td className="p-4 text-xs text-[#208080] uppercase tracking-wider font-bold">Enterprise</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolSentry 5k</td>
                  <td className="p-4">2 kW</td>
                  <td className="p-4">5 kWh</td>
                  <td className="p-4">120V</td>
                  <td className="p-4 text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Man-Portable</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolSentinel 10k</td>
                  <td className="p-4">4 kW</td>
                  <td className="p-4">10 kWh</td>
                  <td className="p-4">120V / 240V</td>
                  <td className="p-4 text-xs text-[#D4AF37] uppercase tracking-wider font-bold">Home Resilience</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-bold text-white">SolCitadel 20k</td>
                  <td className="p-4">8 kW</td>
                  <td className="p-4">20 kWh</td>
                  <td className="p-4">Hardened</td>
                  <td className="p-4 text-xs text-[#D4AF37] uppercase tracking-wider font-bold">EMP Shielded</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="text-center pt-8 border-t border-slate-900">
        <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">solrigs.com | Energy Independence for Everyone | Michael Tran</p>
      </div>
    </div >
  );
};

export default ScoutRigs;
