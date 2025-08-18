import { Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const SocialPage = () => {
  const mainSocials = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@edilfastmilano",
      color: "hover:text-white text-red-600",
      bgColor: "hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 bg-red-100",
      description: "Video dei nostri progetti"
    },
    {
      name: "TikTok", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      url: "https://www.tiktok.com/@edilfast.milano?is_from_webapp=1&sender_device=pc",
      color: "hover:text-white text-gray-800",
      bgColor: "hover:bg-gradient-to-br hover:from-gray-800 hover:to-black bg-gray-100",
      description: "Contenuti creativi e innovativi"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/edilfast.milano?utm_source=ig_web_button_share_sheet&igsh=MWtrOG9zMGc3ZjlrYw==",
      color: "hover:text-white text-pink-600",
      bgColor: "hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 bg-pink-100",
      description: "Foto e storie dei nostri lavori"
    }
  ];

  const otherSocials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/edilfastmilano",
      color: "hover:text-white text-blue-600",
      bgColor: "hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 bg-blue-100"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/edilfastmilano",
      color: "hover:text-white text-blue-500",
      bgColor: "hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-light text-foreground mb-6">
            I Nostri Social Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguici sui nostri canali social per rimanere aggiornato sui progetti, 
            le novità e i dietro le quinte di Edil Fast Milano
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-accent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Main Social Platforms */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainSocials.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-8 rounded-3xl border-2 border-border bg-card hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${social.bgColor}`}
                >
                  <div className="flex items-center space-x-6">
                    {/* Icon Container */}
                    <div className={`w-20 h-20 rounded-2xl bg-muted flex items-center justify-center transition-all duration-300 ${social.color} group-hover:scale-110 group-hover:rotate-12`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {social.name}
                      </h3>
                      <p className="text-muted-foreground group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        {social.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Other Social Networks */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-foreground mb-8">
              Ci trovi anche su
            </h3>
            
            <div className="flex justify-center space-x-6">
              {otherSocials.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-2xl transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 ${social.color} ${social.bgColor} hover:shadow-lg border border-border`}
                    title={social.name}
                  >
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SocialPage;
