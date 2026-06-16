import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ebe8de] text-[#2b2b2b]">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}