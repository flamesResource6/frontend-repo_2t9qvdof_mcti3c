import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10 py-20">
            <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <ShieldCheck size={16} />
                Cybersecurity Specialist
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                I build secure, resilient systems and help companies stay safe.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Offensive mindset. Defensive engineering. Threat modeling, cloud security, and security automation — with a passion for teaching and transparency.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold shadow hover:shadow-lg transition">
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 to-transparent" />
      </div>
    </section>
  )
}
