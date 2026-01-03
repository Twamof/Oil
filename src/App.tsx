import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import WhyChoose from './components/WhyChoose';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InfoBar />
      <WhyChoose />
      <ProductGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
