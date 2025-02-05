import FeaturedPost from "@/components/FeaturedPost"
import RecentPosts from "@/components/RecentPosts"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary text-shadow">Los susurros de R&apos;lyeh</h1>
        <FeaturedPost />
        <RecentPosts />
      </main>
    </div>
  )
}