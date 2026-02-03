"use client"
import React, { useState } from 'react'

const MongodbCategoryForm = () => {

      const [form, setForm] = useState({
        title: "",
        tags: "",
        difficulty: "easy",
        description: "",
      });
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleCreate = async () => {
  if (!form.title) return;

  try {
    const res = await fetch(
      "http://localhost:7000/api/admin/create-category",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: form.title,
          tags: form.tags,
          difficulty: form.difficulty,
          description: form.description,
        }),
      }
    );

    const data = await res.json(); // ✅ FIXED

    if (!res.ok) {
      console.error(data.message || "Something went wrong");
      return;
    }

    const slug = form.title.toLowerCase().replace(/\s+/g, "-");

    console.log("Created category:", data, slug);

    // reset form
    setForm({
      title: "",
      tags: "",
      difficulty: "easy",
      description: "",
    });
  } catch (error) {
    console.error("Create failed:", error);
  }
};

    
        // setExercises([
        //   ...exercises,
        //   {
        //     ...form,
        //     slug,
        //   },
        // ]);


  return (
    <div>
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
              name="tags"
              value={form.tags}
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
              {/* <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option> */}

              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
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
    </div>
  )
}

export default MongodbCategoryForm