import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    description: "A beginner-friendly guide to building with Next.js.",
    date: "April 20, 2025",
  },
  {
    id: "2",
    title: "Understanding Server-side Rendering",
    description: "SSR explained with examples.",
    date: "April 21, 2025",
  },
  {
    id: "3",
    title: "Styling in Next.js with Tailwind",
    description: "How to use Tailwind CSS in your Next.js project.",
    date: "April 22, 2025",
  },
];

export default function Home() {
  return (
    <main className="py-2">
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 hover:border-[#FFFFFF50] cursor-pointer border border-[#FFFFFF30] shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
