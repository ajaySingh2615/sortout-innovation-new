import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    'Blazing-fast Vite dev server',
    'TypeScript strict mode',
    'Tailwind CSS utility-first',
    'Routing with React Router',
    'Magic UI components',
    'Lenis smooth scroll',
  ];

  return (
    <section className="container py-24">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-neutral-900">Features</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
          Everything you need to bootstrap a modern site.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((title, i) => (
          <motion.div
            key={i}
            className="card bg-white border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-3 text-neutral-900">{title}</h3>
            <p className="text-neutral-600">
              Clean, extensible defaults to move fast with confidence.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
