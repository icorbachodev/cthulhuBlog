export interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image_url: string | null;
    created_at: string;
}