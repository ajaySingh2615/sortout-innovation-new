import {
  HeroSection,
  FeaturesPreviewSection,
  FeaturesSection,
  ShowcaseSection,
  TestimonialsSection,
  GSAPPinnedSection,
  FAQSection,
  CTASection,
} from './home-page';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesPreviewSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <GSAPPinnedSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
