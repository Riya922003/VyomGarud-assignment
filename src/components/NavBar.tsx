import Link from 'next/link'

export default function NavBar() {
  return (
  <header className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left: brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white font-bold text-xl">
              vyomgarud
            </Link>
          </div>

          {/* center: nav links (kept to 4 items) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-neutral-300 hover:text-white transition">Home</Link>
              <a href="#products" className="text-neutral-300 hover:text-white transition">Products</a>
              <a href="#highlights" className="text-neutral-300 hover:text-white transition">Highlights</a>
              <a href="#contact-us" className="text-neutral-300 hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* right: CTA / mobile menu */}
          <div className="flex items-center gap-4">
            <Link href="#contact-us" className="hidden sm:inline-block bg-[#ff7b00] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition-shadow shadow-sm">
              Get in touch
            </Link>
            <button className="block md:hidden p-2 text-neutral-300 hover:text-white">{/* mobile menu placeholder */}
              <span className="sr-only">Open menu</span>
              ☰
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
