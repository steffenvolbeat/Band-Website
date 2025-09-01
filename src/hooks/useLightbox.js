import { useCallback, useState } from "react";
/*
 * useLightbox.js
 
*/

export default function useLightbox(items, initial = false) {
  const [index, setIndex] = useState(-1);

  const openAt = useCallback((i) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );
  return { index, openAt, close, next, prev, isOpen: index >= 0, setIndex };
}
