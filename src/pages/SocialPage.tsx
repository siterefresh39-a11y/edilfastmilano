import { Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SocialPage = () => {
  const mainSocials = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@edilfastmilano",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50",
      description: "Video dei nostri progetti"
    },
    {
      name: "TikTok", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      url: "https://tiktok.com/@edilfastmilano",
      color: "hover:text-black",
      bgColor: "hover:bg-gray-50",
      description: "Contenuti creativi e innovativi"
    }
  ];

  const otherSocials = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/edilfastmilano",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/edilfastmilano",
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/edilfastmilano",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-light text-foreground mb-6 animate-fade-in">
            I Nostri Social Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mainSocials.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-8 rounded-3xl border-2 border-border bg-card hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${social.bgColor} animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
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
            <h3 className="text-lg font-medium text-foreground mb-8 animate-fade-in delay-500">
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
                    className={`group p-4 rounded-2xl bg-muted hover:bg-background border border-border transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 ${social.color} animate-fade-in hover:shadow-lg`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                    title={social.name}
                  >
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-accent rounded-full animate-bounce delay-1000"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SocialPage;
