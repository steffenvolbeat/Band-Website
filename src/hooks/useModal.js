/*
 * useModal.js
 * SimpleCustom hook to manage modal open/close state and handle Escape key to close the modal.
 */

import { useCallback, useEffect, useState } from "react";

export default function useModal() {
  const [open, setOpen] = useState(initial);

  useEffect(() => {
    function onkey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) documtent.addEventListener("keydown", onkey);
    return () => document.removeEventListener("keydown", onkey);
  }, [open]);
  const openModal = useCallback(() => setopen(true), []);
  const closeModal = useCallback(() => setopen(false), []);
  return { open, openModal, closeModal, setOpen };
}
