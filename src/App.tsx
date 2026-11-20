import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FEATURES } from "@/config/features";
import BetaWelcomeModal from "@/components/BetaWelcomeModal";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgettazionePage from "./pages/ProgettazionePage";
import MaterialiPage from "./pages/MaterialiPage";
import SmartTechPage from "./pages/SmartTechPage";

import CucinaPage from "./pages/CucinaPage";
import CantinaPage from "./pages/CantinaPage";
import ServiziPage from "./pages/ServiziPage";
import ProgettiPage from "./pages/ProgettiPage";
import ContattiPage from "./pages/ContattiPage";
import SocialPage from "./pages/SocialPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CameraPage from "./pages/CameraPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {FEATURES.SHOW_BETA_WELCOME && <BetaWelcomeModal />}
      <BrowserRouter>
        <ScrollToTop />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/progettazione" element={<ProgettazionePage />} />
          <Route path="/materiali" element={<MaterialiPage />} />
          <Route path="/smart-tech" element={<SmartTechPage />} />
          
          <Route path="/cucina" element={<CucinaPage />} />
          <Route path="/cantina" element={<CantinaPage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="/progetti" element={<ProgettiPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
