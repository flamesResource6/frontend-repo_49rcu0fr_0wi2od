export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[#0f0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#2c3e50] to-[#34495e]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_0%_0%,rgba(231,76,60,0.18),transparent_50%)]" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">Готовы обсудить проект?</h3>
              <p className="mt-2 text-[#e8e8e8]/85 max-w-2xl">Оставьте контакты — вернемся с предложением и сроками в течение 24 часов.</p>
              <form className="mt-6 grid md:grid-cols-[1fr_1fr_auto] gap-3">
                <input type="text" placeholder="Имя" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]/40" />
                <input type="email" placeholder="Email" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]/40" />
                <button type="button" className="rounded-lg bg-gradient-to-r from-[#e74c3c] to-[#d63031] px-6 py-3 text-white font-semibold hover:brightness-110 transition shadow-[0_10px_30px_rgba(231,76,60,0.35)]">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
