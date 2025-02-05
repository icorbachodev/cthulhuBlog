import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

async function getFeaturedPost() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`)
  return res.json()
}

export default async function FeaturedPost() {
  const blogPosts = await getFeaturedPost()
  const featuredPost = blogPosts[blogPosts.length - 1]

  return (
    <Card className="mb-8 bg-card text-card-foreground border border-primary">
      <CardContent className="p-0">
        <div className="md:flex">
          <div className="md:w-2/3 relative h-64 md:h-auto">
            <Image
              src={featuredPost.image_url || "/placeholder.svg"}
              alt="Featured post image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:w-1/3 p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl mb-2 text-primary text-shadow">{featuredPost.title}</CardTitle>
              <CardDescription>{new Date(featuredPost.created_at).toLocaleString('es-ES')}</CardDescription>
            </CardHeader>
            <p className="mb-4">
              {featuredPost.excerpt}
            </p>
            <Link href={`/post/${featuredPost.slug}`}>
              <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary">
                Leer más
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}