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
                Tomos
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                Conocimientos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Comuna
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Subscribirse al Culto
        </Button>
      </div>
    </header>
  )
}