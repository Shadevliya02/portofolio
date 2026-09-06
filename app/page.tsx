import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CoreSkills } from "@/components/sections/CoreSkills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreSkills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
