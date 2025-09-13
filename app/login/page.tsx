"use client";
import { useState } from "react";

export default function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(null);
    try{
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
      });
      if(!res.ok){ throw new Error("Invalid credentials"); }
      const params = new URLSearchParams(window.location.search);
      const next = params.get("next") || "/dashboard";
      window.location.href = next;
    }catch(err:any){
      setError(err.message || "Login failed");
    }finally{ setLoading(false); }
  }

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-[var(--panel)]/70 border border-white/10 rounded-2xl p-5 space-y-4">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <input className="w-full rounded-xl px-3 py-2 bg-black/20 border border-white/10" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full rounded-xl px-3 py-2 bg-black/20 border border-white/10" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button disabled={loading} className="w-full rounded-xl px-3 py-2 bg-brand hover:bg-brand-dark transition disabled:opacity-50">
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
