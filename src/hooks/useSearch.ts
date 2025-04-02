import { useEffect, useState } from "react";
import { Tool } from "@/types";

export function useSearch(query: string, simulateError = true) {
  const [data, setData] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) {
      setData([]);
      setLoading(false);
      setError(false);
      return;
    }

    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const url = `https://frontend-test-api.digitalcreative.cn/?no-throttling=${
          simulateError ? "false" : "true"
        }&search=${query}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Error from API");
        const json = await res.json();
        setData(json);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [query, simulateError]);

  return { data, loading, error };
}
