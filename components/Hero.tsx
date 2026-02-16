
import React from 'react';
import { GOOGLE_MAPS_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Tan Cafe Atmosphere" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <span className="inline-block mb-4 text-tan-accent font-medium tracking-[0.3em] uppercase opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Chào mừng bạn đến với Tan
        </span>
        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Gói ghém <span className="italic text-tan-accent">bình yên</span> <br /> trong từng tách cà phê
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Nơi thời gian chậm lại, nơi những lo toan tan biến để nhường chỗ cho hương vị đậm đà và sự tĩnh lặng.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
          <a href="#menu" className="group bg-white text-tan-primary px-10 py-5 rounded-full font-bold hover:bg-tan-accent hover:text-white transition-all duration-500 transform hover:-translate-y-2 shadow-xl">
            Khám Phá Menu
            <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
          </a>
          <a 
            href={GOOGLE_MAPS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
          >
            Chỉ Đường Đến Quán
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
