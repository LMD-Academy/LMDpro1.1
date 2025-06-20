"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, CreditCard, Bell, KeyRound, Eye, EyeOff } from "lucide-react";
import { useSearchParams } from 'next/navigation';

export default function AccountSettingsPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'profile';
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Account Settings</h1>
        <p className="text-lg text-muted-foreground">
          Manage your profile, subscription, payment methods, and API keys.
        </p>
      </section>

      <Tabs defaultValue={initialTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="profile"><User className="mr-2 h-4 w-4 sm:inline hidden" />Profile</TabsTrigger>
          <TabsTrigger value="security"><Shield className="mr-2 h-4 w-4 sm:inline hidden" />Security</TabsTrigger>
          <TabsTrigger value="subscription"><CreditCard className="mr-2 h-4 w-4 sm:inline hidden" />Subscription</TabsTrigger>
          <TabsTrigger value="notifications"><Bell className="mr-2 h-4 w-4 sm:inline hidden" />Notifications</TabsTrigger>
          <TabsTrigger value="apikeys"><KeyRound className="mr-2 h-4 w-4 sm:inline hidden" />API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Profile Details</CardTitle>
              <CardDescription>Update your personal information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Alex User" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.user@example.com" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Short Bio (Optional)</Label>
                <textarea id="bio" rows={3} className="mt-1 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-gradient-outline" placeholder="Tell us a bit about yourself..."></textarea>
              </div>
               <div>
                <Label htmlFor="linkedinProfile">LinkedIn Profile URL (Optional)</Label>
                <Input id="linkedinProfile" placeholder="https://linkedin.com/in/yourprofile" className="mt-1" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="button-animated-gradient">Save Profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Password Management</CardTitle>
              <CardDescription>Change your account password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type={showNewPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input id="confirmNewPassword" type={showConfirmPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="button-animated-gradient">Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Subscription Management</CardTitle>
              <CardDescription>View your current plan and manage payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Current Plan: <span className="text-primary">Premium</span></h3>
                <p className="text-sm text-muted-foreground">Renews on: August 20, 2024</p>
                <p className="text-sm text-muted-foreground">Price: $5.80/month</p>
                <div className="mt-3">
                    <Link href="/pricing" passHref>
                        <Button variant="outline" className="mr-2">Change Plan</Button>
                    </Link>
                    <Button variant="destructive"
                     onClick={() => alert('Cancellation flow placeholder. In a real app, this would guide the user through cancellation steps.')}
                    >Cancel Subscription</Button>
                </div>
              </div>
              <hr/>
              <div>
                <h3 className="font-semibold mb-2">Payment Methods</h3>
                <div className="p-3 border rounded-md bg-muted/30 flex justify-between items-center">
                    <div>
                        <p className="font-medium">Visa ending in **** 1234</p>
                        <p className="text-xs text-muted-foreground">Expires: 12/2026</p>
                    </div>
                    <Button variant="ghost" size="sm">Remove</Button>
                </div>
                <Button variant="outline" className="mt-3">Add New Payment Method</Button>
              </div>
               <hr/>
               <div>
                <h3 className="font-semibold mb-2">Billing History</h3>
                <p className="text-sm text-muted-foreground">Your past invoices will appear here. (No invoices yet).</p>
                {/* Placeholder for invoice list */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Notification Settings</CardTitle>
              <CardDescription>Manage how you receive updates from LMDpro.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Email Notifications (Coming Soon)</p>
              <p className="text-sm text-muted-foreground">In-App Notifications (Coming Soon)</p>
            </CardContent>
             <CardFooter>
              <Button className="button-animated-gradient" disabled>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="apikeys">
          {/* This can redirect to the existing /api-management page or embed its content */}
          <Card className="shadow-lg">
             <CardHeader>
              <CardTitle className="font-headline">API Key Management</CardTitle>
              <CardDescription>Generate and manage your API keys for LMDpro services.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">API access is available on Premium, Teams, and Enterprise plans.</p>
                <Link href="/api-management">
                    <Button className="button-animated-gradient">Go to API Management Page</Button>
                </Link>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
