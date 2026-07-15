import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"
import ProjectCard from "./ProjectCard.jsx"

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 48,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="projects" ref={sectionRef} id="projects">
      <div className="projects-header">
        <h2 className="projects-heading">{content.projects.heading}</h2>
        <Link className="projects-see-all" to="/portfolio">
          {content.projects.seeAll} →
        </Link>
      </div>
      <div className="projects-track">
        {content.projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects