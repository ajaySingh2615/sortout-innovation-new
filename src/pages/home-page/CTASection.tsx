import ShinyButton from '../../components/magicui/ShinyButton';

export default function CTASection() {
  return (
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
  );
}
