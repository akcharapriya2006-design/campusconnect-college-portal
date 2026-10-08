/**
 * CampusConnect - College Event & Student Activity Portal
 * Vanilla JavaScript implementation with LocalStorage persistence
 */

// ==========================================================================
// 1. SAMPLE DATA
// ==========================================================================

const INITIAL_EVENTS = [
  // ================= 1. TECHNICAL (3 Events) =================
  {
    id: 'evt-101',
    title: 'TechFest 2026: Quantum Leap',
    category: 'Technical',
    date: 'Oct 24, 2026',
    time: '09:00 AM - 05:30 PM',
    venue: 'Main Auditorium & Tech Complex',
    image: 'assets/images/techfest.jpg',
    totalSeats: 350,
    availableSeats: 85,
    shortDesc: 'The flagship annual technology festival showcasing robotics, AI hackathons, technical paper presentations, and tech expos.',
    fullDesc: 'TechFest 2026 brings together the brightest minds across 40+ engineering colleges. Featuring 12 technical tracks, autonomous robot racing, quantum computing talks, and an open innovation showcase. Open to all engineering and science students.',
    organizer: 'Department of Computer Science & Engineering',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    perks: [
      'Cash prizes worth ₹1,50,000',
      'Official Certificate of Participation',
      'Free lunch, goodies & workshop kit',
      'Direct interview access with top tech sponsors'
    ]
  },
  {
    id: 'evt-102',
    title: 'AI & Innovation Summit',
    category: 'Technical',
    date: 'Oct 28, 2026',
    time: '10:00 AM - 04:00 PM',
    venue: 'Convention Hall B',
    image: 'assets/images/ai_summit.jpg',
    totalSeats: 200,
    availableSeats: 42,
    shortDesc: 'Explore Generative AI, Large Language Models, and deep tech entrepreneurship with industry engineers and researchers.',
    fullDesc: 'Join keynote speakers from leading tech organizations and startup incubators. Learn how modern AI agents and neural architectures are revolutionizing healthcare, finance, and software engineering. Includes interactive Q&A and networking lounge.',
    organizer: 'Centre for Artificial Intelligence & Robotics',
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)',
    perks: [
      'Hands-on GenAI lab access credentials',
      'Summit delegate badge & certificate',
      'High-tea and 1-on-1 mentor networking',
      'Complimentary access to research papers repository'
    ]
  },
  {
    id: 'evt-103',
    title: 'Robotics & IoT Expo',
    category: 'Technical',
    date: 'Nov 05, 2026',
    time: '10:00 AM - 05:00 PM',
    venue: 'Advanced Engineering Tech Center',
    image: 'assets/images/robotics_expo.jpg',
    totalSeats: 250,
    availableSeats: 60,
    shortDesc: 'Live demonstrations of autonomous drones, quadcopters, robotic arms, smart microcontrollers, and IoT sensor networks.',
    fullDesc: 'An interactive showcase featuring 45+ student robotics projects. See autonomous rovers navigate obstacle tracks, industrial robotic arm demonstrations, and smart home IoT automation in action. Includes live judging and project grants.',
    organizer: 'Innovation & Robotics Club and Dept of ECE',
    bgGradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    perks: [
      'Project presentation certificates',
      'Seed grant awards for best hardware prototypes',
      'Hardware toolkits and microcontroller gift sets',
      'Industry internship interview opportunities'
    ]
  },

  // ================= 2. WORKSHOP (3 Events) =================
  {
    id: 'evt-201',
    title: 'Full-Stack Web Dev Workshop',
    category: 'Workshop',
    date: 'Nov 02, 2026',
    time: '01:30 PM - 05:30 PM',
    venue: 'Advanced Computing Lab 3',
    image: 'assets/images/webdev_workshop.jpg',
    totalSeats: 80,
    availableSeats: 18,
    shortDesc: 'Hands-on practical workshop covering modern responsive UI, Bootstrap, REST APIs, and production deployment workflows.',
    fullDesc: 'A fast-paced, beginner-friendly coding bootcamp designed for students aiming for summer internships. Bring your laptop and build a live portfolio project from scratch with guidance from senior full-stack mentors.',
    organizer: 'Campus Coding Club & ACM Student Chapter',
    bgGradient: 'linear-gradient(135deg, #14532d 0%, #065f46 100%)',
    perks: [
      'Verified Skill Workshop Certificate',
      'Complete starter boilerplate code repository',
      '1-month free premium cloud hosting credits',
      'Internship referral recommendation for top performers'
    ]
  },
  {
    id: 'evt-202',
    title: 'UI/UX Design & Prototyping Workshop',
    category: 'Workshop',
    date: 'Nov 12, 2026',
    time: '02:00 PM - 06:00 PM',
    venue: 'Design Thinking Studio & Media Lab',
    image: 'assets/images/uiux_workshop.jpg',
    totalSeats: 70,
    availableSeats: 22,
    shortDesc: 'Master design thinking, user persona mapping, wireframing, interactive Figma prototyping, and design systems.',
    fullDesc: 'Learn the exact UX workflows used by top product companies. Work in teams to solve a real campus UX problem, conduct user interviews, build wireframes, and create a clickable interactive mobile prototype in Figma.',
    organizer: 'Arts & Design Club and Dept of Information Technology',
    bgGradient: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)',
    perks: [
      'Official Figma certification credential',
      'UI Design System & component kit bundle',
      'Portfolio critique session with senior product designers',
      'Free design stickers & stationery kit'
    ]
  },
  {
    id: 'evt-203',
    title: 'Cybersecurity & Ethical Hacking Workshop',
    category: 'Workshop',
    date: 'Nov 16, 2026',
    time: '10:00 AM - 03:30 PM',
    venue: 'Network Security Research Lab',
    image: 'assets/images/cybersecurity_workshop.jpg',
    totalSeats: 90,
    availableSeats: 28,
    shortDesc: 'Learn network packet analysis, vulnerability scanning, threat modeling, and defensive cyber security fundamentals.',
    fullDesc: 'Intensive defensive security bootcamp covering web vulnerabilities, penetration testing tools, secure coding standards, and live Capture-The-Flag (CTF) challenges in a sandbox network environment.',
    organizer: 'Cyber Defense Forum & Dept of CSE',
    bgGradient: 'linear-gradient(135deg, #022c22 0%, #115e59 100%)',
    perks: [
      'Cyber Defense Specialist Certificate',
      'Hands-on CTF challenge badge',
      'Access to cybersecurity sandbox virtual labs',
      'Networking with enterprise security consultants'
    ]
  },

  // ================= 3. SPORTS (3 Events) =================
  {
    id: 'evt-301',
    title: 'Annual Inter-Collegiate Sports Meet',
    category: 'Sports',
    date: 'Nov 08 - 10, 2026',
    time: '07:30 AM - 06:00 PM',
    venue: 'University Stadium & Sports Arena',
    image: 'assets/images/sports_meet.jpg',
    totalSeats: 500,
    availableSeats: 160,
    shortDesc: 'Three days of high-octane athletics, football, cricket, badminton, volleyball, and track events with 30+ university teams.',
    fullDesc: 'Showcase your athletic prowess and cheer for your college contingent! Features men and women categories for 100m, 400m relay, long jump, football championship, and indoor badminton. Trophies awarded on the grand closing day.',
    organizer: 'Department of Physical Education & Sports Council',
    bgGradient: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)',
    perks: [
      'Champion shields, medals & certificates',
      'Sports energy packs & official team jerseys',
      'Physiotherapist and medical care on site',
      'Selection opportunity for University State Team'
    ]
  },
  {
    id: 'evt-302',
    title: 'Inter-College Cricket Championship',
    category: 'Sports',
    date: 'Nov 14 - 17, 2026',
    time: '08:30 AM - 05:00 PM',
    venue: 'University Cricket Pavilion & Oval Ground',
    image: 'assets/images/cricket_championship.jpg',
    totalSeats: 320,
    availableSeats: 95,
    shortDesc: 'T20 knockout collegiate tournament featuring 16 premier university teams battling for the Chancellor Cricket Cup.',
    fullDesc: 'Experience the electric excitement of live college cricket under professional umpiring! Featuring turf pitch conditions, digital live scoreboard streaming, Man of the Match awards for every fixture, and the grand finals presentation ceremony.',
    organizer: 'Sports & Fitness Club and University Cricket Board',
    bgGradient: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
    perks: [
      'Championship Winner Trophy & Cash Prize',
      'Custom player jerseys & cricket kit sponsor vouchers',
      'Live YouTube streaming coverage',
      'Player of the Tournament awards'
    ]
  },
  {
    id: 'evt-303',
    title: 'Campus Athletics & Fitness Challenge',
    category: 'Sports',
    date: 'Nov 20, 2026',
    time: '07:00 AM - 01:00 PM',
    venue: 'Central Sports Complex & Track',
    image: 'assets/images/athletics_fitness.jpg',
    totalSeats: 200,
    availableSeats: 70,
    shortDesc: 'Obstacle courses, 100m hurdles, high jump, CrossFit endurance tests, and relay races open to all college students.',
    fullDesc: 'Test your stamina, agility, and determination in our campus fitness showdown! Open to students across all departments and years. Includes strength categories, sprint challenges, obstacle courses, and fitness assessment metrics.',
    organizer: 'Campus Fitness Club & Health Wellness Center',
    bgGradient: 'linear-gradient(135deg, #9a3412 0%, #c2410c 100%)',
    perks: [
      'Gold, Silver & Bronze athletic medals',
      'Hydration and protein snack packs',
      'Free 3-month campus gym membership pass',
      'Official Fitness Champion Certificate'
    ]
  },

  // ================= 4. CULTURAL (3 Events) =================
  {
    id: 'evt-401',
    title: 'Rhythm & Vibes: Cultural Fest 2026',
    category: 'Cultural',
    date: 'Nov 18, 2026',
    time: '04:00 PM - 10:00 PM',
    venue: 'Open Air Amphitheatre',
    image: 'assets/images/cultural_fest.jpg',
    totalSeats: 800,
    availableSeats: 210,
    shortDesc: 'The biggest musical evening of the year featuring student bands, choreography competitions, fashion show, and celebrity DJ night.',
    fullDesc: 'Celebrate campus diversity, art, and music under the stars! Enjoy dazzling street dances, acoustic acoustic battles, theater skits, food stalls, and the headline performance by our celebrity guest music group.',
    organizer: 'Student Cultural Affairs Council',
    bgGradient: 'linear-gradient(135deg, #581c87 0%, #831843 100%)',
    perks: [
      'All-access concert wristband',
      'Free carnival food coupons',
      'Trophies for Battle of the Bands winners',
      'Live streaming on university social media'
    ]
  },
  {
    id: 'evt-402',
    title: 'Battle of the Bands: Rock & Fusion',
    category: 'Cultural',
    date: 'Nov 22, 2026',
    time: '05:00 PM - 09:30 PM',
    venue: 'College Amphitheatre Main Stage',
    image: 'assets/images/battle_of_bands.jpg',
    totalSeats: 600,
    availableSeats: 140,
    shortDesc: 'Inter-collegiate live music championship featuring 12 student rock, jazz, acoustic, and fusion bands competing for top honors.',
    fullDesc: 'Witness explosive musical talent on a stadium concert stage! Top student bands perform original compositions and crowd-favorite covers with professional stage lighting, audio mixing, and guest music producer judges.',
    organizer: 'Campus Music Society & Cultural Committee',
    bgGradient: 'linear-gradient(135deg, #4c1d95 0%, #6b21a8 100%)',
    perks: [
      'Recording studio voucher for the winning band',
      'Best Guitarist, Drummer, and Vocalist trophies',
      'VIP front-row access for registered delegates',
      'Official festival merchandise pass'
    ]
  },
  {
    id: 'evt-403',
    title: 'Traditional Arts & Folk Dance Festival',
    category: 'Cultural',
    date: 'Nov 27, 2026',
    time: '03:00 PM - 08:30 PM',
    venue: 'Grand University Auditorium',
    image: 'assets/images/traditional_arts.jpg',
    totalSeats: 700,
    availableSeats: 180,
    shortDesc: 'A grand celebration of classical folk dance, regional music, traditional attire showcases, and heritage art displays.',
    fullDesc: 'Immerse yourself in rich cultural diversity, classical choreography, and instrumental performances. Over 20 college dance troupes present synchronized classical, folk, and fusion performances with traditional floral decorations and gala festivities.',
    organizer: 'Department of Fine Arts & Cultural Heritage Society',
    bgGradient: 'linear-gradient(135deg, #831843 0%, #9d174d 100%)',
    perks: [
      'Traditional festival feast pass',
      'Heritage commemorative certificates',
      'Best Troupe Trophy & medals',
      'High-definition photo package for all participants'
    ]
  },

  // ================= 5. HACKATHON (3 Events) =================
  {
    id: 'evt-501',
    title: '24-Hour National Coding Challenge',
    category: 'Hackathon',
    date: 'Nov 24 - 25, 2026',
    time: '10:00 AM (24-Hour Hack)',
    venue: 'Innovation & Incubation Hub',
    image: 'assets/images/hackathon.jpg',
    totalSeats: 120,
    availableSeats: 26,
    shortDesc: 'Form teams of up to 4 members to solve real-world industry problems in Healthcare, FinTech, and Smart Campus systems.',
    fullDesc: 'Non-stop collaborative hackathon with mentors from Google, Microsoft, and leading fintech startups on site. Round-the-clock coffee, snacks, ergonomic workspaces, and lightning pitches in front of angel investors.',
    organizer: 'Entrepreneurship Development Cell (E-Cell)',
    bgGradient: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
    perks: [
      'Grand prize pool of ₹1,00,000 + Seed funding support',
      'Incubation workspace offer for winning team',
      'Free meals, late-night pizza, and swag bags',
      'Direct fast-track interview rounds for internships'
    ]
  },
  {
    id: 'evt-502',
    title: 'AI for Good: Global Impact Hackathon',
    category: 'Hackathon',
    date: 'Dec 02 - 03, 2026',
    time: '09:00 AM (36-Hour Hack)',
    venue: 'AI Center of Excellence & Lab Complex',
    image: 'assets/images/ai_hackathon.jpg',
    totalSeats: 100,
    availableSeats: 32,
    shortDesc: 'Build AI-powered solutions addressing climate change, healthcare diagnostics, education accessibility, and disaster relief.',
    fullDesc: 'Apply machine learning, computer vision, and NLP to high-impact humanitarian challenges. Teams get access to GPU compute clusters, mentorship from research scientists, and chance to present to non-profit organizations and venture partners.',
    organizer: 'Centre for AI Research & Global Impact Club',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 100%)',
    perks: [
      '₹80,000 in sustainability innovation grants',
      'Cloud GPU compute credits for all teams',
      'Mentorship from AI research scientists',
      'Direct deployment pilot on university campus'
    ]
  },
  {
    id: 'evt-503',
    title: 'Smart Campus Innovation Challenge',
    category: 'Hackathon',
    date: 'Dec 08 - 09, 2026',
    time: '09:30 AM (24-Hour Hack)',
    venue: 'Campus Tech Park & IoT Lab',
    image: 'assets/images/smart_campus_challenge.jpg',
    totalSeats: 110,
    availableSeats: 35,
    shortDesc: 'Design IoT hardware, smart energy management, library automation, and campus safety mobile applications.',
    fullDesc: 'Develop functional software or hardware prototypes that directly improve university student life! From canteen queue optimizers and smart classroom attendance to automated energy saving sensors. Winning solutions get funded and deployed on campus.',
    organizer: 'Office of Campus Administration & IEEE Student Branch',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    perks: [
      'University Chancellor Innovation Trophy & ₹75,000 prize',
      'Campus live pilot deployment contract',
      'Hardware sensor component kits provided',
      'Certificate of Engineering Distinction'
    ]
  }
];

const INITIAL_CLUBS = [
  {
    id: 'club-coding',
    name: 'Coding Club',
    icon: '💻',
    category: 'Technical',
    members: '480+ Members',
    schedule: 'Every Wednesday • 4:30 PM',
    description: 'Master data structures, algorithms, competitive programming, and collaborative open-source web development projects.'
  },
  {
    id: 'club-arts',
    name: 'Arts & Design Club',
    icon: '🎨',
    category: 'Creative Arts',
    members: '260+ Members',
    schedule: 'Every Thursday • 5:00 PM',
    description: 'Explore UI/UX product design, digital illustrations, poster making, canvas painting, and campus exhibition setups.'
  },
  {
    id: 'club-photography',
    name: 'Photography Club',
    icon: '📸',
    category: 'Media & Arts',
    members: '190+ Members',
    schedule: 'Alternate Saturdays • 9:00 AM',
    description: 'Learn DSLR photography, drone videography, Lightroom color grading, and document official college flagship festivals.'
  },
  {
    id: 'club-sports',
    name: 'Sports & Fitness Club',
    icon: '🏏',
    category: 'Athletics',
    members: '620+ Members',
    schedule: 'Daily Morning & Evening',
    description: 'Join regular cricket nets, football matches, badminton leagues, table tennis tournaments, and fitness conditioning.'
  },
  {
    id: 'club-literary',
    name: 'Literary & Debate Club',
    icon: '📚',
    category: 'Humanities',
    members: '175+ Members',
    schedule: 'Every Friday • 4:00 PM',
    description: 'Sharpen public speaking, parliamentary debating, creative writing, elocution, Model United Nations, and book reviews.'
  },
  {
    id: 'club-innovation',
    name: 'Innovation & Robotics Club',
    icon: '🚀',
    category: 'Engineering & R&D',
    members: '310+ Members',
    schedule: 'Every Tuesday • 4:30 PM',
    description: 'Build autonomous rovers, IoT automation devices, quadcopters, and participate in national level robotics challenges.'
  }
];

const INITIAL_ANNOUNCEMENTS = [
  {
    id: 'anc-1',
    category: 'Hackathon',
    badgeClass: 'bg-primary-subtle text-primary',
    date: 'Oct 08, 2026',
    title: 'Hackathon Registration Open: TechFest 2026',
    shortDesc: 'Early bird registration is now live for all engineering and diploma students. Teams can have up to 4 members with cross-department participation permitted.',
    fullContent: 'Registrations for the National Hackathon track of TechFest 2026 are officially open. Students can register their teams via the CampusConnect portal before October 20. Problem statements will be released 48 hours prior to the hackathon. Mentors from tier-1 technology firms will review architecture blueprints.',
    author: 'Dean of Student Affairs'
  },
  {
    id: 'anc-2',
    category: 'Workshop',
    badgeClass: 'bg-info-subtle text-info',
    date: 'Oct 07, 2026',
    title: 'AI & Full-Stack Workshop This Friday',
    shortDesc: 'Hands-on practical session on modern web architectures and generative AI integration in Computing Lab 3. Pre-install Node.js and VS Code.',
    fullContent: 'The Department of Computer Science is conducting an intensive 4-hour hands-on technical workshop this Friday from 1:30 PM to 5:30 PM. All registered participants are requested to report with their college ID cards and personal laptops with VS Code installed. Refreshments will be provided.',
    author: 'Head, Dept of CSE'
  },
  {
    id: 'anc-3',
    category: 'Sports',
    badgeClass: 'bg-warning-subtle text-warning',
    date: 'Oct 05, 2026',
    title: 'Annual Sports Meet Contingent Trials',
    shortDesc: 'Athletics, football, and cricket squad selections will commence at the Main Stadium ground starting Monday at 6:30 AM.',
    fullContent: 'Selection trials for the College Athletic Contingent and University Tournament teams will be held throughout next week. Students who wish to participate in Track & Field (100m, 200m, 400m, Relay), Football, Cricket, and Volleyball must submit their medical fitness forms at the Physical Education Office.',
    author: 'Sports Council Convener'
  },
  {
    id: 'anc-4',
    category: 'Cultural',
    badgeClass: 'bg-success-subtle text-success',
    date: 'Oct 03, 2026',
    title: 'Cultural Fest Auditions for Music & Dance',
    shortDesc: 'Auditions for the Western band, Indian classical singing, and fusion dance troupe are scheduled for Wednesday afternoon in the Audi Hall.',
    fullContent: 'The Student Cultural Affairs Committee invites all talented dancers, vocalists, instrumentalists, and stage actors to audition for Rhythm & Vibes 2026. Slots will be allocated on a first-come, first-served basis at the Amphitheatre backstage desk starting 2:00 PM.',
    author: 'Cultural Secretary'
  }
];

// ==========================================================================
// 2. LOCALSTORAGE KEYS & INITIAL STATE
// ==========================================================================

const STORAGE_KEYS = {
  THEME: 'campusconnect_theme',
  REGISTRATIONS: 'campusconnect_registrations',
  CLUBS: 'campusconnect_joined_clubs',
  EVENT_SEATS: 'campusconnect_event_seats'
};

// Application state held in memory and synchronized with LocalStorage
let appState = {
  events: [...INITIAL_EVENTS],
  clubs: [...INITIAL_CLUBS],
  announcements: [...INITIAL_ANNOUNCEMENTS],
  registrations: [],
  joinedClubs: [],
  selectedCategory: 'All',
  searchQuery: '',
  cancelTargetId: null // used by cancel confirmation modal
};

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadDataFromStorage();
  initCountdown();
  renderEvents();
  renderClubs();
  renderAnnouncements();
  updateDashboard();
  setupEventListeners();
});

// ==========================================================================
// 4. THEME MANAGEMENT (DARK / LIGHT MODE)
// ==========================================================================

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem(STORAGE_KEYS.THEME, theme);

  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  if (theme === 'dark') {
    if (themeIcon) themeIcon.className = 'bi bi-sun-fill text-warning';
    if (themeText) themeText.textContent = 'Light Mode';
  } else {
    if (themeIcon) themeIcon.className = 'bi bi-moon-stars-fill';
    if (themeText) themeText.textContent = 'Dark Mode';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast('Theme Changed', `Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info');
}

// ==========================================================================
// 5. LOCALSTORAGE LOAD & SYNC
// ==========================================================================

function loadDataFromStorage() {
  try {
    // 1. Registrations
    const storedRegs = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
    if (storedRegs) {
      appState.registrations = JSON.parse(storedRegs);
    } else {
      appState.registrations = [];
    }

    // 2. Joined Clubs
    const storedClubs = localStorage.getItem(STORAGE_KEYS.CLUBS);
    if (storedClubs) {
      appState.joinedClubs = JSON.parse(storedClubs);
    } else {
      appState.joinedClubs = [];
    }

    // 3. Dynamic Seat Adjustments
    const storedSeats = localStorage.getItem(STORAGE_KEYS.EVENT_SEATS);
    let seatsMap = storedSeats ? JSON.parse(storedSeats) : {};

    appState.events.forEach(evt => {
      if (seatsMap[evt.id] !== undefined) {
        evt.availableSeats = seatsMap[evt.id];
      }
    });
  } catch (error) {
    console.error('Error loading LocalStorage data:', error);
  }
}

function saveRegistrationsToStorage() {
  localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(appState.registrations));
}

function saveClubsToStorage() {
  localStorage.setItem(STORAGE_KEYS.CLUBS, JSON.stringify(appState.joinedClubs));
}

function saveSeatsToStorage() {
  const seatsMap = {};
  appState.events.forEach(e => {
    seatsMap[e.id] = e.availableSeats;
  });
  localStorage.setItem(STORAGE_KEYS.EVENT_SEATS, JSON.stringify(seatsMap));
}

// ==========================================================================
// 6. COUNTDOWN TIMER
// ==========================================================================

function initCountdown() {
  // Target date: Set to 16 days from now for TechFest 2026
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 16);
  targetDate.setHours(9, 0, 0, 0);

  const daysEl = document.getElementById('countdownDays');
  const hoursEl = document.getElementById('countdownHours');
  const minsEl = document.getElementById('countdownMinutes');
  const secsEl = document.getElementById('countdownSeconds');

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 7. EVENT RENDERING, SEARCH & CATEGORY FILTERING
// ==========================================================================

function getCategoryBadgeClass(category) {
  if (category === 'Workshop') return 'bg-info-subtle text-info';
  if (category === 'Sports') return 'bg-warning-subtle text-warning';
  if (category === 'Cultural') return 'bg-purple-subtle text-purple';
  if (category === 'Hackathon') return 'bg-danger-subtle text-danger';
  return 'bg-primary-subtle text-primary';
}

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const noEventsMsg = document.getElementById('noEventsMessage');
  if (!grid) return;

  const query = appState.searchQuery.toLowerCase().trim();
  const category = appState.selectedCategory;

  const filteredEvents = appState.events.filter(evt => {
    const matchesCategory = (category === 'All') || (evt.category === category);
    const matchesSearch = !query ||
      evt.title.toLowerCase().includes(query) ||
      evt.shortDesc.toLowerCase().includes(query) ||
      evt.venue.toLowerCase().includes(query) ||
      evt.organizer.toLowerCase().includes(query) ||
      evt.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = '';

  if (filteredEvents.length === 0) {
    if (noEventsMsg) noEventsMsg.classList.remove('d-none');
    return;
  }

  if (noEventsMsg) noEventsMsg.classList.add('d-none');

  filteredEvents.forEach(evt => {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6 col-lg-4';

    // Calculate seat fill percentage
    const filledPercentage = Math.round(((evt.totalSeats - evt.availableSeats) / evt.totalSeats) * 100);
    const isSoldOut = evt.availableSeats <= 0;

    const badgeClass = getCategoryBadgeClass(evt.category);

    cardCol.innerHTML = `
      <div class="event-card">
        <div class="event-card-header">
          <img src="${evt.image}" alt="${evt.title}" class="event-card-img" loading="lazy">
          <div class="event-img-overlay"></div>
          <div class="event-badge-overlay">
            <span class="badge ${badgeClass} fw-semibold">${evt.category}</span>
            <span class="badge bg-dark bg-opacity-75 text-light small">
              <i class="bi bi-clock me-1"></i>${evt.time.split('-')[0].trim()}
            </span>
          </div>
        </div>

        <div class="event-card-body">
          <h5 class="event-card-title">${evt.title}</h5>
          <p class="event-card-desc">${evt.shortDesc}</p>

          <ul class="event-meta-list">
            <li class="event-meta-item">
              <i class="bi bi-calendar3"></i>
              <span>${evt.date}</span>
            </li>
            <li class="event-meta-item">
              <i class="bi bi-clock-history"></i>
              <span>${evt.time}</span>
            </li>
            <li class="event-meta-item">
              <i class="bi bi-geo-alt"></i>
              <span>${evt.venue}</span>
            </li>
          </ul>

          <div class="seat-progress-wrapper">
            <div class="d-flex justify-content-between align-items-center small mb-1">
              <span class="text-muted-custom">Seats Available</span>
              <span class="fw-bold ${isSoldOut ? 'text-danger' : 'text-success'}">
                ${isSoldOut ? 'Sold Out' : `${evt.availableSeats} / ${evt.totalSeats}`}
              </span>
            </div>
            <div class="seat-progress">
              <div class="seat-progress-bar ${isSoldOut ? 'bg-danger' : 'bg-primary'}" style="width: ${filledPercentage}%;"></div>
            </div>
          </div>

          <div class="event-card-footer">
            <button class="btn btn-outline-custom btn-details" data-event-id="${evt.id}">
              <i class="bi bi-info-circle me-1"></i>View Details
            </button>
            <button class="btn btn-primary-custom btn-register" data-event-id="${evt.id}" ${isSoldOut ? 'disabled' : ''}>
              <i class="bi bi-pencil-square me-1"></i>${isSoldOut ? 'Full' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(cardCol);
  });
}

// ==========================================================================
// 8. EVENT REGISTRATION MODAL & VALIDATION
// ==========================================================================

function openRegistrationModal(eventId) {
  const event = appState.events.find(e => e.id === eventId);
  if (!event) return;

  if (event.availableSeats <= 0) {
    showToast('Seats Full', 'Sorry, all seats for this event are already reserved.', 'warning');
    return;
  }

  // Populate modal header information
  document.getElementById('regModalEventId').value = event.id;
  document.getElementById('regModalEventTitle').textContent = event.title;
  const regCatBadge = document.getElementById('regModalCategory');
  if (regCatBadge) {
    regCatBadge.textContent = event.category;
    regCatBadge.className = `badge ${getCategoryBadgeClass(event.category)} mb-1`;
  }
  document.getElementById('regModalEventDate').innerHTML = `<i class="bi bi-calendar3 me-1"></i>${event.date}`;
  document.getElementById('regModalEventVenue').innerHTML = `<i class="bi bi-geo-alt me-1"></i>${event.venue}`;

  // Reset form errors
  const form = document.getElementById('registrationForm');
  form.reset();
  form.classList.remove('was-validated');
  
  const alertBox = document.getElementById('regFormAlert');
  alertBox.classList.add('d-none');
  alertBox.textContent = '';

  // Show modal
  const modalEl = document.getElementById('registrationModal');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

function handleRegistrationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const alertBox = document.getElementById('regFormAlert');
  alertBox.classList.add('d-none');
  alertBox.textContent = '';

  const eventId = document.getElementById('regModalEventId').value;
  const studentName = document.getElementById('studentName').value.trim();
  const registerNumber = document.getElementById('registerNumber').value.trim().toUpperCase();
  const department = document.getElementById('department').value;
  const studentYear = document.getElementById('studentYear').value;
  const email = document.getElementById('studentEmail').value.trim();
  const phone = document.getElementById('studentPhone').value.trim();
  const agree = document.getElementById('agreeTerms').checked;

  // Real JavaScript validation
  let hasError = false;
  let errorMsg = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!studentName) {
    hasError = true;
    errorMsg = 'Please provide your full student name.';
  } else if (!registerNumber) {
    hasError = true;
    errorMsg = 'Please enter your college register number.';
  } else if (!department) {
    hasError = true;
    errorMsg = 'Please select your department.';
  } else if (!studentYear) {
    hasError = true;
    errorMsg = 'Please select your current study year.';
  } else if (!email || !emailRegex.test(email)) {
    hasError = true;
    errorMsg = 'Please enter a valid email address (e.g., student@college.edu).';
  } else if (!phone || !phoneRegex.test(phone)) {
    hasError = true;
    errorMsg = 'Please enter a valid 10-digit mobile number.';
  } else if (!agree) {
    hasError = true;
    errorMsg = 'You must accept the college event participation rules.';
  }

  if (hasError) {
    form.classList.add('was-validated');
    alertBox.textContent = errorMsg;
    alertBox.classList.remove('d-none');
    return;
  }

  // Check if student is already registered for this event
  const isAlreadyRegistered = appState.registrations.some(
    r => r.eventId === eventId && (r.registerNumber.toUpperCase() === registerNumber || r.email.toLowerCase() === email.toLowerCase())
  );

  if (isAlreadyRegistered) {
    alertBox.textContent = `You are already registered for this event with Register No: ${registerNumber} or Email: ${email}`;
    alertBox.classList.remove('d-none');
    showToast('Already Registered', 'You have already booked a seat for this event.', 'warning');
    return;
  }

  // Check seats
  const event = appState.events.find(e => e.id === eventId);
  if (!event || event.availableSeats <= 0) {
    alertBox.textContent = 'Sorry, all seats for this event are currently full.';
    alertBox.classList.remove('d-none');
    return;
  }

  // Decrement seat
  event.availableSeats--;
  saveSeatsToStorage();

  // Generate unique registration ID: CC-2026-XXXXX
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const registrationId = `CC-2026-${randomSuffix}`;

  const newRegistration = {
    registrationId,
    eventId: event.id,
    eventTitle: event.title,
    eventDate: event.date,
    eventTime: event.time,
    eventVenue: event.venue,
    studentName,
    registerNumber,
    department,
    year: studentYear,
    email,
    phone,
    status: 'Confirmed',
    registeredAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };

  // Save to State & LocalStorage
  appState.registrations.unshift(newRegistration);
  saveRegistrationsToStorage();

  // Hide Modal
  const modalEl = document.getElementById('registrationModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();

  // Update UI components
  renderEvents();
  updateDashboard();

  // Show Toast
  showToast('✅ Registration Successful!', `Your Registration ID is ${registrationId}. Stored in your dashboard.`, 'success');
}

// ==========================================================================
// 9. EVENT DETAILS MODAL
// ==========================================================================

function openEventDetailsModal(eventId) {
  const event = appState.events.find(e => e.id === eventId);
  if (!event) return;

  const modalImg = document.getElementById('detailModalImage');
  if (modalImg) {
    modalImg.src = event.image;
    modalImg.alt = event.title;
  }

  const detailCatBadge = document.getElementById('detailCategoryBadge');
  if (detailCatBadge) {
    detailCatBadge.textContent = event.category;
    detailCatBadge.className = `badge ${getCategoryBadgeClass(event.category)}`;
  }
  document.getElementById('detailTitle').textContent = event.title;
  document.getElementById('detailDate').textContent = event.date;
  document.getElementById('detailTime').textContent = event.time;
  document.getElementById('detailVenue').textContent = event.venue;
  document.getElementById('detailSeats').textContent = `${event.availableSeats} of ${event.totalSeats} seats remaining`;
  document.getElementById('detailDescription').textContent = event.fullDesc;
  document.getElementById('detailOrganizer').textContent = event.organizer;

  const perksList = document.getElementById('detailPerksList');
  perksList.innerHTML = '';
  event.perks.forEach(perk => {
    const li = document.createElement('li');
    li.className = 'col-sm-6 d-flex align-items-center gap-2';
    li.innerHTML = `<i class="bi bi-check-circle-fill text-success"></i><span>${perk}</span>`;
    perksList.appendChild(li);
  });

  const regBtn = document.getElementById('detailRegisterBtn');
  if (event.availableSeats <= 0) {
    regBtn.disabled = true;
    regBtn.innerHTML = '<i class="bi bi-slash-circle me-1"></i>Seats Full';
  } else {
    regBtn.disabled = false;
    regBtn.innerHTML = '<i class="bi bi-pencil-square me-1"></i>Register Now';
    regBtn.onclick = () => {
      const detailsModal = bootstrap.Modal.getInstance(document.getElementById('eventDetailsModal'));
      if (detailsModal) detailsModal.hide();
      openRegistrationModal(event.id);
    };
  }

  const modalEl = document.getElementById('eventDetailsModal');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

// ==========================================================================
// 10. CLUBS SECTION FUNCTIONALITY
// ==========================================================================

function renderClubs() {
  const grid = document.getElementById('clubsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appState.clubs.forEach(club => {
    const isJoined = appState.joinedClubs.includes(club.id);

    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="club-card">
        <div class="d-flex justify-content-between align-items-start">
          <div class="club-icon-wrapper shadow-sm">
            <span>${club.icon}</span>
          </div>
          <span class="badge bg-secondary-subtle text-secondary small">${club.category}</span>
        </div>

        <h4 class="club-title">${club.name}</h4>
        <p class="club-desc">${club.description}</p>

        <div class="small text-muted-custom mb-3">
          <div class="d-flex align-items-center gap-2 mb-1">
            <i class="bi bi-people text-primary"></i>
            <span>${club.members}</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-calendar2-week text-primary"></i>
            <span>${club.schedule}</span>
          </div>
        </div>

        <div class="club-footer">
          <span class="small fw-semibold ${isJoined ? 'text-success' : 'text-muted-custom'}">
            ${isJoined ? '<i class="bi bi-check-circle me-1"></i>Active Member' : 'Open for All'}
          </span>
          <button class="btn btn-outline-custom btn-join-club ${isJoined ? 'joined' : ''}" data-club-id="${club.id}">
            ${isJoined ? '<i class="bi bi-check-lg me-1"></i>✓ Joined' : '<i class="bi bi-plus-lg me-1"></i>Join Club'}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

function handleJoinClub(clubId) {
  const club = appState.clubs.find(c => c.id === clubId);
  if (!club) return;

  if (appState.joinedClubs.includes(clubId)) {
    showToast('Already Joined', `You are already an active member of ${club.name}.`, 'info');
    return;
  }

  // Add to joined clubs
  appState.joinedClubs.push(clubId);
  saveClubsToStorage();

  // Re-render clubs & update dashboard
  renderClubs();
  updateDashboard();

  showToast('Club Joined!', `🎉 Welcome to ${club.name}! Updated in your dashboard.`, 'success');
}

// ==========================================================================
// 11. ANNOUNCEMENTS FUNCTIONALITY
// ==========================================================================

function renderAnnouncements() {
  const grid = document.getElementById('announcementsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appState.announcements.forEach(anc => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';
    col.innerHTML = `
      <div class="announcement-card">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="badge ${anc.badgeClass}">${anc.category}</span>
          <span class="small text-muted-custom"><i class="bi bi-calendar3 me-1"></i>${anc.date}</span>
        </div>

        <h5 class="announcement-title">${anc.title}</h5>
        <p class="announcement-desc">${anc.shortDesc}</p>

        <div class="pt-2 border-top border-secondary-subtle mt-auto">
          <button class="btn btn-sm btn-link text-decoration-none text-primary p-0 fw-semibold btn-read-announcement" data-anc-id="${anc.id}">
            Read More <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

function openAnnouncementModal(ancId) {
  const anc = appState.announcements.find(a => a.id === ancId);
  if (!anc) return;

  document.getElementById('announcementModalCategory').textContent = anc.category;
  document.getElementById('announcementModalTitle').textContent = anc.title;
  document.getElementById('announcementModalDate').textContent = anc.date;
  document.getElementById('announcementModalAuthor').textContent = anc.author;
  document.getElementById('announcementModalContent').innerHTML = `<p>${anc.fullContent}</p>`;

  const modalEl = document.getElementById('announcementModal');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

// ==========================================================================
// 12. MY DASHBOARD & REGISTRATIONS MANAGEMENT
// ==========================================================================

function updateDashboard() {
  // 1. Calculate Statistics
  const registeredCount = appState.registrations.length;
  const upcomingCount = appState.registrations.filter(r => r.status === 'Confirmed').length;
  const completedCount = 1; // 1 orientation history record
  const clubsCount = appState.joinedClubs.length;

  const statRegEl = document.getElementById('statRegisteredEvents');
  const statUpEl = document.getElementById('statUpcomingEvents');
  const statCompEl = document.getElementById('statCompletedEvents');
  const statClubsEl = document.getElementById('statClubsJoined');

  if (statRegEl) statRegEl.textContent = registeredCount;
  if (statUpEl) statUpEl.textContent = upcomingCount;
  if (statCompEl) statCompEl.textContent = completedCount;
  if (statClubsEl) statClubsEl.textContent = clubsCount;

  // Update Navbar Badge
  const navBadge = document.getElementById('navRegistrationBadge');
  if (navBadge) {
    if (registeredCount > 0) {
      navBadge.textContent = registeredCount;
      navBadge.classList.remove('d-none');
    } else {
      navBadge.classList.add('d-none');
    }
  }

  // 2. Render My Registrations List
  const container = document.getElementById('registrationsContainer');
  if (!container) return;

  if (appState.registrations.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box text-center p-5 rounded-4">
        <div class="empty-icon mb-2">🎟️</div>
        <h5 class="fw-bold mb-1">You haven't registered for any events yet.</h5>
        <p class="text-muted-custom small mb-3">Browse the upcoming events above and register to get your official student pass.</p>
        <a href="#events" class="btn btn-primary-custom btn-sm px-3">
          <i class="bi bi-compass me-1"></i>Explore Events
        </a>
      </div>
    `;
    return;
  }

  let html = '<div class="row g-3">';
  appState.registrations.forEach(reg => {
    html += `
      <div class="col-12 col-xl-6">
        <div class="registration-item-card">
          <div class="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
            <div>
              <span class="badge bg-success-subtle text-success mb-1">
                <i class="bi bi-check-circle-fill me-1"></i>${reg.status}
              </span>
              <h5 class="fw-bold mb-1 text-main">${reg.eventTitle}</h5>
            </div>
            <div class="text-end">
              <span class="reg-id-badge" title="Click to copy registration ID" onclick="copyToClipboard('${reg.registrationId}')">
                <i class="bi bi-qr-code me-1"></i>${reg.registrationId}
              </span>
              <div class="small text-muted-custom mt-1">Booked: ${reg.registeredAt}</div>
            </div>
          </div>

          <div class="row g-2 small text-muted-custom mb-3 py-2 border-top border-bottom border-secondary-subtle">
            <div class="col-sm-6">
              <i class="bi bi-calendar3 me-1 text-primary"></i>${reg.eventDate}
            </div>
            <div class="col-sm-6">
              <i class="bi bi-clock me-1 text-primary"></i>${reg.eventTime}
            </div>
            <div class="col-sm-6">
              <i class="bi bi-geo-alt me-1 text-primary"></i>${reg.eventVenue}
            </div>
            <div class="col-sm-6">
              <i class="bi bi-person me-1 text-primary"></i>${reg.studentName} (${reg.registerNumber})
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <span class="small text-muted-custom">
              Dept: <strong>${reg.department}</strong> • ${reg.year}
            </span>
            <button class="btn btn-sm btn-outline-danger btn-cancel-reg px-3 rounded-pill" data-reg-id="${reg.registrationId}">
              <i class="bi bi-x-circle me-1"></i>Cancel Registration
            </button>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}

// Copy Registration ID helper
window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied!', `Registration ID ${text} copied to clipboard.`, 'info');
  }).catch(() => {
    showToast('ID', `Your ID: ${text}`, 'info');
  });
};

function triggerCancelModal(regId) {
  const reg = appState.registrations.find(r => r.registrationId === regId);
  if (!reg) return;

  appState.cancelTargetId = regId;
  const nameEl = document.getElementById('cancelEventNameText');
  if (nameEl) nameEl.textContent = `"${reg.eventTitle}" (ID: ${reg.registrationId})`;

  const modalEl = document.getElementById('cancelConfirmModal');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

function confirmCancellation() {
  const regId = appState.cancelTargetId;
  if (!regId) return;

  const regIndex = appState.registrations.findIndex(r => r.registrationId === regId);
  if (regIndex === -1) return;

  const cancelledReg = appState.registrations[regIndex];

  // Restore available seat
  const event = appState.events.find(e => e.id === cancelledReg.eventId);
  if (event) {
    event.availableSeats++;
    saveSeatsToStorage();
  }

  // Remove from registrations
  appState.registrations.splice(regIndex, 1);
  saveRegistrationsToStorage();

  // Hide modal
  const modalEl = document.getElementById('cancelConfirmModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();
  appState.cancelTargetId = null;

  // Refresh UI
  renderEvents();
  updateDashboard();

  showToast('Registration Cancelled', `Your reservation for "${cancelledReg.eventTitle}" has been cancelled.`, 'info');
}

// ==========================================================================
// 13. BOOTSTRAP TOAST NOTIFICATION HELPER
// ==========================================================================

function showToast(title, message, type = 'primary') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  let icon = 'bi-info-circle-fill text-primary';
  if (type === 'success') icon = 'bi-check-circle-fill text-success';
  if (type === 'warning') icon = 'bi-exclamation-triangle-fill text-warning';
  if (type === 'danger') icon = 'bi-x-circle-fill text-danger';
  if (type === 'info') icon = 'bi-info-circle-fill text-info';

  const toastId = `toast-${Date.now()}`;
  const toastEl = document.createElement('div');
  toastEl.className = 'toast custom-toast border-0 shadow-lg';
  toastEl.id = toastId;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');

  toastEl.innerHTML = `
    <div class="toast-header border-bottom border-secondary-subtle">
      <i class="bi ${icon} me-2 fs-5"></i>
      <strong class="me-auto">${title}</strong>
      <small class="text-muted-custom">Just now</small>
      <button type="button" class="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body small text-muted-custom">
      ${message}
    </div>
  `;

  container.appendChild(toastEl);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3800 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}

// ==========================================================================
// 14. EVENT LISTENERS
// ==========================================================================

function setupEventListeners() {
  // Theme toggle button
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Event search input
  const searchInput = document.getElementById('eventSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (e.target.value.length > 0) {
          clearSearchBtn.classList.remove('d-none');
        } else {
          clearSearchBtn.classList.add('d-none');
        }
      }
      renderEvents();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        appState.searchQuery = '';
        clearSearchBtn.classList.add('d-none');
        renderEvents();
      }
    });
  }

  // Category filter buttons
  const categoryContainer = document.getElementById('categoryFilterContainer');
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-filter');
      if (!btn) return;

      categoryContainer.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      appState.selectedCategory = btn.getAttribute('data-category');
      renderEvents();
    });
  }

  // Reset filters button in empty state
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      appState.searchQuery = '';
      appState.selectedCategory = 'All';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('d-none');

      if (categoryContainer) {
        categoryContainer.querySelectorAll('.btn-filter').forEach(b => {
          if (b.getAttribute('data-category') === 'All') b.classList.add('active');
          else b.classList.remove('active');
        });
      }
      renderEvents();
    });
  }

  // Delegated clicks for Event Cards (Details & Register)
  const eventsGrid = document.getElementById('eventsGrid');
  if (eventsGrid) {
    eventsGrid.addEventListener('click', (e) => {
      const registerBtn = e.target.closest('.btn-register');
      if (registerBtn) {
        const eventId = registerBtn.getAttribute('data-event-id');
        openRegistrationModal(eventId);
        return;
      }

      const detailsBtn = e.target.closest('.btn-details');
      if (detailsBtn) {
        const eventId = detailsBtn.getAttribute('data-event-id');
        openEventDetailsModal(eventId);
        return;
      }
    });
  }

  // Registration Form Submission
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', handleRegistrationSubmit);
  }

  // Delegated clicks for Clubs (Join Club)
  const clubsGrid = document.getElementById('clubsGrid');
  if (clubsGrid) {
    clubsGrid.addEventListener('click', (e) => {
      const joinBtn = e.target.closest('.btn-join-club');
      if (joinBtn) {
        const clubId = joinBtn.getAttribute('data-club-id');
        handleJoinClub(clubId);
      }
    });
  }

  // Delegated clicks for Announcements (Read More)
  const annGrid = document.getElementById('announcementsGrid');
  if (annGrid) {
    annGrid.addEventListener('click', (e) => {
      const readBtn = e.target.closest('.btn-read-announcement');
      if (readBtn) {
        const ancId = readBtn.getAttribute('data-anc-id');
        openAnnouncementModal(ancId);
      }
    });
  }

  // Delegated clicks for Registrations Cancel buttons
  const regContainer = document.getElementById('registrationsContainer');
  if (regContainer) {
    regContainer.addEventListener('click', (e) => {
      const cancelBtn = e.target.closest('.btn-cancel-reg');
      if (cancelBtn) {
        const regId = cancelBtn.getAttribute('data-reg-id');
        triggerCancelModal(regId);
      }
    });
  }

  // Cancel Confirmation Button
  const confirmCancelBtn = document.getElementById('confirmCancelBtn');
  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', confirmCancellation);
  }

  // Quick refresh dashboard button
  const refreshDashBtn = document.getElementById('quickRefreshDashBtn');
  if (refreshDashBtn) {
    refreshDashBtn.addEventListener('click', () => {
      loadDataFromStorage();
      updateDashboard();
      showToast('Dashboard Refreshed', 'Latest registration records synced.', 'info');
    });
  }

  // Mobile navbar auto-collapse on nav-link click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // Active link scroll spy behavior
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sections = ['home', 'events', 'clubs', 'announcements', 'dashboard'];
    sections.forEach(secId => {
      const sec = document.getElementById(secId);
      const navLink = document.getElementById(`nav-${secId}`);
      if (sec && navLink) {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });
}
