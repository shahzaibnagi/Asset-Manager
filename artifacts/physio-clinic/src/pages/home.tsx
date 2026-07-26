import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Services } from "@/components/sections/Services";
import { Conditions } from "@/components/sections/Conditions";
import { Exercises } from "@/components/sections/Exercises";
import { Testimonials } from "@/components/sections/Testimonials";
import { HealthTips } from "@/components/sections/HealthTips";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingElements } from "@/components/sections/FloatingElements";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen w-full bg-background font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="stats"><Stats /></div>
        <div id="about"><AboutDoctor /></div>
        <div id="services"><Services /></div>
        <div id="conditions"><Conditions /></div>
        <div id="exercises"><Exercises /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="tips"><HealthTips /></div>
        <div id="booking"><AppointmentForm /></div>
        <div id="contact"><Contact /></div>
        <div id="faq"><FAQ /></div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}
