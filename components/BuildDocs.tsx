
import React from 'react';
import { 
  CheckCircle2, Circle, FileText, Book, Code, 
  GitBranch, Terminal, Shield, Database, Server, Image as ImageIcon, Folder, ExternalLink
} from 'lucide-react';

const BuildDocs: React.FC = () => {
  const stages = [
    { id: 1, name: 'AI Mentor System', status: 'Complete', date: 'Oct 2024' },
    { id: 2, name: 'SolRigs Branding', status: 'Complete', date: 'Nov 2024' },
    { id: 3, name: 'solrigs.com Architecture', status: 'Complete', date: 'Dec 2024' },
    { id: 4, name: 'V2.0 Master Initialization', status: 'Complete', date: 'Dec 2024' },
    { id: 5, name: 'Race Week Strategy', status: 'Complete', date: 'Dec 30 2024' },
    { id: 6, name: 'Post-Race Plan', status: 'Complete', date: 'Jan 2025' },
    { id: 10, name: 'Visual Integration', status: 'Complete', date: 'Jan 2025' },
    { id: 11, name: 'Infrastructure & Deploy', status: 'Complete', date: 'Feb 2025' },
  ];

  const currentStage = 11;

  const docs = [
    { title: 'System Architecture', icon: Server, desc: 'V2.0 Component Diagram & Data Flow' },
    { title: 'API Reference', icon: Terminal, desc: 'Gemini 2.0 Flash & Firebase Endpoints' },
    { title: 'Security Protocols', icon: Shield, desc: 'Role-based Access & Encryption Standards' },
    { title: 'Database Schema', icon: Database, desc: 'Firestore Collections & Indexing Rules' },
  ];

  const expectedAssets = [
    { name: 'mainlogo1.png', path: '/public/mainlogo1.png', status: 'Required', desc: 'Main navigation and footer logo (Transparent PNG).' },
    { name: 'hero-solar.jpg', path: '/public/hero-solar.jpg', status: 'Optional', desc: 'Replaces Unsplash background in Home.tsx' },
    { name: 'solstation-100.jpg', path: '/public/solstation-100.jpg', status: 'Optional', desc: 'Replaces product placeholder in ScoutRigs.tsx' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right duration-500 pb-20 px-4 md:px-0 pt-6 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <GitBranch size={12} /> Version Control: v2.1.0
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter text-white">
            Build & Docs <FileText className="text-indigo-500" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">System Roadmap & Technical Documentation</p>
        </div>
        <div className="flex gap-3">
          <a 
            href="https://solrigs-inc-master-ecosystem-503400095484.us-west1.run.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center gap-2"
          >
            Open Live App <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Progress Tracker */}
        <div className="space-y-8">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] relative overflow-hidden">
             <h2 className="text-2xl font-black mb-8 uppercase tracking-tight text-white flex items-center gap-3">
               <Code className="text-emerald-500" /> RigBuild Progress
             </h2>
             <div className="space-y-4 relative">
               {/* Vertical Line */}
               <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800 z-0"></div>
               
               {stages.map((stage) => (
                 <div key={stage.id} className="relative z-10 flex items-center gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-2xl transition-all hover:border-slate-700">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      stage.id <= currentStage ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-600'
                    }`}>
                      {stage.id <= currentStage ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                    </div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                         <span className={`font-bold text-sm ${stage.id <= currentStage ? 'text-white' : 'text-slate-500'}`}>
                           Stage {stage.id}: {stage.name}
                         </span>
                         <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{stage.date}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full ${stage.id <= currentStage ? 'bg-emerald-500' : 'bg-transparent'}`} style={{ width: stage.id <= currentStage ? '100%' : '0%' }}></div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Documentation Hub */}
        <div className="space-y-6">
           {/* Tech Specs */}
           <div className="grid grid-cols-1 gap-4">
              {docs.map((doc, i) => (
                <div key={i} className="group p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:border-indigo-500/30 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                        <doc.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors">{doc.title}</h3>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{doc.desc}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Asset Manifest */}
           <div className="p-8 bg-slate-900 border border-slate-800 rounded-[40px] mt-8">
             <div className="flex items-center gap-3 mb-6">
               <ImageIcon className="text-yellow-500" />
               <h3 className="text-lg font-black uppercase text-white tracking-tight">Static Asset Manifest</h3>
             </div>
             
             <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl mb-6">
               <p className="text-xs text-yellow-500 font-bold flex gap-2">
                 <Folder size={14} /> 
                 Upload images to the <span className="underline">/public</span> folder in your project root.
               </p>
             </div>

             <div className="space-y-3">
               {expectedAssets.map((asset, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black uppercase ${asset.status === 'Required' ? 'bg-rose-500/10 text-rose-500' : 'bg-slate-800 text-slate-500'}`}>
                      {asset.status === 'Required' ? 'REQ' : 'OPT'}
                    </div>
                    <div>
                      <p className="font-bold text-slate-200 text-sm font-mono">{asset.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{asset.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="p-8 bg-slate-900 border border-slate-800 rounded-[40px] mt-8 border-dashed">
             <h3 className="text-sm font-black uppercase text-slate-500 mb-4">Deployment Environment</h3>
             <div className="space-y-3 font-mono text-xs text-slate-400">
               <div className="flex justify-between">
                 <span>Runtime</span>
                 <span className="text-white">React 19 + Vite</span>
               </div>
               <div className="flex justify-between">
                 <span>Hosting Platform</span>
                 <span className="text-white">Google Cloud Run (us-west1)</span>
               </div>
               <div className="flex justify-between">
                 <span>Live URL</span>
                 <a href="https://solrigs-inc-master-ecosystem-503400095484.us-west1.run.app/" target="_blank" className="text-indigo-400 hover:text-white truncate max-w-[200px]">solrigs-inc...run.app</a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDocs;
