// src/hooks/useFetchJSON.js
import { useEffect, useState } from "react";

/**
 * Generic fetch hook for loading JSON from /public/data/*.json
 * - No hard-coded domain
 * - Returns { data, error, loading }
 */
export default function useFetchJSON(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch((err) => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [path]);

  return { data, error, loading };
}
