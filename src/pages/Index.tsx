import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import InteractiveHouseSection from '@/components/InteractiveHouseSection';
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
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm opacity-80">© 2025 Edil Fast Milano. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>;
};
export default Index;