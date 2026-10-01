import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCatalog from '@/components/ProductCatalog';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import CartDrawer from '@/components/CartDrawer';
import FloatingCartButton from '@/components/FloatingCartButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <ProductCatalog />
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
      </main>

      {/* Floating & Slideout Cart */}
      <CartDrawer />
      <FloatingCartButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
