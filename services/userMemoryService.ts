
import { MorningRitual } from '../types';

/**
 * UserMemoryService (Simulated Google Cloud Firestore Structure)
 * Tracks user context, strategic alignment, and milestone progression.
 */

export interface Milestone {
  id: string;
  name: string;
  target: string;
  status: 'pending' | 'active' | 'complete';
  strategy: string;
}

export interface UserContext {
  profile: {
    name: string;
    ventures: string[];
    goals: {
      solar: string;
      running: string;
      revenueTarget: string;
    }
  };
  milestones: Milestone[];
  metrics: {
    streak: number;
    lastCheckIn: string;
    fundsRaised: number;
    alignmentScore: number;
  };
  morningRituals: MorningRitual[];
  preferences: {
    voiceEnabled: boolean;
    mentorTone: 'direct' | 'strategic';
    lastUpdate: string;
  };
  learning: string[]; 
  tangentWarnings: string[]; 
  strategicObservations: string[]; 
}

const STORAGE_KEY = 'master_system_user_memory_v8_postrace';

const DEFAULT_CONTEXT: UserContext = {
  profile: {
    name: 'Michael Tran',
    ventures: ['SolRigs Inc.', 'Snowdrop Mission', 'RigBuild Agent'],
    goals: {
      solar: '$55M revenue target (SolStation)',
      running: 'Snowdrop Mission (Ultra 55)',
      revenueTarget: '$55,000,000'
    }
  },
  milestones: [
    { id: 'm1', name: 'Phase 1: Foundation', target: 'Certification & Legal', status: 'complete', strategy: 'NABCEP Sprint + JV Bridge Model' },
    { id: 'm2', name: 'Phase 2: MVP Build', target: 'SolStation 100 Prototype', status: 'active', strategy: 'RigCompass AI + 8ft Utility Trailer' },
    { id: 'm3', name: 'Phase 3: Closed Loop Raise', target: '$30,000 via Reg D 506(b)', status: 'pending', strategy: 'Revenue Participation Units' },
    { id: 'm4', name: 'Phase 4: Scale', target: 'SolStation 300 Batch Production', status: 'pending', strategy: 'Exclusive Pacific Mobile Partnership' },
    { id: 'm5', name: 'Race Week Execution', target: 'Snowdrop Mission 55', status: 'complete', strategy: '55-Hour Physical Will Test' },
    { id: 'm6', name: 'Post-Race & Transition', target: 'Recovery & Stillness', status: 'active', strategy: 'Bio-Recovery + Mental Stillness + Data Synthesis' }
  ],
  metrics: {
    streak: 23,
    lastCheckIn: new Date().toISOString(),
    fundsRaised: 25640,
    alignmentScore: 94
  },
  morningRituals: [],
  preferences: {
    voiceEnabled: false,
    mentorTone: 'strategic',
    lastUpdate: new Date().toISOString()
  },
  learning: [
    'Snowdrop Mission successfully completed: $25k+ raised.',
    'SolStation telemetry verified during high-stress movement.',
    'RigBuild AI accurately predicted bio-exhaustion markers at 40-hour mark.',
    'Post-race recovery prioritized to maintain long-term cognitive load capacity.'
  ],
  tangentWarnings: [],
  strategicObservations: [
    'Interconnection queue (5-10 yrs) is the primary marketing hook for SolStation',
    'RigCompass AI provides 20-45% more production than static systems',
    'The "Physical to Digital" bridge (Mission to Platform) has a 12% conversion rate on QR scans.'
  ]
};

export const userMemoryService = {
  getContext: (): UserContext => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : DEFAULT_CONTEXT;
  },

  updateContext: (updates: Partial<UserContext>): UserContext => {
    const current = userMemoryService.getContext();
    const updated = { ...current, ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  addMorningRitual: (ritual: MorningRitual) => {
    const current = userMemoryService.getContext();
    const updatedRituals = [ritual, ...current.morningRituals].slice(0, 30);
    userMemoryService.updateContext({ morningRituals: updatedRituals });
  },

  addLearning: (observation: string) => {
    const current = userMemoryService.getContext();
    if (current.learning.includes(observation)) return;
    const updatedLearnings = [...current.learning, observation].slice(-10);
    userMemoryService.updateContext({ learning: updatedLearnings });
  },

  addTangentWarning: (warning: string) => {
    const current = userMemoryService.getContext();
    const updatedWarnings = [...current.tangentWarnings, warning].slice(-5);
    userMemoryService.updateContext({ 
      tangentWarnings: updatedWarnings,
      metrics: { ...current.metrics, alignmentScore: Math.max(0, current.metrics.alignmentScore - 5) }
    });
  },

  addStrategicObservation: (observation: string) => {
    const current = userMemoryService.getContext();
    if (current.strategicObservations.includes(observation)) return;
    const updatedObs = [...current.strategicObservations, observation].slice(-10);
    userMemoryService.updateContext({ strategicObservations: updatedObs });
  }
};
