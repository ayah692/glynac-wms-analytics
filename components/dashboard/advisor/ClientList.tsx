'use client';

import { Card } from '@/components/ui/card';

const rows = [
  { id: 1, name: 'Blue Ridge Capital', value: 412_000_000, change: 1.8 },
  { id: 2, name: 'Chen Family Office', value: 255_400_000, change: 0.9 },
  { id: 3, name: 'Horizon Endowment', value: 198_200_000, change: -0.4 },
];

export default function ClientList() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-3">Top Clients</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-4">Client</th>
              <th className="py-2 pr-4">AUM</th>
              <th className="py-2">Change</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-t">
                <td className="py-2 pr-4">{r.name}</td>
                <td className="py-2 pr-4">${r.value.toLocaleString()}</td>
                <td className={`py-2 ${r.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {r.change >= 0 ? '+' : ''}{r.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
