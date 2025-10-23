'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { res: 'CPU', pct: 63 },
  { res: 'Memory', pct: 72 },
  { res: 'Disk', pct: 54 },
  { res: 'Network', pct: 48 },
];

export default function ResourceUtilization() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Resource Utilization</h3>
        <p className="text-sm text-gray-600">Current usage by resource</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            <XAxis dataKey="res" tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(v) => `${v}%`} tickLine={false} axisLine={false} />
            <Tooltip />
            <Bar dataKey="pct" radius={[8, 8, 0, 0]} fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
