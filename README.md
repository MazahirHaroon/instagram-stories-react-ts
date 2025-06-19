# Instagram Stories

A simplified, mobile-only implementation of the Instagram “Stories” feature. Users can scroll through a list of image stories, tap to view any story full-screen, manually navigate by tapping left/right, and watch stories auto-advance every 5 seconds.

---

### To Run locally

```bash
   npm install
   npm run dev
```

Open your browser at `http://localhost:5173` and switch to a mobile-sized viewport.

---

## Tech Stack

- **[React](https://react.dev/)** (v19)
- **[TypeScript](https://www.typescriptlang.org/)** (v5)
- **[Tailwind CSS](https://tailwindcss.com/)** (v4)
- **[Vite](https://vitejs.dev/)** (v6)

---

### Folder Structure

```graphql
src/
│── components/ (Reusable UI components)
│   ├── instagram-ui/(UI elements used in larger components)
│   │   ├── Carousel.tsx
│   │   ├── ... other ui components
│   │   ├── index.ts(Re-exports all instagram-ui components)
│   ├── Logo.tsx
│   │   ├── index.ts(Re-exports all UI components)
│   ├── ... other components
│
│── pages/ (App pages/screens)
│   ├── Home.tsx
│   ├── ... other pages
│   ├── index.ts(Re-exports all pages components)
│
│── utils/(Utility functions/helpers)
│   ├── (no functions added yet)
│
│── hooks/
│   ├── ... hooks (no hooks added yet)
│
│── index.css (Tailwind setup)
│
│── constants/
│   ├── stories.ts
│   ├── ... other constant files
|
│── main.tsx
```

---

### External Resources Used

- **Icon8 Images**: <a target="_blank" href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
- **Unsplash Images**
  - **src**: https://images.unsplash.com/photo-1712901965138-9d62a8cc9e93,
    - photographer: Rahul,
  - **src**: https://images.unsplash.com/photo-1520312373131-a85680888414,
    - photographer: Tom Walton,
  - **src**: https://images.unsplash.com/photo-1629468571441-c556429b074e,
    - photographer: Roshan Mohammed,
  - **src**: https://images.unsplash.com/photo-1591851395311-65a7d160849a,
    - photographer: Vivek,
  - **src**: https://images.unsplash.com/photo-1598266218608-c2b9fd3dde21,
    - photographer: Adi Lica,
  - **src**: https://images.unsplash.com/photo-1678966432189-d58296e45ad2,
    - photographer: Shubham S,
  - **src**: https://images.unsplash.com/photo-1583513645242-25a32d451084,
    - photographer: Sreehari Devadas,
  - **src**: https://images.unsplash.com/photo-1629803099414-ef4eebf1f9fc,
    - photographer: Sayooj M,
  - **src**: https://images.unsplash.com/photo-1586030138336-4a854c6ddb5f,
    - photographer: Daniel Joshua,
