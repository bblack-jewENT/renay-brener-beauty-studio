import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Virtual Beauty Consultant for "Renay Brener Beauty Studio".
Renay Brener is a high-end beauty professional specializing in:
1. Hair Braiding (Knotless, Box braids, Cornrows, Fulani, etc.)
2. Nail Technology (Acrylics, Gel-X, intricate nail art, sculpting)
3. Eyelash Extensions (Classic, Hybrid, Volume, Mega Volume)

Your goal is to:
- Help clients choose styles based on their features (e.g., eye shape for lashes, face shape for braids).
- Provide aftercare advice for braids, nails, and lashes.
- Suggest service pairings (e.g., a specific nail set to match a hair style).
- Be professional, warm, and luxurious in your tone.
- If a user asks to book, guide them to the booking section of the app.
- Keep responses relatively concise but informative.
`;

export async function getBeautyAdvice(
  prompt: string,
  history: { role: "user" | "model"; text: string }[] = [],
) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Send the message
    const response: GenerateContentResponse = await chat.sendMessage({
      message: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now, but Renay's services are top-tier! Please try asking again in a moment.";
  }
}
