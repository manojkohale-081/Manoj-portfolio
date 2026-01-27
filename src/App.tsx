import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporatePage from "./pages/CorporatePage";
import WeddingPage from "./pages/WeddingPage";
import SportsPage from "./pages/SportsPage";
import ConcertPage from "./pages/ConcertPage";
import PublicSpeakingPage from "./pages/PublicSpeakingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/corporate" element={<CorporatePage />} />
          <Route path="/services/wedding" element={<WeddingPage />} />
          <Route path="/services/sports" element={<SportsPage />} />
          <Route path="/services/concerts" element={<ConcertPage />} />
          <Route path="/services/public-speaking" element={<PublicSpeakingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
