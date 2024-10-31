"use client";

import { Card } from "@/components/ui/card";
import { CreditCard, DollarSign, Receipt } from "lucide-react";

const metrics = [
  {
    title: "Current Plan",
    value: "Professional",
    description: "Billed monthly",
    icon: CreditCard,
    color: "text-blue-500",
  },
  {
    title: "Next Payment",
    value: "$99.00",
    description: "Due Apr 1, 2024",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Total Spent",
    value: "$1,299.00",
    description: "Last 12 months",
    icon: Receipt,
    color: "text-purple-500",
  },
];

export function BillingOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full bg-gray-100 ${metric.color}`}>
              <metric.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </p>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}