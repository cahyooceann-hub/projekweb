import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">My Portfolio</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hi, I'm Your Name</h1>
            <p className="mt-4 text-lg text-gray-600">Frontend Developer focused on building clean, accessible interfaces with React and TypeScript.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-gray-50">Contact</a>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="size-48 md:size-60 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400" />
          </div>
        </section>

        <section id="about" className="border-t bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 max-w-3xl text-gray-600">
              I build modern web apps with a focus on performance and usability. Experienced with React, TypeScript, Tailwind, and tooling like Vite.
            </p>
          </div>
        </section>

        <section id="skills">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <li className="rounded-md border px-3 py-2">React</li>
              <li className="rounded-md border px-3 py-2">TypeScript</li>
              <li className="rounded-md border px-3 py-2">Tailwind CSS</li>
              <li className="rounded-md border px-3 py-2">Vite</li>
              <li className="rounded-md border px-3 py-2">Node.js</li>
              <li className="rounded-md border px-3 py-2">REST/GraphQL</li>
              <li className="rounded-md border px-3 py-2">Testing</li>
              <li className="rounded-md border px-3 py-2">CI/CD</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="border-t bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[1,2,3].map((n) => (
                <article key={n} className="rounded-lg border overflow-hidden">
                  <div className="h-40 bg-gray-200" />
                  <div className="p-4">
                    <h3 className="font-medium">Project {n}</h3>
                    <p className="mt-2 text-sm text-gray-600">Short description of the project, stack used, and your role.</p>
                    <div className="mt-4 flex gap-3">
                      <a className="text-blue-600 hover:underline" href="#">Demo</a>
                      <a className="text-blue-600 hover:underline" href="#">Code</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <form className="mt-6 grid gap-4 max-w-xl">
              <input className="rounded-md border px-3 py-2" placeholder="Your name" />
              <input className="rounded-md border px-3 py-2" placeholder="Email" type="email" />
              <textarea className="rounded-md border px-3 py-2" placeholder="Message" rows={4} />
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="button">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
