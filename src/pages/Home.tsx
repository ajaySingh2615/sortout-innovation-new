import ShinyButton from '../components/magicui/ShinyButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container py-24">
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
            <div
              key={index}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-2">Card {index + 1}</h3>
              <p className="text-sm text-neutral-600">
                Placeholder card content to demonstrate Tailwind styles.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
            Everything you need to bootstrap a modern site.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Blazing-fast Vite dev server',
            'TypeScript strict mode',
            'Tailwind CSS utility-first',
            'Routing with React Router',
            'Magic UI components',
            'Lenis smooth scroll',
          ].map((title, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-neutral-600">
                Clean, extensible defaults to move fast with confidence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase (tall visual to encourage scroll) */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="aspect-[16/6] w-full rounded-xl bg-gradient-to-r from-indigo-500/15 via-blue-500/10 to-cyan-500/15" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-40 rounded-lg bg-neutral-100" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What people say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
            Quick feedback from imaginary users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <figure key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-neutral-700">
                “This starter saved us days. The smooth scrolling is chef’s kiss.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">Happy Developer</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
            Common questions answered briefly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Question {i + 1}</h3>
              <p className="text-sm text-neutral-600">
                Short answer describing how things work in this starter.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to build?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mt-2">
            Start customizing sections or plug in your content to ship quickly.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <ShinyButton className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400">
              Start now
            </ShinyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
