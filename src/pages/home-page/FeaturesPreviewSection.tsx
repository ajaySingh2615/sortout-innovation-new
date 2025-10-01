import { motion } from 'framer-motion';

export default function FeaturesPreviewSection() {
  return (
    <section className="container py-24">
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="card bg-white border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-3 text-neutral-900">Card {index + 1}</h3>
            <p className="text-neutral-600">
              Placeholder card content to demonstrate Tailwind styles.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
