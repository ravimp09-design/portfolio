import Navbar from "@/components/Navbar";
import {
  Hero,
  About,
  Projects,
  Skills,
  Experience,
  Process,
  AIWorkflow,
  EducationSection,
  Contact,
  Footer,
} from "@/components/Sections";
import { ScrollToTopFab } from "@/components/UXEnhancements";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <AIWorkflow />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopFab />
    </>
  );
}
