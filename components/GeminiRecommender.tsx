
import React, { useState } from 'react';
import { getMoodRecommendation } from '../services/geminiService';

const GeminiRecommender: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setIsLoading(true);
    const result = await getMoodRecommendation(mood);
    setRecommendation(result || "Xin lỗi, Tan đang chuẩn bị máy pha cà phê, hãy thử lại sau nhé!");
    setIsLoading(false);
  };

  return (
    <section id="gemini" className="py-24 bg-white border-y border-tan relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tan-accent/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tan-primary/5 rounded-full -ml-32 -mb-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-tan-cream p-8 md:p-12 rounded-3xl border border-tan shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 text-tan-accent font-bold mb-4 uppercase tracking-widest text-xs">
              <i className="fa-solid fa-sparkles"></i>
              <span>Cảm Hứng Từ Gemini AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-tan-primary mb-4">Hôm Nay Bạn Thấy Thế Nào?</h2>
            <p className="text-gray-600">Hãy mô tả tâm trạng của bạn, AI của Tan sẽ gợi ý một món đồ uống dành riêng cho bạn.</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ví dụ: 'Hơi mệt mỏi sau ngày dài', 'Hào hứng muốn bắt đầu việc mới'..."
                className="flex-1 bg-white border border-tan px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-tan-accent/30 text-lg transition-all"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className={`bg-tan-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center min-w-[160px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <i className="fa-solid fa-circle-notch animate-spin text-xl"></i>
                ) : (
                  <>Gợi Ý Cho Tôi <i className="fa-solid fa-arrow-right ml-2"></i></>
                )}
              </button>
            </div>
          </form>

          {recommendation && !isLoading && (
            <div className="bg-white p-8 rounded-2xl border-l-4 border-tan-accent animate-fade-in shadow-inner">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-mug-hot text-tan-accent text-2xl mt-1"></i>
                <div className="whitespace-pre-line text-lg leading-relaxed text-tan-primary italic">
                  "{recommendation}"
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiRecommender;
