export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-blue-600">GitHub</a>
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </footer>
  )
}