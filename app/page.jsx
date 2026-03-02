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
            <Hero />
            <BentoGrid />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
