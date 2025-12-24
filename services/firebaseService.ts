import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  orderBy,
  limit
} from "firebase/firestore";

/**
 * MIGRATION TO INFO@AININJAS.PRO
 * TODO: 
 * 1. Create new project in Firebase Console using info@aininjas.pro
 * 2. Register a web app
 * 3. Replace the config below with the new keys
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-L6KVMK74TH"
};

// Initialize Firebase (Safely handle re-initialization)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export type LeadRole = 'Investor' | 'Partner' | 'Customer';
export type AssetStatus = 'Active' | 'Testing' | 'Deployment Queue';

export interface SolRigLead {
  name: string;
  email: string;
  role: LeadRole;
  message: string;
  kW_needed?: number | string;
}

export interface RWAMetrics {
  rig_id: string;
  location: string;
  status: AssetStatus;
  kWh_produced_24h: number;
  monthly_yield_percent: number;
  last_updated: any;
}

export const firebaseService = {
  /**
   * INGESTION: Submit Lead to Firestore
   */
  submitLead: async (lead: SolRigLead) => {
    try {
      const docRef = await addDoc(collection(db, "leads"), {
        ...lead,
        createdAt: serverTimestamp()
      });
      console.log("Strategic Lead Logged [solrigs.com/leads]:", docRef.id);
      return { success: true, leadId: docRef.id };
    } catch (e) {
      console.error("Lead Ingestion Error:", e);
      return { success: false };
    }
  },

  /**
   * TELEMETRY: Fetch RWA Metrics
   */
  getLiveMetrics: async (): Promise<RWAMetrics[]> => {
    try {
      const q = query(collection(db, "rwa_metrics"), orderBy("last_updated", "desc"), limit(4));
      const querySnapshot = await getDocs(q);
      const metrics: RWAMetrics[] = [];
      querySnapshot.forEach((doc) => {
        metrics.push(doc.data() as RWAMetrics);
      });

      // Fallback to demo data if collection is empty
      return metrics.length > 0 ? metrics : [
        { rig_id: 'RIG-001', location: 'Permian Basin', status: 'Active', kWh_produced_24h: 142.4, monthly_yield_percent: 31.8, last_updated: new Date() },
        { rig_id: 'SENTRY-01', location: 'Austin HQ', status: 'Testing', kWh_produced_24h: 7.4, monthly_yield_percent: 30.0, last_updated: new Date() }
      ];
    } catch (e) {
      console.warn("Using offline fallback data (Check Firestore permissions or connection)");
      return [
        { rig_id: 'RIG-001', location: 'Permian Basin', status: 'Active', kWh_produced_24h: 142.4, monthly_yield_percent: 31.8, last_updated: new Date() }
      ];
    }
  },

  /**
   * CAMPAIGN: Fetch Snowdrop Progress
   */
  getCampaignStatus: async () => {
    // Implementation for dynamic campaign tracking
    return {
      event_name: "Snowdrop Ultra 55",
      current_raised: 12400,
      target_raised: 25000
    };
  }
};