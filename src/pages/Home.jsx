import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import Skills from "../components/Skills.jsx"
import Contact from "../components/Contact.jsx"

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home