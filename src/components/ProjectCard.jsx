import { useEffect, useState } from "react"

const SLIDE_DURATION = 3500

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0)
  const images = project.images ?? []

  useEffect(() => {
    if (images.length < 2) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduced.matches) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [images.length])

  const CardTag = project.url ? "a" : "div"
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <CardTag className="project-card" {...linkProps}>
      <div className="project-image-wrap">
        {images.length > 0 ? (
          <>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? `Screenshot of ${project.name}` : ""}
                loading="lazy"
                className={`project-slide ${i === current ? "is-active" : ""}`}
              />
            ))}
            {images.length > 1 && (
              <span className="project-dots" aria-hidden="true">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`project-dot ${i === current ? "is-active" : ""}`}
                  />
                ))}
              </span>
            )}
          </>
        ) : (
          <span className="project-placeholder" aria-hidden="true">
            {project.name.charAt(0)}
          </span>
        )}
        {project.demo && <span className="project-badge">Concept</span>}
      </div>
      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-client">{project.client}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </CardTag>
  )
}

export default ProjectCard