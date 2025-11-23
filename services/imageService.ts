import { GoogleGenAI } from "@google/genai";

// Use a placeholder if generation fails or key is missing
const PLACEHOLDER_HERO = "https://picsum.photos/1200/800";
const PLACEHOLDER_PERSON = "https://picsum.photos/400/400";

export const generateImage = async (prompt: string, aspectRatio: string = "16:9"): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing, using placeholder.");
    return aspectRatio === "1:1" ? PLACEHOLDER_PERSON : PLACEHOLDER_HERO;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using Nano Banana Pro / Gemini 3 Pro Image Preview as requested
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          { text: prompt },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: "1K"
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return aspectRatio === "1:1" ? PLACEHOLDER_PERSON : PLACEHOLDER_HERO;

  } catch (error) {
    console.error("Image generation failed:", error);
    return aspectRatio === "1:1" ? PLACEHOLDER_PERSON : PLACEHOLDER_HERO;
  }
};