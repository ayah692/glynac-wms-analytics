import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">
          Glynac WMS Analytics
        </h1>
        <p className="text-gray-600 mb-10">
          Welcome to the Wealth Management System analytics suite.  
          Choose a dashboard below to explore performance, operations, and compliance insights.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/dashboard/advisor"
            className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-xl font-semibold mb-1">Advisor Dashboard</div>
            <div className="text-sm text-gray-600">
              Portfolio summaries, client lists, and performance insights.
            </div>
          </Link>

          <Link
            href="/dashboard/operations"
            className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-xl font-semibold mb-1">Operations Dashboard</div>
            <div className="text-sm text-gray-600">
              Process metrics, resource utilization, and system health.
            </div>
          </Link>

          <Link
            href="/dashboard/compliance"
            className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-xl font-semibold mb-1">Compliance Dashboard</div>
            <div className="text-sm text-gray-600">
              Regulatory status, risk assessment, and audit tracking.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
