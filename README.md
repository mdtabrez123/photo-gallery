# Photo Gallery Web App

[cite_start]A responsive React-based photo gallery application built as part of the **Celebrare Frontend Intern Pre-Screening Assignment**[cite: 1, 3]. [cite_start]The app allows users to browse photos, search by author, and manage a list of favorite photos with persistent storage[cite: 6].

## 🚀 Live Demo
**Link:** [https://photo-gallery-ecru-tau.vercel.app/](https://photo-gallery-ecru-tau.vercel.app/)

## ✨ Features
* [cite_start]**Custom Data Fetching:** Implemented a custom hook `useFetchPhotos` to retrieve 30 images from the Picsum API[cite: 47, 18, 19].
* [cite_start]**Responsive Grid:** A fluid layout that adapts to different screen sizes: 4 columns on desktop, 2 on tablet, and 1 on mobile[cite: 25].
* [cite_start]**Real-time Search:** Users can filter photos by author name instantly without additional API calls[cite: 35, 36].
* [cite_start]**Favorites Management:** Uses `useReducer` to handle adding/removing favorites for clean state transitions.
* [cite_start]**Data Persistence:** Integrated `localStorage` to ensure favorite photos remain saved even after a page refresh.
* [cite_start]**Performance Optimization:** Utilized `useMemo` for filtering logic and `useCallback` for search handling to prevent unnecessary re-renders.

## 🛠️ Tech Stack
* [cite_start]**Framework:** React + Vite [cite: 11]
* [cite_start]**Styling:** Tailwind CSS (Strictly no other UI libraries used like Bootstrap or MUI) [cite: 11, 12, 79]
* [cite_start]**State Management:** React Hooks (`useReducer`, `useMemo`, `useCallback`, `useEffect`) [cite: 81, 83]

## 📦 Installation & Setup
1. Clone the repository:
   ```bash
   git clone <your-github-repo-link>
   cd photo-gallery
   npm install
   npm run dev
📝 Assignment Requirements Checklist
[x] Project Setup with React + Vite + Tailwind 
[x] Custom hook useFetchPhotos with loading/error states 
[x] Responsive Grid Layout (4/2/1 columns) 
[x] Real-time Search by Author 
[x] Favorites management via useReducer 
[x] Persistence with localStorage 
[x] Performance optimization with useMemo and useCallback 
[x] 5-minute video explanation
