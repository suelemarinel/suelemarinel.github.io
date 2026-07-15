import { useEffect, useRef, useState } from "react"
import { content } from "../content/content.js"

const COLORS = ["#D9C7EE", "#9B7EBD", "#B9A8CE"]
const COUNT = 240
const CONVERGE_TIME = 1.6
const EXIT_TIME = 0.9

function Intro({ onEnter }) {
  const canvasRef = useRef(null)
  const [leaving, setLeaving] = useState(false)
  const leavingRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let raf, width, height, cx, cy, R

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = width / 2
      cy = height / 2
      R = Math.min(width, height) * 0.32
    }
    resize()
    window.addEventListener("resize", resize)

    const particles = Array.from({ length: COUNT }, (_, i) => ({
      sx: Math.random() * 1.6 - 0.3,
      sy: Math.random() * 1.6 - 0.3,
      angle: (i / COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.06,
      delay: Math.random() * 0.7,
      size: 0.8 + Math.random() * 1.5,
      wobble: Math.random() * Math.PI * 2,
      exitSpeed: 0.55 + Math.random() * 0.9,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const start = performance.now()

    const draw = (now) => {
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, width, height)

      const exitT = leavingRef.current
        ? (now - leavingRef.current) / 1000 / EXIT_TIME
        : 0

      for (const p of particles) {
        const prog = easeOut(
          Math.min(1, Math.max(0, (t - p.delay) / CONVERGE_TIME))
        )
        const breathe = 1 + Math.sin(t * 1.4 + p.wobble) * 0.025
        const targetX = cx + Math.cos(p.angle + t * 0.08) * R * breathe
        const targetY = cy + Math.sin(p.angle + t * 0.08) * R * breathe

        let x = p.sx * width + (targetX - p.sx * width) * prog
        let y = p.sy * height + (targetY - p.sy * height) * prog
        let alpha = 0.15 + 0.75 * prog

        if (exitT > 0) {
          const burst = exitT * exitT * p.exitSpeed * Math.max(width, height)
          x += Math.cos(p.angle) * burst
          y += Math.sin(p.angle) * burst
          alpha *= Math.max(0, 1 - exitT)

          ctx.globalAlpha = alpha
          ctx.strokeStyle = p.color
          ctx.lineWidth = p.size
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(
            x - Math.cos(p.angle) * burst * 0.25,
            y - Math.sin(p.angle) * burst * 0.25
          )
          ctx.stroke()
        } else {
          ctx.globalAlpha = alpha
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(x, y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  const handleEnter = () => {
    if (leavingRef.current) return
    leavingRef.current = performance.now()
    setLeaving(true)
    setTimeout(onEnter, EXIT_TIME * 1000)
  }

  return (
    <div className={`intro ${leaving ? "intro--leaving" : ""}`}>
      <canvas className="intro-canvas" ref={canvasRef} aria-hidden="true" />
      <button className="intro-enter" onClick={handleEnter}>
        <span className="intro-welcome">{content.intro.welcome}</span>
        <span className="intro-hint">{content.intro.hint}</span>
      </button>
    </div>
  )
}

export default Intro