export default function Projects() {
  return (
    <main>
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-4 max-w-3xl text-gray-600">A selection of my recent work.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((n) => (
              <article key={n} className="group rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-medium">Project {n}</h3>
                  <p className="mt-2 text-sm text-gray-600">Brief description of the project, technologies, and outcomes.</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-blue-50 text-blue-700 px-2 py-1">React</span>
                    <span className="rounded-full bg-cyan-50 text-cyan-700 px-2 py-1">TypeScript</span>
                    <span className="rounded-full bg-gray-100 text-gray-700 px-2 py-1">Tailwind</span>
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