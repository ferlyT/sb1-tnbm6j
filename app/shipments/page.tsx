"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

const shipments = [
  {
    id: "SHP001",
    destination: "New York, USA",
    status: "In Transit",
    customer: "John Doe",
    date: "2024-03-20",
    tracking: "TRK123456789",
  },
  {
    id: "SHP002",
    destination: "London, UK",
    status: "Delivered",
    customer: "Jane Smith",
    date: "2024-03-19",
    tracking: "TRK987654321",
  },
  {
    id: "SHP003",
    destination: "Tokyo, Japan",
    status: "Processing",
    customer: "Mike Johnson",
    date: "2024-03-21",
    tracking: "TRK456789123",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "in transit":
      return "bg-blue-500/10 text-blue-500";
    case "delivered":
      return "bg-green-500/10 text-green-500";
    case "processing":
      return "bg-yellow-500/10 text-yellow-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function ShipmentsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Shipments</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Shipment
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search shipments..." className="pl-8" />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell className="font-medium">{shipment.tracking}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.customer}</TableCell>
                <TableCell>{shipment.date}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(shipment.status)} variant="secondary">
                    {shipment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}