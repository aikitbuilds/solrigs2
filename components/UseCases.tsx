import React from 'react';
import {
    Tent, Clapperboard, Hammer, Stethoscope, Wifi,
    Zap, Warehouse, Truck, ShieldAlert, Globe
} from 'lucide-react';
import Footer from './Footer';

const USE_CASES = [
    {
        id: 'disaster',
        icon: <ShieldAlert size={32} className="text-rose-500" />,
        title: 'Disaster Response',
        market: '$5B Opportunity',
        desc: 'Immediate power for FEMA/Red Cross commands. Deploys in minutes, fits in C-130.',
        img: 'nano_banana_mission_hero.png' // Utilizing existing assets
    },
    {
        id: 'film',
        icon: <Clapperboard size={32} className="text-[#D4AF37]" />,
        title: 'Film Production',
        market: '$2B Market',
        desc: 'Silent, emission-free power for on-location shoots. Replaces noisy diesel gen-sets.',
        img: 'nano_banana_invest_hero.png'
    },
    {
        id: 'construction',
        icon: <Hammer size={32} className="text-orange-500" />,
        title: 'Construction',
        market: '$10B Market',
        desc: 'Day-1 power for sites before utility drops. Ranges from office trailors to crane ops.',
        img: 'nano_banana_about_hero.png'
    },
    {
        id: 'medical',
        icon: <Stethoscope size={32} className="text-emerald-500" />,
        title: 'Mobile Medical',
        market: 'Critical Infrastructure',
        desc: 'UPS-grade power for field hospitals and vaccine refrigeration units.',
        img: 'nano_banana_portal_bg.png'
    },
    {
        id: 'telecom',
        icon: <Wifi size={32} className="text-blue-500" />,
        title: 'Telecom Backup',
        market: '5G Infrastructure',
        desc: 'Reliable off-grid power for cell towers and remote repeaters.',
        img: 'nano_banana_contact_hero.png'
    },
    {
        id: 'mining',
        icon: <Zap size={32} className="text-yellow-500" />,
        title: 'Mining & Resources',
        market: 'Remote Ops',
        desc: 'Power for exploration camps and sensors far from fuel supply lines.',
        img: 'nano_banana_invest_hero.png'
    },
    {
        id: 'events',
        icon: <Tent size={32} className="text-purple-500" />,
        title: 'Events & Festivals',
        market: 'Green Events',
        desc: 'Sustainable power for outdoor stages and vendor rows without the fumes.',
        img: 'nano_banana_mission_hero.png'
    },
    {
        id: 'ag',
        icon: <Warehouse size={32} className="text-green-600" />,
        title: 'Agriculture',
        market: 'Smart Farming',
        desc: 'Power for irrigation pumps and automated harvesting equipment.',
        img: 'nano_banana_about_hero.png'
    },
    {
        id: 'logistics',
        icon: <Truck size={32} className="text-slate-400" />,
        title: 'EV Fleet Charging',
        market: 'Logistics',
        desc: 'Pop-up charging stations for delivery vans in remote depots.',
        img: 'nano_banana_contact_hero.png'
    },
    {
        id: 'defense',
        icon: <ShieldAlert size={32} className="text-[#208080]" />,
        title: 'Defense',
        market: 'Tactical Edge',
        desc: 'Silent watch capability and forward operating base power.',
        img: 'nano_banana_portal_bg.png'
    }
];

const UseCases: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 animate-in fade-in duration-700 pt-20 px-4 md:px-0">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#208080]/10 border border-[#208080]/20 text-[#208080] text-xs font-black uppercase tracking-widest mb-6">
                    <globe size={14} /> $30B+ Total Addressable Market
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                    Powering the <span className="text-[#D4AF37]">Impossible</span>.
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                    From Hollywood sets to hurricane disaster zones, SolRigs delivers grid-independent power where others can't.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {USE_CASES.map((useCase) => (
                    <div key={useCase.id} className="bg-slate-900 border border-slate-800 rounded-[32px] overflow-hidden group hover:border-[#208080]/50 transition-all shadow-xl">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('/${useCase.img}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800">
                                {useCase.icon}
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-black uppercase text-white">{useCase.title}</h3>
                            </div>
                            <p className="text-xs font-black text-[#D4AF37] uppercase tracking-widest mb-4">{useCase.market}</p>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                {useCase.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default UseCases;
