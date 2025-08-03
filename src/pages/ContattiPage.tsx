import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  surname: z.string().min(2, 'Il cognome deve avere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  phone: z.string().optional(),
  interestedRooms: z.array(z.string()).min(1, 'Seleziona almeno una stanza'),
  projectDescription: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, 'Devi accettare la privacy policy')
});

type FormData = z.infer<typeof formSchema>;

const ContattiPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      interestedRooms: [],
      projectDescription: '',
      privacy: false
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // EmailJS configuration
  const emailjsConfig = {
    serviceId: 'service_hrgp14c',
    templateId: 'template_o7vf7zd',
    publicKey: 'BCHt0w0wHXivt1zly'
  };

  const roomOptions = [
    { id: 'cucina', label: 'Cucina' },
    { id: 'salotto', label: 'Salotto' },
    { id: 'bagno', label: 'Bagno' },
    { id: 'camera', label: 'Camera da letto' },
    { id: 'altro', label: 'Altro' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 351 566 3803',
      action: 'tel:+393515663803'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@edilfastmilano.it',
      action: 'mailto:info@edilfastmilano.it'
    },
    {
      icon: MapPin,
      title: 'Indirizzo',
      value: 'Via Brera 10, 20121 Milano',
      action: null
    },
    {
      icon: Clock,
      title: 'Orari',
      value: 'Lun-Ven 8:00-18:00',
      action: null
    }
  ];

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Format interested rooms for email
      const formattedRooms = data.interestedRooms
        .map(roomId => roomOptions.find(option => option.id === roomId)?.label)
        .filter(Boolean)
        .join(', ');

      // Prepare email data
      const emailData = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone || 'Non fornito',
        interested_rooms: formattedRooms,
        project_description: data.projectDescription || 'Nessuna descrizione fornita'
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailData,
        emailjsConfig.publicKey
      );

      // Success feedback
      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatteremo presto per discutere del tuo progetto.",
      });

      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova più tardi o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-background">
      <Navigation />
      
      <main className="pt-16">
        <section
          ref={sectionRef}
          className="min-h-screen bg-background flex items-center py-24"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-20 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-light text-secondary mb-6">
                Inizia Ora
                <span className="block text-primary font-medium">Il Tuo Progetto</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Contattaci per una consulenza gratuita e trasforma la tua visione 
                in realtà architettonica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className={`flex items-center space-x-6 transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-12'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-muted rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary mb-1">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-border/50">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Nome e Cognome */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-secondary">
                                Nome *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Il tuo nome"
                                  className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="surname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-secondary">
                                Cognome *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Il tuo cognome"
                                  className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-secondary">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="la-tua-email@esempio.it"
                                className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Telefono */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-secondary">
                              Telefono
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                placeholder="+39 123 456 7890"
                                className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Selezione stanze */}
                      <FormField
                        control={form.control}
                        name="interestedRooms"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-secondary">
                              Sei interessato a una ristrutturazione di? *
                            </FormLabel>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                              {roomOptions.map((room) => (
                                <FormField
                                  key={room.id}
                                  control={form.control}
                                  name="interestedRooms"
                                  render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(room.id)}
                                          onCheckedChange={(checked) => {
                                            const updatedValue = checked
                                              ? [...(field.value || []), room.id]
                                              : field.value?.filter((value) => value !== room.id) || [];
                                            field.onChange(updatedValue);
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal cursor-pointer">
                                        {room.label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Descrizione progetto */}
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-secondary">
                              Descrivi brevemente i lavori che vorresti realizzare
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={4}
                                placeholder="Descrivi il tuo progetto..."
                                className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                                maxLength={500}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Privacy Policy */}
                      <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-muted-foreground cursor-pointer">
                                Accetto la{' '}
                                <a href="/privacy-policy" className="text-primary hover:underline">
                                  privacy policy
                                </a>
                                {' '}*
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-muted text-white rounded-2xl font-medium tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Invio in corso...
                            </>
                          ) : (
                            'Invia Richiesta'
                          )}
                        </span>
                        {!isSubmitting && (
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        )}
                      </button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContattiPage;