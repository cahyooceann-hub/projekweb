export default function Contact() {
  return (
    <main>
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-4 max-w-3xl text-gray-600">Send me a message and I’ll get back to you soon.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-xl border bg-white p-6 shadow-sm max-w-2xl">
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="rounded-md border px-3 py-2" placeholder="Your name" />
                <input className="rounded-md border px-3 py-2" placeholder="Email" type="email" />
              </div>
              <input className="rounded-md border px-3 py-2" placeholder="Subject" />
              <textarea className="rounded-md border px-3 py-2" placeholder="Message" rows={5} />
              <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}