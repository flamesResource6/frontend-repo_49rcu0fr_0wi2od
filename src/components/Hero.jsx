import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-[92vh] pt-28" id="home">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlay with pointer-events-none so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(231,76,60,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,30,0.6),rgba(15,15,30,0.9))]" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center gap-6 opacity-0 translate-y-6 transition-all duration-500"
      >
        <span className="inline-flex items-center rounded-full bg-white/10 text-[#e8e8e8] px-3 py-1 text-xs border border-white/10 backdrop-blur">Digital. Strategy. Delivery.</span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_30px_rgba(214,48,49,0.25)]">
          Создаем цифровые решения,
          <br className="hidden sm:block" /> которые двигают бизнес вперед
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-[#e8e8e8]/85">
          От стратегии до запуска: продуктовый дизайн, разработка и рост. Работаем быстро, прозрачно и с фокусом на результат.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#services" className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#e74c3c] to-[#d63031] px-5 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(231,76,60,0.35)] hover:translate-y-[-2px] transition-transform">Наши услуги</a>
          <a href="#cases" className="inline-flex items-center rounded-lg bg-white/10 border border-white/10 px-5 py-3 text-white/90 font-semibold hover:bg-white/15 transition">Кейсы</a>
        </div>
      </div>
    </section>
  )
}
