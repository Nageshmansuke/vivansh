/**
 * VIVANSH — CENTRAL BUSINESS CONFIG
 * ------------------------------------------------
 * Replace every value in this file with the real gym's information
 * before handing the site to a client. No other file should own
 * brand copy, prices, photos, trainers, hours or contact details.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

export const site = {
  // ── Brand ──────────────────────────────────────────────────────────
  name: 'Vivansh',
  shortName: 'Vivansh',
  legalName: 'Vivansh Pvt. Ltd.',
  tagline: 'BUILD THE STRONGER VERSION OF YOU.',
  description:
    'Premium strength, conditioning and personal training designed to help you train harder, move better and achieve measurable results.',
  foundedYear: 2018,
  // Demo location — replace with the actual gym city and locality.
  city: 'Nanded',
  locality: 'New Mondha,Harsh Nagar',

  // ── Contact (DEMO — replace before launch) ─────────────────────────
  phoneDisplay: '07741041143',
  phoneRaw: '07741041143',
  email: 'hello@vivanshhealthclub.in',
  whatsappMessage:
    'Hi The Vivansh Health Club, I would like to know more about memberships and book a free trial.',
  address: {
    line1: 'Plot 18, Road No. 12',
    line2: 'New Mondha, Harsh Nagar',
    city: 'Nanded',
    state: 'Maharashtra',
    postalCode: '431601',
    country: 'India',
    mapsQuery: 'New Mondha, Harsh Nagar Nanded',
    mapsEmbed:
      'https://www.google.com/maps?q=New+Mondha,+Harsh+Nagar,+Nanded&output=embed',
  },
  hours: [
    { days: 'Mon–Fri', time: '6:00 AM — 10:00 PM' },
    { days: 'Sat–Sun', time: '7:00 AM — 9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },

  // ── SEO ────────────────────────────────────────────────────────────
  url: 'https://vivanshhealthclub.in',
  seo: {
    title: 'The Vivansh Health Club — Build the stronger version of you.',
    description:
      'The Vivansh Health Club is a premium strength, conditioning and personal training gym in New Mondha, Harsh Nagar, Nanded. Book a complimentary trial session.',
  },

  // ── Demo disclaimer ────────────────────────────────────────────────
  demo: {
    label: 'Demo content',
    note: 'All names, prices, statistics and stories on this site are sample content for a website demonstration and should be replaced with the gym’s verified information.',
  },

  announcement:
    'Use code vivansh on your trial form · Complimentary extra guest session (sample offer)',

  offer: {
    code: 'VIVANSH',
    label: 'Complimentary extra guest session',
    detail: 'Sample campaign code. Enter it on the free-trial form. Replace with a live offer.',
  },

  nav: [
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Membership', href: '/membership' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Stats (DEMO FIGURES — replace with real numbers) ───────────────
  stats: [
    { value: 500, suffix: '+', label: 'Active members' },
    { value: 15, suffix: '+', label: 'Expert trainers' },
    { value: 8, suffix: '+', label: 'Years of experience' },
    { value: 20, suffix: '+', label: 'Weekly classes' },
  ],

  images: {
    hero: unsplash('photo-1534438327276-14e5300c3a48', 2400),
    about: unsplash('photo-1517836357463-d25dfeac3438', 1600),
    philosophy: unsplash('photo-1571902943202-507ec2618e8f', 1400),
    trial: unsplash('photo-1571019614242-c5c5dee9f50b', 1800),
    contact: unsplash('photo-1540497077202-7c8a3999166f', 1600),
    og: unsplash('photo-1534438327276-14e5300c3a48', 1200),
  },
} as const

export const philosophy = {
  eyebrow: 'Our philosophy',
  heading: 'Train with purpose.',
  body: "Training isn't about simply spending time in a gym. It's about building strength, discipline, confidence and consistency — with a plan that actually holds.",
  supporting:
    'Vivansh is built for people who want coaching, structure and a room that takes training seriously.',
  features: [
    {
      number: '01',
      title: 'Expert coaching',
      text: 'Coaches who program with intent, correct form and keep you accountable.',
    },
    {
      number: '02',
      title: 'Premium equipment',
      text: 'A strength floor and conditioning zone built for serious, repeatable work.',
    },
    {
      number: '03',
      title: 'Structured programs',
      text: 'Clear training paths for fat loss, muscle, strength and general fitness.',
    },
    {
      number: '04',
      title: 'Results-focused training',
      text: 'Progress you can measure — load, movement quality, consistency and energy.',
    },
  ],
}

export const facilities = [
  {
    number: '01',
    title: 'Strength floor',
    description: 'Olympic platforms, racks and free weights for heavy, focused lifting.',
    image: unsplash('photo-1517963879433-6ad2b056d712', 1400),
    span: 'large' as const,
  },
  {
    number: '02',
    title: 'Cardio zone',
    description: 'Treadmills, bikes and rowers for conditioning without the queue.',
    image: unsplash('photo-1538805060514-97d9cc48273b', 1000),
    span: 'medium' as const,
  },
  {
    number: '03',
    title: 'Functional training',
    description: 'Sleds, kettlebells and turf for athletic, real-world movement.',
    image: unsplash('photo-1434682881908-b43d0467b798', 1000),
    span: 'medium' as const,
  },
  {
    number: '04',
    title: 'Personal training',
    description: 'Private coaching bays for focused one-to-one sessions.',
    image: unsplash('photo-1571019613454-1cb2f99b2d8b', 900),
    span: 'small' as const,
  },
  {
    number: '05',
    title: 'Recovery area',
    description: 'Stretch, breathe and reset so the next session starts cleaner.',
    image: unsplash('photo-1544161515-4ab6ce6db874', 900),
    span: 'small' as const,
  },
  {
    number: '06',
    title: 'Group studio',
    description: 'A dedicated room for classes that still feel coached, not crowded.',
    image: unsplash('photo-1518611012118-696072aa579a', 900),
    span: 'small' as const,
  },
]

export const programs = [
  {
    slug: 'strength-conditioning',
    title: 'Strength & Conditioning',
    short: 'Build usable strength and work capacity with structured lifting and conditioning.',
    description:
      'A balanced program of compound lifting, accessory work and conditioning. Built for people who want to get stronger without losing athleticism.',
    difficulty: 'Intermediate',
    duration: '45–75 min',
    focus: 'Strength · Engine',
    image: unsplash('photo-1581009146145-b5ef050c2e1e', 1200),
  },
  {
    slug: 'personal-training',
    title: 'Personal Training',
    short: 'One-to-one coaching built around your goals, experience and schedule.',
    description:
      'Private sessions with a dedicated coach. Technique, programming and accountability — tailored, measured and adjusted as you progress.',
    difficulty: 'All levels',
    duration: '45–60 min',
    focus: '1:1 Coaching',
    image: unsplash('photo-1571019614242-c5c5dee9f50b', 1200),
  },
  {
    slug: 'fat-loss',
    title: 'Fat Loss',
    short: 'Training that supports fat loss without wrecking your strength or energy.',
    description:
      'A mix of resistance training and conditioning, programmed so you can stay consistent. Nutrition guidance is available on Elite memberships.',
    difficulty: 'Beginner+',
    duration: '45–60 min',
    focus: 'Composition',
    image: unsplash('photo-1517838277536-f5f99be501cd', 1200),
  },
  {
    slug: 'muscle-building',
    title: 'Muscle Building',
    short: 'Hypertrophy-focused training with progressive overload and recovery in mind.',
    description:
      'Volume, intensity and rest managed so muscle can actually grow. Ideal if you want visible change with a plan you can stick to.',
    difficulty: 'Intermediate',
    duration: '60–75 min',
    focus: 'Hypertrophy',
    image: unsplash('photo-1583454110551-21f2fa2afe61', 1200),
  },
  {
    slug: 'functional-fitness',
    title: 'Functional Fitness',
    short: 'Move better in the gym and outside it — strength, mobility and control.',
    description:
      'Patterns that transfer: hinge, squat, carry, push, pull and rotate. Built for people who want to feel capable, not just look trained.',
    difficulty: 'All levels',
    duration: '45–60 min',
    focus: 'Movement',
    image: unsplash('photo-1599058917212-d750089bc07e', 1200),
  },
  {
    slug: 'group-training',
    title: 'Group Training',
    short: 'Coached small-group sessions with energy, structure and proper scaling.',
    description:
      'Class formats that still respect form. You get the push of a group without being lost in a crowd.',
    difficulty: 'All levels',
    duration: '45 min',
    focus: 'Community',
    image: unsplash('photo-1576678927484-cc907957088c', 1200),
  },
]

export const trainers = [
  {
    slug: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Head Strength Coach',
    specialization: 'Strength & Conditioning',
    experience: '8 years',
    bio: 'Arjun programs strength for people who want measurable progress — from first-time lifters to competitive athletes. His sessions are precise, demanding and quietly encouraging.',
    image: unsplash('photo-1579758629938-03607ccdbaba', 900),
  },
  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    role: 'Lead Personal Trainer',
    specialization: 'Fat Loss · Hypertrophy',
    experience: '6 years',
    bio: 'Priya builds training that fits real schedules. She is known for clean programming, honest feedback and helping members stay consistent past the first eight weeks.',
    image: unsplash('photo-1594381898411-846e7d193883', 900),
  },
  {
    slug: 'rohan-desai',
    name: 'Rohan Desai',
    role: 'Conditioning Coach',
    specialization: 'Engine · Athletic Performance',
    experience: '7 years',
    bio: 'Rohan runs conditioning that makes you fitter without turning every session into chaos. Expect pacing, intent and work that actually transfers.',
    image: unsplash('photo-1605296867304-46d5465a13f1', 900),
  },
  {
    slug: 'meera-kapoor',
    name: 'Meera Kapoor',
    role: 'Group Training Lead',
    specialization: 'Group · Functional Fitness',
    experience: '5 years',
    bio: 'Meera leads the studio floor. Her classes are coached, scaled and designed so beginners and regulars can train in the same room without compromise.',
    image: unsplash('photo-1518310383802-640c2de311b2', 900),
  },
]

export const transformations = [
  {
    name: 'Karthik',
    goal: 'Strength & body composition',
    duration: '16 weeks',
    story:
      'Came in after years of inconsistent training. Followed a strength block, cleaned up sleep, and stopped chasing random workouts.',
    metrics: [
      { label: 'Training consistency', value: '4× / week' },
      { label: 'Strength focus', value: 'Squat · hinge' },
    ],
    before: unsplash('photo-1434682881908-b43d0467b798', 800),
    after: unsplash('photo-1581009146145-b5ef050c2e1e', 800),
    image: unsplash('photo-1581009146145-b5ef050c2e1e', 800),
  },
  {
    name: 'Sana',
    goal: 'Confidence & fat loss',
    duration: '12 weeks',
    story:
      'Wanted a plan she could keep. Personal training twice a week plus two group sessions. Progress came from showing up, not from extremes.',
    metrics: [
      { label: 'Sessions / week', value: '4' },
      { label: 'Focus', value: 'Strength + walk' },
    ],
    before: unsplash('photo-1518611012118-696072aa579a', 800),
    after: unsplash('photo-1541534741688-6078c8bfb527', 800),
    image: unsplash('photo-1541534741688-6078c8bfb527', 800),
  },
  {
    name: 'Vikram',
    goal: 'Muscle building',
    duration: '20 weeks',
    story:
      'Shifted from high-volume cardio to progressive lifting. The change was slower than social media promised — and more sustainable.',
    metrics: [
      { label: 'Program', value: 'Hypertrophy' },
      { label: 'Coaching', value: 'PT + review' },
    ],
    before: unsplash('photo-1538805060514-97d9cc48273b', 800),
    after: unsplash('photo-1549476464-37392f717541', 800),
    image: unsplash('photo-1549476464-37392f717541', 800),
  },
]

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 1999,
    period: '/ month',
    duration: 'Month-to-month',
    popular: false,
    cta: 'Start with Starter',
    features: ['Gym access', 'Locker access', 'Basic fitness assessment'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 2999,
    period: '/ month',
    duration: 'Month-to-month',
    popular: true,
    cta: 'Choose Pro',
    features: [
      'Everything in Starter',
      'Group classes',
      'Monthly progress review',
      'Training guidance',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 4999,
    period: '/ month',
    duration: 'Month-to-month',
    popular: false,
    cta: 'Go Elite',
    features: [
      'Everything in Pro',
      'Personal training sessions',
      'Nutrition guidance',
      'Priority support',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'The room is serious without being unfriendly. Programming is clear, coaches actually coach, and I finally stopped guessing what to do each day.',
    name: 'Ananya R.',
    goal: 'Strength',
    rating: 5,
  },
  {
    quote:
      'I joined for personal training. Sessions are structured, form is corrected early, and I leave knowing exactly what the next week looks like.',
    name: 'Dev P.',
    goal: 'Personal training',
    rating: 5,
  },
  {
    quote:
      'Group classes here don’t feel like a crowd. They scale the work, watch movement, and still keep the energy high.',
    name: 'Nisha M.',
    goal: 'Group training',
    rating: 5,
  },
]

export const gallery = [
  {
    id: 'g1',
    category: 'GYM',
    title: 'Strength floor at dusk',
    image: unsplash('photo-1534438327276-14e5300c3a48', 1200),
  },
  {
    id: 'g2',
    category: 'TRAINING',
    title: 'Barbell work',
    image: unsplash('photo-1517836357463-d25dfeac3438', 900),
  },
  {
    id: 'g3',
    category: 'EQUIPMENT',
    title: 'Racks and platforms',
    image: unsplash('photo-1540497077202-7c8a3999166f', 900),
  },
  {
    id: 'g4',
    category: 'TRAINING',
    title: 'Coached session',
    image: unsplash('photo-1571019613454-1cb2f99b2d8b', 1100),
  },
  {
    id: 'g5',
    category: 'COMMUNITY',
    title: 'Studio class',
    image: unsplash('photo-1576678927484-cc907957088c', 1000),
  },
  {
    id: 'g6',
    category: 'GYM',
    title: 'Open floor',
    image: unsplash('photo-1571902943202-507ec2618e8f', 1200),
  },
  {
    id: 'g7',
    category: 'EQUIPMENT',
    title: 'Free weights',
    image: unsplash('photo-1517963879433-6ad2b056d712', 900),
  },
  {
    id: 'g8',
    category: 'COMMUNITY',
    title: 'Training together',
    image: unsplash('photo-1518611012118-696072aa579a', 900),
  },
  {
    id: 'g9',
    category: 'TRAINING',
    title: 'Conditioning',
    image: unsplash('photo-1599058917212-d750089bc07e', 1000),
  },
]

export const galleryFilters = ['ALL', 'GYM', 'TRAINING', 'EQUIPMENT', 'COMMUNITY'] as const

export const referralSources = [
  'Instagram',
  'Google',
  'Friend / family',
  'Walk-in',
  'WhatsApp',
  'Other',
] as const

export const fitnessGoals = [
  'Fat Loss',
  'Muscle Building',
  'Strength',
  'General Fitness',
  'Personal Training',
  'Other',
] as const

export const trialSlots = [
  '06:00 AM',
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '12:00 PM',
  '05:00 PM',
  '06:30 PM',
  '08:00 PM',
]

/** Annual billed as 10 months — two months complimentary. Demo policy. */
export const annualMultiplier = 10

export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const

export const weeklyClasses = [
  { id: 'c1', day: 'Mon', name: 'Strength Lab', coach: 'Arjun Mehta', start: '06:30', end: '07:30', level: 'Intermediate', spots: 4, capacity: 16, room: 'Strength floor' },
  { id: 'c2', day: 'Mon', name: 'Vivansh Engine', coach: 'Rohan Desai', start: '07:45', end: '08:30', level: 'All levels', spots: 2, capacity: 18, room: 'Functional' },
  { id: 'c3', day: 'Mon', name: 'Hypertrophy', coach: 'Priya Nair', start: '18:00', end: '19:00', level: 'Intermediate', spots: 6, capacity: 14, room: 'Strength floor' },
  { id: 'c4', day: 'Mon', name: 'Studio Vivansh', coach: 'Meera Kapoor', start: '19:15', end: '20:00', level: 'All levels', spots: 3, capacity: 20, room: 'Group studio' },
  { id: 'c5', day: 'Tue', name: 'Fat Loss Engine', coach: 'Priya Nair', start: '06:30', end: '07:20', level: 'Beginner+', spots: 5, capacity: 16, room: 'Functional' },
  { id: 'c6', day: 'Tue', name: 'Mobility Reset', coach: 'Meera Kapoor', start: '12:15', end: '13:00', level: 'All levels', spots: 8, capacity: 14, room: 'Recovery' },
  { id: 'c7', day: 'Tue', name: 'Strength Lab', coach: 'Arjun Mehta', start: '18:30', end: '19:30', level: 'Intermediate', spots: 1, capacity: 16, room: 'Strength floor' },
  { id: 'c8', day: 'Wed', name: 'Conditioning', coach: 'Rohan Desai', start: '06:30', end: '07:20', level: 'All levels', spots: 7, capacity: 18, room: 'Functional' },
  { id: 'c9', day: 'Wed', name: 'Personal Training block', coach: 'Priya Nair', start: '09:00', end: '12:00', level: '1:1', spots: 2, capacity: 6, room: 'PT bays' },
  { id: 'c10', day: 'Wed', name: 'Studio Vivansh', coach: 'Meera Kapoor', start: '19:00', end: '19:45', level: 'All levels', spots: 4, capacity: 20, room: 'Group studio' },
  { id: 'c11', day: 'Thu', name: 'Strength Lab', coach: 'Arjun Mehta', start: '06:30', end: '07:30', level: 'Intermediate', spots: 3, capacity: 16, room: 'Strength floor' },
  { id: 'c12', day: 'Thu', name: 'Hypertrophy', coach: 'Priya Nair', start: '18:00', end: '19:00', level: 'Intermediate', spots: 5, capacity: 14, room: 'Strength floor' },
  { id: 'c13', day: 'Thu', name: 'Vivansh Engine', coach: 'Rohan Desai', start: '19:15', end: '20:00', level: 'All levels', spots: 2, capacity: 18, room: 'Functional' },
  { id: 'c14', day: 'Fri', name: 'Athletic Mix', coach: 'Rohan Desai', start: '07:00', end: '07:50', level: 'Intermediate', spots: 6, capacity: 16, room: 'Functional' },
  { id: 'c15', day: 'Fri', name: 'Studio Vivansh', coach: 'Meera Kapoor', start: '18:30', end: '19:15', level: 'All levels', spots: 9, capacity: 20, room: 'Group studio' },
  { id: 'c16', day: 'Sat', name: 'Strength Lab', coach: 'Arjun Mehta', start: '08:00', end: '09:00', level: 'All levels', spots: 4, capacity: 16, room: 'Strength floor' },
  { id: 'c17', day: 'Sat', name: 'Community Conditioning', coach: 'Meera Kapoor', start: '09:15', end: '10:00', level: 'All levels', spots: 1, capacity: 22, room: 'Group studio' },
  { id: 'c18', day: 'Sun', name: 'Mobility + Strength', coach: 'Priya Nair', start: '08:30', end: '09:30', level: 'All levels', spots: 7, capacity: 14, room: 'Recovery' },
  { id: 'c19', day: 'Sun', name: 'Open floor coaching', coach: 'Arjun Mehta', start: '10:00', end: '12:00', level: 'Drop-in', spots: 10, capacity: 24, room: 'Strength floor' },
] as const

export const visitSteps = [
  { number: '01', title: 'Book a trial', text: 'Pick a slot. We confirm by call or WhatsApp — no payment on the first visit.' },
  { number: '02', title: 'Walk the floor', text: 'A coach shows you the rooms, the flow of a session, and where you would actually train.' },
  { number: '03', title: 'Train once', text: 'A coached session, scaled to you. Enough to feel the standard — not a sales circuit.' },
  { number: '04', title: 'Choose with clarity', text: 'Starter, Pro or Elite. If it is not the right room, you leave with a plan anyway.' },
]

export const firstVisit = {
  eyebrow: 'Your first hour',
  heading: 'Arrive ready. Leave with a plan.',
  items: [
    { title: 'Ten minutes early', text: 'Check in, lockers, a short movement screen — not a 40-minute questionnaire.' },
    { title: 'What to bring', text: 'Training shoes, a bottle, a towel. We provide the rest of the floor.' },
    { title: 'How it feels', text: 'Coached, not chaotic. You will know what the next week could look like before you leave.' },
    { title: 'Parking & access', text: 'Demo note: basement parking and lift access. Replace with the real gym’s instructions.' },
  ],
}

export const faqs = [
  {
    q: 'Can I train before I buy a membership?',
    a: 'Yes. Book a complimentary trial, meet a coach, and walk the floor first. The trial form on this demo does not charge a card.',
  },
  {
    q: 'Which plan should I start with?',
    a: 'Most people start on Pro if they want classes and a monthly review. Starter is floor access. Elite adds personal training and nutrition guidance. A coach can help you choose on WhatsApp.',
  },
  {
    q: 'Are the prices on this site final?',
    a: 'No. These are demonstration rates for a website preview and should be replaced with the gym’s live offer.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes. One-to-one coaching is available on its own and included in the Elite sample plan. Request a coach when you book a trial.',
  },
  {
    q: 'How do group classes work?',
    a: 'Classes are coached and scaled. See the weekly schedule for sample times. In production, members can reserve a spot from this timetable.',
  },
  {
    q: 'Is there a joining fee or lock-in?',
    a: 'The demo plans are shown month-to-month, with an annual option billed as ten months. Replace this with the gym’s actual contract terms.',
  },
  {
    q: 'What should I wear for the trial?',
    a: 'Training shoes, comfortable kit, a water bottle and a towel. If you have an injury, mention it on the trial form so the coach can scale the session.',
  },
  {
    q: 'Can companies enrol a team?',
    a: 'Yes — a corporate membership can be scoped after a visit. Use WhatsApp and ask for the corporate desk. This is sample copy until the real offer is added.',
  },
]

export const planComparison = [
  { feature: 'Gym floor access', starter: true, pro: true, elite: true },
  { feature: 'Locker access', starter: true, pro: true, elite: true },
  { feature: 'Fitness assessment', starter: true, pro: true, elite: true },
  { feature: 'Group classes', starter: false, pro: true, elite: true },
  { feature: 'Monthly progress review', starter: false, pro: true, elite: true },
  { feature: 'Training guidance', starter: false, pro: true, elite: true },
  { feature: 'Personal training sessions', starter: false, pro: false, elite: true },
  { feature: 'Nutrition guidance', starter: false, pro: false, elite: true },
  { feature: 'Priority class booking', starter: false, pro: false, elite: true },
  { feature: 'Guest passes / month', starter: '—', pro: '1', elite: '2' },
]

export const tickerItems = [
  'Strength with a plan',
  'Coaches on the floor',
  'Measurable progress',
  'Classes that scale',
  'Recovery that counts',
  'Hyderabad · Banjara Hills',
  'Complimentary trial',
]

export const instagram = [
  { id: 'ig1', image: unsplash('photo-1534438327276-14e5300c3a48', 700), caption: 'Morning strength floor' },
  { id: 'ig2', image: unsplash('photo-1517836357463-d25dfeac3438', 700), caption: 'Barbell work' },
  { id: 'ig3', image: unsplash('photo-1571019613454-1cb2f99b2d8b', 700), caption: 'Coached session' },
  { id: 'ig4', image: unsplash('photo-1576678927484-cc907957088c', 700), caption: 'Studio class' },
  { id: 'ig5', image: unsplash('photo-1599058917212-d750089bc07e', 700), caption: 'Engine work' },
  { id: 'ig6', image: unsplash('photo-1540497077202-7c8a3999166f', 700), caption: 'The racks' },
]

export type Program = (typeof programs)[number]
export type Trainer = (typeof trainers)[number]
export type Plan = (typeof plans)[number]
export type GalleryItem = (typeof gallery)[number]
export type GalleryFilter = (typeof galleryFilters)[number]
export type WeekDay = (typeof weekDays)[number]
export type GymClass = (typeof weeklyClasses)[number]
