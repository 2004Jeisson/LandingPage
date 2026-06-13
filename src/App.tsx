import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HeroSection from './components/layout/HeroSection/HeroSection';
import ScrollVideo from './components/ScrollVideo';
import FeaturesSection from './components/layout/FeaturesSection/FeaturesSection';
import TestimonialsSection from './components/layout/TestimonialsSection/TestimonialsSection';
import CTASection from './components/layout/CTASection/CTASection';
import Footer from './components/layout/Footer/Footer';
import NotFound from './components/layout/NotFound/NotFound';
import LoadingScreen from './components/common/LoadingScreen/LoadingScreen';
import { LoadingProvider, useLoading } from './context/LoadingContext';

const AppContent = () => {
  const { triggerLoading } = useLoading();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simulamos la carga inicial de 1 segundo
    triggerLoading(1000);

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Enrutador manual simple
  if (currentPath !== '/' && currentPath !== '/index.html') {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollVideo />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <AppContent />
    </LoadingProvider>
  );
}

export default App;
