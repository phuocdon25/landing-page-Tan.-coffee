
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMoodRecommendation(mood: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tôi đang cảm thấy: ${mood}. Hãy gợi ý một món đồ uống tại "Cà Phê Tan" phù hợp với tâm trạng này. Hãy trả lời bằng tiếng Việt, giọng điệu thân thiện, ấm áp và mang tính thơ ca một chút. Kết thúc bằng một câu cổ vũ.`,
      config: {
        systemInstruction: "Bạn là một barista tinh tế tại Cà Phê Tan. Bạn hiểu tâm trạng khách hàng và luôn biết cách chọn món đồ uống làm họ thấy thoải mái hơn.",
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Một tách Cà Phê Muối nồng nàn có lẽ là lựa chọn tuyệt vời nhất cho bạn lúc này. Hãy ghé Tan để chúng mình pha cho bạn nhé!";
  }
}
