'use client';

import * as React from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
  currentPath: string;
  dashboardTitle: string;
  userName: string;
  userInitials: string;
  currentTab?: string;
  onNavigate?: (path: string) => void;
  onTabChange?: (tab: string) => void;
  onAIClick?: () => void;
};

export function DashboardLayout({
  children,
  dashboardTitle,
  userName,
  userInitials,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold">{dashboardTitle}</h1>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-bold">
              {userInitials}
            </div>
            <span className="text-sm text-gray-700">{userName}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
    </div>
  );
}
