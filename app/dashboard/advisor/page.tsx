'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

export default function AdvisorPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/advisor"
      dashboardTitle="Advisor Dashboard"
      userName="Sarah Chen - Senior Advisor"
      userInitials="SC"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
          <p className="text-gray-600">Client portfolios, performance, and insights.</p>
        </div>

        <PortfolioSummary />
        <ClientList />
        <PerformanceInsights />
      </div>
    </DashboardLayout>
  );
}