import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#f6fbf7] py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-green-700">
            MongoDB Services
          </h1>
          <p className="text-gray-600 mt-2">
            Manage MongoDB collections and exercises for StackMentor
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* CREATE COLLECTION */}
          <Link
            href="/services/mongodb/database"
            className="group bg-white border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                DB
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Create Collection
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              Create and manage MongoDB collections used for exercises and
              practice data.
            </p>

            <span className="text-green-600 font-medium group-hover:underline">
              Go to Collection Manager →
            </span>
          </Link>

          {/* CREATE EXERCISE */}
          <Link
            href="/services/mongodb/exercise"
            className="group bg-white border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold">
                EX
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Create Exercise
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              Design MongoDB exercises with questions, sample data, and
              difficulty levels.
            </p>

            <span className="text-green-600 font-medium group-hover:underline">
              Go to Exercise Builder →
            </span>
          </Link>

        </div>

      </div>
    </main>
  );
};

export default Page;
