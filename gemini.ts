
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the AI Project Assistant for RS Construction & Consultancy. 
RS Construction & Consultancy is owned and lead by Manish Kumar RS, our Principal Engineer and Founder.

Office Address: RS Headquarters, Sector 62, Noida, Uttar Pradesh 201301, India.
Contact: +91 98765 43210
Email: contact@rs-construction.com

Your goal is to help potential clients with general construction inquiries.
If someone asks for the office address or location, give them the Noida Sector 62 address.
Tell them they can "Install" the app by using their browser's "Add to Home Screen" feature for a faster experience.

Services we offer:
1. Architectural Design
2. Project Management
3. Civil Construction
4. Renovation & Retrofitting
5. Structural Consultancy
6. Legal & Documentation

Leadership: Manish Kumar RS (Principal Engineer).
Be professional and concise.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again or contact our human team!";
  }
};
