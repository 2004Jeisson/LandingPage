import Navbar from './components/layout/Navbar/Navbar';
import HeroSection from './components/layout/HeroSection/HeroSection';
import ScrollVideo from './components/ScrollVideo';
import FeaturesSection from './components/layout/FeaturesSection/FeaturesSection';
import SpecsSection from './components/layout/SpecsSection/SpecsSection';
import CTASection from './components/layout/CTASection/CTASection';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollVideo />
      <FeaturesSection />
      <SpecsSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
