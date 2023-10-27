import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <h1 className="text-5xl text-center my-2">Next.js 14 App Router</h1>
      <p className="text-center mb-6">
        with React Query for remote state management
      </p>
      <p>
        <Link href="/hydration-stream-suspense">
          Recommended CSR method:
          <br />
          <span className="underline">
            React Query With Streamed Hydration --- Bad for SEO
          </span>
        </Link>
      </p>
      <br />
      <p>
        <Link href="/hydration">
          Recommended SSR method:
          <br />
          <span className="underline">
            Prefetching Using Hydration --- Good for SEO
          </span>
        </Link>
      </p>
      <br />
      <p>
        <Link href="/initial-data">
          Not recommended SSR method:
          <br />
          <span className="underline">
            Prefetching Using initial data --- Good for SEO
          </span>
        </Link>
      </p>
    </main>
  );
}
