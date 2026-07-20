import Hero from "./components/Hero";
import Features from "./components/Features";
import Artikel from "./components/Artikel";
import HowItWorks from "./components/HowItWorks";
import AppShowcase from "./components/AppShowcase";
import ProSection from "./components/ProSection";
import CtaBanner from "./components/CtaBanner";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Artikel />
      <HowItWorks />
      <AppShowcase />
      <ProSection />
      <CtaBanner />
    </>
  );
}
