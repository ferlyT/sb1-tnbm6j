"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", shipments: 65 },
  { month: "Feb", shipments: 78 },
  { month: "Mar", shipments: 82 },
  { month: "Apr", shipments: 95 },
  { month: "May", shipments: 88 },
  { month: "Jun", shipments: 102 },
];

export function ShipmentChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Shipment Trends</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="shipments" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}