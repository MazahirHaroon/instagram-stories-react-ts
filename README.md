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
│   ├── instagtam-ui/(UI elements used in larger components)
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
