
import { MenuItem, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Cà Phê Muối',
    description: 'Sự kết hợp hoàn hảo giữa vị đắng của cà phê, vị béo của kem và một chút mặn mòi của muối biển.',
    price: '35.000đ',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1570968015848-96bc135f6aa3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Bạc Xỉu Tan',
    description: 'Tỉ lệ sữa - cà phê được tinh chỉnh để tạo ra sự cân bằng, nhẹ nhàng như chính cái tên "Tan".',
    price: '32.000đ',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Trà Sen Vàng',
    description: 'Vị trà thanh mát kết hợp với hạt sen bùi bùi và lớp kem cheese béo ngậy.',
    price: '45.000đ',
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Cold Brew Cam Sả',
    description: 'Cà phê ủ lạnh trong 16 giờ, kết hợp với hương cam tươi và sả thơm nồng.',
    price: '48.000đ',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1499961024600-ad094db305cc?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop', alt: 'Không gian quán' },
  { id: 2, url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop', alt: 'Quầy pha chế' },
  { id: 3, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop', alt: 'Chi tiết' },
  { id: 4, url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop', alt: 'Góc ngồi' },
];

export const GOOGLE_MAPS_URL = "https://share.google/g5uUle7c13Xp2aeHQ";
