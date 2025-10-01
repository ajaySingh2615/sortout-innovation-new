import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ShowcaseSection() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">
      <div className="container">
        <div
          ref={showcaseRef}
          className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-md overflow-hidden"
        >
          <motion.div
            style={{ y }}
            className="aspect-[16/6] w-full rounded-xl bg-gradient-to-r from-primary-500/15 via-primary-600/10 to-primary-700/15"
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-40 rounded-lg bg-neutral-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
