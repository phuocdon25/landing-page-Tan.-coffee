
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import GeminiRecommender from './components/GeminiRecommender';
import Visit from './components/Visit';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-left');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Section 2: Story / About */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 reveal-left">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/abouttan/800/1000" 
                    alt="Tan Story" 
                    className="rounded-3xl shadow-2xl w-full relative z-10 transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-tan-accent/20 rounded-full z-0 animate-float"></div>
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tan-primary/10 rounded-full z-0 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6 reveal" style={{ transitionDelay: '0.3s' }}>
                <span className="text-tan-accent font-bold tracking-widest uppercase text-xs">Câu Chuyện Về Tan</span>
                <h2 className="text-4xl md:text-5xl font-serif text-tan-primary leading-tight">
                  Tan là khi mọi lo toan <br /><span className="italic">biến mất</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Tại Cà Phê Tan, chúng mình tin rằng một tách cà phê ngon có thể làm tan đi những muộn phiền của một ngày bận rộn. Cái tên "Tan" bắt nguồn từ ước mong tạo ra một không gian mà khách hàng có thể hoàn toàn thả lỏng, để tâm hồn mình "tan" vào không gian, vào âm nhạc và vào hương vị nguyên bản.
                  </p>
                  <p>
                    Từng hạt cà phê được tuyển chọn kỹ lưỡng từ những vùng nguyên liệu sạch, rang xay theo phương pháp truyền thống kết hợp cùng sự sáng tạo hiện đại của các Barista tâm huyết.
                  </p>
                </div>
                <div className="pt-6 border-t border-tan flex gap-10">
                  <div className="hover:text-tan-accent transition-colors">
                    <h5 className="text-3xl font-serif text-tan-primary">05+</h5>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">Năm Kinh Nghiệm</p>
                  </div>
                  <div className="hover:text-tan-accent transition-colors">
                    <h5 className="text-3xl font-serif text-tan-primary">20+</h5>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">Công Thức Riêng</p>
                  </div>
                  <div className="hover:text-tan-accent transition-colors">
                    <h5 className="text-3xl font-serif text-tan-primary">10k+</h5>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">Khách Hàng Quen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MenuSection />
        <GeminiRecommender />

        {/* Section 5: Space Gallery */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
             <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-serif text-tan-primary mb-4">Góc Nhỏ Tại Tan</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Mỗi góc nhỏ đều được chăm chút tỉ mỉ để bạn có những bức hình thật chill và cảm giác ấm cúng nhất.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
              <div className="row-span-2 col-span-2 overflow-hidden rounded-2xl relative group reveal-left">
                <img src="https://picsum.photos/seed/gall1/800/1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Space" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="overflow-hidden rounded-2xl relative group reveal" style={{ transitionDelay: '0.1s' }}>
                <img src="https://picsum.photos/seed/gall2/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Space" />
              </div>
              <div className="overflow-hidden rounded-2xl relative group reveal" style={{ transitionDelay: '0.2s' }}>
                <img src="https://picsum.photos/seed/gall3/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Space" />
              </div>
              <div className="row-span-1 overflow-hidden rounded-2xl relative group reveal" style={{ transitionDelay: '0.3s' }}>
                <img src="https://picsum.photos/seed/gall4/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Space" />
              </div>
              <div className="overflow-hidden rounded-2xl relative group reveal" style={{ transitionDelay: '0.4s' }}>
                <img src="https://picsum.photos/seed/gall5/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Space" />
              </div>
            </div>
          </div>
        </section>

        <Visit />

        {/* Section 7: Final CTA */}
        <section className="py-24 bg-tan-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full animate-float"></div>
             <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">"Hẹn gặp bạn tại Tan"</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Chúng mình đã sẵn sàng những mẻ cà phê thơm nhất, chỉ chờ bạn ghé qua.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-tan-accent hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-facebook-messenger text-2xl"></i>
              </a>
              <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-tan-accent hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-phone-volume text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
