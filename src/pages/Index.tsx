import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import InteractiveHouseSection from '@/components/InteractiveHouseSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
const Index = () => {
  return <div className="relative">
      {/* Hero Section - Full screen with background image */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Navigation - Fixed and appears on scroll */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <AboutSection />
        <InteractiveHouseSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>;
};
export default Index;