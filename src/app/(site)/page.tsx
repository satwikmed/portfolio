import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { ExperienceSection } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { RecruiterKit } from "@/components/RecruiterKit";
import { Contact } from "@/components/Contact";
import { Band } from "@/components/fx/Band";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { ScrollProgress } from "@/components/fx/ScrollProgress";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Work />
      <Band />
      <ExperienceSection />
      <Skills />
      <Band reverse />
      <RecruiterKit />
      <Contact />
    </main>
  );
}
