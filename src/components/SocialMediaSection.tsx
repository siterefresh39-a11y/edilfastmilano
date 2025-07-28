import { Instagram, Linkedin, Facebook } from "lucide-react";

const SocialMediaSection = () => {
  const socialPosts = [
    {
      id: 1,
      platform: "instagram",
      icon: Instagram,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Progetto Casa Moderna",
      description: "Nuova realizzazione in zona Brera"
    },
    {
      id: 2,
      platform: "linkedin",
      icon: Linkedin,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Team al Lavoro",
      description: "I nostri professionisti in azione"
    },
    {
      id: 3,
      platform: "facebook",
      icon: Facebook,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Innovazione Tecnologica",
      description: "Smart home del futuro"
    },
    {
      id: 4,
      platform: "instagram",
      icon: Instagram,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Design Sostenibile",
      description: "Architettura verde e innovativa"
    },
    {
      id: 5,
      platform: "linkedin",
      icon: Linkedin,
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cantiere Milano",
      description: "Nuovi progetti in corso"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Seguici sui Social
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri i nostri ultimi progetti e rimani aggiornato sulle novità di Edil Fast Milano
          </p>
        </div>

        {/* Social Posts Grid */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content', minWidth: '100%' }}>
            {socialPosts.map((post, index) => {
              const IconComponent = post.icon;
              return (
                <div
                  key={post.id}
                  className="group relative w-80 h-96 flex-shrink-0 cursor-pointer transform transition-all duration-500 ease-out hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  {/* Card Container with Glass Effect */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    
                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:contrast-110"
                      />
                      
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-background/10 group-hover:bg-background/5 transition-all duration-300" />
                      
                      {/* Social Icon */}
                      <div className="absolute top-4 left-4 p-2 rounded-full bg-background/20 backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-background stroke-2" />
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
                        <h3 className="text-lg font-medium text-foreground mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          {post.description}
                        </p>
                        
                        {/* Call to Action */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                          <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            Scopri di più
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Grid for smaller screens */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {socialPosts.slice(0, 4).map((post, index) => {
            const IconComponent = post.icon;
            return (
              <div
                key={`mobile-${post.id}`}
                className="group relative aspect-square cursor-pointer transform transition-all duration-500 ease-out hover:scale-105"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/10 group-hover:bg-background/5 transition-all duration-300" />
                    <div className="absolute top-3 left-3 p-1.5 rounded-full bg-background/20 backdrop-blur-sm">
                      <IconComponent className="w-4 h-4 text-background stroke-2" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 via-background/60 to-transparent">
                      <h3 className="text-base font-medium text-foreground mb-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;