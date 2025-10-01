import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GSAPPinnedSection() {
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!pinRef.current) return;
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.from('.gsap-step-1', { opacity: 0, y: 40, duration: 0.6 })
        .to({}, { duration: 0.2 })
        .from('.gsap-step-2', { opacity: 0, y: 40, duration: 0.6 })
        .to({}, { duration: 0.2 })
        .from('.gsap-step-3', { opacity: 0, y: 40, duration: 0.6 });
    }, pinRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={pinRef} className="py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="gsap-step-1 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            ScrollTrigger Pin
          </h2>
          <p className="text-neutral-600 mt-2">Pinned section with a simple stepped timeline.</p>
        </div>
        <div className="h-[40vh]" />
        <div className="gsap-step-2 text-center">
          <h3 className="text-2xl font-semibold text-neutral-900">Step 2</h3>
          <p className="text-neutral-600 mt-2">More content fades in as you scroll.</p>
        </div>
        <div className="h-[40vh]" />
        <div className="gsap-step-3 text-center">
          <h3 className="text-2xl font-semibold text-neutral-900">Step 3</h3>
          <p className="text-neutral-600 mt-2">End of the pinned timeline.</p>
        </div>
      </div>
    </section>
  );
}
