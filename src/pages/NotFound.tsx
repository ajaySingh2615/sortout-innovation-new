import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-4">404</h1>
      <p className="text-neutral-600 mb-8">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Go home
      </Link>
    </section>
  );
}
