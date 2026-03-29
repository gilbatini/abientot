export const BRAND = {
  name:     'À Bientôt Tour & Travels',
  tagline:  "Let's Explore",
  slogan:   'Crafted for those who dare to explore',
  email:    'abientottours2023@gmail.com',
  phones:   ['+256 788 138 721', '+256 752 338 938', '+256 757 163 630', '+256 704 100 060'],
  address:  'Reed Complex, Ntinda Kiwatule, Kampala, Uganda',
  hours: {
    weekdays: 'Mon–Fri 8am–6pm',
    saturday: 'Sat 9am–4pm',
    sunday:   'Sunday Closed',
  },
  social: {
    instagram: '#',
    facebook:  '#',
    twitter:   '#',
    whatsapp:  'https://wa.me/256788138721',
  },
  stats: [
    { value: '500+',   label: 'Safari Tours' },
    { value: '2,000+', label: 'Happy Travelers' },
    { value: '4.9',    label: 'Average Rating', star: true },
    { value: '15+',    label: 'Years Experience' },
  ],
}

export const NAV_LINKS = [
  { label: 'Home',             href: '/' },
  {
    label: 'About Us', href: '/about',
    children: [
      { label: 'The Team', href: '/about#team',    icon: 'users',    desc: 'Meet our experts' },
      { label: 'FAQ',      href: '/about#faq',     icon: 'help',     desc: 'Common questions' },
      { label: 'Contact',  href: '/contact',        icon: 'mail',     desc: 'Get in touch' },
    ],
  },
  { label: 'Safari Packages',  href: '/safari-packages' },
  {
    label: 'Resources', href: '#',
    children: [
      { label: 'Blog',    href: '/blog',    icon: 'pen',  desc: 'Travel stories & guides' },
      { label: 'Reviews', href: '/reviews', icon: 'star', desc: 'What travellers say' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const DESTINATIONS = [
  { name: 'Bwindi Forest',       country: 'Uganda', tag: 'Gorilla Trekking', nights: '3–5', image: '/images/bwindi.jpg' },
  { name: 'Murchison Falls',     country: 'Uganda', tag: 'Wildlife Safari',  nights: '2–4', image: '/images/murchison.jpg' },
  { name: 'Queen Elizabeth NP',  country: 'Uganda', tag: 'Big Five',         nights: '2–3', image: '/images/queen-elizabeth.jpg' },
  { name: 'Lake Bunyonyi',       country: 'Uganda', tag: 'Relaxation',       nights: '1–2', image: '/images/lake-bunyonyi.jpg' },
  { name: 'Kidepo Valley',       country: 'Uganda', tag: 'Off the Beaten Path', nights: '3–4', image: '/images/kidepo.jpg' },
]

export const SERVICES = [
  {
    title:    'Flight Booking & Ticketing',
    desc:     'Easy-to-use platform for reserving and purchasing seats on planes for domestic and international destinations worldwide.',
    features: ['Domestic & international flights', 'Best fare guarantee', 'Flexible cancellation', 'Group booking discounts'],
    icon:     'plane',
    href:     '/safari-packages/flights',
  },
  {
    title:    'Airport Pickup & Private Car',
    desc:     'Hassle-free and luxurious transportation to hotels, business centers, and tourist attractions across Uganda.',
    features: ['24/7 availability', 'Meet & greet service', 'Luxury vehicles', 'Experienced drivers'],
    icon:     'car',
    href:     '/safari-packages/airport-pickup',
  },
  {
    title:    'Hotel Reservations',
    desc:     'Stress-free accommodation booking with access to the finest hotels, lodges, and resorts across Uganda and beyond.',
    features: ['Hand-picked properties', 'Best rate guarantee', 'Safari lodges & camps', 'Boutique hotels'],
    icon:     'building',
    href:     '/safari-packages/hotels',
  },
  {
    title:    'Glamping Adventure',
    desc:     'All-inclusive glamping experience combining luxury comfort with the raw beauty of Uganda\'s wilderness.',
    features: ['Luxury tented camps', 'All-inclusive packages', 'Private chef', 'Stargazing experiences'],
    icon:     'tent',
    href:     '/safari-packages/glamping',
  },
  {
    title:    'Weekend Bed & Breakfast',
    desc:     'Short-term accommodation with home-cooked breakfast, perfect for weekend getaways and short breaks in Uganda.',
    features: ['Handpicked B&Bs', 'Home-cooked meals', 'Local experiences', 'Weekend packages'],
    icon:     'coffee',
    href:     '/safari-packages/bnb',
  },
  {
    title:    'Wildlife Safaris & Tour Packages',
    desc:     'Expert-guided wildlife safaris and cultural tours across Uganda\'s magnificent national parks and heritage sites.',
    features: ['Expert local guides', 'Custom itineraries', 'Gorilla permits', 'All parks covered'],
    icon:     'binoculars',
    href:     '/safari-packages/wildlife',
  },
]

export const TESTIMONIALS = [
  {
    name:    'Sarah M.',
    country: 'United Kingdom',
    rating:  5,
    text:    'The gorilla trekking experience was absolutely life-changing. À Bientôt handled everything flawlessly — from Entebbe pickup to the forest guides. I was face-to-face with a silverback. Nothing prepares you for that.',
    avatar:  'S',
  },
  {
    name:    'James K.',
    country: 'United States',
    rating:  5,
    text:    "I've used a dozen travel agencies across Africa. None come close to the attention to detail À Bientôt brings. They answered messages at midnight. Everything was seamless, beautiful, and perfectly paced.",
    avatar:  'J',
  },
  {
    name:    'Anna L.',
    country: 'Germany',
    rating:  5,
    text:    'Our family safari to Queen Elizabeth National Park exceeded every expectation. The children were mesmerised by the tree-climbing lions. À Bientôt made it feel effortless — every detail handled with care.',
    avatar:  'A',
  },
]

export const BLOG_POSTS = [
  {
    slug:    'best-uganda-safari-packages',
    title:   'Explore the Best Uganda Safari Packages',
    excerpt: 'Uganda, often called the Pearl of Africa, offers an incredible blend of natural wonders, diverse wildlife, and vibrant cultural experiences.',
    cat:     'Safaris',
    date:    'Dec 15, 2024',
    read:    '8 min read',
    image:   'https://abientot-nextjs.vercel.app/images/blog-1.jpg',
  },
  {
    slug:    'silverback-gorillas-uganda',
    title:   'The Mighty Silverback Gorillas of Uganda',
    excerpt: 'Deep in the misty forests of southwestern Uganda, the mighty silverback gorillas reign as guardians of the jungle.',
    cat:     'Wildlife',
    date:    'Nov 28, 2024',
    read:    '10 min read',
    image:   'https://abientot-nextjs.vercel.app/images/blog-2.jpg',
  },
  {
    slug:    'enchanting-wonders-uganda',
    title:   'Explore the Enchanting Wonders of Uganda',
    excerpt: 'From the snow-capped Rwenzori Mountains to the shores of Lake Victoria, discover the diverse tourist attractions that make Uganda truly the Pearl of Africa.',
    cat:     'Destinations',
    date:    'Oct 20, 2024',
    read:    '12 min read',
    image:   'https://abientot-nextjs.vercel.app/images/blog-3.jpg',
  },
]
