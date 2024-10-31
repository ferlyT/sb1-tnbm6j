"use client";

import { PackageCard } from "./components/PackageCard";
import { PackageFilters } from "./components/PackageFilters";
import { NewPackageButton } from "./components/NewPackageButton";

const packages = [
  {
    id: "PKG001",
    status: "in-transit",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    date: "2024-03-20",
    weight: "5.2 kg"
  },
  {
    id: "PKG002",
    status: "delivered",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    date: "2024-03-19",
    weight: "3.8 kg"
  },
  {
    id: "PKG003",
    status: "pending",
    origin: "Seattle, WA",
    destination: "Boston, MA",
    date: "2024-03-21",
    weight: "7.1 kg"
  }
] as const;

export default function PackagesPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Packages</h2>
          <p className="text-muted-foreground">Manage and track your shipments</p>
        </div>
        <NewPackageButton />
      </div>

      <PackageFilters />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            status={pkg.status}
            origin={pkg.origin}
            destination={pkg.destination}
            date={pkg.date}
            weight={pkg.weight}
          />
        ))}
      </div>
    </div>
  );
}