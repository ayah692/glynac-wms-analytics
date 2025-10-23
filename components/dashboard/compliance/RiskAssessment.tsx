'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Low', value: 62 },
  { name: 'Medium', value: 28 },
  { name: 'High', value: 8 },
  { name: 'Critical', value: 2 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#7f1d1d'];

export default function RiskAssessment() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Risk Assessment</h3>
        <p className="text-sm text-gray-600">Current client risk distribution</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
