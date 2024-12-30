import Profile from "@/app/[locale]/components/profile";
import About from "@/app/[locale]/components/about";
import Projects from "@/app/[locale]/components/projects";
import Experience from "./components/experience";
import Contact from "@/app/[locale]/components/contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Profile />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
