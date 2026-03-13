import { useEffect, useState } from 'react'

const PHOTOS_ENDPOINT = 'https://picsum.photos/v2/list?limit=30'
const AUTHOR_NAMES = [
  'Aarav Mehta',
  'Mila Carter',
  'Noah Bennett',
  'Sofia Patel',
  'Luca Romero',
  'Ivy Collins',
  'Ethan Brooks',
  'Nora Kim',
  'Leo Turner',
  'Ava Sullivan',
  'Aria Flores',
  'Mason Reed',
  'Zoe Hayes',
  'Elijah Cooper',
  'Lina Chen',
  'James Foster',
  'Amara Diaz',
  'Henry Price',
  'Ella Morris',
  'Caleb Ward',
  'Maya Griffin',
  'Owen Hughes',
  'Naomi Cruz',
  'Wyatt Perry',
  'Layla Ross',
  'Isaac Bell',
  'Ruby Long',
  'Julian Scott',
  'Hannah Rivera',
  'Daniel Stone',
]

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPhotos() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(PHOTOS_ENDPOINT, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Unable to fetch photos right now.')
        }

        const data = await response.json()
        const photosWithUniqueAuthors = data.map((photo, index) => ({
          ...photo,
          author: AUTHOR_NAMES[index] || `${photo.author} ${index + 1}`,
        }))

        setPhotos(photosWithUniqueAuthors)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()

    return () => {
      controller.abort()
    }
  }, [])

  return { photos, loading, error }
}