import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#ebe8de] text-[#2b2b2b]">
      <Navbar />

      <section className="pt-24">
        <Hero />
      </section>

      <section id="proceso">
        <Process />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <section id="portafolio">
        <Portfolio />
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
    </main>
  );
}