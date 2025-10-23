'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 2200 },
  { month: 'Feb', value: 2350 },
  { month: 'Mar', value: 2410 },
  { month: 'Apr', value: 2560 },
  { month: 'May', value: 2625 },
  { month: 'Jun', value: 2780 },
];

export default function PortfolioSummary() {
  return (
    <Card className="p-4">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Portfolio AUM</h3>
          <p className="text-sm text-gray-600">Last 6 months</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">$2.78B</div>
          <div className="text-sm text-emerald-600">+8.2% MoM</div>
        </div>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="aumFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tickLine={false} axisLine={false}/>
            <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`}/>
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#4f46e5" fill="url(#aumFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
