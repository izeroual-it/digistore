const products = [
  // ─── Streaming ─────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Netflix Premium 4K',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 6.90 },
      { label: '2 Months', price: 15.90 },
      { label: '3 Months', price: 15.90 },
    ],
  },
  {
    id: 2,
    title: 'Amazon Prime Video',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 5.90 },
      { label: '3 Months', price: 9.90 },
      { label: '6 Months', price: 12.90 },
      { label: '12 Months', price: 18.90 },
    ],
  },
  {
    id: 3,
    title: 'Shahid VIP',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
    plans: [
      { label: 'Mobile – 12 Months', price: 33.50 },
      { label: 'TV – 12 Months', price: 58.70 },
    ],
  },
  {
    id: 4,
    title: 'TOD Full HD',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 15.90 },
      { label: '3 Months', price: 37.90 },
      { label: '6 Months', price: 41.90 },
      { label: '12 Months', price: 63.90 },
    ],
  },
  {
    id: 5,
    title: 'Crunchyroll Premium',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
    plans: [
      { label: '3 Months', price: 19.90 },
      { label: '6 Months', price: 27.90 },
      { label: '12 Months', price: 32.90 },
    ],
  },
  {
    id: 6,
    title: 'IPTV Bouquet',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 26.90 },
      { label: '3 Months', price: 26.90 },
      { label: '6 Months', price: 31.00 },
      { label: '12 Months', price: 68.90 },
    ],
  },

  // ─── Music ─────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Spotify Premium',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 9.90 },
      { label: '12 Months', price: 50.00 },
    ],
  },

  // ─── AI Tools ──────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'ChatGPT 5 Plus',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 20.00 },
      { label: '2 Months', price: 38.90 },
      { label: '3 Months', price: 48.90 },
      { label: '6 Months', price: 49.90 },
    ],
  },
  {
    id: 9,
    title: 'Perplexity AI Pro',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&h=400&fit=crop',
    plans: [
      { label: '12 Months', price: 150.00 },
    ],
  },

  // ─── Software ──────────────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Canva Pro',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop',
    plans: [
      { label: '2 Years', price: 72.00 },
    ],
  },
  {
    id: 11,
    title: 'Adobe Creative Cloud',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop',
    plans: [
      { label: '12 Months', price: 499.90 },
    ],
  },
  {
    id: 12,
    title: 'Microsoft Office 365 Pro Plus',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop',
    plans: [
      { label: 'Lifetime', price: 19.90 },
    ],
  },
  {
    id: 13,
    title: 'LinkedIn Premium',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop',
    plans: [
      { label: '6 Months', price: 53.90 },
    ],
  },
  {
    id: 14,
    title: 'IBO Pro Player',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=400&fit=crop',
    plans: [
      { label: 'Lifetime', price: 8.90 },
    ],
  },

  // ─── Education ─────────────────────────────────────────────────────────────
  {
    id: 15,
    title: 'Coursera Pro',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    plans: [
      { label: '1 Month', price: 18.90 },
    ],
  },
  {
    id: 16,
    title: 'Duolingo Premium',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    plans: [
      { label: '12 Months', price: 89.90 },
    ],
  },
];

export const categories = [
  'All',
  'Streaming',
  'Music',
  'Software',
  'AI Tools',
  'Education',
];

export default products;

