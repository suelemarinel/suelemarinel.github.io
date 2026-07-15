import { Routes, Route } from "react-router-dom"
import SmoothScroll from "./components/SmoothScroll.jsx"
import Home from "./pages/Home.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"

function App() {
  return (
    <>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
