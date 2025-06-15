
# 🎬 Netflix Clone – React + Vite + TMDb API

A simple and clean Netflix-inspired homepage built with **React**, **Vite**, and **CSS**. It includes a language toggle (English/Hindi), leverages the **TMDb API** for dynamic content, and is fully responsive. Perfect for practicing component structure, accessibility, and deployment via **Vercel**.

> ⚠️ Note: This is just a UI clone. It doesn't support video playback or user authentication.

## ✨ Features

- 🎞 Trending movies from TMDb
- 🌍 Language toggle (EN 🇬🇧 / HI 🇮🇳)
- 📱 Responsive design
- ♿️ Basic accessibility setup (ARIA, keyboard support)
- 🔍 SEO-friendly structure
- 🎯 Key UI sections:
  - Sticky Navbar
  - Interactive FAQ
  - Email capture section
  - Smooth scroll arrows
- ⚡ Built with Vite for fast dev/build
- ☁️ Deployed on Vercel

---

## 📁 Folder Overview

```
src/
├── assets/                 
├── components/
│   ├── Navbar.jsx
│   ├── TrendingSlider.jsx
│   ├── MoreReasons.jsx
│   ├── Ready.jsx
│   ├── Footer.jsx
│   └── FAQSection/
│       ├── FAQSection.jsx
│       └── FAQItem.jsx
├── locales/
│   ├── en.json
│   └── hi.json
├── App.jsx
├── main.jsx
├── i18n.js
```

---

## 🛠 Getting Started

### Requirements

- Node.js v16+
- TMDb API key → [Get one](https://www.themoviedb.org/documentation/api)

---

### Setup

1. **Clone the repo**

```bash
git clone https://github.com/apurvaprj-pro/netflix-clone.git
cd netflix-clone
```

2. **Install dependencies**

```bash
npm install
```

3. **Add `.env`**

Create a `.env` file at the root:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
```

4. **Make sure your fetch call uses it**

Example from `TrendingSlider.jsx`:

```js
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
```

5. **Start dev server**

```bash
npm run dev
```

---

### Build for production

```bash
npm run build
```

---

## 🔄 Deploy on Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add your `VITE_TMDB_API_KEY` in the environment variables
4. Deploy 🚀

---

## 🌐 Language Support (i18n)

Using `react-i18next`.

- Files:
  - `src/i18n/en.json`
  - `src/i18n/hi.json`
- Switch is in `Navbar.jsx` with `i18n.changeLanguage()`

Want to add more languages? Just create a new JSON file and update `i18n.js`.

---

## ⚙️ Performance Notes

- Optimized for LCP, FCP, and Speed Index
- Images fetched in `w500` sizes
- Uses semantic HTML, lazy CSS, minimal JS
- Accessibility: labels, ARIA, keyboard nav

---

## 🙏 Credits

- Design inspo: [Netflix](https://www.netflix.com)
- Data: [TMDb API](https://www.themoviedb.org/documentation/api)
- Icons: [Heroicons](https://heroicons.com)
- Hosting: [Vercel](https://vercel.com)

---

## 👋 About Me

Built by [Apurva Prajapati](https://github.com/apurvaprj-pro)

If you liked it, feel free to fork or ⭐️ the repo!
