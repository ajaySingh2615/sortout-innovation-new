import { motion } from 'framer-motion';
import AnimatedGradientText from '../../components/magicui/AnimatedGradientText';

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-700 overflow-hidden">
      {/* Background gradient glow animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-red-700/40"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Top Tagline - Animated Gradient Text */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedGradientText
              className="text-xs font-medium"
              gradientFrom="#FFFFFF"
              gradientTo="#D32F2F"
              duration={2}
            >
              Introducing Sortout Innovation
            </AnimatedGradientText>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Sortout Innovation is the new way to build digital solutions.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            Beautifully designed, animated components and templates built with Tailwind CSS, React,
            and Framer Motion.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            <motion.button
              className="px-6 py-3 rounded-lg bg-white text-primary-600 font-medium text-base border-2 border-white transition-all duration-300 hover:bg-primary-600 hover:text-white shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started for Free →
            </motion.button>
          </motion.div>

          {/* Hero Image - Glassmorphism */}
          <motion.div
            className="w-full max-w-5xl mx-auto mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div className="relative aspect-[16/10]">
              {/* Multiple glowing layers for better visibility */}
              <div
                className="absolute inset-[-60px] rounded-2xl"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)',
                  filter: 'blur(40px)',
                }}
              />

              <div
                className="absolute inset-[-40px] rounded-2xl"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Image container with white background for contrast */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                <img
                  src="/images/home/hero-section/hero-image.png"
                  alt="Digital Marketing Sales Funnel - Sortout Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
