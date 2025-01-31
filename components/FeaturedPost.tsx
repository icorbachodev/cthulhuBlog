import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FeaturedPost() {
  return (
    <Card className="mb-8 bg-card text-card-foreground border border-primary">
      <CardContent className="p-0">
        <div className="md:flex">
          <div className="md:w-2/3 relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg"
              alt="Featured post image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:w-1/3 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl mb-2 text-primary text-shadow">La Llamada de las Profundidades</CardTitle>
              <CardDescription>Inscrito el 1 de Junio, 1923</CardDescription>
            </CardHeader>
            <p className="mb-4">
              En casa de R&apos;lyeh, Cthulhu muerto espera soñando. Pero, ¿qué sueños pueden surgir cuando las estrellas se alinean?
            </p>
            <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary">
              Leer más
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}