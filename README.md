# Photo Gallery Web App (React + Vite + Tailwind CSS)

Yeh project interview assignment format me banaya gaya hai. Is README ka purpose hai ki tum interviewer ko clean flow me explain kar sako: app kya karta hai, kaise karta hai, aur kyun aise design kiya.

## 1. Project Overview

Yeh app:

- 30 photos API se fetch karta hai
- loading spinner dikhata hai
- API fail hone par error message dikhata hai
- responsive grid me photos render karta hai (mobile 1, tablet 2, desktop 4)
- author naam ke basis par real-time search karta hai
- heart button se favorite toggle karta hai
- favorites ko localStorage me persist karta hai

## 2. Tech Stack (Simple Definition)

- React: component-based UI library
- Vite: fast dev server + production build tool
- Tailwind CSS: utility-first styling framework
- No UI libraries: MUI, Bootstrap, Ant Design use nahi kiya gaya

## 3. Commands

Install dependencies:

```bash
npm install
```

Run app:

```bash
npm run dev
```

Build app:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## 4. Important Files

```text
src/
  App.jsx                     # favorites reducer + localStorage persistence
  main.jsx                    # app bootstrap
  index.css                   # Tailwind entry
  components/
    Gallery.jsx               # UI render, search, useCallback, useMemo, loading/error states
  hooks/
    useFetchPhotos.js         # API logic custom hook
```

## 5. Keyword Definitions (Interview Friendly)

- useState: local state store karne ka hook
- useEffect: side-effects ke liye hook (API, timers, subscriptions)
- useReducer: action-based state transitions handle karne ka hook
- useCallback: function reference memoize karta hai
- useMemo: computed value memoize karta hai
- custom hook: reusable logic ko separate function me rakhna
- localStorage: browser ka persistent key-value store
- reducer action: state change instruction object
- payload: action ke sath aane wala useful data
- Set: unique values collection, fast lookup ke liye useful
- try/catch/finally: async errors safely handle karne ka pattern
- AbortController: pending fetch ko cancel karne ka browser API

## 6. 5 Interview Demo Points (Exactly)

### 1) Show the app working

Demo flow:

1. App open karo.
2. Pehle loading spinner dikhao.
3. Photos load hone ke baad grid render dikhao.
4. Search box me text type karke real-time filtering dikhao.
5. Heart icon click karke favorite/unfavorite dikhao.
6. Page refresh karke favorites persist hona dikhao.

Plain explanation:

- Loading state user ko batati hai data fetch chal raha hai.
- Search existing fetched data par hota hai, naya API call nahi hota.
- Favorites localStorage me save hote hain, isliye refresh ke baad rehte hain.

### 2) Open useFetchPhotos hook

Hook return karta hai:

- photos
- loading
- error

If API fails:

- error set hota hai
- loading false ho jata hai
- UI me error message render hota hai
- AbortError case ignore hota hai (normal cancellation during unmount)

### 3) Open useReducer code

Reducer action handled:

- TOGGLE_FAVORITE

Action ka behavior:

- id already favorite ho to remove
- id favorite na ho to add

Why useReducer instead of useState:

- explicit action-based logic
- state transitions readable hote hain
- future actions add karna easy
- favorite toggling jaisa flow reducer me better structure deta hai

### 4) Open useCallback and useMemo usage

useCallback:

- search handler function ko memoize karta hai
- unnecessary rerenders reduce hote hain

useMemo:

- filtered photos list memoize karta hai
- filter calculation tabhi chalegi jab dependency change ho

If removed:

- app mostly functional rahegi
- but extra rerenders aur repeated calculations badh sakte hain

### 5) One difficult thing

Real difficulty:

- Tailwind classes written thi lekin layout expected output nahi de raha tha

Problem:

- styling pipeline mismatch (Tailwind/PostCSS config issue)

Solution:

- correct Tailwind PostCSS plugin setup kiya
- CSS entry fix ki
- build run karke verify kiya ki utilities compile ho rahi hain

Learning:

- frontend bug sirf JSX issue nahi hota, config pipeline bhi check karni hoti hai

## 7. Requirement Mapping

- React + Vite setup: done
- Tailwind-only styling: done
- API fetch + loading + error: done
- Responsive grid 4/2/1: done
- Real-time search without extra API calls: done
- Favorites with useReducer: done
- localStorage persistence: done
- useCallback + useMemo usage: done
- Custom hook usage: done

## 8. 30-Second Intro Script

Yeh React + Vite + Tailwind based photo gallery app hai jisme data custom hook se fetch hota hai, loading/error properly handle hote hain, author-based real-time search milta hai, aur favorites reducer + localStorage se persist hote hain. Codebase me functional components aur hooks use hue hain, aur performance ke liye useCallback/useMemo apply kiya gaya hai.
