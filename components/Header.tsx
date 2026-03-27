import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[rgb(70,35,113)] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-3xl font-bold">
          Virtual Mental Health Services for House Staff
        </Link>
        <nav>
          <ul className="flex space-x-4 text-white menu-text">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/credentials">Credentials</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

