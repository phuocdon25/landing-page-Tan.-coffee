
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="menu" className="py-24 bg-tan-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-tan-primary mb-4">Gợi Ý Từ Barista</h2>
          <div className="w-24 h-1 bg-tan-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white p-5 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-tan reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-square relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-tan-primary shadow-sm">
                  {item.category === 'special' ? '✨ Chữ Ký' : '🔥 Phổ Biến'}
                </div>
              </div>
              <div className="flex flex-col mb-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-bold text-tan-primary group-hover:text-tan-accent transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-tan-accent font-bold whitespace-nowrap text-base">{item.price}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 h-10">
                {item.description}
              </p>
              <button className="flex items-center text-[11px] font-extrabold uppercase tracking-widest text-tan-primary group/btn">
                <span className="border-b-2 border-tan-primary group-hover/btn:border-tan-accent group-hover/btn:text-tan-accent transition-all pb-1">Chi tiết món</span>
                <i className="fa-solid fa-arrow-right-long ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-gray-400 italic mb-8">Và còn nhiều món đồ uống thú vị khác đang chờ bạn...</p>
          <button 
            onClick={() => setShowFullMenu(true)}
            className="inline-flex items-center space-x-3 bg-tan-primary text-white px-12 py-5 rounded-full font-bold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fa-solid fa-book-open"></i>
            <span>Xem Toàn Bộ Thực Đơn</span>
          </button>
        </div>
      </div>

      {/* Modal hiển thị Menu đầy đủ */}
      {showFullMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-fade-up">
            {/* Nút Đóng Modal */}
            <button 
              onClick={() => setShowFullMenu(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-100 text-tan-primary rounded-full flex items-center justify-center hover:bg-tan-accent hover:text-white transition-all shadow-md"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="max-h-[85vh] overflow-y-auto p-8 md:p-16">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-serif text-tan-primary mb-3">Thực Đơn Cà Phê Tan</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-10 bg-tan-accent"></div>
                  <p className="text-tan-accent uppercase tracking-[0.3em] text-[10px] font-bold">Menu 2024 - 2025</p>
                  <div className="h-px w-10 bg-tan-accent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fa-solid fa-mug-hot text-tan-accent"></i>
                    <h4 className="font-serif text-2xl text-tan-primary italic">Cà Phê Truyền Thống</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Đen Đá</span>
                      <span className="font-bold text-tan-accent">25.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Nâu Đá</span>
                      <span className="font-bold text-tan-accent">28.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Bạc Xỉu</span>
                      <span className="font-bold text-tan-accent">32.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Cà Phê Muối</span>
                      <span className="font-bold text-tan-accent">35.000đ</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fa-solid fa-leaf text-tan-accent"></i>
                    <h4 className="font-serif text-2xl text-tan-primary italic">Trà & Giải Khát</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Trà Sen Vàng</span>
                      <span className="font-bold text-tan-accent">45.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Trà Đào Cam Sả</span>
                      <span className="font-bold text-tan-accent">42.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Trà Trái Cây Nhiệt Đới</span>
                      <span className="font-bold text-tan-accent">48.000đ</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-dashed border-tan pb-2">
                      <span className="font-medium">Nước Ép Theo Mùa</span>
                      <span className="font-bold text-tan-accent">45.000đ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center p-8 bg-tan-cream rounded-3xl border border-tan">
                <i className="fa-solid fa-quote-left text-tan-accent/30 text-3xl mb-4"></i>
                <p className="text-gray-600 italic leading-relaxed">
                  "Mỗi món đồ uống tại Tan đều được gói ghém bằng cả tâm tình của người pha chế. Chúng mình hy vọng bạn tìm thấy sự an nhiên trong từng ngụm thưởng thức."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;
