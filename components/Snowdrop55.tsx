
import React, { useState } from 'react';
import {
  Heart, Clock, Activity, MapPin, DollarSign, Users,
  QrCode, Calendar, Info
} from 'lucide-react';
import Footer from './Footer';

const Snowdrop55: React.FC = () => {
  const [miles, setMiles] = useState(0);
  const [raised, setRaised] = useState(12400);

  const openDonation = () => {
    window.open('https://donorbox.org/', '_blank');
  };

  const openLiveTracking = () => {
    alert("Opening Live GPS Tracking Overlay...");
  };

  const openTelegram = () => {
    alert("Redirecting to Michael's Mission Telegram Channel...");
  };

  return (
    <div className="min-h-screen bg-slate-950 animate-in fade-in duration-700">
      {/* Campaign Hero */}
      <section className="relative px-6 py-32 text-white overflow-hidden min-h-[80vh] flex items-center">
        {/* HERO BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/nano_banana_mission_hero.png')" }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

        <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12"><Heart size={400} /></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center w-full">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
              Live Race: Dec 30 • Michael Tran
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
              Snowdrop <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Mission 55</span>
            </h1>
            <p className="text-xl font-medium text-slate-200 max-w-xl shadow-black drop-shadow-md">
              Michael Tran: Running 55 hours straight through the Permian Basin to defeat childhood cancer.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={openDonation} className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all flex items-center gap-2">
                Donate Now <DollarSign size={18} />
              </button>
              <button onClick={openLiveTracking} className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs active:scale-95 transition-all flex items-center gap-2 hover:bg-white/20">
                Follow Michael Live <Activity size={18} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-96 bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] text-center shadow-2xl">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-2 text-slate-300">Fundraising Progress</h3>
            <p className="text-6xl font-black mb-1 text-white">${raised.toLocaleString()}</p>
            <p className="text-sm font-bold text-slate-400">Goal: $25,000</p>
            <div className="mt-8 h-3 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]" style={{ width: `${(raised / 25000) * 100}%` }}></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-slate-500">Supporters</p>
                <p className="text-xl font-black text-rose-400">124</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase text-slate-500">Impact Tier</p>
                <p className="text-xl font-black text-[#D4AF37]">Gold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16 pb-20">

        {/* The Live Tracker */}
        <section className="bg-slate-900 border border-slate-800 p-10 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5"><Activity size={200} /></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center md:text-left">
              <Clock className="text-rose-500 mb-4 mx-auto md:mx-0" size={32} />
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Running Time</p>
              <p className="text-4xl font-black text-white">00:00:00</p>
            </div>
            <div className="text-center md:text-left">
              <MapPin className="text-rose-500 mb-4 mx-auto md:mx-0" size={32} />
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Michael's Miles</p>
              <p className="text-4xl font-black text-white">{miles}</p>
            </div>
            <div className="text-center md:text-left">
              <Users className="text-rose-500 mb-4 mx-auto md:mx-0" size={32} />
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Live Supporters</p>
              <p className="text-4xl font-black text-white">22</p>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={openTelegram} className="w-full py-4 bg-slate-950 border border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                Michael's Telegram Live
              </button>
            </div>
          </div>
        </section>

        {/* The Story / Bigger Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">The Bigger Story</h2>
            <p className="text-slate-400 leading-relaxed font-medium">
              Michael: "This isn't just a physical test. It's the beginning of a 5-year journey.
              After 55 hours in the Permian, I head to a 10-day silent Vipassana retreat to sharpen my mind for the execution of SolRigs Inc."
            </p>
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[32px] space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500"><Calendar size={24} /></div>
                <div>
                  <p className="text-sm font-bold text-white">Mental Reset (Confirmed)</p>
                  <p className="text-xs text-slate-500">Jan 28 - Feb 8 • Michael Tran</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "Physical stamina builds the venture. Mental stillness sustains it." — Michael Tran
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px]">
              <div className="flex items-center gap-4 mb-6">
                <QrCode className="text-rose-500" size={32} />
                <h3 className="text-xl font-black uppercase tracking-tight text-white">The QR Strategy</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-medium">
                Michael is wearing a custom shirt with a 2" QR code during the entire Mission. Scan to join the solrigs.com journey. 80% goes to Snowdrop Foundation.
              </p>
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">T-Shirt Specs</p>
                <ul className="text-xs space-y-2 font-bold text-slate-300">
                  <li>• Front: Michael Tran x solrigs.com/snowdrop55</li>
                  <li>• Back: "Running for a reason. Energy Independence."</li>
                  <li>• Real-time RigCompass data integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center text-white">Campaign FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Why 55 hours?", a: "Michael chose 55 to symbolize the 5-year journey to a $55M exit and the region's 55-mile distance markers." },
              { q: "Where does the money go?", a: "80% to Snowdrop Foundation (Cancer Research), 20% to SolRigs Inc. Mission Operations." },
              { q: "Who is Michael Tran?", a: "Founder of SolRigs Inc., a veteran AI systems architect now pioneering modular solar infrastructure." },
              { q: "How can I follow Michael?", a: "Telegram for data, solrigs.com/snowdrop55 for the live mission dashboard." }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-rose-500/30 transition-all">
                <h4 className="font-bold text-slate-100 mb-2 flex items-center gap-2">
                  <Info size={14} className="text-rose-500" /> {faq.q}
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Snowdrop55;
