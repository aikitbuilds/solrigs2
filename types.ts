
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Metric {
  label: string;
  value: string | number;
  change?: string;
  status: 'good' | 'neutral' | 'warning';
}

export enum Venture {
  SCOUT_RIGS = 'SCOUT_RIGS',
  SNOWDROP = 'SNOWDROP',
  AI_MENTOR = 'AI_MENTOR'
}

export interface MorningRitual {
  date: string;
  scoutTask: string;
  snowdropGoal: string;
  obstacleCheck: string;
  ipGuardrail: string;
  completed: boolean;
}

export interface DashboardStats {
  scoutRigs: {
    revenueGoal: number;
    currentRevenue: number;
    presales: number;
    trailerStatus: string;
  };
  snowdrop: {
    fundsRaised: number;
    goalRaised: number;
    milesLogged: number;
    supporters: number;
  };
  health: {
    sleepAvg: number;
    stressLevel: number;
    streak: number;
  };
}
