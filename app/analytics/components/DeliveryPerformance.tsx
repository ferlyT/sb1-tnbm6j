"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PerformanceMetric {
  label: string;
  value: number;
  color: string;
}

const metrics: PerformanceMetric[] = [
  { label: "On-Time Delivery", value: 94, color: "bg-green-500" },
  { label: "Customer Satisfaction", value: 88, color: "bg-blue-500" },
  { label: "Delivery Success Rate", value: 98, color: "bg-purple-500" },
];

export function DeliveryPerformance() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Delivery Performance</h3>
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{metric.label}</span>
              <span className="text-sm font-medium">{metric.value}%</span>
            </div>
            <Progress value={metric.value} className={metric.color} />
          </div>
        ))}
      </div>
    </Card>
  );
}