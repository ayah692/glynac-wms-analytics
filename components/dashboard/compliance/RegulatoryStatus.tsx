'use client';

import { Card } from '@/components/ui/card';

const checks = [
  { id: 1, name: 'KYC/AML Verification', status: 'Pass', note: 'Automated nightly run' },
  { id: 2, name: 'OFAC Screening', status: 'Pass', note: 'No matches detected' },
  { id: 3, name: 'MiFID II Reporting', status: 'Attention', note: 'Q3 submission pending' },
  { id: 4, name: 'GDPR Data Export', status: 'Pass', note: 'SLA < 48h' },
];

const badge = (status: string) => {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium';
  if (status === 'Pass') return `${base} bg-emerald-50 text-emerald-700 border border-emerald-200`;
  if (status === 'Attention') return `${base} bg-amber-50 text-amber-700 border border-amber-200`;
  return `${base} bg-rose-50 text-rose-700 border border-rose-200`;
};

export default function RegulatoryStatus() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-3">Regulatory Status</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-4">Check</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {checks.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="py-2 pr-4">{c.name}</td>
                <td className="py-2 pr-4">
                  <span className={badge(c.status)}>{c.status}</span>
                </td>
                <td className="py-2">{c.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
