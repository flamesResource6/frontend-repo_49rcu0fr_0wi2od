import { Code2, Palette, BarChart3, Shield, Rocket, Settings } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Разработка',
    desc: 'Web, мобильные и backend решения на современных стеков с упором на качество и масштабируемость.'
  },
  {
    icon: Palette,
    title: 'Продуктовый дизайн',
    desc: 'UX/UI, дизайн-системы, прототипирование и тестирование гипотез.'
  },
  { icon: BarChart3, title: 'Аналитика и рост', desc: 'Настройка метрик, A/B, оптимизация конверсий и воронок.' },
  { icon: Shield, title: 'Безопасность', desc: 'Аудиты, best practices, соответствие требованиям.' },
  { icon: Rocket, title: 'Запуск и поддержка', desc: 'DevOps, CI/CD, мониторинг, поддержка 24/7.' },
  { icon: Settings, title: 'Интеграции', desc: 'CRM, платежные системы, внешние API и сервисы.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0f0f1e]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_30%,rgba(231,76,60,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Услуги</h2>
          <p className="text-[#e8e8e8]/80 mt-2">Карточки с плавными ховерами и микроанимацией иконок</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(231,76,60,0.15)]"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e74c3c] to-[#d63031] grid place-items-center text-white shadow-[0_10px_30px_rgba(231,76,60,0.35)]">
                  <Icon className="transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-[#e8e8e8]/80 mt-4">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
