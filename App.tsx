
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Sun, Activity, MessageSquare, CheckSquare, Menu, X,
  Presentation, Youtube, User, ShoppingBag, Home as HomeIcon, FileText,
  Zap, LogIn
} from 'lucide-react';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ScoutRigs from './components/ScoutRigs';
import Snowdrop55 from './components/Snowdrop55';
import SnowdropHub from './components/SnowdropHub';
import AIMentor from './components/AIMentor';
import ExecutionChecklist from './components/ExecutionChecklist';
import PitchDeck from './components/PitchDeck';
import About from './components/About';
import YouTubeContent from './components/YouTubeContent';
import Presales from './components/Presales';
import BuildDocs from './components/BuildDocs';
import UseCases from './components/UseCases';

const PublicNavbar: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* LOGO UPDATE: Pointing directly to the public folder */}
          <img
            src="public/mainlogo1.png"
            alt="SolRigs"
            className="h-14 w-auto object-contain bg-white/10 rounded-lg p-1 backdrop-blur-sm border border-white/5"
            onError={(e) => {
              // Fallback just in case user placed it in the root or public folder
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('public/')) { // Prevent infinite loop if logic fails
                target.src = '/mainlogo1.png'; // Try root relative
              } else {
                target.style.display = 'none'; // Hide if completely broken
              }
            }}
          />
          <span className="hidden md:block text-2xl font-black text-white tracking-widest uppercase">SolRigs Inc.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Products', path: '/scout-rigs' },
            { name: 'Mission', path: '/snowdrop55' },
            { name: 'Invest', path: '/pitch-deck' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/presales' }
          ].map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `text-xs font-black uppercase tracking-widest transition-colors ${isActive ? 'text-[#208080]' : 'text-slate-400 hover:text-white'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={onLogin}
            className="px-6 py-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-full text-xs font-black uppercase tracking-widest text-white transition-all flex items-center gap-2"
          >
            Portal Login <LogIn size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4">
          {[
            { name: 'Products', path: '/scout-rigs' },
            { name: 'Mission', path: '/snowdrop55' },
            { name: 'Invest', path: '/pitch-deck' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/presales' }
          ].map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-black uppercase tracking-widest text-slate-400 hover:text-white"
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => { onLogin(); setIsOpen(false); }}
            className="w-full py-3 bg-[#208080] rounded-xl text-xs font-black uppercase tracking-widest text-white"
          >
            Portal Login
          </button>
        </div>
      )}
    </nav>
  );
};

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  // Portal Navigation Items
  const sidebarNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'RigBuild AI', path: '/ai-mentor', icon: MessageSquare },
    { name: 'Execution', path: '/execution', icon: CheckSquare },
    { name: 'Build Docs', path: '/build-docs', icon: FileText },
    { name: 'Snowdrop Hub', path: '/snowdrop', icon: Activity },
    { name: 'SolRigs Products', path: '/scout-rigs', icon: Sun }, // Accessible in portal too
    { name: 'Pitch Deck', path: '/pitch-deck', icon: Presentation },
  ];

  if (!isAuthenticated) {
    return (
      <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-rose-500/30 pt-20">
        <PublicNavbar onLogin={handleLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scout-rigs" element={<ScoutRigs />} />
          <Route path="/snowdrop55" element={<Snowdrop55 />} />
          <Route path="/pitch-deck" element={<PitchDeck />} />
          <Route path="/about" element={<About />} />
          <Route path="/presales" element={<Presales />} />
          <Route path="/youtube" element={<YouTubeContent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-md shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 border-r border-slate-800 transition-transform duration-300 lg:relative lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="mb-8">
              {/* LOGO UPDATE: Pointing directly to the public folder */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="public/mainlogo1.png"
                  alt="SolRigs"
                  className="h-14 w-auto object-contain bg-white/10 rounded-lg p-1"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('public/')) {
                      target.src = '/mainlogo1.png';
                    }
                  }}
                />
                <span className="text-xl font-black text-white tracking-widest uppercase">SolRigs</span>
              </div>
              <p className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase pl-1">Portal Access</p>
            </div>

            <nav className="space-y-1 mb-8 overflow-y-auto max-h-[60vh] scrollbar-none">
              {sidebarNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'bg-[#208080]/10 text-[#208080] border border-[#208080]/20 shadow-[0_0_10px_rgba(32,128,128,0.1)]'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}
                  `}
                >
                  <item.icon size={18} />
                  <span className="font-medium text-sm">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-6 space-y-4">
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest transition-all"
            >
              Log Out
            </button>
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase text-slate-400">Master Build</span>
                <span className="text-[10px] font-bold text-[#208080]">100%</span>
              </div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#208080]" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-950 scrollbar-thin scrollbar-thumb-slate-800">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-mentor" element={<AIMentor />} />
          <Route path="/execution" element={<ExecutionChecklist />} />
          <Route path="/build-docs" element={<BuildDocs />} />
          <Route path="/snowdrop" element={<SnowdropHub />} />
          <Route path="/scout-rigs" element={<ScoutRigs />} />
          <Route path="/snowdrop55" element={<Snowdrop55 />} />
          <Route path="/pitch-deck" element={<PitchDeck />} />
          <Route path="/presales" element={<Presales />} />
          <Route path="/about" element={<About />} />
          <Route path="/youtube" element={<YouTubeContent />} />
          <Route path="/use-cases" element={<UseCases />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
