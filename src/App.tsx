import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Tours from './pages/Tours';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
      <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </BrowserRouter>
    </ErrorBoundary>
);

export default App;