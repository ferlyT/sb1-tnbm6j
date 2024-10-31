"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, MapPin, Calendar } from "lucide-react";

interface PackageCardProps {
  id: string;
  status: 'in-transit' | 'delivered' | 'pending';
  origin: string;
  destination: string;
  date: string;
  weight: string;
}

const statusColors = {
  'in-transit': 'bg-blue-500/10 text-blue-500',
  'delivered': 'bg-green-500/10 text-green-500',
  'pending': 'bg-yellow-500/10 text-yellow-500'
};

export function PackageCard({ id, status, origin, destination, date, weight }: PackageCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-muted-foreground" />
          <span className="font-semibold">#{id}</span>
        </div>
        <Badge variant="secondary" className={statusColors[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{origin} → {destination}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Weight: {weight}
        </div>
      </div>
    </Card>
  );
}