import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-gray-600">Page not found.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Back to Home</Link>
      </div>
    </main>
  )
}