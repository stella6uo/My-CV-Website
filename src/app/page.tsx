import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Figures } from "@/components/Figures";
import { OpenTo } from "@/components/OpenTo";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="ledger-page flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Figures />
        <OpenTo />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
