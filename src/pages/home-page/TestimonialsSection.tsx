import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="container py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          What people say
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
          Quick feedback from imaginary users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.figure
            key={i}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <blockquote className="text-neutral-700">
              "This starter saved us days. The smooth scrolling is chef's kiss."
            </blockquote>
            <figcaption className="mt-4 text-sm text-neutral-500">Happy Developer</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
