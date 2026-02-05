"use client";

import { useEffect, useState } from "react";
import DatabaseList from "@/components/sections/DatabaseList";
import DatabaseDetails from "@/components/sections/DatabaseDetails";
import { Database } from "@/types/database";
import Link from "next/link";

export default function DatabasesPage() {
  const [databases, setDatabase] = useState<Database[]>([]);
  const [selectedDb, setSelectedDb] = useState<Database | null>(null);

  const fetchDb = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/exercise-data`,
      {
        credentials: "include",
        cache: "no-store",
      },
    );

    const data = await res.json();
    setDatabase(data);

    if (data.length > 0) {
      setSelectedDb(data[0]);
    }
  };

  useEffect(() => {
    fetchDb();
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <Link
          href={"/services/mongodb/database/create"}
          className="bg-green-600 p-2 rounded-md text-white mx-10"
        >
          Create Database
        </Link>
      </div>
      <div className="flex h-screen">
        <DatabaseList
          databases={databases}
          selectedDb={selectedDb}
          onSelect={setSelectedDb}
        />
        <DatabaseDetails database={selectedDb} />
      </div>
    </>
  );
}
