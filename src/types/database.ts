// types/database.ts
export type Database = {
  _id: string;
  title: string;
  data: Record<string, unknown>[]; // 👈 array of unknown objects
  tags?: string[];
  createdAt: string;
};


