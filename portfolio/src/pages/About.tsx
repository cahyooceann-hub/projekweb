export default function About() {
  return (
    <main>
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            I'm a frontend engineer passionate about building performant, accessible UIs. I love working with React, TypeScript, and Tailwind to craft clean experiences.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'REST/GraphQL', 'Testing', 'CI/CD'].map(s => (
              <li key={s} className="rounded-md border px-3 py-2 bg-white">{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}