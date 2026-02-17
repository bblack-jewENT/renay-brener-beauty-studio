
import { Service, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'h1',
    category: 'Hair',
    title: 'Knotless Braids',
    description: 'Tension-free, natural-looking braids customized to your length and size preference.',
    price: 'from $180',
    duration: '4-6 hours',
    image: 'https://picsum.photos/seed/braids1/800/600'
  },
  {
    id: 'h2',
    category: 'Hair',
    title: 'Fulani Style',
    description: 'Intricate cornrow designs mixed with box braids, adorned with beads if desired.',
    price: 'from $200',
    duration: '5 hours',
    image: 'https://picsum.photos/seed/braids2/800/600'
  },
  {
    id: 'n1',
    category: 'Nails',
    title: 'Sculpted Acrylics',
    description: 'High-end nail extensions with hand-painted nail art and precision shaping.',
    price: 'from $85',
    duration: '2 hours',
    image: 'https://picsum.photos/seed/nails1/800/600'
  },
  {
    id: 'n2',
    category: 'Nails',
    title: 'Gel-X Extensions',
    description: 'Soft gel extension system for a lightweight, natural feel and maximum durability.',
    price: 'from $75',
    duration: '1.5 hours',
    image: 'https://picsum.photos/seed/nails2/800/600'
  },
  {
    id: 'l1',
    category: 'Lashes',
    title: 'Volume Lash Set',
    description: 'Multiple lightweight extensions applied to each natural lash for a full, fluffy look.',
    price: 'from $150',
    duration: '2.5 hours',
    image: 'https://picsum.photos/seed/lashes1/800/600'
  },
  {
    id: 'l2',
    category: 'Lashes',
    title: 'Hybrid Lash Set',
    description: 'A perfect blend of classic and volume for a textured, everyday glam appearance.',
    price: 'from $130',
    duration: '2 hours',
    image: 'https://picsum.photos/seed/lashes2/800/600'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', category: 'Hair', image: 'https://picsum.photos/seed/p1/500/500', title: 'Boho Knotless' },
  { id: 'p2', category: 'Nails', image: 'https://picsum.photos/seed/p2/500/500', title: 'Chrome French' },
  { id: 'p3', category: 'Lashes', image: 'https://picsum.photos/seed/p3/500/500', title: 'Wispy Volume' },
  { id: 'p4', category: 'Hair', image: 'https://picsum.photos/seed/p4/500/500', title: 'Stitch Braids' },
  { id: 'p5', category: 'Nails', image: 'https://picsum.photos/seed/p5/500/500', title: '3D Floral Art' },
  { id: 'p6', category: 'Lashes', image: 'https://picsum.photos/seed/p6/500/500', title: 'Classic Cat Eye' },
];
