import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { DashboardView } from './components/DashboardView';
import { AnalyticsView } from './components/AnalyticsView';
import { Activity, BarChart3 } from 'lucide-react';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster position="top-right" />
      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-4 shadow-lg">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-blue-400" />
            <h1 className="text-white">Manufacturing Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">Live</span>
            </div>
            <span className="text-sm text-slate-400">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-transparent border-0 h-auto p-0 space-x-8">
              <TabsTrigger
                value="dashboard"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none px-4 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <Activity className="w-4 h-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 rounded-none px-4 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1920px] mx-auto p-6">
        <Tabs value={activeTab} className="w-full">
          <TabsContent value="dashboard" className="mt-0">
            <DashboardView />
          </TabsContent>
          <TabsContent value="analytics" className="mt-0">
            <AnalyticsView />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
