import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const recentPosts = [
  {
    id: 1,
    title: "Whispers of Innsmouth",
    excerpt: "Strange tales from a coastal town where the line between man and fish blurs.",
    date: "May 15, 1923",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "The Colour Out of Space",
    excerpt: "A meteorite brings an indescribable hue and unspeakable horror to a rural farm.",
    date: "May 22, 1923",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "At the Mountains of Madness",
    excerpt: "An Antarctic expedition uncovers ruins of a civilization older than time itself.",
    date: "May 29, 1923",
    imageUrl: "/placeholder.svg",
  },
]

export default function RecentPosts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary text-shadow">Recent Revelations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-card text-card-foreground border border-secondary hover:border-primary transition-colors"
          >
            <div className="relative h-48">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={`${post.title} thumbnail`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-4">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl mb-2 text-primary text-shadow">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/post/${post.id}`} className="text-secondary hover:text-primary transition-colors">
                Delve Deeper
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}