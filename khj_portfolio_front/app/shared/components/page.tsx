import About from "@/app/features/about/About";
import Contact from "@/app/features/contact/Contact";
import HomeIntro from "@/app/features/home/HomeIntro";
import Projects from "@/app/features/projects/Projects";
import Skills from "@/app/features/skills/Skills";

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
