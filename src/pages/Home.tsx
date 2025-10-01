import ShinyButton from '../components/magicui/ShinyButton';

export default function Home() {
  return (
    <section className="container py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Build faster with Vite + React + Tailwind
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          This is a professional project structure starter with a clean layout, routing, and
          Tailwind CSS.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <ShinyButton>Get Started</ShinyButton>
          <a
            href="https://magicui.design"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-700 hover:underline"
          >
            Explore Magic UI →
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Card {index + 1}</h3>
            <p className="text-sm text-neutral-600">
              Placeholder card content to demonstrate Tailwind styles.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
