import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">Frontend Developer</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">Hi, I'm Your Name. I build delightful web experiences.</h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">Specializing in React, TypeScript, and modern tooling to craft fast, accessible UIs.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Projects</Link>
              <Link to="/contact" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">Contact</Link>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="size-56 md:size-72 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg shadow-blue-600/10" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold">What I Do</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'UI Engineering', desc: 'Accessible, responsive, and performant interfaces.' },
              { title: 'Frontend Architecture', desc: 'Scalable patterns with TypeScript and React.' },
              { title: 'Tooling & DX', desc: 'Vite, testing, CI/CD, and automation.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border bg-white p-5 shadow-sm">
                <div className="size-8 rounded bg-gradient-to-tr from-blue-600 to-cyan-400" />
                <h3 className="mt-4 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link to="/projects" className="text-sm text-blue-600 hover:underline">See all</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <article key={n} className="group rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-medium">Project {n}</h3>
                  <p className="mt-2 text-sm text-gray-600">Short description, stack used, and your role.</p>
                  <div className="mt-4 flex gap-2 text-xs">
                    <span className="rounded-full bg-blue-50 text-blue-700 px-2 py-1">React</span>
                    <span className="rounded-full bg-cyan-50 text-cyan-700 px-2 py-1">TypeScript</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}