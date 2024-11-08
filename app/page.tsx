import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import FeaturedContent from '@/components/FeaturedContent';
import Subscription from '@/components/Subscription';
import Community from '@/components/Community';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <NewsSection />
        <FeaturedContent />
        <Community />
        <Subscription />
      </div>
    </div>
  );
}