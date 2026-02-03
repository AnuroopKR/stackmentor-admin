"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSignupPage() {
    const router=useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    setLoading(true);

    const res=await fetch("http://localhost:7000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name,email,password }),
    });

    const data=res.json()
    console.log(111,data)
    setLoading(false);
    router.push("/login")

  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 border border-green-100">

        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Sign up to get started
        </p>

        <form onSubmit={handleSignup} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">
              Full Name
            </label>
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full h-14 px-5 text-lg
                rounded-xl border border-green-200
                focus:outline-none focus:ring-4 focus:ring-green-200
                transition
              "
            />
          </div>

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
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/admin/login" className="text-green-600 font-medium">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
