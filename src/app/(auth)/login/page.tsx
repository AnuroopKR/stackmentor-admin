"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router=useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);

    // call your login API here
    const res=await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials:"include",
      body: JSON.stringify({ email,password }),
    });
    const data=res.json()
    setLoading(false);
    router.push("/")
  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-green-100">

        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Admin Login
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full h-14 px-5 text-lg
                rounded-xl border border-green-200
                focus:outline-none focus:ring-4 focus:ring-green-200
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full h-14 px-5 text-lg
                rounded-xl border border-green-200
                focus:outline-none focus:ring-4 focus:ring-green-200
                transition
              "
            />
          </div>

          <button
            disabled={loading}
            className="
              w-full h-14 rounded-xl text-lg font-semibold
              bg-green-600 text-white
              hover:bg-green-700
              active:scale-[0.98]
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}
