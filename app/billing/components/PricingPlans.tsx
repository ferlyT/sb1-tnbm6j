"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    features: [
      "Up to 100 shipments/month",
      "Basic analytics",
      "Email support",
      "1 team member",
    ],
    current: false,
  },
  {
    name: "Professional",
    price: 99,
    features: [
      "Up to 1,000 shipments/month",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom reports",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Unlimited shipments",
      "Real-time analytics",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integration",
      "Dedicated account manager",
    ],
    current: false,
  },
];

export function PricingPlans() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.name} className={`p-6 ${plan.current ? 'border-primary' : ''}`}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.current ? "outline" : "default"}>
              {plan.current ? "Current Plan" : "Upgrade"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}