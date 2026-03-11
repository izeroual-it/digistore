const products = [
  // ─── Software ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'CapCut Pro',
    description: 'Access all premium video editing features, no watermarks, advanced AI effects, background removal, and unlimited exports at an unbeatable shared price.',
    shortDescription: 'Premium video editing — no watermark, AI effects.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=600&h=400&fit=crop',
    features: ['No watermark', 'Advanced AI effects', 'Background removal', 'Unlimited exports', 'Instant delivery'],
    plans: [
      { label: '2 Months', price: 7.00 },
    ],
  },
  {
    id: 2,
    title: 'Canva Pro',
    description: 'Unlock premium templates, brand kit, background remover, magic resize, and all professional design tools for creators and businesses.',
    shortDescription: 'Professional design tools — templates, brand kit & more.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop',
    features: ['Premium templates', 'Brand kit', 'Background remover', 'Magic resize', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 5.99 },
      { label: '2 Years', price: 5.08 },
    ],
  },
  {
    id: 3,
    title: 'Microsoft 365',
    description: 'Full access to Word, Excel, PowerPoint, Outlook, Teams, and OneDrive cloud storage at a heavily discounted shared price.',
    shortDescription: 'Word, Excel, PowerPoint, Teams & OneDrive.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop',
    features: ['Word, Excel, PowerPoint', 'Teams & Outlook', 'OneDrive storage', 'Multi-device', 'Instant access'],
    plans: [
      { label: '1 Month', price: 5.50 },
      { label: '12 Months', price: 50.00 },
    ],
  },
  {
    id: 4,
    title: 'Adobe Creative Cloud',
    description: 'Access Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom, InDesign, and 20+ professional creative apps.',
    shortDescription: 'Photoshop, Premiere Pro & 20+ creative apps.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop',
    features: ['Photoshop & Illustrator', 'Premiere Pro & After Effects', 'Lightroom included', '20+ creative apps', 'Cloud storage'],
    plans: [
      { label: '1 Month', price: 14.00 },
      { label: '12 Months', price: 24.00 },
    ],
  },
  {
    id: 5,
    title: 'Figma Professional',
    description: 'Collaborate on UI/UX designs, build component libraries, prototype interactively, and share with your team in real time.',
    shortDescription: 'UI/UX design, prototyping & collaboration.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    features: ['Unlimited projects', 'Component libraries', 'Interactive prototyping', 'Real-time collaboration', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 5.99 },
    ],
  },
  {
    id: 6,
    title: 'Grammarly Premium',
    description: 'AI-powered writing assistant with advanced grammar, style, clarity, tone, and plagiarism detection suggestions across all your apps.',
    shortDescription: 'AI writing assistant — grammar, style & plagiarism check.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    features: ['Advanced grammar checks', 'Style suggestions', 'Tone detection', 'Plagiarism detection', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 5.99 },
    ],
  },
  {
    id: 7,
    title: 'Notion Plus',
    description: 'Unlimited blocks, unlimited file uploads, 30-day version history, and invite up to 100 guests for your workspace.',
    shortDescription: 'All-in-one workspace — unlimited blocks & uploads.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    features: ['Unlimited blocks', 'Unlimited file uploads', '30-day history', '100 guest invites', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 4.99 },
    ],
  },

  // ─── Streaming ─────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Netflix Premium',
    description: 'Stream 4K UHD content on multiple screens with access to the full Netflix library of movies, series, and documentaries.',
    shortDescription: '4K UHD streaming — full Netflix library.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop',
    features: ['4K UHD streaming', 'Full Netflix library', 'Multi-screen', 'Instant activation', 'Verified account'],
    plans: [
      { label: '1 Month', price: 7.00 },
      { label: '12 Months', price: 87.00 },
    ],
  },
  {
    id: 9,
    title: 'Disney+',
    description: 'Stream Marvel, Star Wars, Pixar, Disney classics, and National Geographic in HD/4K at a fraction of the official price.',
    shortDescription: 'Marvel, Star Wars, Pixar & Disney in 4K.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&h=400&fit=crop',
    features: ['Marvel & Star Wars', 'Disney & Pixar', '4K streaming', 'Instant activation', 'Verified account'],
    plans: [
      { label: '1 Month', price: 7.00 },
      { label: '12 Months', price: 39.00 },
    ],
  },
  {
    id: 10,
    title: 'YouTube Premium',
    description: 'Enjoy ad-free videos, background play, YouTube Music included, and offline downloads on all your devices.',
    shortDescription: 'Ad-free YouTube + YouTube Music included.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    features: ['Ad-free YouTube', 'Background play', 'YouTube Music included', 'Offline downloads', 'Verified account'],
    plans: [
      { label: '1 Month', price: 6.50 },
      { label: '12 Months', price: 52.00 },
    ],
  },
  {
    id: 11,
    title: 'Crunchyroll Premium',
    description: 'Stream thousands of anime titles, simulcasts, exclusive series, and manga in HD with no ads.',
    shortDescription: 'Thousands of anime — simulcasts, ad-free HD.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
    features: ['Thousands of anime', 'Simulcasts', 'Ad-free HD', 'Exclusive series', 'Verified account'],
    plans: [
      { label: '1 Month', price: 5.50 },
      { label: '12 Months', price: 42.00 },
    ],
  },
  {
    id: 12,
    title: 'Max (HBO Max)',
    description: 'Watch HBO originals, Warner Bros. movies, DC content, and exclusive Max originals in 4K.',
    shortDescription: 'HBO originals, Warner Bros. & DC in 4K.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?w=600&h=400&fit=crop',
    features: ['HBO originals', 'Warner Bros. & DC', '4K streaming', 'Shared family plan', 'Instant activation'],
    plans: [
      { label: '12 Months', price: 57.00 },
    ],
  },
  {
    id: 13,
    title: 'Paramount+',
    description: 'Access Paramount originals, live CBS, Nickelodeon, MTV, BET, and exclusive sports content.',
    shortDescription: 'Paramount originals, live CBS & sports.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
    features: ['Paramount originals', 'Live CBS', 'Sports content', 'Nickelodeon & MTV', 'Instant activation'],
    plans: [
      { label: '12 Months', price: 50.00 },
    ],
  },
  {
    id: 14,
    title: 'Peacock Premium',
    description: 'Watch NBC originals, live sports, movies, reality TV, and thousands of hours of on-demand entertainment.',
    shortDescription: 'NBC originals, live sports & on-demand.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop',
    features: ['NBC originals', 'Live sports', 'On-demand movies', 'Shared plan', 'Instant activation'],
    plans: [
      { label: '12 Months', price: 8.00 },
    ],
  },
  {
    id: 15,
    title: 'Apple TV+',
    description: 'Stream award-winning Apple originals like Ted Lasso, Severance, The Morning Show, and more in 4K HDR Dolby Vision.',
    shortDescription: 'Apple originals in 4K HDR Dolby Vision.',
    category: 'Streaming',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
    features: ['Apple originals', '4K HDR Dolby Vision', 'Exclusive series', 'Shared plan', 'Instant activation'],
    plans: [
      { label: '12 Months', price: 8.00 },
    ],
  },

  // ─── Music ─────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: 'Spotify Premium',
    description: 'Listen to 100M+ songs ad-free with unlimited skips, offline listening, and high-quality audio streaming across all devices.',
    shortDescription: 'Ad-free music, unlimited skips & offline.',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
    features: ['Ad-free music', 'Unlimited skips', 'Offline listening', 'High-quality audio', 'Verified account'],
    plans: [
      { label: '1 Month', price: 6.50 },
      { label: '12 Months', price: 33.00 },
    ],
  },
  {
    id: 17,
    title: 'Deezer Premium',
    description: 'Enjoy 90M+ tracks, HiFi audio quality, offline mode, Flow personalized radio, and lyrics display.',
    shortDescription: '90M+ tracks, HiFi audio & Flow radio.',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    features: ['90M+ tracks', 'HiFi audio', 'Offline mode', 'Flow radio', 'Lyrics display'],
    plans: [
      { label: '12 Months', price: 41.00 },
    ],
  },
  {
    id: 18,
    title: 'Tidal Premium',
    description: 'Stream lossless HiFi and MQA audio, exclusive artist content, and 100M+ tracks with the highest audio fidelity available.',
    shortDescription: 'Lossless HiFi audio — 100M+ tracks.',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    features: ['Lossless HiFi audio', 'MQA support', '100M+ tracks', 'Exclusive content', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 37.00 },
    ],
  },
  {
    id: 19,
    title: 'Apple Music',
    description: 'Access 100M+ songs in lossless audio, spatial audio with Dolby Atmos, curated playlists, and radio stations.',
    shortDescription: '100M+ songs, lossless audio & Dolby Atmos.',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop',
    features: ['100M+ songs', 'Lossless audio', 'Dolby Atmos', 'Curated playlists', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 35.00 },
    ],
  },

  // ─── AI Tools ──────────────────────────────────────────────────────────────
  {
    id: 20,
    title: 'ChatGPT Plus',
    description: 'Access OpenAI\'s GPT-4o model with faster responses, DALL·E image generation, advanced data analysis, browsing, and priority access to new features.',
    shortDescription: 'GPT-4o, image generation & data analysis.',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
    features: ['GPT-4o model', 'DALL·E image generation', 'Advanced data analysis', 'Priority access', 'Verified account'],
    plans: [
      { label: '1 Month', price: 9.00 },
      { label: '12 Months', price: 75.00 },
    ],
  },
  {
    id: 21,
    title: 'Midjourney',
    description: 'Generate stunning, high-resolution AI artwork and images using one of the world\'s most powerful image generation models.',
    shortDescription: 'AI image generation — high-res artwork.',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&h=400&fit=crop',
    features: ['AI image generation', 'High-res outputs', 'Commercial use', 'Discord integration', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 43.00 },
    ],
  },

  // ─── Education ─────────────────────────────────────────────────────────────
  {
    id: 22,
    title: 'Duolingo Plus',
    description: 'Learn any of 40+ languages ad-free with unlimited hearts, progress tracking, offline lessons, and no interruptions.',
    shortDescription: 'Learn 40+ languages — ad-free & offline.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    features: ['Ad-free learning', 'Unlimited hearts', 'Offline lessons', '40+ languages', 'Verified account'],
    plans: [
      { label: '1 Month', price: 5.00 },
      { label: '12 Months', price: 52.00 },
    ],
  },
  {
    id: 23,
    title: 'Coursera Plus',
    description: 'Unlimited access to 7,000+ courses, professional certificates, and degrees from top universities like Stanford, Google, and IBM.',
    shortDescription: '7,000+ courses from top universities.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    features: ['7,000+ courses', 'Professional certificates', 'Top university content', 'Offline learning', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 9.99 },
    ],
  },

  // ─── Finance ───────────────────────────────────────────────────────────────
  {
    id: 24,
    title: 'TradingView Pro',
    description: 'Access real-time market data, advanced charting tools, 5 indicators per chart, alerts, and no ads for serious traders.',
    shortDescription: 'Real-time charts, alerts & market data.',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    features: ['Real-time market data', 'Advanced charting', '5 indicators/chart', 'Custom alerts', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 6.99 },
    ],
  },

  // ─── Marketing ─────────────────────────────────────────────────────────────
  {
    id: 25,
    title: 'Semrush Pro',
    description: 'Industry-leading SEO toolkit with keyword research, competitor analysis, backlink audits, site audit, and rank tracking.',
    shortDescription: 'SEO toolkit — keywords, backlinks & rank tracking.',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop',
    features: ['Keyword research', 'Competitor analysis', 'Backlink audit', 'Rank tracking', 'Instant delivery'],
    plans: [
      { label: '12 Months', price: 22.00 },
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
  'Finance',
  'Marketing',
];

export default products;