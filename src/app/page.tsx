import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OpenTo } from "@/components/OpenTo";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <OpenTo />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
