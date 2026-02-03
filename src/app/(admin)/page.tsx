export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-slate-800">
        Admin Dashboard
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Welcome back
      </p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-slate-500">Users</p>
          <p className="text-xl font-semibold">120</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-slate-500">Stacks</p>
          <p className="text-xl font-semibold">12</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-slate-500">Questions</p>
          <p className="text-xl font-semibold">340</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-slate-500">Submissions</p>
          <p className="text-xl font-semibold">1,240</p>
        </div>
      </div>
    </div>
  )
}
