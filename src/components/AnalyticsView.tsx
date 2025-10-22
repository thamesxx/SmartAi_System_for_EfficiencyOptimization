import { KPICard } from './KPICard';
import { TrendChart } from './TrendChart';
import { DowntimeTable } from './DowntimeTable';
import { MaintenanceSchedule } from './MaintenanceSchedule';
import { AlertHistory } from './AlertHistory';
import { Button } from './ui/button';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AnalyticsView() {
  const handleExport = (format: 'csv' | 'pdf') => {
    toast.success(`Exporting data as ${format.toUpperCase()}...`);
  };

  return (
    <div className="space-y-6">
      {/* Export Buttons */}
      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={() => handleExport('csv')}
          className="gap-2"
        >
          <FileText className="w-4 h-4" />
          Export CSV
        </Button>
        <Button
          variant="outline"
          onClick={() => handleExport('pdf')}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          Export PDF
        </Button>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Output"
          value="1,248"
          unit="units"
          change={12.5}
          trend="up"
          icon="package"
        />
        <KPICard
          title="Power"
          value="345"
          unit="kW"
          change={-3.2}
          trend="down"
          icon="zap"
        />
        <KPICard
          title="Water"
          value="87"
          unit="L/min"
          change={5.8}
          trend="up"
          icon="droplets"
        />
        <KPICard
          title="Clean Rate"
          value="98.7"
          unit="%"
          change={1.2}
          trend="up"
          icon="check"
        />
      </div>

      {/* Performance Trend Chart */}
      <TrendChart />

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Downtime Log */}
        <DowntimeTable />

        {/* Maintenance & Alerts */}
        <div className="space-y-6">
          <MaintenanceSchedule />
          <AlertHistory />
        </div>
      </div>
    </div>
  );
}
