import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function ProjectPanorama() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(
    () => {
      const track = trackRef.current
      const getDistance = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="panorama" ref={sectionRef} id="projects">
      <div className="panorama-track" ref={trackRef}>
        <div className="panorama-panel panorama-intro-panel">
          <h2 className="panorama-heading">{content.projects.heading}</h2>
          <p className="panorama-hint">Keep scrolling →</p>
        </div>

        {content.projects.items.map((project) => (
          <Link
            className="panorama-panel"
            key={project.id}
            to={`/portfolio/${project.id}`}
          >
            <div className="panorama-image">
              <img
                src={project.images?.[0]}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
              />
            </div>
            <h3 className="panorama-name">{project.name}</h3>
            <div className="panorama-meta">
              {project.demo && <span className="panorama-badge">Concept</span>}
              <span>{project.type}</span>
              <span className="panorama-client">{project.client}</span>
            </div>
          </Link>
        ))}

        <div className="panorama-panel panorama-outro-panel">
          <Link className="panorama-see-all" to="/portfolio">
            {content.projects.seeAll} →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectPanorama