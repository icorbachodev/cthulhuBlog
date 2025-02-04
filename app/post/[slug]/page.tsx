import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: post } = await supabase.from("posts").select("*").eq("slug", slug).single();

    if (!post) return notFound();

    const { data: relatedPosts } = await supabase
        .from("posts")
        .select("id, title, slug, image_url, excerpt")
        .neq("slug", slug)
        .limit(3);

    return (
        <article className="max-w-4xl mx-auto px-4 py-8 bg-background">
            <div className="mb-8">
                <Image
                    src={post.image_url || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-primary text-shadow">{post.title}</h1>
            <div className="flex items-center mb-6 text-muted-foreground">
                <span className="mr-4">Ikko The Unforgiven</span>
                <span>{post.created_at}</span>
            </div>
            <div
                className="prose prose-invert prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <hr className="border-muted mb-12" />
            {relatedPosts && relatedPosts.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-primary text-shadow">Tomos Relacionados</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
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
                                    <h3 className="text-lg font-semibold mb-2 text-primary">{post.title}</h3>
                                    <p className="text-sm mb-4">{post.excerpt}</p>
                                    <Link href={`/post/${post.id}`}>
                                        <Button variant="secondary" className="w-full">
                                            Leer más
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            )}
        </article>
    )
}