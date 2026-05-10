import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/** Thin gradient progress bar fixed at the top of the viewport */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 pointer-events-none"
    />
  );
}

/** Subtle radial cursor glow that follows mouse */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden lg:block" />;
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 relative">
      <ScrollProgressBar />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <Portfolio />
    </PortfolioProvider>
  );
}
