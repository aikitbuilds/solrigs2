
import React, { useState } from 'react';
import { ShoppingBag, Target, TrendingUp, Sun, Truck, ShieldCheck, DollarSign, Box, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';
import { firebaseService, LeadRole } from '../services/firebaseService';
import Footer from './Footer';

const Presales: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Customer' as LeadRole,
    kW_needed: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await firebaseService.submitLead(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500 pb-0 px-4 md:px-0 pt-6 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative py-12 rounded-[2rem] overflow-hidden px-8">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/nano_banana_contact_hero.png')" }}></div>
        <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4">
            <ShoppingBag size={12} /> SolDashboard | Priority Queue
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter text-white">
            SolRigs Presales <DollarSign className="text-emerald-500" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">Tracking toward $4.75M Annual Target (solrigs.com)</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] relative overflow-hidden border-t-yellow-500/30">
            <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-3 text-white">
              <ShieldCheck className="text-yellow-500" /> Production Queue
            </h2>
            <p className="text-slate-400 mb-8 font-medium">Q1 2026 deployment slots are filling. 3 of 5 Industrial units reserved.</p>

            <div className="space-y-6">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#208080]/20 flex items-center justify-center text-[#208080] font-black text-xs">01</div>
                <div>
                  <p className="text-sm font-bold">SolStation 300 (Active)</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Permian Pilot Alpha</p>
                </div>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black text-xs">02</div>
                <div>
                  <p className="text-sm font-bold">SolSentry Resilience Pack</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Batch 1 • 175 Units Target</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* LEAD CAPTURE FORM */}
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-[48px] shadow-2xl relative">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-black uppercase text-white mb-8">Secure Your Slot</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-sm focus:border-[#208080] outline-none transition-all"
                    placeholder="Michael Tran"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-sm focus:border-[#208080] outline-none transition-all"
                    placeholder="hello@solrigs.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mission Interest</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Customer', 'Investor', 'Partner'] as LeadRole[]).map(role => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({ ...formData, role })}
                      className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${formData.role === role
                        ? 'bg-[#208080] border-[#208080] text-white shadow-lg'
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Capacity Needed (kW)</label>
                <input
                  type="text"
                  value={formData.kW_needed}
                  onChange={(e) => setFormData({ ...formData, kW_needed: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-sm focus:border-[#208080] outline-none transition-all"
                  placeholder="e.g. 100kW or 'Household'"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Strategic Objective</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-sm focus:border-[#208080] outline-none transition-all"
                  placeholder="Tell us about your mission..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-[#D4AF37] hover:bg-[#b8972e] text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all flex items-center justify-center gap-3"
              >
                Submit Briefing <Send size={16} />
              </button>
            </form>
          ) : (
            <div className="py-20 text-center space-y-6 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-black mx-auto shadow-2xl">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-black uppercase text-white">Briefing Received.</h3>
              <p className="text-slate-400 font-medium max-w-sm mx-auto">
                Thank you, {formData.name.split(' ')[0]}. Our team will audit your objective and follow up via {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-black text-[#208080] uppercase tracking-widest hover:underline"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Presales;
