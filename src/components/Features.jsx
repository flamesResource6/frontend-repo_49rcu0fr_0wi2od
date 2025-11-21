const features = [
  { title: 'Скорость', desc: 'Быстрые итерации и прозрачные процессы. От идеи до релиза — без лишней бюрократии.' },
  { title: 'Качество', desc: 'Код-ревью, тестирование, дизайн-система и лучшие практики разработки.' },
  { title: 'Опыт', desc: 'Команда с опытом в продуктах, b2b, e-commerce и стартапах.' },
  { title: 'Партнерство', desc: 'Работаем как расширение вашей команды, не как подрядчик.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Преимущества</h2>
          <p className="text-[#e8e8e8]/80 mt-2">Почему с нами удобно и эффективно работать</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-[#e8e8e8]/80 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
