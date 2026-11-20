import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

/**
 * Fetches data from Sanity.
 * If Sanity has no records yet or is unreachable, gracefully falls back to static data.
 */
export function useSanityData(query, fallbackData) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    client
      .fetch(query)
      .then((results) => {
        if (isMounted && Array.isArray(results) && results.length > 0) {
          setData(results);
        }
      })
      .catch((err) => {
        // Fallback silently to static data
        console.warn("Using local church data fallback:", err?.message || err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [query]);

  return { data, loading };
}
