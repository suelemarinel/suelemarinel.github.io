import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Portfolio from "./pages/Portfolio.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default App
