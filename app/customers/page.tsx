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
import { Search, Plus, Package } from "lucide-react";

const customers = [
  {
    id: "CUS001",
    name: "John Doe",
    email: "john.doe@example.com",
    activeShipments: 3,
    totalShipments: 45,
    status: "Active",
    joinDate: "2024-01-15",
  },
  {
    id: "CUS002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    activeShipments: 1,
    totalShipments: 28,
    status: "Active",
    joinDate: "2024-02-01",
  },
  {
    id: "CUS003",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    activeShipments: 0,
    totalShipments: 12,
    status: "Inactive",
    joinDate: "2024-02-20",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-500/10 text-green-500";
    case "inactive":
      return "bg-gray-500/10 text-gray-500";
    default:
      return "bg-blue-500/10 text-blue-500";
  }
};

export default function CustomersPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <Package className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Total Customers</p>
              <p className="text-2xl font-bold">{customers.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-full">
              <Package className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Active Customers</p>
              <p className="text-2xl font-bold">
                {customers.filter((c) => c.status === "Active").length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Package className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Total Shipments</p>
              <p className="text-2xl font-bold">
                {customers.reduce((acc, cur) => acc + cur.totalShipments, 0)}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-8" />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Active Shipments</TableHead>
              <TableHead>Total Shipments</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.activeShipments}</TableCell>
                <TableCell>{customer.totalShipments}</TableCell>
                <TableCell>{customer.joinDate}</TableCell>
                <TableCell>
                  <Badge 
                    className={getStatusColor(customer.status)} 
                    variant="secondary"
                  >
                    {customer.status}
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