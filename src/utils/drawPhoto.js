/**
 * Draws a themed decorative image onto a canvas element.
 * @param {HTMLCanvasElement} canvas
 * @param {'sunset'|'golden'|'bloom'|'night'|'stars'|'twilight'|'roses'|'love'} theme
 * @param {number} w  – canvas width  (px)
 * @param {number} h  – canvas height (px)
 */
export function drawPhoto(canvas, theme, w, h) {
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  const themes = {
    /* ── Sunset ─────────────────────────────────── */
    sunset() {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#1a0510')
      g.addColorStop(0.4, '#7a1830')
      g.addColorStop(0.7, '#e8405a')
      g.addColorStop(1, '#f4a261')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // sun glow
      const sun = ctx.createRadialGradient(w * 0.65, h * 0.45, 0, w * 0.65, h * 0.45, h * 0.35)
      sun.addColorStop(0, 'rgba(255,220,100,0.7)')
      sun.addColorStop(1, 'transparent')
      ctx.fillStyle = sun
      ctx.fillRect(0, 0, w, h)

      // silhouette hills
      ctx.fillStyle = '#0d0308'
      ctx.beginPath()
      ctx.moveTo(0, h)
      ctx.bezierCurveTo(w * 0.2, h * 0.72, w * 0.4, h * 0.65, w * 0.6, h * 0.68)
      ctx.bezierCurveTo(w * 0.75, h * 0.7, w * 0.9, h * 0.62, w, h * 0.75)
      ctx.lineTo(w, h)
      ctx.fill()

      // stars
      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.7 + 0.1})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h * 0.5, Math.random() * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    },

    /* ── Golden Hour ─────────────────────────────── */
    golden() {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#2d1a00')
      g.addColorStop(0.5, '#8b5e00')
      g.addColorStop(1, '#f4c430')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const glow = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.3, h * 0.6)
      glow.addColorStop(0, 'rgba(255,200,50,0.5)')
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // bokeh
      for (let i = 0; i < 20; i++) {
        const bx = Math.random() * w, by = Math.random() * h, br = Math.random() * 30 + 5
        const bg = ctx.createRadialGradient(bx, by, 0, bx, by, br)
        bg.addColorStop(0, `rgba(255,220,80,${Math.random() * 0.4 + 0.1})`)
        bg.addColorStop(1, 'transparent')
        ctx.fillStyle = bg
        ctx.beginPath()
        ctx.arc(bx, by, br, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.font = `${w * 0.15}px serif`
      ctx.fillStyle = 'rgba(255,160,50,0.3)'
      ctx.textAlign = 'center'
      ctx.fillText('❤', w / 2, h * 0.55)
    },

    /* ── Bloom ───────────────────────────────────── */
    bloom() {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#1a0a10')
      g.addColorStop(1, '#3d0a2e')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const petals = [
        { x: 0.3, y: 0.4, r: 0.18, c: ['#e8405a', '#c9234a'] },
        { x: 0.7, y: 0.3, r: 0.14, c: ['#f472b6', '#db2777'] },
        { x: 0.55, y: 0.65, r: 0.12, c: ['#e8405a', '#9d174d'] },
        { x: 0.15, y: 0.7, r: 0.1, c: ['#fb7185', '#e11d48'] },
        { x: 0.85, y: 0.6, r: 0.11, c: ['#fda4af', '#fb7185'] },
      ]
      petals.forEach(p => {
        for (let i = 0; i < 6; i++) {
          const angle = i * (Math.PI / 3)
          const px = p.x * w + Math.cos(angle) * p.r * w * 0.6
          const py = p.y * h + Math.sin(angle) * p.r * h * 0.6
          const pg = ctx.createRadialGradient(px, py, 0, px, py, p.r * w * 0.6)
          pg.addColorStop(0, p.c[0] + 'cc')
          pg.addColorStop(1, p.c[1] + '22')
          ctx.fillStyle = pg
          ctx.beginPath()
          ctx.ellipse(px, py, p.r * w * 0.5, p.r * h * 0.35, angle, 0, Math.PI * 2)
          ctx.fill()
        }
        const cg = ctx.createRadialGradient(p.x * w, p.y * h, 0, p.x * w, p.y * h, p.r * w * 0.25)
        cg.addColorStop(0, '#fef08a')
        cg.addColorStop(1, '#ca8a04')
        ctx.fillStyle = cg
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r * w * 0.22, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < 25; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.6 + 0.1})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    },

    /* ── Night ───────────────────────────────────── */
    night() {
      const g = ctx.createLinearGradient(0, 0, 0, h)
      g.addColorStop(0, '#040010')
      g.addColorStop(0.6, '#0d0030')
      g.addColorStop(1, '#1a0050')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < 80; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.9 + 0.1})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h * 0.75, Math.random() * 2 + 0.3, 0, Math.PI * 2)
        ctx.fill()
      }

      // moon + shadow
      const moon = ctx.createRadialGradient(w * 0.75, h * 0.2, 0, w * 0.75, h * 0.2, h * 0.1)
      moon.addColorStop(0, 'rgba(255,250,220,0.95)')
      moon.addColorStop(0.7, 'rgba(255,230,150,0.6)')
      moon.addColorStop(1, 'transparent')
      ctx.fillStyle = moon
      ctx.beginPath()
      ctx.arc(w * 0.75, h * 0.2, h * 0.1, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(4,0,16,1)'
      ctx.beginPath()
      ctx.arc(w * 0.77 + h * 0.04, h * 0.18, h * 0.09, 0, Math.PI * 2)
      ctx.fill()

      // ground
      ctx.fillStyle = '#050012'
      ctx.beginPath()
      ctx.moveTo(0, h)
      ctx.bezierCurveTo(w * 0.3, h * 0.78, w * 0.7, h * 0.82, w, h * 0.75)
      ctx.lineTo(w, h)
      ctx.fill()
    },

    /* ── Stars ───────────────────────────────────── */
    stars() {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#0a0520')
      g.addColorStop(0.5, '#1a0a35')
      g.addColorStop(1, '#2d0a1a')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < 120; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random()})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      [[0.2, 0.4], [0.7, 0.3], [0.5, 0.7]].forEach(([px, py]) => {
        const rg = ctx.createRadialGradient(px * w, py * h, 0, px * w, py * h, w * 0.2)
        rg.addColorStop(0, 'rgba(232,64,90,0.2)')
        rg.addColorStop(1, 'transparent')
        ctx.fillStyle = rg
        ctx.fillRect(0, 0, w, h)
      })

      // shooting star
      ctx.strokeStyle = 'rgba(255,255,200,0.8)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(w * 0.6, h * 0.1)
      ctx.lineTo(w * 0.85, h * 0.35)
      ctx.stroke()
      ctx.fillStyle = 'rgba(255,255,200,0.9)'
      ctx.beginPath()
      ctx.arc(w * 0.6, h * 0.1, 2, 0, Math.PI * 2)
      ctx.fill()
    },

    /* ── Twilight ─────────────────────────────────── */
    twilight() {
      const g = ctx.createLinearGradient(0, 0, 0, h)
      g.addColorStop(0, '#0f0520')
      g.addColorStop(0.4, '#4a1060')
      g.addColorStop(0.7, '#9b2080')
      g.addColorStop(1, '#e8405a')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const band = ctx.createLinearGradient(0, h * 0.55, 0, h * 0.75)
      band.addColorStop(0, 'rgba(255,100,50,0.4)')
      band.addColorStop(1, 'transparent')
      ctx.fillStyle = band
      ctx.fillRect(0, h * 0.55, w, h * 0.2)

      ;[0.2, 0.5, 0.8].forEach(cx => {
        ctx.fillStyle = 'rgba(150,50,100,0.3)'
        ctx.beginPath()
        ctx.ellipse(cx * w, h * 0.5, w * 0.15, h * 0.06, 0, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.8})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h * 0.4, Math.random() * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.fillStyle = '#080010'
      ctx.beginPath()
      ctx.moveTo(0, h)
      ctx.bezierCurveTo(w * 0.15, h * 0.8, w * 0.35, h * 0.85, w * 0.5, h * 0.82)
      ctx.bezierCurveTo(w * 0.65, h * 0.78, w * 0.8, h * 0.83, w, h * 0.75)
      ctx.lineTo(w, h)
      ctx.fill()
    },

    /* ── Roses ───────────────────────────────────── */
    roses() {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#1a0010')
      g.addColorStop(1, '#3d0020')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      function drawRose(rx, ry, size, hue) {
        for (let p = 0; p < 8; p++) {
          const angle = p * (Math.PI / 4)
          const ex = rx + Math.cos(angle) * size
          const ey = ry + Math.sin(angle) * size
          const pg = ctx.createRadialGradient(ex, ey, 0, ex, ey, size)
          pg.addColorStop(0, `hsla(${hue},80%,60%,0.8)`)
          pg.addColorStop(1, 'transparent')
          ctx.fillStyle = pg
          ctx.beginPath()
          ctx.ellipse(ex, ey, size * 0.6, size * 0.4, angle, 0, Math.PI * 2)
          ctx.fill()
        }
        const cg = ctx.createRadialGradient(rx, ry, 0, rx, ry, size * 0.3)
        cg.addColorStop(0, `hsla(${hue + 10},90%,70%,1)`)
        cg.addColorStop(1, `hsla(${hue - 10},70%,40%,0.5)`)
        ctx.fillStyle = cg
        ctx.beginPath()
        ctx.arc(rx, ry, size * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }

      drawRose(w * 0.5, h * 0.45, h * 0.22, 350)
      drawRose(w * 0.2, h * 0.25, h * 0.1, 355)
      drawRose(w * 0.8, h * 0.7, h * 0.13, 345)
      drawRose(w * 0.15, h * 0.75, h * 0.08, 340)
      drawRose(w * 0.85, h * 0.2, h * 0.09, 360)

      ctx.fillStyle = 'rgba(20,80,20,0.4)'
      for (let i = 0; i < 6; i++) {
        const lx = Math.random() * w, ly = Math.random() * h, la = Math.random() * Math.PI * 2
        ctx.beginPath()
        ctx.ellipse(lx, ly, 40, 12, la, 0, Math.PI * 2)
        ctx.fill()
      }

      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(255,200,220,${Math.random() * 0.6})`
        ctx.beginPath()
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    },

    /* ── Love ────────────────────────────────────── */
    love() {
      const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7)
      g.addColorStop(0, '#3d0020')
      g.addColorStop(0.5, '#1a0010')
      g.addColorStop(1, '#0a000a')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      function heart(cx, cy, size, alpha) {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.scale(size / 100, size / 100)
        ctx.beginPath()
        ctx.moveTo(0, -30)
        ctx.bezierCurveTo(50, -80, 100, -30, 0, 40)
        ctx.bezierCurveTo(-100, -30, -50, -80, 0, -30)
        ctx.fillStyle = `rgba(232,64,90,${alpha})`
        ctx.fill()
        ctx.restore()
      }

      const s = Math.min(w, h)
      heart(w / 2, h / 2, s * 0.55, 0.08)
      heart(w / 2, h / 2, s * 0.38, 0.15)
      heart(w / 2, h / 2, s * 0.22, 0.5)
      heart(w / 2, h / 2, s * 0.12, 0.9)

      const cg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, h * 0.2)
      cg.addColorStop(0, 'rgba(255,100,120,0.6)')
      cg.addColorStop(1, 'transparent')
      ctx.fillStyle = cg
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < 40; i++) {
        const a = Math.random() * Math.PI * 2
        const r = Math.random() * s * 0.45
        ctx.fillStyle = `rgba(232,64,90,${Math.random() * 0.4})`
        ctx.beginPath()
        ctx.arc(w / 2 + Math.cos(a) * r, h / 2 + Math.sin(a) * r, Math.random() * 3 + 0.5, 0, Math.PI * 2)
        ctx.fill()
      }
    },
  }

  themes[theme]?.()
}
