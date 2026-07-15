import { Routes, Route } from "react-router-dom"
import SmoothScroll from "./components/SmoothScroll.jsx"
import Home from "./pages/Home.jsx"
import Portfolio from "./pages/Portfolio.jsx"

function App() {
  return (
    <>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
