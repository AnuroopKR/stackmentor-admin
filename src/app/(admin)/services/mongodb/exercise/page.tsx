"use client";

import Link from "next/link";
import { useState } from "react";

type Exercise = {
  title: string;
  slug: string;
  topic: string;
  difficulty: string;
  description: string;
};

export default function ExercisesAdminPage() {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      title: "JavaScript Variables",
      slug: "javascript-variables",
      topic: "JavaScript",
      difficulty: "Beginner",
      description: "Learn how variables work in JavaScript.",
    },
    {
      title: "MongoDB Find Queries",
      slug: "mongodb-find-queries",
      topic: "MongoDB",
      difficulty: "Beginner",
      description: "Practice MongoDB find queries.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    topic: "",
    difficulty: "Beginner",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    if (!form.title) return;

    const slug = form.title.toLowerCase().replace(/\s+/g, "-");

    setExercises([
      ...exercises,
      {
        ...form,
        slug,
      },
    ]);

    setForm({
      title: "",
      topic: "",
      difficulty: "Beginner",
      description: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f6fbf7] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* CREATE EXERCISE */}
        <section className="bg-white rounded-2xl border border-green-100 shadow p-8">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Create Exercise
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Exercise Title"
              className="border border-green-200 rounded-xl px-4 py-3"
            />

            <input
              name="topic"
              value={form.topic}
              onChange={handleChange}
              placeholder="Topic (JavaScript / MongoDB)"
              className="border border-green-200 rounded-xl px-4 py-3"
            />

            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="border border-green-200 rounded-xl px-4 py-3"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Exercise Description"
              rows={3}
              className="border border-green-200 rounded-xl px-4 py-3 md:col-span-2"
            />

            <button
              onClick={handleCreate}
              className="md:col-span-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Create Exercise
            </button>
          </div>
        </section>

        {/* LIST EXERCISES */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Existing Exercises
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((ex, index) => (
                
              <div
                key={index}
                className="bg-white rounded-2xl border border-green-100 shadow-sm p-6"
              >
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {ex.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        ex.difficulty === "Beginner"
                          ? "bg-emerald-100 text-emerald-700"
                          : ex.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {ex.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {ex.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>{ex.topic}</span>
                  <span>/{ex.slug}</span>
                </div>
                <Link
  href={`/services/mongodb/exercise/${ex.slug}`}
  className="text-green-600 font-medium hover:underline"
>
  Manage Questions →
</Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
