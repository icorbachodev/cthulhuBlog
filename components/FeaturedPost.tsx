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
              <CardTitle className="text-2xl mb-2 text-primary text-shadow">The Call from the Deep</CardTitle>
              <CardDescription>Inscribed on June 1, 1923</CardDescription>
            </CardHeader>
            <p className="mb-4">
              In his house at R'lyeh, dead Cthulhu waits dreaming. But what dreams may come when the stars align?
            </p>
            <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary">
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}