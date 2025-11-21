export default function Cases() {
  const cases = [
    { title: 'FinTech платформа', result: '+38% к активации', desc: 'Дизайн и разработка онбординга, интеграции с KYC, аналитика.' },
    { title: 'E-commerce', result: '+22% к конверсии', desc: 'Новый checkout, быстрая корзина, оптимизация скорости.' },
    { title: 'B2B SaaS', result: '-40% Time-to-Value', desc: 'Пересборка продукта на модульную архитектуру, дизайн-система.' },
  ]

  return (
    <section id="cases" className="py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Кейсы</h2>
          <p className="text-[#e8e8e8]/80 mt-2">Результаты, а не обещания</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[#e74c3c] font-bold">{c.result}</div>
              <h3 className="text-white font-semibold text-lg mt-1">{c.title}</h3>
              <p className="text-[#e8e8e8]/80 mt-2 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
