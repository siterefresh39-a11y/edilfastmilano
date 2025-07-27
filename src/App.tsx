import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgettazionePage from "./pages/ProgettazionePage";
import MaterialiPage from "./pages/MaterialiPage";
import SmartTechPage from "./pages/SmartTechPage";
import EfficienzaPage from "./pages/EfficienzaPage";
import TempiPage from "./pages/TempiPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/progettazione" element={<ProgettazionePage />} />
          <Route path="/materiali" element={<MaterialiPage />} />
          <Route path="/smart-tech" element={<SmartTechPage />} />
          <Route path="/efficienza" element={<EfficienzaPage />} />
          <Route path="/tempi" element={<TempiPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
