import GlowBackground from "@/components/GlowBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GlowBackground />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <Stats />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
