
import React from 'react';
import { GOOGLE_MAPS_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tan-primary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-4xl font-serif font-bold tracking-tighter mb-6 block">
              TAN <span className="text-tan-accent">.</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-8">
              Cảm hứng đến từ những điều đơn giản nhất. Tan không chỉ bán cà phê, Tan bán những phút giây lắng đọng.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-tan-accent hover:border-tan-accent transition-all"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-tan-accent hover:border-tan-accent transition-all"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-tan-accent hover:border-tan-accent transition-all"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-tan-accent">Khám Phá</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Thực Đơn</a></li>
              <li><a href="#visit" className="hover:text-white transition-colors">Không Gian</a></li>
              <li><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chỉ Đường</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-tan-accent">Hỗ Trợ</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="tel:0901234567" className="hover:text-white transition-colors">Liên Hệ Đặt Chỗ</a></li>
              <li><a href="#visit" className="hover:text-white transition-colors">Thông Tin Quán</a></li>
              <li><a href="#gemini" className="hover:text-white transition-colors">Tư Vấn Đồ Uống</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-tan-accent">Newsletter</h4>
            <p className="text-gray-400 mb-6">Đăng ký để nhận ưu đãi và thông tin mới nhất từ Tan.</p>
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã đăng ký!'); }}
              className="flex flex-col space-y-3"
            >
              <input 
                type="email" 
                required
                placeholder="Email của bạn..." 
                className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-tan-accent text-sm text-white"
              />
              <button type="submit" className="bg-tan-accent text-white py-3 rounded-lg font-bold hover:bg-white hover:text-tan-primary transition-all">
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cà Phê Tan. Crafted with love & Caffeine.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
