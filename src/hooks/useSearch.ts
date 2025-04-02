import { useEffect, useState } from "react"
import { Tool } from "@/types"

// Custom hook for searching tools with built-in API handling
export function useSearch(query: string, simulateError = false) {
  const [data, setData] = useState<Tool[]>([])     // Holds search results
  const [loading, setLoading] = useState(false)    // Tracks loading state
  const [error, setError] = useState(false)        // Tracks API error state

  useEffect(() => {
    // Reset state if query is empty
    if (!query) {
      setData([])
      setLoading(false)
      setError(false)
      return
    }

    // Abort controller for cleanup and avoiding race conditions
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(false)

        // Dynamic API query with optional error simulation
        const url = `https://frontend-test-api.digitalcreative.cn/?no-throttling=${
          simulateError ? "false" : "true"
        }&search=${query}`

        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error("Error from API")

        const json = await res.json()
        setData(json)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // Only set error state if request wasn't intentionally aborted
        if (!controller.signal.aborted) setError(true)
      } finally {
        // Ensure loading is stopped unless fetch was aborted
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchData()

    // Abort fetch on cleanup to avoid setting state after unmount
    return () => controller.abort()
  }, [query, simulateError])

  return { data, loading, error }
}
