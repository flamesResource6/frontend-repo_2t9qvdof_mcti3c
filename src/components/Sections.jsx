import { ShieldAlert, Lock, Cloud, Terminal, ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I'm a cybersecurity professional focused on securing cloud-native platforms and modern web apps. I mix hands-on red teaming tactics with blue-team engineering to design systems that are both hardened and observable.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: <Lock className="text-blue-600" size={18} />, label: 'AppSec & Threat Modeling' },
                { icon: <Cloud className="text-blue-600" size={18} />, label: 'Cloud & K8s Security' },
                { icon: <Terminal className="text-blue-600" size={18} />, label: 'Security Automation' },
                { icon: <ShieldAlert className="text-blue-600" size={18} />, label: 'Incident Response' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-slate-700"><span>{item.icon}</span>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="text-sm text-slate-600">Certifications</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {['CEH', 'OSCP', 'Security+ (or your certs)'].map((c) => (
                <div key={c} className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'Penetration Testing', 'Threat Modeling', 'SIEM', 'Kubernetes', 'AWS', 'IaC (Terraform)', 'Zero Trust', 'SSO/OAuth2', 'OWASP Top 10', 'SAST/DAST', 'DevSecOps'
  ]
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <div key={s} className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-medium hover:shadow transition">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    { title: 'Bug Bounty Reports', desc: 'Selected disclosures with fixes and writeups.', link: '#' },
    { title: 'Cloud Hardening Toolkit', desc: 'Scripts/policies to secure AWS & K8s.', link: '#' },
    { title: 'Threat Modeling Templates', desc: 'Lightweight methodology and examples.', link: '#' },
  ]
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
          <a href="#" className="text-blue-700 inline-flex items-center gap-1">All projects <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{p.desc}</p>
              <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-blue-700">Read more <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-700">Open to security roles, consulting, and collaborations. Send a message:</p>
          <form className="mt-6 grid gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <textarea placeholder="Message" rows={5} className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button type="submit" className="inline-flex justify-center px-5 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold shadow hover:shadow-lg transition">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
