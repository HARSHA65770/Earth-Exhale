# 🌿 Earth's Exhale - Indoor Plant Shop

A beautiful, responsive indoor plant shopping website built with **Next.js** and **Tailwind CSS**. This project was built as a frontend development task, focusing on clean component architecture, responsive design, and modern UI/UX.

![Earth's Exhale Screenshot](/public/images/hero-plant.png)

## 🚀 Live Demo

🔗 **Deployed URL**: [https://earth-exhale-93cjse978-aare-harinis-projects.vercel.app](https://earth-exhale-93cjse978-aare-harinis-projects.vercel.app)

## 📁 Project Structure

```
earths-exhale/
├── public/
│   └── images/           # Plant images used in the website
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles, theme colors, animations
│   │   ├── layout.js     # Root layout with fonts & SEO metadata
│   │   └── page.js       # Main homepage (assembles all components)
│   └── components/
│       ├── Navbar.js     # Responsive navigation bar with hamburger menu
│       ├── Hero.js       # Hero section with CTA and plant image
│       ├── PlantCard.js  # Reusable card component for each plant
│       └── Footer.js     # Footer with links, newsletter, and socials
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## ✨ Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Reusable Components** - Navbar, Hero, PlantCard, and Footer are all separate, reusable components
- **Dark Green Theme** - Matches the Figma design with a nature-inspired color palette
- **Smooth Animations** - Fade-in, slide-in, and floating animations for a premium feel
- **Interactive Plant Cards** - Hover effects with scale, shadow, and color transitions
- **Mobile Hamburger Menu** - Animated hamburger icon that toggles the navigation
- **Newsletter Signup** - Email subscription form in the footer
- **SEO Optimized** - Proper title, meta description, and semantic HTML
- **Google Fonts** - Uses Playfair Display for headings and Inter for body text

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [React](https://react.dev/) | UI library |
| [Google Fonts](https://fonts.google.com/) | Typography (Playfair Display + Inter) |
| [Vercel](https://vercel.com/) | Deployment platform |

## 🏃 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer (version 18 or higher).

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/earths-exhale.git
cd earths-exhale
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Go to [http://localhost:3000](http://localhost:3000) to see the website.

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|-----------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## 🧩 Components Breakdown

### 1. Navbar (`Navbar.js`)
- Fixed position at the top
- Glassmorphism background effect
- Desktop: Horizontal nav links + "Shop Now" CTA button
- Mobile: Animated hamburger menu with slide-down navigation

### 2. Hero (`Hero.js`)
- Full-screen hero section with gradient background
- Main heading with animated entrance
- Two CTA buttons (Explore Plants + Learn More)
- Floating plant image with subtle animation
- Quick stats (50+ species, 2k+ customers, 100% organic)

### 3. PlantCard (`PlantCard.js`)
- Reusable card that accepts props: `name`, `price`, `image`, `category`, `rating`
- Category badge on top-left corner
- Star rating system
- Price in INR (₹)
- Hover effects: scale up image, lift card, show "Add to Cart" button

### 4. Footer (`Footer.js`)
- 4-column grid layout (brand info, quick links, categories, newsletter)
- Social media links
- Email newsletter subscription form
- Copyright notice with current year
- Privacy Policy & Terms of Service links

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub
3. Click **"New Project"** → Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Your site will be live in about 1 minute! 🎉

## 🎨 Design Decisions

- **Color Palette**: Dark green (#1a3c34) as primary color to match the plant/nature theme from the Figma design
- **Typography**: Playfair Display for headings (elegant, serif) + Inter for body text (clean, modern)
- **Spacing**: Consistent padding/margins using Tailwind's spacing scale (px-4, py-20, gap-8, etc.)
- **Animations**: Subtle entrance animations and hover effects to make the UI feel alive without being distracting

## 📝 What I Learned

- How to structure a Next.js project with the App Router
- Creating reusable React components with props
- Using Tailwind CSS v4 for responsive design
- Implementing smooth animations with CSS keyframes
- Deploying a Next.js app on Vercel
- Writing semantic HTML for better SEO

## 📬 Contact

- **Name**: [Your Name]
- **Email**: [your.email@example.com]
- **GitHub**: [github.com/your-username](https://github.com/your-username)

---

Made with 💚 for the Frontend Internship Task
