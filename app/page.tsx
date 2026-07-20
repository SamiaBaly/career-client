import CareerPreview from "./components/home/CareerPreview";
import Cta from "./components/home/Cta";
import Faq from "./components/home/Faq";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import ResumePreview from "./components/home/ResumePreview";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <ResumePreview />
      <CareerPreview />
      <Stats />
      <Testimonials />
      <Faq />
      <Cta/>
    </main>
  );
}