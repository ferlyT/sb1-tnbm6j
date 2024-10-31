"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  colorClass?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, colorClass = "bg-primary/10 text-primary" }: MetricCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <div className={`p-2 rounded-full ${colorClass}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend >= 0 ? '+' : ''}{trend}%
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}