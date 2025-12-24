
import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, Lock, ChevronRight, Target, Zap, Rocket, 
  ShieldCheck, Book, Scale, DollarSign, Clock, Activity, Heart, 
  Eye, Coffee, Wind, Filter, AlertTriangle 
} from 'lucide-react';
import { userMemoryService } from '../services/userMemoryService';

interface Task {
  id: string;
  title: string;
  milestoneId: string;
  completed: boolean;
  priority: boolean;
  category: 'legal' | 'edu' | 'ops' | 'build' | 'finance' | 'race' | 'recovery';
}

const ExecutionChecklist: React.FC = () => {
  const context = userMemoryService.getContext();
  const [filterPriority, setFilterPriority] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    // Milestone 1: Phase 1 Foundation
    { id: 'f1', title: 'Enroll Michael in Everblue/SEI NABCEP Course', milestoneId: 'm1', completed: true, priority: true, category: 'edu' },
    { id: 'f2', title: 'File SolRigs Inc. Texas LLC (solrigs.com)', milestoneId: 'm1', completed: true, priority: true, category: 'legal' },
    { id: 'f3', title: 'Draft SolRigs JV Professional Services Term Sheet', milestoneId: 'm1', completed: true, priority: true, category: 'legal' },
    { id: 'f4', title: 'Initialize RigBuild AI Digital COO Agent', milestoneId: 'm1', completed: true, priority: false, category: 'ops' },
    
    // Milestone 2: Phase 2 MVP Build
    { id: 'b1', title: 'Acquire SolStation 100 Utility Trailer Chassis', milestoneId: 'm2', completed: false, priority: true, category: 'build' },
    { id: 'b2', title: 'Source Grade-B SolStation Solar Panels', milestoneId: 'm2', completed: false, priority: false, category: 'build' },
    { id: 'b3', title: 'Finalize RigCompass AI ESP32 tracking logic', milestoneId: 'm2', completed: false, priority: true, category: 'build' },
    { id: 'b4', title: 'Install Redundant GPS (Sentry Security Pack)', milestoneId: 'm2', completed: false, priority: false, category: 'build' },

    // Milestone 3: Phase 3 Closed Loop Raise
    { id: 'r1', title: 'Package SolStation V1 data for Investor Deck', milestoneId: 'm3', completed: false, priority: true, category: 'finance' },
    { id: 'r2', title: 'Sign SolStation LOI with Permian Operator', milestoneId: 'm3', completed: false, priority: true, category: 'finance' },
    { id: 'r3', title: 'Close $30k Round (SolRigs Private Network)', milestoneId: 'm3', completed: false, priority: true, category: 'finance' },
    { id: 'r4', title: 'Allocate 26.7% ($8k) to BTC Treasury Hedge', milestoneId: 'm3', completed: false, priority: false, category: 'finance' },

    // Milestone 5: Race Week Checklist (Dec 30 - Jan 1) - COMPLETED
    { id: 'rw1', title: 'Hourly Bio-Check: Hydration & Core Temp (Michael)', milestoneId: 'm5', completed: true, priority: true, category: 'race' },
    { id: 'rw2', title: 'RigCompass Telemetry Sync (Every 4 Hours)', milestoneId: 'm5', completed: true, priority: true, category: 'race' },
    { id: 'rw3', title: 'Social Proof: Live Progress Documentation (Hourly)', milestoneId: 'm5', completed: true, priority: false, category: 'race' },
    { id: 'rw4', title: '27-Hour Mark: Mental Pivot & Full Gear Swap', milestoneId: 'm5', completed: true, priority: true, category: 'race' },
    { id: 'rw5', title: 'Mid-Race Resilience: SolSentry Campaign Blast', milestoneId: 'm5', completed: true, priority: true, category: 'race' },
    { id: 'rw6', title: '55-Hour Mark: Final Push & Mission Impact Call', milestoneId: 'm5', completed: true, priority: true, category: 'race' },
    { id: 'rw7', title: 'Post-Race: Initiate Recovery Protocol & Data Audit', milestoneId: 'm5', completed: true, priority: true, category: 'race' },

    // Milestone 6: Post-Race & Transition (Stage 6)
    { id: 'pr1', title: '72-Hour Deep Bio-Recovery (Nutrition/Sleep focus)', milestoneId: 'm6', completed: true, priority: true, category: 'recovery' },
    { id: 'pr2', title: 'Snowdrop Mission Data Audit (Financials + Telemetry)', milestoneId: 'm6', completed: false, priority: true, category: 'recovery' },
    { id: 'pr3', title: 'Final Edit & Launch: YouTube Ep 1 "Startup Patch"', milestoneId: 'm6', completed: false, priority: true, category: 'ops' },
    { id: 'pr4', title: 'Prepare Vipassana Logistics (Zero-Comms Window)', milestoneId: 'm6', completed: false, priority: true, category: 'ops' },
    { id: 'pr5', title: 'Refine Q1 SolStation Deployment Roadmap', milestoneId: 'm6', completed: false, priority: false, category: 'build' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'legal': return <Scale size={14} />;
      case 'edu': return <Book size={14} />;
      case 'ops': return <ShieldCheck size={14} />;
      case 'build': return <Zap size={14} />;
      case 'finance': return <DollarSign size={14} />;
      case 'race': return <Activity size={14} />;
      case 'recovery': return <Coffee size={14} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-24 animate-in fade-in slide-in-from-bottom duration-500 pt-6 px-4 md:px-0">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Rocket size={12} /> SolRigs V2.0 Master Plan
          </div>
          <h1 className="text-4xl font-black tracking-tight uppercase text-white">Execution Checklist</h1>
          <p className="text-slate-400 font-medium">Michael Tran: Stage 6 - Post-Race & Synthesis</p>
        </div>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setFilterPriority(!filterPriority)}
             className={`px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${filterPriority ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}`}
           >
             <Filter size={14} /> {filterPriority ? 'Urgent Only' : 'Filter Priority'}
           </button>
           <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
             <p className="text-[10px] font-black text-slate-500 uppercase">Phase</p>
             <p className="text-lg font-black text-emerald-500">Recovery</p>
           </div>
        </div>
      </header>

      <div className="space-y-12">
        {context.milestones.map((m, idx) => {
          const relevantTasks = tasks.filter(t => t.milestoneId === m.id && (!filterPriority || t.priority));
          
          if (filterPriority && relevantTasks.length === 0 && m.status !== 'active') return null;

          return (
            <div key={m.id} className={`${m.status === 'pending' ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-4">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                     m.status === 'complete' ? 'bg-emerald-500 text-black' : 
                     m.status === 'active' ? (m.id === 'm6' ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-blue-600 text-white shadow-blue-500/20') : 
                     'bg-slate-800 text-slate-500'
                   }`}>
                     {m.id === 'm6' ? <Wind size={24} /> : m.id === 'm5' ? <Activity size={24} /> : idx === 0 ? <Zap size={24} /> : idx === 1 ? <Target size={24} /> : idx === 2 ? <DollarSign size={24} /> : <Rocket size={24} />}
                   </div>
                   <div>
                     <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                       {m.name}
                     </h2>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                       {m.strategy}
                     </p>
                   </div>
                 </div>
                 {m.status === 'pending' && <Lock size={20} className="text-slate-600" />}
              </div>

              <div className="grid gap-3">
                {relevantTasks.length > 0 ? relevantTasks.map((task) => (
                  <div 
                    key={task.id}
                    onClick={() => m.status !== 'pending' && toggleTask(task.id)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                      m.status !== 'pending' ? 'cursor-pointer' : ''
                    } ${
                      task.completed 
                        ? 'bg-emerald-500/5 border-emerald-500/20' 
                        : (m.id === 'm6' ? 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40' : 'bg-slate-900 border-slate-800 hover:border-blue-500/30')
                    } ${task.priority && !task.completed ? 'border-l-4 border-l-rose-500' : ''}`}
                  >
                    <div className="flex-shrink-0">
                      {task.completed ? (
                        <CheckCircle2 className="text-emerald-500" size={24} />
                      ) : (
                        <Circle className="text-slate-600" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${task.category === 'recovery' ? 'text-orange-400' : task.category === 'race' ? 'text-rose-400' : 'text-slate-500'}`}>
                          {getCategoryIcon(task.category)} {task.category}
                        </span>
                        {task.priority && !task.completed && (
                           <span className="flex items-center gap-1 text-[10px] font-black text-rose-500 uppercase tracking-widest ml-2">
                             <AlertTriangle size={10} /> Urgent
                           </span>
                        )}
                      </div>
                      <span className={`font-bold text-sm ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                        {task.title}
                      </span>
                    </div>
                  </div>
                )) : (
                  <div className="p-4 border border-dashed border-slate-800 rounded-2xl text-center">
                    <p className="text-xs text-slate-500 font-medium">No urgent tasks pending in this milestone.</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExecutionChecklist;
