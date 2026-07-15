import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function ProjectList() {
  const listRef = useRef(null)
  const previewRef = useRef(null)
  const currentImg = useRef(null)

  useGSAP(
    () => {
      gsap.from(".project-row", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 70%",
        },
      })

      const xTo = gsap.quickTo(previewRef.current, "x", {
        duration: 0.5,
        ease: "power3.out",
      })
      const yTo = gsap.quickTo(previewRef.current, "y", {
        duration: 0.5,
        ease: "power3.out",
      })

      const move = (e) => {
        xTo(e.clientX)
        yTo(e.clientY)
      }
      window.addEventListener("mousemove", move)
      return () => window.removeEventListener("mousemove", move)
    },
    { scope: listRef }
  )

  const show = (project) => {
    const img = project.images?.[0]
    currentImg.current = img ?? null
    const preview = previewRef.current
    const imgEl = preview.querySelector("img")
    const letter = preview.querySelector(".preview-letter")

    if (img) {
      imgEl.src = img
      imgEl.style.display = "block"
      letter.style.display = "none"
    } else {
      imgEl.style.display = "none"
      letter.style.display = "flex"
      letter.textContent = project.name.charAt(0)
    }

    gsap.to(preview, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    })
  }

  const hide = () => {
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.3,
      ease: "power3.in",
    })
  }

  return (
    <section className="projects" ref={listRef} id="projects">
      <div className="projects-header">
        <h2 className="projects-heading">{content.projects.heading}</h2>
        <Link className="projects-see-all" to="/portfolio">
          {content.projects.seeAll} →
        </Link>
      </div>

      <ul className="project-rows">
        {content.projects.items.map((project) => {
          const RowTag = project.url ? "a" : "div"
          const rowProps = project.url
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {}
          return (
            <li key={project.id}>
              <RowTag
                className="project-row"
                {...rowProps}
                onMouseEnter={() => show(project)}
                onMouseLeave={hide}
              >
                <span className="project-row-name">{project.name}</span>
                <span className="project-row-meta">
                  {project.demo && (
                    <span className="project-row-badge">Concept</span>
                  )}
                  {project.type}
                </span>
              </RowTag>
            </li>
          )
        })}
      </ul>

      <div className="project-preview" ref={previewRef} aria-hidden="true">
        <img alt="" />
        <span className="preview-letter"></span>
      </div>
    </section>
  )
}

export default ProjectList