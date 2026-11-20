import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

/**
 * Fetches dynamic content from Sanity and merges it with existing content.
 * New Sanity items display first, followed by existing/old messages and content.
 */
export function useSanityData(query, fallbackData = []) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    client
      .fetch(query)
      .then((results) => {
        if (!isMounted || !Array.isArray(results)) return;

        if (results.length === 0) {
          setData(fallbackData);
        } else {
          // Merge Sanity items with existing content, deduplicating by title/name
          const sanityTitles = new Set(
            results.map((item) => (item.title || item.name || "").trim().toLowerCase())
          );
          const remainingFallback = (fallbackData || []).filter(
            (item) => !sanityTitles.has((item.title || item.name || "").trim().toLowerCase())
          );
          setData([...results, ...remainingFallback]);
        }
      })
      .catch((err) => {
        console.warn("Using local church data fallback:", err?.message || err);
        if (isMounted) setData(fallbackData);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [query, fallbackData]);

  return { data, loading };
}
