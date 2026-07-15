import { Link } from "react-router-dom"
import { content } from "../content/content.js"
import ProjectCard from "../components/ProjectCard.jsx"

function Portfolio() {
  return (
    <main className="portfolio-page">
      <Link className="portfolio-back" to="/">
        {content.projects.backHome}
      </Link>
      <h1 className="portfolio-title">{content.projects.portfolioTitle}</h1>
      <p className="portfolio-intro">{content.projects.portfolioIntro}</p>
      <div className="portfolio-grid">
        {content.projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}

export default Portfolio