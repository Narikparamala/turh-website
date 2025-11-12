import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AiDiagnosticSection from '@/components/sections/ai-diagnostic';
import ServicesSection from '@/components/sections/services';
import TrainingSection from '@/components/sections/training';
import GallerySection from '@/components/sections/gallery';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AiDiagnosticSection />
        <ServicesSection />
        <TrainingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
