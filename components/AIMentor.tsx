
import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Bot, User, Loader2, Mic, MicOff, Zap, BrainCircuit, 
  Target, AlertTriangle, ChevronRight, Activity, Volume2, Save,
  History, Settings, Eye
} from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { userMemoryService } from '../services/userMemoryService';
import { Message } from '../types';

const AIMentor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Strategic Mentor online. Persistent memory active. Tracking toward $55M North Star.\n\n[OPTIONS]\nAudit Milestone 1 Status\nOptimize for $55M Scale\nCheck for Tangents" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [options, setOptions] = useState<string[]>(["Audit Milestone 1 Status", "Optimize for $55M Scale", "Check for Tangents"]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (forcedText?: string) => {
    const textToSend = forcedText || input.trim();
    if (!textToSend || isLoading) return;

    setInput('');
    setOptions([]);
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getGeminiResponse(textToSend, history);
    
    let cleanText = aiResponse || "Strategic link interrupted.";
    let parsedOptions: string[] = [];
    
    // Parse Options
    if (cleanText.includes('[OPTIONS]')) {
      const parts = cleanText.split('[OPTIONS]');
      cleanText = parts[0].trim();
      parsedOptions = parts[1].trim().split('\n').filter(o => o.trim() !== '').map(o => o.replace(/^\d+\.\s*/, '').trim());
    }

    // Parse Learnings
    if (cleanText.includes('LEARNING LOGGED:')) {
      const learningMatch = cleanText.match(/LEARNING LOGGED: (.*?)(?:\n|$)/);
      if (learningMatch) {
        userMemoryService.addLearning(learningMatch[1].trim());
      }
    }

    // Parse Observations
    if (cleanText.includes('STRATEGIC OBSERVATION:')) {
      const obsMatch = cleanText.match(/STRATEGIC OBSERVATION: (.*?)(?:\n|$)/);
      if (obsMatch) {
        userMemoryService.addStrategicObservation(obsMatch[1].trim());
      }
    }

    // Parse Tangents
    if (cleanText.includes('⚠️ TANGENT ALERT')) {
      const tangentMatch = cleanText.match(/⚠️ TANGENT ALERT: (.*?)(?:\n|$)/);
      if (tangentMatch) {
        userMemoryService.addTangentWarning(tangentMatch[1].trim());
      }
    }

    setMessages(prev => [...prev, { role: 'model', text: cleanText }]);
    setOptions(parsedOptions);
    setIsLoading(false);
  };

  const toggleVoice = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (!SpeechRecognition) {
        alert("Voice recognition requires Chrome.");
        return;
      }
      
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.onstart = () => setIsListening(true);
      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleSend(transcript);
      };
      recognitionRef.current.start();
    }
  };

  const context = userMemoryService.getContext();

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto pb-4 px-2 md:px-0 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row items-center justify-between mb-6 pt-4 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 rotate-1 border border-blue-400/30">
            <Target className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">Strategy Mentor</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest border border-emerald-500/20">
                <BrainCircuit size={10} /> Align: {context.metrics.alignmentScore}%
              </span>
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <Save size={10} /> Persistent Memory: Active
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
           <button 
             onClick={() => handleSend("Audit stored learnings and observations")} 
             className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-all font-bold text-xs uppercase tracking-widest active:scale-95"
           >
             <History size={16} /> History
           </button>
           <button 
             onClick={() => handleSend("Current Strategic Observations")} 
             className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-all font-bold text-xs uppercase tracking-widest active:scale-95"
           >
             <Eye size={16} /> Insights
           </button>
           <button 
             onClick={() => handleSend("Optimization: $55M Revenue Path")} 
             className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl hover:bg-yellow-500/20 transition-all font-black text-xs uppercase tracking-widest shadow-lg"
           >
             <Zap size={16} /> Optimize
           </button>
        </div>
      </header>

      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative border-t-blue-500/30">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-20">
          <div 
            className={`h-full transition-all duration-1000 ${context.metrics.alignmentScore > 80 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]'}`} 
            style={{ width: `${context.metrics.alignmentScore}%` }}
          />
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-800"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 border ${
                  m.role === 'user' ? 'bg-slate-800 border-slate-700' : 'bg-blue-600 border-blue-400/30'
                }`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`px-5 py-3 rounded-2xl text-sm leading-relaxed border shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white border-blue-500 rounded-tr-none' 
                    : m.text.includes('⚠️') 
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-100 rounded-tl-none ring-1 ring-rose-500/20'
                      : 'bg-slate-800 border-slate-700 text-slate-100 rounded-tl-none'
                }`}>
                  {m.text.split('\n').map((line, j) => (
                    <p key={j} className={j > 0 ? 'mt-2' : ''}>
                      {line.includes('⚠️') && <AlertTriangle size={14} className="inline mr-2 text-rose-500 animate-pulse" />}
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="px-5 py-3 bg-slate-800 border border-slate-700 rounded-2xl flex items-center gap-3 ml-11">
                <Loader2 className="animate-spin text-blue-400" size={16} />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Scanning Memory...</span>
              </div>
            </div>
          )}
        </div>

        {!isLoading && options.length > 0 && (
          <div className="px-6 py-4 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom duration-300 bg-slate-900/50 border-t border-slate-800/50">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(option)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-blue-400 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95"
              >
                {option} <ChevronRight size={12} />
              </button>
            ))}
          </div>
        )}

        <div className="p-4 md:p-6 bg-slate-800/50 border-t border-slate-800 backdrop-blur-sm">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-3"
          >
            <button 
              type="button"
              onClick={toggleVoice}
              className={`p-4 rounded-2xl transition-all shadow-lg flex items-center justify-center ${
                isListening 
                  ? 'bg-rose-600 text-white animate-pulse shadow-rose-500/40' 
                  : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {isListening ? <Volume2 size={24} /> : <Mic size={24} />}
            </button>
            <div className="relative flex-1">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isListening ? "Listening for strategy..." : "Strategic directive..."}
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
              />
              {isListening && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 items-center">
                  <div className="w-1 h-3 bg-rose-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-5 bg-rose-500 animate-bounce" style={{ animationDelay: '100ms' }} />
                  <div className="w-1 h-3 bg-rose-500 animate-bounce" style={{ animationDelay: '200ms' }} />
                </div>
              )}
            </div>
            <button 
              type="submit"
              disabled={isLoading || (!input.trim() && !isListening)}
              className="px-6 md:px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg transition-all active:scale-95"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;
