import { useEffect, useState } from 'react'

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }
}

export const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [fetchErrors, setFetchErrors] = useState(null)
  const controller = new AbortController()
  const signal = controller.signal

  const cancellFetch = () => {
    if (!signal.aborted) controller.abort()
  }

  const fetchData = async (url, options) => {
    try {
      setLoading(true)

      setTimeout(() => {
        controller.abort()
      }, 6000)

      const op = options
        ? { ...defaultOptions, ...options, signal }
        : { ...defaultOptions, signal: signal }

      const response = await fetch(url, op)
        .then((res) => {
          if (!res.ok) {
            const err = new Error('Error en la petición Fetch')
            err.status = res.status || '00'
            err.statusText = res.statusText || 'Búsqueda sin resultados'
            throw err
          }
          return res.json()
        })
        .catch((e) => {
          const err = new Error('Error en la petición Fetch')
          err.status = '00'
          err.statusText = 'Error en la conexión'
          throw err
        })

      const data = response

      if (!signal.aborted) {
        setFetchErrors(null)
        setData(data)
      }
    } catch (error) {
      setData(null)
      setFetchErrors(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => cancellFetch()
  }, [])

  return {
    data,
    fetchErrors,
    loading,
    fetchData,
    cancellFetch
  }
}
