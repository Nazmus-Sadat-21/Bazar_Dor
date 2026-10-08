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

  [Features](#-key-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Getting Started](#-getting-started) • [API Overview](#-api-endpoints)

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

## 🔗 API Endpoints

The application consumes fast Cloudflare Workers REST APIs:

* **Fetch Categories**: `GET https://api.api-store.workers.dev/api/bazardor/categories`
* **Fetch All Products**: `GET https://api.abcz.workers.dev/api/bazardor/products`
* **Fetch Products by Category**: `GET https://api.api-store.workers.dev/api/bazardor/products?category={CategoryID}`

---

## 💻 Code Highlights

<details>
<summary><b>1. Active Route Indicator without useEffect</b></summary>

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryNav({ data }: { data: Category[] }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6 overflow-x-auto py-3">
      {data.map((e) => {
        const targetPath = `/Category/${e.id}`;
        const isActive = pathname.toLowerCase() === targetPath.toLowerCase();

        return (
          <Link
            key={e.id}
            href={targetPath}
            className={`border-b-2 transition-all ${
              isActive
                ? "text-[#008a4c] font-bold border-[#008a4c]"
                : "text-gray-800 border-transparent hover:text-[#008a4c]"
            }`}
          >
            <span>{e.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
}
```
</details>

<details>
<summary><b>2. Bengali Number Translation Utility</b></summary>

```typescript
export const toBn = (num: number | string): string => {
  if (num === undefined || num === null) return "";
  return num
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);
};
```
</details>

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bazardor.git
   cd bazardor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (`.env.local`):**
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app!

---

<div align="center">

  Made with ❤️ for Bangladesh 🇧🇩 | Designed & Developed with Next.js & Tailwind CSS

</div>