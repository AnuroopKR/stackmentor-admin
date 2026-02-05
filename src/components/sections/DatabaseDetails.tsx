import { Database } from "@/types/database";

export default function DatabaseDetails({
  database,
}: {
  database: Database | null;
}) {
  if (!database) {
    return (
      <div className="flex-1 p-6">
        <p>Select a database</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <h1 className="mb-4 text-2xl font-bold">{database.title}</h1>

      <div className="space-y-2">
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto text-green-700">
          {JSON.stringify(database.data, null, 2)}
        </pre>
        <p>{/* <strong>Description:</strong> {database.description} */}</p>
      </div>
    </div>
  );
}
