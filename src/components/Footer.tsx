import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo a sinistra */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/cea07f37-a634-457a-aaa8-9afa6497024b.png" 
              alt="EDIL FAST Milano Logo"
              className="h-16 w-auto rounded-xl"
            />
          </div>
          
          {/* Links e copyright a destra */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link 
              to="/privacy-policy" 
              className="text-sm opacity-80 hover:opacity-100 transition-opacity underline"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline text-sm opacity-80">|</span>
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