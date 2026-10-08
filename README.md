# 🎓 CampusConnect – College Event & Student Activity Portal

**CampusConnect** is a modern, responsive, and interactive college event management and student activity portal. Designed with rich aesthetics, real-time client-side interactivity, and persistent storage, it streamlines how university students discover, register for, and manage campus events, hackathons, workshops, and student clubs.

---

## 🌟 Key Highlights

- **15 Curated Campus Events Across 5 Categories**:
  - 🚀 **Technical (3)**: TechFest 2026, AI & Innovation Summit, Robotics & IoT Expo
  - 🛠️ **Workshop (3)**: Full-Stack Web Dev Workshop, UI/UX Design & Prototyping Workshop, Cybersecurity & Ethical Hacking Workshop
  - 🏆 **Sports (3)**: Annual Inter-Collegiate Sports Meet, Inter-College Cricket Championship, Campus Athletics & Fitness Challenge
  - 🎭 **Cultural (3)**: Rhythm & Vibes Cultural Fest, Battle of the Bands, Traditional Arts & Folk Dance Festival
  - 💻 **Hackathon (3)**: 24-Hour National Coding Challenge, AI for Good Global Impact Hackathon, Smart Campus Innovation Challenge
- **Unique Event Photography**: Every event has its own dedicated, high-resolution local image with dark overlay gradients for crystal-clear readability.
- **Dynamic Search & Category Filtering**: Instant real-time search across event titles, venues, organizers, and descriptions, combined with category filter pills.
- **Interactive Registration System**:
  - Modal form with real-time validation (Student Name, Register No, Department, Year, Email, 10-digit Phone).
  - Dynamic seat reservation tracking with real-time seat decrementing and "Sold Out" state management.
  - Auto-generated registration pass with unique ID (e.g., `CC-2026-XXXXX`).
  - Duplicate registration prevention per student.
- **Personalized Student Dashboard**:
  - Live metric counters: Registered Events, Upcoming Events, Completed Events, and Clubs Joined.
  - Interactive registration passes with copy-to-clipboard functionality and one-click seat cancellation with confirmation modal.
- **Student Clubs Hub**: Join student clubs (Coding, Arts & Design, Photography, Sports, Literary & Debate, Robotics) with instant status toggle and dashboard sync.
- **Campus Bulletin & Announcements**: Official campus circulars and audition notices with interactive reader modals.
- **Dark & Light Mode**: Seamless theme switching with persistent user preference saved in LocalStorage.
- **100% Client-Side Persistence**: Registrations, club memberships, theme settings, and seat adjustments persist across page refreshes via browser `LocalStorage`.
- **Zero External Dependencies Required**: Built using standard HTML5, CSS3, Bootstrap 5.3.3, and Vanilla JavaScript with local image assets.

---

## 📁 Project Directory Structure

```text
CampusConnect/
│
├── index.html                 # Main single-page web portal application
├── style.css                  # Custom styling, animations, design tokens & dark theme
├── script.js                  # Core application logic, LocalStorage sync & event handlers
├── README.md                  # Project documentation & evaluation guide
├── .gitignore                 # Standard repository ignores
│
└── assets/
    └── images/                # 15 unique, high-quality event photographs
        ├── ai_hackathon.jpg
        ├── ai_summit.jpg
        ├── athletics_fitness.jpg
        ├── battle_of_bands.jpg
        ├── cricket_championship.jpg
        ├── cultural_fest.jpg
        ├── cybersecurity_workshop.jpg
        ├── hackathon.jpg
        ├── robotics_expo.jpg
        ├── smart_campus_challenge.jpg
        ├── sports_meet.jpg
        ├── techfest.jpg
        ├── traditional_arts.jpg
        ├── uiux_workshop.jpg
        └── webdev_workshop.jpg
```

---

## 📊 Event Dataset Distribution

| Category | Event Title | Venue | Seats | Image File |
| :--- | :--- | :--- | :---: | :--- |
| **Technical** | TechFest 2026: Quantum Leap | Main Auditorium & Tech Complex | 350 | `techfest.jpg` |
| **Technical** | AI & Innovation Summit | Convention Hall B | 200 | `ai_summit.jpg` |
| **Technical** | Robotics & IoT Expo | Advanced Engineering Tech Center | 250 | `robotics_expo.jpg` |
| **Workshop** | Full-Stack Web Dev Workshop | Advanced Computing Lab 3 | 80 | `webdev_workshop.jpg` |
| **Workshop** | UI/UX Design & Prototyping Workshop | Design Thinking Studio & Media Lab | 70 | `uiux_workshop.jpg` |
| **Workshop** | Cybersecurity & Ethical Hacking | Network Security Research Lab | 90 | `cybersecurity_workshop.jpg` |
| **Sports** | Annual Inter-Collegiate Sports Meet | University Stadium & Sports Arena | 500 | `sports_meet.jpg` |
| **Sports** | Inter-College Cricket Championship | University Cricket Pavilion | 320 | `cricket_championship.jpg` |
| **Sports** | Campus Athletics & Fitness Challenge | Central Sports Complex & Track | 200 | `athletics_fitness.jpg` |
| **Cultural** | Rhythm & Vibes: Cultural Fest 2026 | Open Air Amphitheatre | 800 | `cultural_fest.jpg` |
| **Cultural** | Battle of the Bands: Rock & Fusion | College Amphitheatre Main Stage | 600 | `battle_of_bands.jpg` |
| **Cultural** | Traditional Arts & Folk Dance Fest | Grand University Auditorium | 700 | `traditional_arts.jpg` |
| **Hackathon** | 24-Hour National Coding Challenge | Innovation & Incubation Hub | 120 | `hackathon.jpg` |
| **Hackathon** | AI for Good: Global Impact Hackathon | AI Center of Excellence & Lab Complex | 100 | `ai_hackathon.jpg` |
| **Hackathon** | Smart Campus Innovation Challenge | Campus Tech Park & IoT Lab | 110 | `smart_campus_challenge.jpg` |

---

## 🛠️ Tech Stack & Architecture

- **Semantic HTML5**: Fully accessible markup, descriptive meta tags, SVG favicon, and structured headings.
- **Custom CSS3 Design System**:
  - CSS Custom Properties (Variables) for harmonious color palettes.
  - Glassmorphic navigation bar with `-webkit-backdrop-filter`.
  - Micro-animations, subtle card hover lifts, and glowing accent borders.
  - Dedicated Dark Theme rules with seamless attribute switching (`data-bs-theme`).
- **Bootstrap 5.3.3**: Grid layout, responsive utilities, modal dialogs, and toast notification container.
- **Vanilla JavaScript (ES6+)**:
  - Modular structure without heavy runtime frameworks.
  - Delegated event handling for optimal performance.
  - Dynamic DOM updates for immediate feedback.
- **Browser LocalStorage API**:
  - `campusconnect_theme`: Dark/light mode preference.
  - `campusconnect_registrations`: Confirmed event registrations and student records.
  - `campusconnect_joined_clubs`: User club memberships.
  - `campusconnect_event_seats`: Dynamic seat allocation maps.

---

## 🚀 How to Run Locally

You can run CampusConnect directly in any modern browser without installing complex servers or node modules:

### Option 1: Direct File Opening
Double-click `index.html` or open it in any browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

Using Node.js `npx serve`:
```bash
npx serve .
```

---

## 📱 Responsive & Cross-Browser Support
Tested and fully verified across:
- Desktop viewports (1920x1080, 1366x768)
- Tablet viewports (768x1024)
- Mobile devices (390x844, 414x896) with collapsible mobile drawer menu
- Chrome, Edge, Safari, Firefox

---

## 📄 License & Attribution
Developed for University Student Activities & Internship Submission. Open for academic and educational evaluation.
