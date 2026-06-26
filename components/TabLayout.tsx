"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import BeforeAfter from "./BeforeAfter";
import CTA from "./CTA";
import Services from "./Services";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import LegalPage from "./LegalPage";

export type TabId = "inicio" | "servicios" | "portafolio" | "precios" | "nosotros" | "legal";

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState<TabId>("inicio");

  // Switch to precios tab and scroll to the contact form
  const goToContact = () => {
    if (activeTab === "precios") {
      setTimeout(() => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      setActiveTab("precios");
      setTimeout(() => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      }, 350); // wait for tab animation
    }
  };

  const goToPortfolio = () => setActiveTab("portafolio");

  return (
    <>
      <Navbar
        activeTab={activeTab}
        onTabChange={(id) => setActiveTab(id as TabId)}
        onContact={goToContact}
      />

      <main className="pt-[73px]">
        <div key={activeTab} className="tab-content">

          {activeTab === "inicio" && (
            <>
              <Hero onContact={goToContact} onPortfolio={goToPortfolio} />
              <WhyUs />
              <BeforeAfter />
              <CTA onContact={goToContact} />
            </>
          )}

          {activeTab === "servicios" && (
            <>
              <Services />
              <Process />
            </>
          )}

          {activeTab === "portafolio" && <Portfolio />}

          {activeTab === "precios" && (
            <>
              <Pricing onContact={goToContact} />
              <About />
              <FAQ />
              <Contact />
            </>
          )}

          {activeTab === "nosotros" && (
            <>
              <About />
              <FAQ />
              <Contact />
            </>
          )}

          {activeTab === "legal" && <LegalPage />}

        </div>
        <Footer onTabChange={(id) => setActiveTab(id as TabId)} />
      </main>
    </>
  );
}
