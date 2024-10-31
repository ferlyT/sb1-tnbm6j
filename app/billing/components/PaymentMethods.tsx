"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, CreditCard } from "lucide-react";

const paymentMethods = [
  {
    id: "pm_1",
    type: "Visa",
    last4: "4242",
    expiry: "04/25",
    default: true,
  },
  {
    id: "pm_2",
    type: "Mastercard",
    last4: "8888",
    expiry: "08/24",
    default: false,
  },
];

export function PaymentMethods() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods and billing preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">
                    {method.type} ending in {method.last4}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Expires {method.expiry}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {method.default && (
                  <Badge variant="secondary">Default</Badge>
                )}
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}