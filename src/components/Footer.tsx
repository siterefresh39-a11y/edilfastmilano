import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/hero_edilfast_vertical.png" 
              alt="EDIL FAST Milano Logo"
              className="h-16 w-auto"
            />
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link 
              to="/privacy-policy" 
              className="text-sm opacity-80 hover:opacity-100 transition-opacity underline"
            >
              Privacy Policy
            </Link>
            <span className="text-sm opacity-80">|</span>
            <p className="text-sm opacity-80">
              © 2025 Edil Fast Milano. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;