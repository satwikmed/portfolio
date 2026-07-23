import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { ExperienceSection } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { RecruiterKit } from "@/components/RecruiterKit";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <ExperienceSection />
      <Skills />
      <RecruiterKit />
      <Contact />
    </main>
  );
}
