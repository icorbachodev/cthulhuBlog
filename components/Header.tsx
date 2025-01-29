import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary text-shadow">
          Eldritch Insights
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Tomes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                Lore
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Commune
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Subscribe to the Cult
        </Button>
      </div>
    </header>
  )
}