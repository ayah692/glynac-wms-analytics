'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { t: '09:00', incidents: 1 },
  { t: '11:00', incidents: 0 },
  { t: '13:00', incidents: 0 },
  { t: '15:00', incidents: 2 },
  { t: '17:00', incidents: 1 },
  { t: '19:00', incidents: 0 },
];

export default function SystemHealth() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">System Health</h3>
          <p className="text-sm text-gray-600">Incidents today</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">99.96%</div>
          <div className="text-sm text-emerald-600">Uptime (24h)</div>
        </div>
      </div>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 8, right: 8, top: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="incidents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="t" hide />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#ef4444" fill="url(#incidents)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
