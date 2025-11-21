import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Cases from './components/Cases'
import About from './components/About'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1e] text-white">
      {/* animated background base */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_120%_10%,rgba(214,48,49,0.08),transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Cases />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
