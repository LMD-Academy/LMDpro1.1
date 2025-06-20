
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, CreditCard, Bell, KeyRound, Eye, EyeOff, Linkedin, PlusCircle } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link"; // Import Link

export default function AccountSettingsPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'profile';
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Placeholder for payment methods - in a real app, this would come from state/API
  const [paymentMethods, setPaymentMethods] = useState([
    { id: "pm1", type: "Visa", last4: "1234", expiry: "12/2026", isDefault: true },
  ]);

  const handleAddPaymentMethod = () => {
    // Placeholder for adding a new payment method flow (e.g., Stripe Elements)
    alert("Add new payment method flow placeholder. This would typically involve Stripe Elements or similar.");
  };

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== id));
    alert(`Payment method ${id} removed (simulated).`);
  };


  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Account Settings</h1>
        <p className="text-lg text-muted-foreground">
          Manage your profile, security, subscription, payment methods, notifications, and API keys.
        </p>
      </section>

      <Tabs defaultValue={initialTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <TabsTrigger value="profile"><User className="mr-2 h-4 w-4 sm:inline hidden" />Profile</TabsTrigger>
          <TabsTrigger value="security"><Shield className="mr-2 h-4 w-4 sm:inline hidden" />Security</TabsTrigger>
          <TabsTrigger value="subscription"><CreditCard className="mr-2 h-4 w-4 sm:inline hidden" />Subscription & Payments</TabsTrigger>
          <TabsTrigger value="notifications"><Bell className="mr-2 h-4 w-4 sm:inline hidden" />Notifications</TabsTrigger>
          <TabsTrigger value="apikeys"><KeyRound className="mr-2 h-4 w-4 sm:inline hidden" />API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Profile Details</CardTitle>
              <CardDescription>Update your personal information. This information may be used to pre-fill your resume.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Alex User" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.user@example.com" className="mt-1" readOnly disabled />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Short Bio (Optional)</Label>
                <textarea id="bio" rows={3} className="mt-1 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-gradient-outline" placeholder="Tell us a bit about yourself... e.g., Passionate lifelong learner and aspiring AI specialist."></textarea>
              </div>
               <div className="space-y-1">
                <Label htmlFor="linkedinProfile">LinkedIn Profile URL (Optional)</Label>
                <div className="flex items-center gap-2">
                    <Input id="linkedinProfile" placeholder="https://linkedin.com/in/yourprofile" className="mt-1" />
                    <Button variant="outline" size="icon" title="Import data from LinkedIn (Coming Soon)">
                        <Linkedin className="h-4 w-4"/>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">Link your LinkedIn profile to easily import data for your resume.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="button-animated-gradient">Save Profile Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Password Management</CardTitle>
              <CardDescription>Change your account password regularly to ensure security.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowCurrentPassword(!showCurrentPassword)} aria-label={showCurrentPassword ? "Hide current password" : "Show current password"}>
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type={showNewPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowNewPassword(!showNewPassword)} aria-label={showNewPassword ? "Hide new password" : "Show new password"}>
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input id="confirmNewPassword" type={showConfirmPassword ? "text" : "password"} className="mt-1 pr-10" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Hide confirm new password" : "Show confirm new password"}>
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {/* Placeholder for 2FA settings */}
              <div className="pt-4">
                <h4 className="font-medium mb-1">Two-Factor Authentication (2FA)</h4>
                <p className="text-sm text-muted-foreground mb-2">Enhance your account security by enabling 2FA.</p>
                <Button variant="outline" disabled>Enable 2FA (Coming Soon)</Button>
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
              <CardTitle className="font-headline">Subscription & Billing</CardTitle>
              <CardDescription>Manage your LMDpro plan, view payment methods, and access billing history.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Current Plan: <span className="text-primary font-bold">Premium</span></h3>
                <p className="text-sm text-muted-foreground">Renews on: August 20, 2024 (Example Date)</p>
                <p className="text-sm text-muted-foreground">Price: $5.80/month (Example Price)</p>
                <div className="mt-3 space-x-2">
                    <Link href="/pricing" passHref>
                        <Button variant="outline">Change Plan</Button>
                    </Link>
                    <Button variant="destructive"
                     onClick={() => alert('Cancellation flow placeholder. This would guide the user through cancellation steps and gather feedback.')}
                    >Cancel Subscription</Button>
                </div>
              </div>
              <hr/>
              <div>
                <h3 className="font-semibold mb-3">Payment Methods</h3>
                {paymentMethods.length > 0 ? (
                    paymentMethods.map(pm => (
                        <div key={pm.id} className="p-3 border rounded-md bg-muted/30 flex justify-between items-center mb-2">
                            <div>
                                <p className="font-medium">{pm.type} ending in **** {pm.last4} {pm.isDefault && <span className="text-xs text-primary">(Default)</span>}</p>
                                <p className="text-xs text-muted-foreground">Expires: {pm.expiry}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => handleRemovePaymentMethod(pm.id)}>Remove</Button>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground">No payment methods on file.</p>
                )}
                <Button variant="outline" className="mt-3" onClick={handleAddPaymentMethod}>
                    <PlusCircle className="mr-2 h-4 w-4"/> Add New Payment Method
                </Button>
              </div>
               <hr/>
               <div>
                <h3 className="font-semibold mb-2">Billing History</h3>
                {/* Placeholder for invoice list - in a real app, this would be a table or list of invoices */}
                <p className="text-sm text-muted-foreground">Your past invoices will appear here. (No invoices yet - example).</p>
                {/* Example structure for an invoice item:
                <div className="p-3 border rounded-md mt-2 flex justify-between items-center text-sm">
                    <div>
                        <p>Invoice #INV-2024-07-001 - July 20, 2024</p>
                        <p className="text-xs text-muted-foreground">Premium Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                        <p>$5.80</p>
                        <Button variant="link" size="sm" className="p-0 h-auto">Download PDF</Button>
                    </div>
                </div> 
                */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Notification Settings</CardTitle>
              <CardDescription>Manage how you receive updates and communications from LMDpro.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example notification settings - these would be interactive with switches */}
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                    <Label htmlFor="email-course-updates" className="font-medium">Course Progress & Updates</Label>
                    <p className="text-xs text-muted-foreground">Receive emails about your course progress, new lesson availability, and instructor announcements.</p>
                </div>
                <Input type="checkbox" id="email-course-updates" className="h-5 w-5"/> {/* Replace with Switch component */}
              </div>
               <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                    <Label htmlFor="email-promotions" className="font-medium">Promotions & New Features</Label>
                    <p className="text-xs text-muted-foreground">Get notified about new LMDpro features, special offers, and platform news.</p>
                </div>
                <Input type="checkbox" id="email-promotions" checked className="h-5 w-5"/> {/* Replace with Switch component */}
              </div>
               <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                    <Label htmlFor="inapp-achievements" className="font-medium">In-App Skill Achievements</Label>
                    <p className="text-xs text-muted-foreground">See in-app notifications when you complete a module or acquire a new skill.</p>
                </div>
                <Input type="checkbox" id="inapp-achievements" checked className="h-5 w-5"/> {/* Replace with Switch component */}
              </div>
              <p className="text-sm text-muted-foreground pt-2">More granular notification controls for specific course activities are coming soon.</p>
            </CardContent>
             <CardFooter>
              <Button className="button-animated-gradient">Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="apikeys">
          <Card className="shadow-lg">
             <CardHeader>
              <CardTitle className="font-headline">API Key Management</CardTitle>
              <CardDescription>Generate and manage your API keys for LMDpro services. API access is available on Premium, Teams, and Enterprise plans.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Access LMDpro's powerful AI capabilities programmatically. Integrate personalized learning path generation, video script creation, and resume optimization into your own applications.
                </p>
                <Link href="/api-management">
                    <Button className="button-animated-gradient">Go to API Management & Pricing</Button>
                </Link>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
