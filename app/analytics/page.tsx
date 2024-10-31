"use client";

import { Package, TrendingUp, Users, Truck } from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { ShipmentChart } from "./components/ShipmentChart";
import { DeliveryPerformance } from "./components/DeliveryPerformance";

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Total Shipments"
          value="1,284"
          icon={Package}
          trend={12}
        />
        <MetricCard
          title="Revenue"
          value="$52,489"
          icon={TrendingUp}
          trend={8}
          colorClass="bg-green-500/10 text-green-500"
        />
        <MetricCard
          title="Active Customers"
          value="892"
          icon={Users}
          trend={-3}
          colorClass="bg-blue-500/10 text-blue-500"
        />
        <MetricCard
          title="Fleet Utilization"
          value="78%"
          icon={Truck}
          trend={5}
          colorClass="bg-purple-500/10 text-purple-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ShipmentChart />
        <DeliveryPerformance />
      </div>
    </div>
  );
}