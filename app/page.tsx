// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-3xl font-bold">GeniusGrid – ERP Frontend (Next.js)</h1>
        <p className="opacity-80">Use the button below to sign in.</p>
        <Link
          href="/login"
          className="inline-block rounded-2xl px-4 py-2 bg-brand hover:bg-brand-dark transition"
        >
          Go to Login
        </Link>
      </div>
    </main>
  );
}
