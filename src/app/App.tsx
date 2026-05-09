import { PortfolioProvider } from "./context/PortfolioContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
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
