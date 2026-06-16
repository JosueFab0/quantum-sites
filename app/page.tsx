import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AtomJourney from "../components/AtomJourney";

export default function Home() {
  return (
    <main className="relative bg-[#ebe8de] text-[#2b2b2b]">
      <AtomJourney />

      <div className="relative z-10">
        <Navbar />

        <section className="pt-24">
          <Hero />
        </section>

        <WhyUs />
        <Process />
        <Services />
        <BeforeAfter />
        <Portfolio />

        <section id="precios">
          <Pricing />
        </section>

        <CTA />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}