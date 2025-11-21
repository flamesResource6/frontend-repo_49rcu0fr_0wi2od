export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#2c3e50] p-8 text-[#e8e8e8]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Почему мы</h2>
          <p className="mt-4 text-[#e8e8e8]/85">
            Мы объединяем стратегию, дизайн и технологическую экспертизу. Умеем работать с ограничениями и фокусироваться на метриках, которые важны вашему бизнесу.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-[#e8e8e8]/80">
            <li>— Senior-команда с референсами</li>
            <li>— Прозрачная стоимость и скорость</li>
            <li>— Делаем так, чтобы масштабировалось</li>
            <li>— Говорим на языке бизнеса</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
