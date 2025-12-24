import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
    const handleSocialClick = (platform: string) => {
        alert(`Redirecting to SolRigs ${platform}...`);
    };

    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 px-6 mt-20 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/nano_banana_portal_bg.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="/solrigs_nano_logo.png"
                            alt="SolRigs Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                                Sol<span className="text-[#208080]">Rigs</span>
                            </h4>
                            <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em]">Inc.</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-widest max-w-xs">
                        Infrastructure of Independence. <br />
                        Modular. Resilient. 55M Scale.
                    </p>
                </div>

                <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#208080] mb-8">Platform</h5>
                    <ul className="space-y-4 text-xs font-bold text-slate-400">
                        <li><NavLink to="/scout-rigs" className="hover:text-white transition-colors uppercase tracking-widest">SolStation</NavLink></li>
                        <li><NavLink to="/scout-rigs" className="hover:text-white transition-colors uppercase tracking-widest">SolSentry</NavLink></li>
                        <li><NavLink to="/dashboard" className="hover:text-white transition-colors uppercase tracking-widest">RigCompass AI</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37] mb-8">Mission</h5>
                    <ul className="space-y-4 text-xs font-bold text-slate-400">
                        <li><NavLink to="/snowdrop55" className="hover:text-white transition-colors uppercase tracking-widest">Snowdrop 55</NavLink></li>
                        <li><NavLink to="/pitch-deck" className="hover:text-white transition-colors uppercase tracking-widest">Investor Deck</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white transition-colors uppercase tracking-widest">Founder Story</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-8">Connect</h5>
                    <div className="flex gap-4 text-slate-500 mb-6">
                        <Linkedin size={20} className="hover:text-[#208080] transition-colors cursor-pointer" onClick={() => handleSocialClick('LinkedIn')} />
                        <Twitter size={20} className="hover:text-[#208080] transition-colors cursor-pointer" onClick={() => handleSocialClick('Twitter')} />
                        <Youtube size={20} className="hover:text-[#D4AF37] transition-colors cursor-pointer" onClick={() => handleSocialClick('YouTube')} />
                        <MessageSquare size={20} className="hover:text-[#D4AF37] transition-colors cursor-pointer" onClick={() => handleSocialClick('Contact')} />
                    </div>
                    <a href="mailto:hello@solrigs.com" className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
                        hello@solrigs.com
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">
                    © 2025 SolRigs Inc. | Scout Rig Master Plan
                </p>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#208080]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
