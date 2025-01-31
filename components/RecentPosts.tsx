import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const recentPosts = [
  {
    id: 1,
    title: "Susurros de Innsmouth",
    excerpt: "Historias extrañas de una ciudad costera donde la línea entre el hombre y el pez se difumina.",
    date: "15 de Mayo, 1923",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "El color fuera del espacio",
    excerpt: "Un meteorito trae un matiz indescriptible y un horror inenarrable a una granja rural.",
    date: "22 de Mayo, 1923",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "En las montañas de la locura",
    excerpt: "Una expedición antártica descubre las ruinas de una civilización más antigua que el propio tiempo.",
    date: "29 de Mayo, 1923",
    imageUrl: "/placeholder.svg",
  },
]

export default function RecentPosts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary text-shadow">Revelaciones Recientes</h2>
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
                Profundizar
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}