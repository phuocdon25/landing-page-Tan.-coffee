
import React from 'react';
import { GOOGLE_MAPS_URL } from '../constants';

const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-tan-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-tan-primary mb-8 leading-tight">
              Ghé thăm Tan <br /> để tìm chút <span className="text-tan-accent italic">tĩnh lặng</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-tan-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-tan-primary">Địa Chỉ</h4>
                  <p className="text-gray-600">12 Chu Đồng, Phường X, Quận Y, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tan-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-tan-primary">Giờ Mở Cửa</h4>
                  <p className="text-gray-600">Thứ Hai - Chủ Nhật: 07:00 - 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-tan-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-tan-primary">Liên Hệ</h4>
                  <p className="text-gray-600">090 123 4567 | caphetan.chu@gmail.com</p>
                </div>
              </div>
            </div>

            <a 
              href={GOOGLE_MAPS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-tan-primary text-white px-10 py-5 rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fa-solid fa-map"></i>
              <span>Xem Bản Đồ Trên Google Maps</span>
            </a>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
             {/* Simulating a map view or high quality shop photo */}
            <img 
              src="https://picsum.photos/seed/mapview/800/1000" 
              alt="Tan Cafe Exterior" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <div className="text-white">
                <span className="bg-tan-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Vị Trí Trung Tâm</span>
                <h3 className="text-2xl font-serif">Nơi góc phố quen thuộc</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
