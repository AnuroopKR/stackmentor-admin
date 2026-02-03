"use client";

import { useState } from "react";

export default function AddItemPage() {
      const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    console.log(value)
    setLoading(true);

    await fetch("http://localhost:7000/api/admin/create-excercise-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials:"include",
      body: JSON.stringify({ title,data: value }),
    });

    setValue("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-12 border border-green-100">

        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Add New Document
        </h1>
        <p className="text-gray-500 mb-10">
          Enter content below and save it to the database
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
            <div>
                            <label className="block text-gray-600 mb-4 text-sm">
              Document Name
            </label>
            <input type="text" 
                value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type your content here..."
              className="
                w-full text-xl px-6 py-5
                rounded-xl border border-green-200
                resize-none
                focus:outline-none
                focus:ring-4 focus:ring-green-200
                transition
              "/>
            </div>
          <div>
            <label className="block text-gray-600 mb-4 text-sm">
              Document Content
            </label>

            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type your content here..."
              rows={6}
              className="
                w-full text-xl px-6 py-5
                rounded-xl border border-green-200
                resize-none
                focus:outline-none
                focus:ring-4 focus:ring-green-200
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
            {loading ? "Saving..." : "Add Document"}
          </button>
        </form>

      </div>
    </div>
  );
}
