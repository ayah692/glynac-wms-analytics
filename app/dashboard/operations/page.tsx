'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import ProcessMetrics from '@/components/dashboard/operations/ProcessMetrics';
import ResourceUtilization from '@/components/dashboard/operations/ResourceUtilization';
import SystemHealth from '@/components/dashboard/operations/SystemHealth';

export default function OperationsPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/operations"
      dashboardTitle="Operations Dashboard"
      userName="Alex Rivera - Ops Lead"
      userInitials="AR"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-600">Processes, resource usage, and system health.</p>
        </div>

        <ProcessMetrics />
        <ResourceUtilization />
        <SystemHealth />
      </div>
    </DashboardLayout>
  );
}
