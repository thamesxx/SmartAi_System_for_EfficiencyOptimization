import { UtilityMeter } from './UtilityMeter';
import { StatusCard } from './StatusCard';
import { SpeedControl } from './SpeedControl';
import { DataTable } from './DataTable';
import { EfficiencyChart } from './EfficiencyChart';
import { Droplets, Wind, Zap, Thermometer, Flame, Activity } from 'lucide-react';

export function DashboardView() {
  const utilities = [
    { id: 'water', name: 'Water', icon: Droplets, value: 87, unit: 'L/min', status: 'normal', color: 'blue' },
    { id: 'air', name: 'Air', icon: Wind, value: 92, unit: 'PSI', status: 'normal', color: 'cyan' },
    { id: 'power', name: 'Power', icon: Zap, value: 345, unit: 'kW', status: 'warning', color: 'yellow' },
    { id: 'temp', name: 'Temperature', icon: Thermometer, value: 68, unit: '°C', status: 'normal', color: 'green' },
    { id: 'gas', name: 'Gas', icon: Flame, value: 54, unit: 'CFM', status: 'normal', color: 'orange' },
    { id: 'vibration', name: 'Vibration', icon: Activity, value: 2.3, unit: 'mm/s', status: 'critical', color: 'red' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar - Utility Meters */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-slate-600 mb-4">Utilities</h2>
        {utilities.map((utility) => (
          <UtilityMeter key={utility.id} {...utility} />
        ))}
      </div>

      {/* Main Content */}
      <div className="lg:col-span-7 space-y-6">
        {/* Status Card */}
        <StatusCard />
        
        {/* Data Table */}
        <DataTable />
      </div>

      {/* Right Panel */}
      <div className="lg:col-span-3 space-y-6">
        <SpeedControl />
        <EfficiencyChart />
      </div>
    </div>
  );
}
