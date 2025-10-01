export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-neutral-600">
        <p>&copy; {new Date().getFullYear()} Sortout Innovation. All rights reserved.</p>
      </div>
    </footer>
  );
}
