'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', throughput: 120, latency: 220 },
  { day: 'Tue', throughput: 138, latency: 210 },
  { day: 'Wed', throughput: 142, latency: 205 },
  { day: 'Thu', throughput: 150, latency: 198 },
  { day: 'Fri', throughput: 158, latency: 192 },
  { day: 'Sat', throughput: 133, latency: 215 },
  { day: 'Sun', throughput: 141, latency: 202 },
];

export default function ProcessMetrics() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Process Metrics</h3>
        <p className="text-sm text-gray-600">Throughput vs. latency (last 7 days)</p>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="throughput" stroke="#4f46e5" dot={false}/>
            <Line type="monotone" dataKey="latency" stroke="#10b981" dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
