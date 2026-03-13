import { useCallback, useMemo, useState } from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition ${filled ? 'fill-red-500 text-red-500' : 'fill-none text-slate-500'}`}
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 21s-7-4.35-9.33-8.2C.67 9.44 2.15 5 6.2 5c2.28 0 3.63 1.33 4.3 2.45C11.17 6.33 12.52 5 14.8 5c4.05 0 5.53 4.44 3.53 7.8C19 16.65 12 21 12 21z" />
    </svg>
  )
}

function Gallery({ favorites, onToggleFavorite }) {
  const { photos, loading, error } = useFetchPhotos()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      return photos
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch),
    )
  }, [photos, searchTerm])

  if (loading) {
    return (
      <div className="flex min-h-[280px] items-center justify-center">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"
          role="status"
          aria-label="Loading photos"
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
        Failed to load photos. {error}
      </div>
    )
  }

  if (!filteredPhotos.length) {
    return (
      <>
        <header className="mb-8 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur md:mb-10 md:p-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Photo Gallery</h1>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Search by author and save your favorite photos.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
            <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
              Search by author name
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Type an author name..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300 md:col-start-1 md:row-start-2"
            />

            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:row-start-2 md:text-sm">
              Results: <span className="font-semibold text-slate-800">{filteredPhotos.length}</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:row-start-2 md:text-sm">
              Favorites: <span className="font-semibold text-slate-800">{favorites.size}</span>
            </div>
          </div>
        </header>

        <p className="rounded-lg border border-slate-300 bg-white p-6 text-center text-slate-600">
          No photos match this author.
        </p>
      </>
    )
  }

  return (
    <>
      <header className="mb-8 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur md:mb-10 md:p-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Photo Gallery</h1>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          Search by author and save your favorite photos.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
          <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
            Search by author name
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Type an author name..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300 md:col-start-1 md:row-start-2"
          />

          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:row-start-2 md:text-sm">
            Results: <span className="font-semibold text-slate-800">{filteredPhotos.length}</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:row-start-2 md:text-sm">
            Favorites: <span className="font-semibold text-slate-800">{favorites.size}</span>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => {
          const isFavorite = favorites.has(photo.id)

          return (
            <article
              key={photo.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={`https://picsum.photos/seed/gallery-${photo.id}/900/700`}
                  alt={`Photo by ${photo.author}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between p-4">
                <p className="mr-3 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-800">
                  {photo.author}
                </p>
                <button
                  type="button"
                  onClick={() => onToggleFavorite(photo.id)}
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-200 hover:bg-slate-100"
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <HeartIcon filled={isFavorite} />
                </button>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Gallery