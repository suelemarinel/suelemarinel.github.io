import { useState } from "react"
import Intro from "../components/Intro.jsx"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import Skills from "../components/Skills.jsx"
import Contact from "../components/Contact.jsx"

function Home() {
  const [entered, setEntered] = useState(
    () =>
      sessionStorage.getItem("introSeen") === "1" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  const handleEnter = () => {
    sessionStorage.setItem("introSeen", "1")
    setEntered(true)
  }

  return (
    <main>
      {!entered && <Intro onEnter={handleEnter} />}
      <Hero play={entered} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home