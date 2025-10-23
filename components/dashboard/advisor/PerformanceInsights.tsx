'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const perf = [
  { name: 'Alpha Fund', ret: 6.2 },
  { name: 'Growth Fund', ret: 4.8 },
  { name: 'Income Fund', ret: 3.1 },
  { name: 'Index Fund', ret: 2.4 },
];

export default function PerformanceInsights() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Performance Insights</h3>
        <p className="text-sm text-gray-600">Month-to-date returns</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={perf} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip />
            <Bar dataKey="ret" fill="#4f46e5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
