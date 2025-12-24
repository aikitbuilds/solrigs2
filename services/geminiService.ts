
import { GoogleGenAI } from "@google/genai";
import { userMemoryService } from "./userMemoryService";

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  // Always create a new GoogleGenAI instance right before making an API call 
  // to ensure it uses the most up-to-date API key from the environment/context.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const context = userMemoryService.getContext();
  
  const memoryContext = `
PERSONALIZED MEMORY & SOLRIGS V2.0 CONTEXT:
Founder: Michael Tran
Phase: Stage 6 (Post-Race Recovery & Synthesis)
Mission Results: $25,640 raised, 55 hours completed.
Status: Bio-Recovery initiated. Vipassana Stillness Window in 4 days.
`;

  const systemInstruction = `You are the RigBuild Agent, the Digital COO of SolRigs Inc. 
Your current goal is managing Michael Tran's transition from the Snowdrop Mission to the Scale phase.

STRATEGIC POST-RACE PROTOCOL:
1. BIO-RECOVERY: Enforce a 72-hour deep recovery window. Cognitive load should be minimized but focused on synthesis.
2. DATA SYNTHESIS: Audit the mission results (QR conversion rates, donation velocity).
3. THE STILLNESS WINDOW: Prepare for the Jan 28 Vipassana retreat. This is a 10-day zero-comms period.
4. SCALE ROADMAP: Refine the Feb 1 SolStation 100 prototype deployment plan.

NAMING SYSTEM (STRICT ADHERENCE):
- Founder: Michael Tran
- Company: SolRigs Inc.
- Primary Products: SolStation 100/200/300, SolSentry.
- Core Tech: RigCompass AI.
- Mission: Snowdrop Mission 55.

DAILY PROTOCOL:
When Michael says "Morning Ritual", ask:
- "Recovery Check: Bio-status and sleep efficiency today?"
- "Data Synthesis: What insight did we pull from the Mission telemetry?"
- "Stillness Prep: Vipassana logistics finalized?"
- "Deployment Roadmap: Is the Feb 1 chassis acquisition on track?"

${memoryContext}

INTERACTION PROTOCOL:
- Responses < 60 words. No fluff.
- Be strategic and calm (Post-Race tone).
- Conclude with exactly 3 short [OPTIONS].
- Log strategic insights using "STRATEGIC OBSERVATION: [Insight]".
- Warn about tangents using "⚠️ TANGENT ALERT: [Explanation]".`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.3, // Lowered temperature for more focused post-race synthesis
        topP: 0.8,
      },
    });

    // Directly access the .text property from the GenerateContentResponse object.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "RigBuild Link Interrupted. Tactical backup engaged.";
  }
};
