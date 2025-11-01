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
  The following images were sourced from [Unsplash](https://unsplash.com), each credited to their respective photographers:

  - **[A man wearing a Gandhi cap sitting on a charpai](https://images.unsplash.com/photo-1602907021769-9f2eba51d061)**

    - Photographer: `Ashwini C`

  - **[A group of people standing in front of Taj Mahal](https://images.unsplash.com/photo-1638336260785-d4a35d8ae5f3)**

    - Photographer: `Vatra Voda`

  - **[Football (soccer) training field at Kuantan](https://images.unsplash.com/photo-1517747614396-d21a78b850e8)**

    - Photographer: `Izuddin Helmi Adnan`

  - **[Mysore Palace](https://images.unsplash.com/photo-1523544545175-92e04b96d26b)**

    - Photographer: `Ashim_d'Silva`

  - **[Man wearing a yellow turban smoking a cigarette](https://images.unsplash.com/photo-1712901965138-9d62a8cc9e93)**

    - Photographer: `Rahul Donga`

  - **[Woman celebrating Holi by throwing colored powder](https://images.unsplash.com/photo-1520312373131-a85680888414)**

    - Photographer: `Tom Walton`

  - **[Beach shore in Kerala lined with coconut trees](https://images.unsplash.com/photo-1629468571441-c556429b074e)**

    - Photographer: `Roshan Mohammed`

  - **[A boy in brown jacket sitting on brown rock during daytime](https://images.unsplash.com/photo-1591851395311-65a7d160849a)**

    - Photographer: `Vivek`

  - **[Woman in a teal dress walking in front of Taj Mahal](https://images.unsplash.com/photo-1598266218608-c2b9fd3dde21)**

    - Photographer: `Adi Lica`

  - **[Yellow bus driving past India Gate](https://images.unsplash.com/photo-1678966432189-d58296e45ad2)**

    - Photographer: `Shubham S`

  - **[Green grass field in Kerala with trees and mountain](https://images.unsplash.com/photo-1583513645242-25a32d451084)**

    - Photographer: `Sreehari Devadas`

  - **[River flowing through dense green trees](https://images.unsplash.com/photo-1629803099414-ef4eebf1f9fc)**

    - Photographer: `Sayooj M`

  - **[Red and white lighthouse on a rock formation by the sea](https://images.unsplash.com/photo-1586030138336-4a854c6ddb5f)**
    - Photographer: `Daniel Joshua`

---
