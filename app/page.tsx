import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <br></br>
      <Hero />
      <br></br>
      <BentoGrid />
      <br></br>
      <Projects />
      <br></br>
      <Contact />
      <br></br>
      <Footer />
    </div>
  );
}

