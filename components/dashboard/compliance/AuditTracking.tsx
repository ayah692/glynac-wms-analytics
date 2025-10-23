'use client';

import { Card } from '@/components/ui/card';

const audits = [
  { id: 'AUD-2315', title: 'Quarterly Internal Audit', owner: 'Compliance', status: 'In Progress', due: '2025-11-15' },
  { id: 'AUD-2307', title: 'External SOC 2 Type II', owner: 'Security', status: 'Scheduled', due: '2025-12-01' },
  { id: 'AUD-2289', title: 'PCI DSS Gap Review', owner: 'IT Ops', status: 'Completed', due: '2025-10-05' },
];

const chip = (status: string) => {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium';
  if (status === 'Completed') return `${base} bg-emerald-50 text-emerald-700 border border-emerald-200`;
  if (status === 'In Progress') return `${base} bg-indigo-50 text-indigo-700 border border-indigo-200`;
  return `${base} bg-slate-50 text-slate-700 border border-slate-200`;
};

export default function AuditTracking() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-3">Audit Tracking</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-4">ID</th>
              <th className="py-2 pr-4">Title</th>
              <th className="py-2 pr-4">Owner</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2">Due</th>
            </tr>
          </thead>
          <tbody>
            {audits.map(a => (
              <tr key={a.id} className="border-t">
                <td className="py-2 pr-4">{a.id}</td>
                <td className="py-2 pr-4">{a.title}</td>
                <td className="py-2 pr-4">{a.owner}</td>
                <td className="py-2 pr-4"><span className={chip(a.status)}>{a.status}</span></td>
                <td className="py-2">{a.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
