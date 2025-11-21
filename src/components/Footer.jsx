export default function Footer() {
  return (
    <footer className="py-10 bg-[#0f0f1e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e74c3c] to-[#d63031] grid place-items-center">
            <span className="text-white font-black text-sm">DS</span>
          </div>
          <span className="text-[#e8e8e8]/80 text-sm">© {new Date().getFullYear()} Digital Studio</span>
        </div>
        <div className="text-[#e8e8e8]/70 text-sm">Сделано с вниманием к деталям</div>
      </div>
    </footer>
  )
}
