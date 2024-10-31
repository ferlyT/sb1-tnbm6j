"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Manage your password and security preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <div className="relative">
            <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="current-password" type="password" className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="new-password" type="password" className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <div className="relative">
            <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="confirm-password" type="password" className="pl-8" />
          </div>
        </div>
        <Button className="w-full">Update Password</Button>
      </CardContent>
    </Card>
  );
}