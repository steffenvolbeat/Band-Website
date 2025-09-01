export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 py-6">
      <div>
        <p> {new Date().getFullYear()} Bandname. All rights reserved.</p>
        <p className="mt-2">
          Kontakt:{" "}
          <a href="mailto:info@example" className="underline">
            info@band.example
          </a>
        </p>
      </div>
    </footer>
  );
}
