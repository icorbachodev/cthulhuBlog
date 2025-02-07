'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary text-shadow">
            Eldritch Insights
          </Link>
          <Button variant="ghost" className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/tomes" className="hover:text-primary transition-colors">
                  Tomos
                </Link>
              </li>
              <li>
                <Link href="/lore" className="hover:text-primary transition-colors">
                  Conocimientos
                </Link>
              </li>
              <li>
                <Link href="/commune" className="hover:text-primary transition-colors">
                  Comuna
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 lg:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/tomes" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Tomos
                </Link>
              </li>
              <li>
                <Link href="/lore" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Conocimientos
                </Link>
              </li>
              <li>
                <Link href="/commune" className="block py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
                  Comuna
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}