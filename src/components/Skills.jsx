import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(".skill-item", {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="skills" ref={sectionRef} id="skills">
      <h2 className="skills-heading">{content.skills.heading}</h2>
      <div className="skills-grid">
        {content.skills.items.map((skill) => (
          <div className="skill-item" key={skill.title}>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills