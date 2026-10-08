<div align="center">

  # 🛒 BazarDor (বাজারদর)
  ### Real-Time Daily Market Price Tracker & Commodity Comparison Platform

  [![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-API-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
  [![Localization](https://img.shields.io/badge/Lang-Bengali_%F0%9F%87%A7%F0%9F%87%BD-008A4C?style=for-the-badge)](#localization)

  <p align="center">
    <b>BazarDor</b> is a modern, responsive web application designed to track and monitor daily essential market prices (নিত্যপ্রয়োজনীয় পণ্যের বাজারদর) in Bangladesh. Built with performance, accessibility, and localized Bengali typography at its core.
  </p>

  [Features](#-key-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Project Structure](#-project-structure) • [Getting Started](#-getting-started) • [API Overview](#-api-endpoints)

</div>

---

## 🌟 Key Features

### 📊 Live Commodity Ticker (মার্কেট ট্র্যাকার)
* **Real-time Price Marquee**: Infinite smooth scrolling price bar powered by `react-marquee-text`.
* **Price Direction Indicators**: Dynamic badges showing percentage increases (▲) in red, decreases (▼) in green, or stable prices (—).
* **Clickable Pill Cards**: Each product in the marquee links directly to its respective category details page.

### 📂 Dynamic Navigation & Active Route Highlighting
* **Active Border Accent**: Horizontal category bar that automatically highlights the currently active route with a `#008a4c` bottom border using Next.js `usePathname()`.
* **Zero-Layout-Shift (CLS)**: Smooth overflow horizontal scrolling with hidden scrollbars for mobile & desktop.

### ⚡ Instant Skeleton Loading Screens
* **Global Skeleton Loader (`app/loading.tsx`)**: Universal loading state matching hero banners, category pills, and product card grids.
* **Category-Specific Skeleton (`app/Category/[CategoryID]/loading.tsx`)**: Targeted loading placeholder preventing layout shift during async server data fetches.

### 🔐 Modern Authentication (সাইন ইন / সাইন আপ)
* **Better Auth Integration**: Supported email/password credentials and social OAuth (Google & GitHub).
* **Fully Responsive UI**: Mobile-first centered form cards with custom Bangla helper messaging and interactive state feedback.

### 👤 Personalized User Profile
* **Profile Management**: View account avatar or dynamic initial badge fallback, email, and name.
* **Dynamic Controlled Form**: Fixed React input locking using `defaultValue` and state key re-mounting.
* **Smart Navigation**: Integrated `router.back()` history navigation and secure `signOut()` flow.

### 📱 100% Mobile-First Responsive Design
* **Flexbox & Grid Layouts**: Adapted controls (`flex-col sm:flex-row`) for sorting options, filter controls, and top headers.
* **Bangla Number Conversion**: Built-in utility to render all numerical prices, percentages, and counts in Bengali digits (০১২৩৪৫৬৭৮৯).

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14+](https://nextjs.org/) | App Router, Server Components & Client Components |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe props, state, and API payload definitions |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Mobile-first utility styling with custom `#008a4c` brand theme |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight modern UI icons (`SearchX`, `ChevronDown`, `Home`, etc.) |
| **Authentication** | Better Auth Client | Seamless authentication & session management |
| **Toasts** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Notification alerts for login, signup, and profile updates |
| **Animations** | `react-marquee-text` | Smooth continuous horizontal marquee ticker |
| **Backend API** | Cloudflare Workers | Edge REST API endpoints returning JSON data |

---

## 📁 Project Structure

```bash
bazardor/
├── app/
│   ├── Category/
│   │   └── [CategoryID]/
│   │       ├── loading.tsx         # Category-specific skeleton loader
│   │       └── page.tsx            # Category product list server route
│   ├── profile/
│   │   └── page.tsx                # Client profile page with edit form & router back
│   ├── signin/
│   │   └── page.tsx                # Responsive sign in page
│   ├── signup/
│   │   └── page.tsx                # Responsive sign up page
│   ├── loading.tsx                 # Universal global skeleton page
│   ├── not-found.tsx               # Localized 404 Error page
│   ├── layout.tsx                  # Root layout wrapper
│   └── page.tsx                    # Home page
├── components/
│   ├── Cards/
│   │   └── CategoryProductList.tsx # Product card grid display
│   ├── CategoryNav.tsx             # Route-aware active tab category links
│   ├── MenuPage.tsx                # Server wrapper for fetching category menu
│   └── Marquee.tsx                 # Real-time scrolling market price ticker
├── lib/
│   └── auth-client.ts              # Better Auth client configuration
├── public/                         # Static assets & icons
└── README.md                       # Project documentation