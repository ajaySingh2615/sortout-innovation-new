import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            Sortout Innovation
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-neutral-700"
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-neutral-700"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
