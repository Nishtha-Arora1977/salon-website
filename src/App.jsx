import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Visit />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}