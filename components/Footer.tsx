import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary text-shadow">
              Eldritch Insights
            </Link>
            <p className="mt-2 text-sm">Desvelando horrores cósmicos desde 1923</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary text-shadow">Grimorios</h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Necronomicon
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Manuscritos de Pnakotic
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Libro de Eibon
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary text-shadow">Cultos</h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cthulhu
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Dagon
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Shub-Niggurath
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary text-shadow">Rituales</h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Invocación
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    Desterrar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-muted sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            © 1923 Miskatonic University Press. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}