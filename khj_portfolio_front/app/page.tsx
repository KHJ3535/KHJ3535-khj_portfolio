import HomeIntro from "./features/home/HomeIntro";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <section id="home" className="min-h-screen relative">
        <div className="w-full h-full relative z-10">
          <HomeIntro />
        </div>
      </section>

      <section id="about" className="min-h-screen relative">
        <div className="mx-auto relative z-10">
          <About />
        </div>
      </section>

      <section id="skills" className="min-h-screen relative">
        <div className="mx-auto relative z-10">
          <Skills />
        </div>
      </section>

      <section id="projects" className="min-h-screen relative">
        <div className=" mx-auto relative z-10">
          <Projects />
        </div>
      </section>

      <section id="contact" className="min-h-screen relative">
        <div className=" mx-auto relative z-10">
          <Contact />
        </div>
      </section>
    </main>
  );
}
