
import React, { useState } from 'react';
import { Youtube, Play, FileText, Share2, Rocket, Zap, Heart, Video, Loader2, AlertTriangle, Download } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const YouTubeContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'script' | 'playlist' | 'veo'>('script');
  const [generatingId, setGeneratingId] = useState<number | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const episodes = [
    { ep: 1, title: "The $25k QR Strategy", focus: "Fundraising Growth Hacks" },
    { ep: 2, title: "The Silent 10 Days", focus: "Vipassana & Mental Performance" },
    { ep: 3, title: "Moving into the Rig", focus: "Life in the Permian Basin" },
    { ep: 4, title: "The First $250k Contract", focus: "Sales & Strategic Partnerships" }
  ];

  const handleGenerateVideo = async (epId: number, title: string, focus: string) => {
    try {
      // 1. Check/Request API Key
      // @ts-ignore - aistudio is injected by the environment
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        // Check again to avoid race condition assumptions, though usually we assume success
        // @ts-ignore
        const keySelected = await window.aistudio.hasSelectedApiKey();
        if (!keySelected) return;
      }

      setGeneratingId(epId);
      setGeneratedVideoUrl(null);
      setStatusMessage('Initializing Veo engine...');

      // 2. Initialize Client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // 3. Construct Prompt
      const prompt = `Cinematic 16:9 trailer for a YouTube documentary titled "${title}". 
      Visual style: Dark industrial tech, Permian basin desert landscape at sunset, 
      solar panels reflecting golden light, high contrast, 4k resolution. 
      Theme: ${focus}. No text.`;

      setStatusMessage('Dreaming up visuals (this takes ~60s)...');

      // 4. Start Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // 5. Polling Loop
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
        setStatusMessage('Rendering frames...');
      }

      // 6. Fetch Video
      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (videoUri) {
        setStatusMessage('Downloading stream...');
        const response = await fetch(`${videoUri}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGeneratedVideoUrl(url);
      } else {
        throw new Error("No video URI returned.");
      }

    } catch (error) {
      console.error(error);
      alert("Veo generation failed. Please ensure you selected a paid API key project.");
    } finally {
      setGeneratingId(null);
      setStatusMessage('');
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500 pb-24">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest mb-4">
            <Youtube size={12} /> Episode 1 Launch: Feb 1
          </div>
          <h1 className="text-4xl font-black uppercase flex items-center gap-4 tracking-tighter">
            Scout: Permian Startup <Play className="text-rose-500" />
          </h1>
          <p className="text-slate-400 mt-2 text-lg font-medium">Documenting the $50M Solar Journey in Real-Time</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20 active:scale-95 transition-all flex items-center gap-2">
            <Share2 size={14} /> Sub at @solrigs
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-900 border border-slate-800 rounded-2xl w-fit overflow-x-auto max-w-full">
        <button
          onClick={() => setActiveTab('script')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
            activeTab === 'script' ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText size={14} /> Ep 1 Script
        </button>
        <button
          onClick={() => setActiveTab('playlist')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
            activeTab === 'playlist' ? 'bg-slate-800 text-slate-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Zap size={14} /> Series Plan
        </button>
        <button
          onClick={() => setActiveTab('veo')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
            activeTab === 'veo' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Video size={14} /> Veo Studio
        </button>
      </div>

      {/* Content: Script */}
      {activeTab === 'script' && (
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[40px] space-y-8 max-w-4xl animate-in fade-in duration-500">
          <div className="border-b border-slate-800 pb-6">
             <h2 className="text-2xl font-black uppercase">"How I Used a T-Shirt QR Code to Fund My 55-Hour Race"</h2>
             <p className="text-xs text-slate-500 font-bold uppercase mt-2">Duration: 15:00 • Target Release: Feb 1</p>
          </div>
          
          <div className="space-y-8 font-medium text-slate-300 leading-relaxed">
            <div className="space-y-2">
              <p className="text-xs font-black text-rose-500 uppercase tracking-widest">[0:00 - 0:30] THE HOOK</p>
              <p className="italic">Visual: Close up of the QR code on the shirt during a training run. Founder breathing heavily.</p>
              <p>"I printed QR codes on my t-shirt. 87 people scanned it. 12 people donated. Here's how you can replicate this system for your cause."</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black text-rose-500 uppercase tracking-widest">[0:30 - 3:00] THE STORY</p>
              <p>"Last week I ran 55 straight hours for childhood cancer research. But the real story is how we built solrigs.com/snowdrop55 to convert physical action into digital impact."</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black text-rose-500 uppercase tracking-widest">[3:00 - 8:00] THE SYSTEM (Tutorial)</p>
              <p>"We used Donorbox for the money, Webflow for the site, and a simple QR generator. Total cost: $40. Total impact: $25,000 raised."</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black text-rose-500 uppercase tracking-widest">[13:00 - 15:00] THE BIGGER VISION</p>
              <p>"Next month, I'm heading into 10 days of silence. Then, we move to the oil patch. This is just the beginning of Scout Rigs."</p>
            </div>
          </div>
          
          <div className="p-6 bg-slate-950/50 rounded-3xl border border-slate-800">
             <h4 className="font-bold text-slate-100 mb-4 flex items-center gap-2"><Rocket size={18} className="text-blue-500" /> Key B-Roll Needs</h4>
             <ul className="text-xs space-y-2 text-slate-500 font-bold uppercase">
               <li>• Drone shots of Permian Basin running</li>
               <li>• Screen recording of Donorbox backend</li>
               <li>• Candid footage of people scanning the t-shirt</li>
               <li>• Clips of the meditation retreat location</li>
             </ul>
          </div>
        </div>
      )}

      {/* Content: Playlist */}
      {activeTab === 'playlist' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
          {episodes.map((item, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-[40px] hover:border-rose-500/30 transition-all group">
               <div className="flex justify-between items-start mb-6">
                 <span className="text-4xl font-black text-slate-800 group-hover:text-rose-500/20 transition-colors">0{item.ep}</span>
                 <Zap className="text-slate-700 group-hover:text-yellow-500 transition-colors" />
               </div>
               <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.focus}</p>
            </div>
          ))}
        </div>
      )}

      {/* Content: Veo Studio */}
      {activeTab === 'veo' && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-[32px] flex items-start gap-4">
             <div className="p-3 bg-indigo-500 rounded-xl text-white mt-1">
               <Video size={24} />
             </div>
             <div>
               <h3 className="text-xl font-black uppercase text-white mb-2">Gemini Veo Studio</h3>
               <p className="text-sm text-indigo-300 leading-relaxed max-w-2xl">
                 Generate cinematic promotional shorts for your upcoming episodes using the <strong>veo-3.1-fast-generate-preview</strong> model.
                 Requires a paid GCP project API key (cost is per second of video generated).
               </p>
               <div className="mt-4 flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                 <span className="flex items-center gap-1"><CheckCircleIcon /> 720p Resolution</span>
                 <span className="flex items-center gap-1"><CheckCircleIcon /> 16:9 Cinematic</span>
               </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Episode List */}
            <div className="space-y-4">
              {episodes.map((item) => (
                <div key={item.ep} className={`p-6 bg-slate-900 border border-slate-800 rounded-3xl transition-all ${generatingId === item.ep ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'hover:border-slate-700'}`}>
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Episode 0{item.ep}</span>
                     {generatingId === item.ep && <Loader2 className="animate-spin text-indigo-500" size={16} />}
                   </div>
                   <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                   <button 
                     disabled={generatingId !== null}
                     onClick={() => handleGenerateVideo(item.ep, item.title, item.focus)}
                     className="w-full py-3 bg-slate-950 hover:bg-indigo-600 disabled:bg-slate-800 disabled:text-slate-600 hover:text-white border border-slate-800 hover:border-indigo-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                   >
                     {generatingId === item.ep ? 'Generating...' : 'Generate Promo'} <Video size={14} />
                   </button>
                </div>
              ))}
            </div>

            {/* Video Player Output */}
            <div className="bg-slate-950 border border-slate-800 rounded-[40px] flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
               {generatingId ? (
                 <div className="text-center space-y-6 p-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 border-4 border-indigo-900 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase animate-pulse">Veo is dreaming...</h4>
                      <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-2">{statusMessage}</p>
                    </div>
                 </div>
               ) : generatedVideoUrl ? (
                 <div className="w-full h-full flex flex-col">
                    <video 
                      src={generatedVideoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-auto rounded-t-[40px] flex-1 object-cover"
                    />
                    <div className="p-6 bg-slate-900 border-t border-slate-800 flex justify-between items-center">
                       <span className="text-xs font-bold text-white uppercase">Promo_Render_v1.mp4</span>
                       <a href={generatedVideoUrl} download="veo_promo.mp4" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                         Download <Download size={14} />
                       </a>
                    </div>
                 </div>
               ) : (
                 <div className="text-center p-8 opacity-40">
                    <Video size={64} className="mx-auto mb-4 text-slate-500" />
                    <p className="text-sm font-bold text-slate-400">Select an episode to generate a preview</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CheckCircleIcon = () => (
  <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
  </svg>
);

export default YouTubeContent;
