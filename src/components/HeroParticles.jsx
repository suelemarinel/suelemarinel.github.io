import { useEffect, useRef } from "react"

const COLORS = ["#D9C7EE", "#9B7EBD", "#B9A8CE"]
const COUNT = 90

function HeroParticles({ warpDuration = 1.6 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduced) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let raf
    let width, height, cx, cy

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = width / 2
      cy = height / 2
    }
    resize()
    window.addEventListener("resize", resize)

    const particles = Array.from({ length: COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: Math.random(),
      z: 0.15 + Math.random() * 0.85,
      size: 0.6 + Math.random() * 1.6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const start = performance.now()

    const draw = (now) => {
      const elapsed = (now - start) / 1000
      const warp = Math.max(0, 1 - elapsed / warpDuration)
      const speed = 0.0004 + warp * warp * 0.012

      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.dist += speed / p.z
        if (p.dist > 1) {
          p.dist = 0.02
          p.angle = Math.random() * Math.PI * 2
        }

        const eased = p.dist * p.dist
        const x = cx + Math.cos(p.angle) * eased * cx * 1.4
        const y = cy + Math.sin(p.angle) * eased * cy * 1.4
        const alpha = Math.min(1, p.dist * 3) * (0.25 + 0.55 * p.dist)

        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color

        if (warp > 0.05) {
          const trail = warp * 26 * p.dist
          ctx.strokeStyle = p.color
          ctx.lineWidth = p.size * (0.5 + p.dist)
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(
            x - Math.cos(p.angle) * trail,
            y - Math.sin(p.angle) * trail
          )
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.arc(x, y, p.size * (0.5 + p.dist), 0, Math.PI * 2)
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
  }, [warpDuration])

  return <canvas className="hero-particles" ref={canvasRef} aria-hidden="true" />
}

export default HeroParticles