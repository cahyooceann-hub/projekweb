import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'transition-colors hover:text-blue-600',
      isActive && 'text-blue-600'
    )

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-6 rounded bg-gradient-to-tr from-blue-600 to-cyan-400" />
            <span className="font-semibold">My Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Hire Me</Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 11.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 17.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={classNames(
        'md:hidden border-t bg-white',
        isOpen ? 'block' : 'hidden'
      )}>
        <div className="space-y-1 px-4 py-4 text-sm">
          <NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
          <div />
          <NavLink onClick={() => setIsOpen(false)} to="/projects" className={navLinkClass}>Projects</NavLink>
          <div />
          <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
          <div className="pt-2">
            <Link onClick={() => setIsOpen(false)} to="/contact" className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Hire Me</Link>
          </div>
        </div>
      </div>
    </header>
  )
}