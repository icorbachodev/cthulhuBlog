import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Post } from "@/types/post"

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
  return res.json();
}

export default async function RecentPosts() {
  const blogPosts = await getPosts();
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary text-shadow">Revelaciones Recientes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.map((post: Post) => (
          <Card
            key={post.id}
            className="bg-card text-card-foreground border border-secondary hover:border-primary transition-colors"
          >
            <div className="relative h-48">
              <Image
                src={post.image_url || "/placeholder.svg"}
                alt={`${post.title} thumbnail`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-4">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl mb-2 text-primary text-shadow">{post.title}</CardTitle>
                <CardDescription>{new Date(post.created_at).toLocaleString('es-ES')}</CardDescription>
              </CardHeader>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/post/${post.slug}`} className="text-secondary hover:text-primary transition-colors">
                Profundizar
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}