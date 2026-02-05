import { Database } from "@/types/database";
import Link from "next/link";

interface Props {
  databases: Database[];
  selectedDb: Database | null;
  onSelect: (db: Database) => void;
}

export default function DatabaseList({
  databases,
  selectedDb,
  onSelect,
}: Props) {
  return (
    <div className="w-1/4 border-r bg-gray-50 p-4 ">
      <h2 className="mb-4 text-lg font-semibold">Databases</h2>

      <ul className="space-y-2">
        {databases.length > 0 &&
          databases.map((db) => (
            <li
              key={db._id}
              onClick={() => onSelect(db)}
              className={`cursor-pointer rounded px-3 py-2 ${
                selectedDb?._id === db._id
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {db.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
