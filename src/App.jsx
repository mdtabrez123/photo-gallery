import { useCallback, useEffect, useReducer } from 'react'
import Gallery from './components/Gallery'

const FAVORITES_STORAGE_KEY = 'photo-gallery-favorites'

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const nextFavorites = new Set(state)

      if (nextFavorites.has(action.payload)) {
        nextFavorites.delete(action.payload)
      } else {
        nextFavorites.add(action.payload)
      }

      return nextFavorites
    }
    default:
      return state
  }
}

function initFavorites() {
  try {
    const storedValue = localStorage.getItem(FAVORITES_STORAGE_KEY)

    if (!storedValue) {
      return new Set()
    }

    const parsed = JSON.parse(storedValue)
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch {
    return new Set()
  }
}

function App() {
  const [favorites, dispatch] = useReducer(favoritesReducer, undefined, initFavorites)

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...favorites]))
  }, [favorites])

  const handleToggleFavorite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-8 text-slate-900 md:px-8 md:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <Gallery favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
    </main>
  )
}

export default App
