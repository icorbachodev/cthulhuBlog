import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Post } from "@/types/post"
import { Breadcrumb } from "@/components/Breadcrumb"

async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
    return res.json();
}

export default async function TomesPage() {
    const blogPosts = await getPosts();

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={[{ label: "Tomos de Eldritch", href: "/tomes" }]} />
            <h1 className="text-4xl font-bold mb-8 text-primary text-shadow">Tomos de Eldritch</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post: Post) => (
                    <Card
                        key={post.id}
                        className="bg-card text-card-foreground border border-secondary hover:border-primary transition-colors"
                    >
                        <Image
                            src={post.image_url || "/placeholder.svg"}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover"
                        />
                        <CardContent className="p-4">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl mb-2 text-primary">{post.title}</CardTitle>
                                <CardDescription>{new Date(post.created_at).toLocaleString('es-ES')}</CardDescription>
                            </CardHeader>
                            <p className="text-sm mb-4">{post.excerpt}</p>
                            <Link href={`/post/${post.slug}`} className="text-secondary hover:text-primary transition-colors">
                                Leer más
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}