import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton T-Shirt',
    description: 'Made from 100% organic cotton, this comfortable t-shirt is perfect for everyday wear.',
    price: 29.99,
    image: '/images/organic_cotton_tshirt_pgi.webp',
    category: 'T-Shirts'
  },
  {
    id: '2',
    name: 'Sustainable Denim Jeans',
    description: 'Classic fit jeans made from sustainably sourced denim with a modern wash.',
    price: 89.99,
    image: '/images/sustainable_denim_jeans_pdi.webp',
    category: 'Pants'
  },
  {
    id: '3',
    name: 'Wool Blend Sweater',
    description: 'A cozy sweater made from a blend of merino wool and recycled materials.',
    price: 79.99,
    image: '/images/wool_blend_sweater_pgi.webp',
    category: 'Sweaters'
  },
  {
    id: '4',
    name: 'Linen Blend Scarf',
    description: 'Lightweight and breathable scarf perfect for spring and summer.',
    price: 39.99,
    image: '/images/linen_blend_scarf_pgi.webp',
    category: 'Accessories'
  }
]; 
