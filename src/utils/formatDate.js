export function formatDateISO(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}