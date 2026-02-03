type PageProps = {
  params: Promise<{ slug: string }>;
};

const questionsData: Record<
  string,
  { id: number; question: string; difficulty: string }[]
> = {
  "javascript-variables": [
    { id: 1, question: "What is a variable?", difficulty: "Beginner" },
    { id: 2, question: "Difference between let and const?", difficulty: "Beginner" },
  ],
};

export default async function QuestionsPage({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug)
  const questions = questionsData[slug] || [];

  return (
    <main className="min-h-screen bg-[#f6fbf7] py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-green-700 capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-600">Manage exercise questions</p>
          </div>

          <a
            href={`/services/mongodb/exercise/${slug}/create`}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
          >
            + Add Question
          </a>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">
                  {i + 1}. {q.question}
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                  {q.difficulty}
                </span>
              </div>
            </div>
          ))}

          {questions.length === 0 && (
            <p className="text-gray-500 text-center">
              No questions added yet.
            </p>
          )}
        </div>

      </div>
    </main>
  );
}
