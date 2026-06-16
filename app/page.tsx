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

        <section id="inicio" className="pt-24">
          <Hero />
        </section>

        <section id="por-que-elegirnos">
          <WhyUs />
        </section>

        <section id="proceso">
          <Process />
        </section>

        <section id="servicios">
          <Services />
        </section>

        <section id="transformacion">
          <BeforeAfter />
        </section>

        <section id="portafolio">
          <Portfolio />
        </section>

        <section id="precios">
          <Pricing />
        </section>

        <section id="cotizacion">
          <CTA />
        </section>

        <section id="nosotros">
          <About />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contacto">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}