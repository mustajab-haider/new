# 🎂 Birthday Wish Card

A beautiful, animated birthday wish card built with **React 18 + Vite + Tailwind CSS**.

## ✨ Features

- 🎬 Animated loading screen
- 💌 3D flip greeting card
- 🎮 Interactive love-themed trivia game
- 🖼️ Canvas-painted photo gallery (8 unique themes) with masonry grid
- 🔍 Fullscreen lightbox with keyboard navigation (← → Esc)
- 📸 Polaroid scroll strip
- 🎵 Web Audio API melody player
- 💕 Floating hearts background animation
- 🎉 Surprise overlay modal
- 📱 Fully responsive

## 🗂️ Project Structure

```
birthday-wish-card/
├── index.html                  # Vite entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── heart.svg               # Favicon
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Root component — assembles all sections
    ├── index.css               # Tailwind directives + custom CSS
    ├── data/
    │   ├── galleryData.js      # Gallery image metadata
    │   └── gameData.js         # Trivia questions & answers
    ├── utils/
    │   ├── drawPhoto.js        # Canvas painting engine (8 themes)
    │   ├── useScrollReveal.js  # IntersectionObserver scroll-reveal hook
    │   └── useMusic.js         # Web Audio API melody hook
    └── components/
        ├── Reveal.jsx          # Scroll-reveal wrapper component
        ├── Loading.jsx         # Animated loading/splash screen
        ├── FloatingHearts.jsx  # Background floating emoji hearts
        ├── MusicBtn.jsx        # Fixed music toggle button
        ├── Overlay.jsx         # Surprise fullscreen modal
        ├── Divider.jsx         # Decorative gold divider
        ├── Hero.jsx            # Hero / landing section
        ├── CardSection.jsx     # 3D flip greeting card
        ├── GameSection.jsx     # Trivia mini-game
        ├── PhotoCanvas.jsx     # Canvas element (paints theme on mount)
        ├── PhotoCard.jsx       # Single gallery card with hover effects
        ├── GalleryStrip.jsx    # Horizontal polaroid scroll strip
        ├── GallerySection.jsx  # Full gallery: grid + strip + lightbox
        ├── Lightbox.jsx        # Fullscreen image viewer
        └── FinalSection.jsx    # Closing CTA section
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🎨 Customisation

| File | What to edit |
|------|-------------|
| `src/data/gameData.js` | Trivia questions & answers |
| `src/data/galleryData.js` | Gallery captions, dates, themes |
| `src/components/CardSection.jsx` | Card message text |
| `src/components/Overlay.jsx` | Surprise modal message |
| `src/components/Hero.jsx` | Hero headline & subtitle |
| `tailwind.config.js` | Colour palette (`rose`, `blush`, `gold`, `deep`) |

## 🖌️ Canvas Themes

The gallery generates artwork procedurally using the HTML Canvas API:

| Theme | Description |
|-------|-------------|
| `sunset` | Gradient sky with silhouette hills & stars |
| `golden` | Warm bokeh light circles |
| `bloom` | Procedural rose flowers |
| `night` | Deep space with crescent moon |
| `stars` | Milky way with shooting star |
| `twilight` | Purple-to-rose gradient sky |
| `roses` | Multi-layered rose bursts |
| `love` | Concentric glowing heart rings |

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Web Audio API (melody)
- HTML Canvas API (artwork)
- IntersectionObserver API (scroll reveals)
