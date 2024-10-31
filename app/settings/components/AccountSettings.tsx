"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Building } from "lucide-react";

export function AccountSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
        <CardDescription>Update your account details and company information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="name" placeholder="John Doe" className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="email" type="email" placeholder="john@example.com" className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <div className="relative">
            <Building className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="company" placeholder="Acme Inc." className="pl-8" />
          </div>
        </div>
        <Button className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  );
}