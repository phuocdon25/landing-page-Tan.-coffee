
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'tea' | 'special';
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}
