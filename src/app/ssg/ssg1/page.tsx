type Post = {
    id: number
    title: string
}

export default async function SSG1() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
        cache: "force-cache",
    })
    const posts: Post[] = await res.json()

    return (
        <main className="min-h-screen flex flex-col items-center py-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 mt-20">📚 Static Site Generation (SSG)</h1>
            <ul className="grid gap-4 w-full max-w-xl">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </main>
    )
}
