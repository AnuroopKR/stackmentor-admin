"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function CreateMongoQuestionPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const [form, setForm] = useState({
    description: "",
    queryType: "",
    sampleData: "",
    expectedOutput: "",
    difficulty: "easy",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.description || !form.queryType || !form.sampleData) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      description: form.description,
      queryType: form.queryType,
      sampleData: form.sampleData,
      expectedOutput: form.expectedOutput
        ? JSON.parse(form.expectedOutput)
        : null,
      difficulty: form.difficulty,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    console.log("Payload:", payload);

    // later: POST to API
    router.push(`/admin/exercises/${slug}`);
  };

  return (
    <main className="min-h-screen bg-[#f6fbf7] py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            Create MongoDB Question
          </h1>
          <p className="text-gray-600">
            Add a new MongoDB exercise question
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl border border-green-100 shadow p-8 space-y-6">

          {/* DESCRIPTION */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Question Description *
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Write the MongoDB question here..."
              className="w-full border border-green-200 rounded-xl px-4 py-3"
            />
          </div>

          {/* QUERY TYPE */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Query Type *
            </label>
            <select
              name="queryType"
              value={form.queryType}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-xl px-4 py-3"
            >
              <option value="">Select query type</option>
              <option value="find">Find</option>
              <option value="insert">Insert</option>
              <option value="update">Update</option>
              <option value="delete">Delete</option>
              <option value="aggregate">Aggregate</option>
            </select>
          </div>

          {/* SAMPLE DATA */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Sample Data (ObjectId) *
            </label>
            <input
              name="sampleData"
              value={form.sampleData}
              onChange={handleChange}
              placeholder="SampleData ObjectId"
              className="w-full border border-green-200 rounded-xl px-4 py-3"
            />
          </div>

          {/* EXPECTED OUTPUT */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Expected Output (JSON)
            </label>
            <textarea
              name="expectedOutput"
              value={form.expectedOutput}
              onChange={handleChange}
              rows={4}
              placeholder={`{\n  "name": "John"\n}`}
              className="w-full border border-green-200 rounded-xl px-4 py-3 font-mono"
            />
          </div>

          {/* DIFFICULTY */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Difficulty *
            </label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-xl px-4 py-3"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* TAGS */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Tags (comma separated)
            </label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="find, projection, filter"
              className="w-full border border-green-200 rounded-xl px-4 py-3"
            />
          </div>

          {/* ACTION */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Save Question
          </button>

        </div>

      </div>
    </main>
  );
}
