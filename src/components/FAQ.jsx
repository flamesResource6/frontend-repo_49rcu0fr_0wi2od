import { useState } from 'react'

const faqs = [
  { q: 'Как начинается работа?', a: 'Стартуем с стратегической сессии, формируем гипотезы и план, согласуем KPI.' },
  { q: 'Как оцениваете стоимость?', a: 'Фиксированные спринты или гибридная оценка. Без сюрпризов и пересчетов.' },
  { q: 'Какие сроки?', a: 'MVP от 2 до 6 недель в зависимости от сложности и состояния проекта.' },
  { q: 'Как передаете код и доступы?', a: 'Ваша инфраструктура, ваш репозиторий, прозрачные процессы и документация.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-24 bg-[#0f0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-5 py-4 text-white/90 font-medium flex items-center justify-between"
              >
                <span>{f.q}</span>
                <span className="text-[#e74c3c]">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[#e8e8e8]/85 text-sm">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
