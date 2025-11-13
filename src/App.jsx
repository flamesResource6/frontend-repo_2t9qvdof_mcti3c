import Navbar from './Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-600">© {new Date().getFullYear()} Your Name — Cybersecurity Portfolio</footer>
    </div>
  )
}

export default App
