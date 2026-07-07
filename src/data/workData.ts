export interface WorkItem {
  id: number;
  title: string;
  category: '3D Models' | 'Posters' | 'Flyers' | 'Videos' | 'Logo' | 'Illustrations';
  description: string;          // A short 2-line description of the project
  thumbnail: string;            // Path to the image in the public folder, e.g., "/portfolio/project-1.webp"
  mediaType: 'image' | 'video';
  mediaUrl: string;             // Path to the image/video in the public folder OR a YouTube/Cloudinary link
  link?: string;                // Optional link to live project/behance/github
}

export const workData: WorkItem[] = [
  {
    id: 1,
    title: 'Asynchron Labs Internship Poster',
    category: 'Flyers',
    description: 'Promotional flyer designed for Asynchron Labs\' Software Developer Internship Program. Highlights program features, Google/Microsoft mentors, and ISO certifications.',
    thumbnail: '/portfolio/images/asynchron-labs.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/asynchron-labs.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Guru Nanak Insurance Banner',
    category: 'Flyers',
    description: 'Modern advertising banner designed for Guru Nanak Enterprises\' insurance services. Clean layouts showcasing auto, life, and health coverage options.',
    thumbnail: '/graphic-design-insurance.jpg',
    mediaType: 'image',
    mediaUrl: '/graphic-design-insurance.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Silvia S15 Street Poster',
    category: 'Posters',
    description: 'Vibrant JDM anime-themed art poster showcasing a custom Nissan Silvia (S15) with high-contrast color highlights and detailed specifications.',
    thumbnail: '/portfolio/images/silvia-s15.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/silvia-s15.png',
    link: '#'
  },
  {
    id: 4,
    title: '3D Lamborghini Aventador Render',
    category: '3D Models',
    description: 'A premium 3D model render of a Lamborghini Aventador in a polished studio setting. Features hyper-realistic reflections, realistic checkerboard tiling, and detailed materials.',
    thumbnail: '/3d-design-car.jpg',
    mediaType: 'image',
    mediaUrl: '/3d-design-car.jpg',
    link: '#'
  },
  {
    id: 5,
    title: '3D Sci-Fi Crawler Robot',
    category: '3D Models',
    description: 'A detailed 3D model of a mechanical crawler robot positioned in a desert environment. Highlights complex rigging, industrial textures, and realistic outdoor lighting.',
    thumbnail: '/3d-design-robot.jpg',
    mediaType: 'image',
    mediaUrl: '/3d-design-robot.jpg',
    link: '#'
  },
  {
    id: 6,
    title: 'Accredian Product Management Masterclass',
    category: 'Flyers',
    description: 'Corporate promotional banner designed for Accredian\'s online Product Management Masterclass. Features industry statistics and structural learning pathways.',
    thumbnail: '/portfolio/images/accredian-pm.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/accredian-pm.png',
    link: '#'
  },
  {
    id: 7,
    title: 'Altium PCB Schematics Design',
    category: 'Flyers',
    description: 'Tech layout banner highlighting schematic design and PCB layouts with Altium Designer. Showcases dense circuitry, traces, and silicon rendering.',
    thumbnail: '/portfolio/images/altium-pcb.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/altium-pcb.jpg',
    link: '#'
  },
  {
    id: 8,
    title: 'Doodle Creative Poster ("BE creative & IDEA")',
    category: 'Illustrations',
    description: 'Creative doodle assets and vector banner graphics designed for an indie game developers merchandising campaign. Hand-drawn sketches digitized and polished with high-contrast color overlays.',
    thumbnail: '/graphic-design-doodle-creative.png',
    mediaType: 'image',
    mediaUrl: '/graphic-design-doodle-creative.png',
    link: '#'
  },
  {
    id: 9,
    title: 'Chibi Donut Character',
    category: 'Illustrations',
    description: 'A cute vector chibi-style cartoon illustration of an anime character eating a strawberry-frosted donut, rendered with soft pastel shades.',
    thumbnail: '/graphic-design-donut.jpg',
    mediaType: 'image',
    mediaUrl: '/graphic-design-donut.jpg',
    link: '#'
  },
  {
    id: 10,
    title: 'Xavier Hart Logo Design',
    category: 'Logo',
    description: 'A custom premium 3D business mark designed for Xavier Hart. The design features gold metallic gradients and high-impact vector typography.',
    thumbnail: '/graphic-design-logo.jpg',
    mediaType: 'image',
    mediaUrl: '/graphic-design-logo.jpg',
    link: '#'
  },
  {
    id: 11,
    title: 'Lego Nitro Brand Identity',
    category: 'Flyers',
    description: 'Corporate flyer designed for Lego Nitro, representing PCB schematic designs, Altium board tracing, and modern electronics.',
    thumbnail: '/portfolio/images/lego-nitro.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/lego-nitro.jpg',
    link: '#'
  },
  {
    id: 12,
    title: 'Luxury Beauty Brand Logo',
    category: 'Logo',
    description: 'A premium circle emblem designed for a luxury cosmetics brand. Features gold leaf illustrations wrapped around a soft pink watercolor background.',
    thumbnail: '/portfolio/images/luxury-beauty.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/luxury-beauty.jpg',
    link: '#'
  },
  {
    id: 13,
    title: 'Halifax Central Library Logo',
    category: 'Logo',
    description: 'A clean corporate identifier for the Halifax Central Library. Combines a stylized hand-drawn stack of books with minimalist modern script.',
    thumbnail: '/portfolio/images/halifax-library.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/halifax-library.jpg',
    link: '#'
  },
  {
    id: 14,
    title: 'Elevate Designs Identity',
    category: 'Logo',
    description: 'Geometrical gold frame brand logo designed for Elevate Designs, highlighting corporate innovation, symmetry, and premium consulting traits.',
    thumbnail: '/portfolio/images/elevate-designs.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/elevate-designs.jpg',
    link: '#'
  },
  {
    id: 15,
    title: 'Accredian Artificial Intelligence Masterclass',
    category: 'Flyers',
    description: 'Corporate promotional banner designed for Accredian\'s online Artificial Intelligence Masterclass for Beginners. Features robot head graphic elements.',
    thumbnail: '/graphic-design-ai-masterclass.png',
    mediaType: 'image',
    mediaUrl: '/graphic-design-ai-masterclass.png',
    link: '#'
  },
  {
    id: 16,
    title: 'Faceless Portrait Illustration',
    category: 'Illustrations',
    description: 'A clean minimalist flat vector portrait illustration featuring a faceless male silhouette dressed in a turtleneck and blazer over a dark red backdrop.',
    thumbnail: '/portfolio/images/faceless-portrait.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/faceless-portrait.jpg',
    link: '#'
  },
  {
    id: 17,
    title: 'My Legacy Book Brochure',
    category: 'Flyers',
    description: 'Corporate pamphlet and infographic brochure designed for Mitt Arv\'s financial asset organizing program, "My Legacy Book".',
    thumbnail: '/portfolio/images/mitt-arv-brochure.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mitt-arv-brochure.png',
    link: '#'
  },
  {
    id: 18,
    title: 'Cecil Convent School Mother\'s Day Poster',
    category: 'Posters',
    description: 'Vibrant celebratory banner designed for Cecil Convent School\'s Mother\'s Day celebration event, showcasing colorful flags, balloons, and gold lettering.',
    thumbnail: '/portfolio/images/mothers-day-poster.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mothers-day-poster.jpg',
    link: '#'
  },
  {
    id: 19,
    title: 'Lamborghini Huracan STO Poster',
    category: 'Posters',
    description: 'Elegant poster design showcasing the high-performance Lamborghini Huracán STO. Features clean speed metrics, track times, and aggressive sports typography.',
    thumbnail: '/portfolio/images/lambo-huracan.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/lambo-huracan.png',
    link: '#'
  },
  {
    id: 20,
    title: 'Clothing Promo 3',
    category: 'Videos',
    description: 'Slick and stylish short-form commercial advertising street clothing collection highlights, featuring fast pacing.',
    thumbnail: 'https://img.youtube.com/vi/UXSlme8eZqw/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/UXSlme8eZqw',
    link: '#'
  },
  {
    id: 21,
    title: 'Makeup Info 1',
    category: 'Videos',
    description: 'Vibrant promotional makeup info reel showcasing cosmetics application tips and product highlights.',
    thumbnail: 'https://img.youtube.com/vi/l5soaMO4Cgc/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/l5soaMO4Cgc',
    link: '#'
  },
  {
    id: 22,
    title: 'Clothing Promo 2',
    category: 'Videos',
    description: 'Short energetic clothing advertisement showing modern casual wear with rhythmic cuts.',
    thumbnail: 'https://img.youtube.com/vi/varkrgBZeIg/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/varkrgBZeIg',
    link: '#'
  },
  {
    id: 23,
    title: 'Clothing Promo 1',
    category: 'Videos',
    description: 'Fast-paced clothing promotional reel blending transition edits and product close-ups.',
    thumbnail: 'https://img.youtube.com/vi/v8aymO9jHcA/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/v8aymO9jHcA',
    link: '#'
  },
  {
    id: 24,
    title: 'Fishing 2',
    category: 'Videos',
    description: 'An engaging lifestyle outdoors video commercial focusing on fishing trips and outdoor recreation.',
    thumbnail: 'https://img.youtube.com/vi/m5jP5zyoUPg/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/m5jP5zyoUPg',
    link: '#'
  },
  {
    id: 25,
    title: 'Fishing 1',
    category: 'Videos',
    description: 'Cinematic short highlight reel documenting fishing trip highlights with vibrant natural colors.',
    thumbnail: 'https://img.youtube.com/vi/2tmqclKCv8k/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/2tmqclKCv8k',
    link: '#'
  },
  {
    id: 26,
    title: 'Sample 1',
    category: 'Videos',
    description: 'High-quality sample video editing showcase featuring color presets, tracking, and zoom effects.',
    thumbnail: 'https://img.youtube.com/vi/bt-dWL65aYA/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/bt-dWL65aYA',
    link: '#'
  },
  {
    id: 27,
    title: 'They call it Godzilla for a Reason 🦖🔥',
    category: 'Videos',
    description: 'Aggressive JDM Nissan GTR car edit with engine notes, stylized phonk beats, and speed transitions.',
    thumbnail: 'https://img.youtube.com/vi/XiSkNt2RJng/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/XiSkNt2RJng',
    link: '#'
  },
  {
    id: 28,
    title: 'The Coolest BMW Edit in CPM',
    category: 'Videos',
    description: 'Stylized gaming car parking simulator edit highlighting custom BMW setups, exhaust notes, and drift cuts.',
    thumbnail: 'https://img.youtube.com/vi/kyVNYAkMe4I/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/kyVNYAkMe4I',
    link: '#'
  },
  {
    id: 29,
    title: 'The Sound of Pure Wealth 🏎️💸',
    category: 'Videos',
    description: 'Premium supercar lifestyle edit showcasing a Ferrari drifting, engine revs, and a high-end aesthetic.',
    thumbnail: 'https://img.youtube.com/vi/rI6XSGbRxWs/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/rI6XSGbRxWs',
    link: '#'
  },
  {
    id: 30,
    title: 'BMW Attack Mode ON',
    category: 'Videos',
    description: 'Fast and punchy BMW car parking simulation edit featuring dynamic camera sweeps and high-energy music cuts.',
    thumbnail: 'https://img.youtube.com/vi/c6YwFHWw8HE/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/c6YwFHWw8HE',
    link: '#'
  },
  {
    id: 31,
    title: 'The Legendary BMW M3 💙GTR',
    category: 'Videos',
    description: 'High-octane car parking simulator edit themed after the legendary NFS Most Wanted BMW M3 GTR.',
    thumbnail: 'https://img.youtube.com/vi/3vNow-0FuuQ/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/3vNow-0FuuQ',
    link: '#'
  },
  {
    id: 32,
    title: 'She said "blah blah blah," all I heard was M4 🤫🔥',
    category: 'Videos',
    description: 'Automotive carparking edit highlighting a custom black BMW M4 Coupe with stylized phonk music sync.',
    thumbnail: 'https://img.youtube.com/vi/gTtNIMSDClw/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/gTtNIMSDClw',
    link: '#'
  },
  {
    id: 33,
    title: 'She’s a 10, but she’s a BMW 🖤',
    category: 'Videos',
    description: 'Sleek dark-themed BMW M4 Coupe edit utilizing smooth panning shots and visual styling transitions.',
    thumbnail: 'https://img.youtube.com/vi/m_6xY5MvnGM/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/m_6xY5MvnGM',
    link: '#'
  },
  {
    id: 34,
    title: 'The Tale of Dino Valley 🦖',
    category: 'Videos',
    description: 'Fun and colorful 3D kids animation story about a tiny dinosaur\'s big adventure, edited with child-friendly audio.',
    thumbnail: 'https://img.youtube.com/vi/WBkNweljX9M/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/WBkNweljX9M',
    link: '#'
  },
  {
    id: 35,
    title: 'Topper vs Backbencher | Hindi Comedy',
    category: 'Videos',
    description: 'Hilarious comedy sketch video edit outlining school classroom stereotypes with sound effects and text overlays.',
    thumbnail: 'https://img.youtube.com/vi/tbvqMgwoE3g/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/tbvqMgwoE3g',
    link: '#'
  },
  {
    id: 36,
    title: 'पुल का रहस्य | Mystery of Bridge',
    category: 'Videos',
    description: 'Suspenseful 3D animated horror story in Hindi detailing the mystery of a haunted bridge.',
    thumbnail: 'https://img.youtube.com/vi/Vnv75AmRWVA/0.jpg',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/Vnv75AmRWVA',
    link: '#'
  },
  {
    id: 37,
    title: 'PindExpress Courier Brand Mark',
    category: 'Logo',
    description: 'Modern circular mascot logo design for PindExpress delivery service, showcasing a Punjabi cultural delivery hero.',
    thumbnail: '/portfolio/images/logo-pindexpress.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/logo-pindexpress.jpg',
    link: '#'
  },
  {
    id: 38,
    title: 'Harry Plays Gaming Mascot Logo',
    category: 'Logo',
    description: 'Dynamic, high-impact gaming mascot logo design for a YouTube gaming channel, featuring a detailed tactical soldier.',
    thumbnail: '/portfolio/images/logo-harryplays.jpg',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/logo-harryplays.jpg',
    link: '#'
  },
  {
    id: 39,
    title: 'Seams Possible Identity (Teal)',
    category: 'Logo',
    description: 'Elegant golden brand emblem designed for Seams Possible Stitching Institute, set on a premium deep teal background.',
    thumbnail: '/portfolio/images/logo-seamspossible-teal.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/logo-seamspossible-teal.png',
    link: '#'
  },
  {
    id: 40,
    title: 'Seams Possible Identity (Crimson)',
    category: 'Logo',
    description: 'Elegant golden brand emblem designed for Seams Possible Stitching Institute, set on a warm corporate crimson background.',
    thumbnail: '/portfolio/images/logo-seamspossible-red.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/logo-seamspossible-red.png',
    link: '#'
  },
  {
    id: 41,
    title: '3D Punjab Print T-Shirt Mockup',
    category: '3D Models',
    description: 'A detailed 3D cloth model render of an oversized streetwear t-shirt with a custom "I Love Punjab" outline graphic.',
    thumbnail: '/portfolio/images/mockup-tshirt-punjab.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-punjab.png',
    link: '#'
  },
  {
    id: 42,
    title: '3D Cyber Balaclava T-Shirt Mockup',
    category: '3D Models',
    description: '3D model visualization of an oversized panel streetwear t-shirt with a blue pixel-art balaclava design.',
    thumbnail: '/portfolio/images/mockup-tshirt-balaclava.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-balaclava.png',
    link: '#'
  },
  {
    id: 43,
    title: '3D Scrooge Money Mindset T-Shirt',
    category: '3D Models',
    description: '3D model render of a heavy cotton black tee showcasing Scrooge McDuck holding cash with dollar signs.',
    thumbnail: '/portfolio/images/mockup-tshirt-scrooge.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-scrooge.png',
    link: '#'
  },
  {
    id: 44,
    title: '3D Goku Black Anime Tee Mockup',
    category: '3D Models',
    description: '3D cloth design of a vibrant red anime streetwear tee featuring a detailed Goku Black illustration.',
    thumbnail: '/portfolio/images/mockup-tshirt-goku.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-goku.png',
    link: '#'
  },
  {
    id: 45,
    title: '3D Roaring Tiger Streetwear Tee',
    category: '3D Models',
    description: '3D model showcase of a black streetwear tee with a roaring tiger print and red metallic slogan text.',
    thumbnail: '/portfolio/images/mockup-tshirt-tiger.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-tiger.png',
    link: '#'
  },
  {
    id: 46,
    title: '3D Aizen Sosuke Anime Tee Mockup',
    category: '3D Models',
    description: '3D clothing mockup of an oversized white t-shirt featuring a stylized typography poster design of Aizen Sosuke.',
    thumbnail: '/portfolio/images/mockup-tshirt-aizen.png',
    mediaType: 'image',
    mediaUrl: '/portfolio/images/mockup-tshirt-aizen.png',
    link: '#'
  }
];
