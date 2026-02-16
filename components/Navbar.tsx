
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-tan-primary">
          TAN <span className="text-tan-accent">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-wide uppercase">
          <a href="#about" className="hover:text-tan-accent transition-colors">Về Tan</a>
          <a href="#menu" className="hover:text-tan-accent transition-colors">Thực Đơn</a>
          <a href="#gemini" className="hover:text-tan-accent transition-colors underline decoration-tan-accent underline-offset-4">Tìm Cảm Hứng</a>
          <a href="#visit" className="hover:text-tan-accent transition-colors">Ghé Thăm</a>
        </div>

        <a href="#visit" className="bg-tan-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-all">
          Đặt Bàn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
