import { motion } from 'framer-motion';

export default function FAQSection() {
  return (
    <section className="container py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">FAQ</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
          Common questions answered briefly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2 text-neutral-900">Question {i + 1}</h3>
            <p className="text-sm text-neutral-600">
              Short answer describing how things work in this starter.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
