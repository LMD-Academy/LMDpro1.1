
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, CreditCard, Bell, KeyRound, Eye, EyeOff, Linkedin, PlusCircle, Trash2, Edit, CheckCircle } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link"; 
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface PaymentMethod {
    id: string;
    type: "Visa" | "Mastercard" | "Amex" | "Discover" | "PayPal";
    last4: string;
    expiry: string;
    isDefault: boolean;
}

export default function AccountSettingsPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'profile';
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: "pm1", type: "Visa", last4: "1234", expiry: "12/2026", isDefault: true },
    { id: "pm2", type: "Mastercard", last4: "5678", expiry: "08/2025", isDefault: false },
  ]);

  const handleAddPaymentMethod = () => {
    // Placeholder for adding a new payment method flow (e.g., Stripe Elements)
    toast({ title: "Add Payment Method", description: "This would typically open a modal to securely add card details via Stripe Elements or similar. (Feature placeholder)" });
    // Example of adding a new card for demo:
    const newId = `pm${paymentMethods.length + 1}`;
    setPaymentMethods(prev => [...prev, { id: newId, type: "Visa", last4: (Math.floor(Math.random() * 9000) + 1000).toString(), expiry:"01/2028", isDefault: false }]);
  };

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== id));
    toast({ title: "Payment Method Removed", description: `Payment method ending in ${paymentMethods.find(pm => pm.id === id)?.last4} has been removed (simulated).`, variant: "destructive" });
  };

  const handleSetDefaultPaymentMethod = (id: string) => {
    setPaymentMethods(prev => 
        prev.map(pm => ({ ...pm, isDefault: pm.id === id }))
    );
    toast({title: "Default Payment Method Updated", description: `Card ending in ${paymentMethods.find(pm => pm.id === id)?.last4} is now default.`});
  };
  
  const handleProfileSave = (event: React.FormEvent) => {
    event.preventDefault();
    toast({title: "Profile Saved", description: "Your profile details have been updated."});
  }

  const handlePasswordUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    toast({title: "Password Update", description: "Password update functionality placeholder."});
  }
  
  const handleNotificationsSave = (event: React.FormEvent) => {
    event.preventDefault();
    toast({title: "Notifications Saved", description: "Your notification preferences have been updated."});
  }

  const handleImportLinkedIn = () => {
    toast({ title: "LinkedIn Import", description: "Simulating LinkedIn data import... (Feature coming soon)" });
    // In a real app, you would fetch data and populate fields.
    // For now, just a toast.
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
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          <TabsTrigger value="profile"><User className="mr-2 h-4 w-4" />Profile</TabsTrigger>
          <TabsTrigger value="security"><Shield className="mr-2 h-4 w-4" />Security</TabsTrigger>
          <TabsTrigger value="subscription"><CreditCard className="mr-2 h-4 w-4" />Subscription</TabsTrigger>
          <TabsTrigger value="notifications"><Bell className="mr-2 h-4 w-4" />Notifications</TabsTrigger>
          <TabsTrigger value="apikeys"><KeyRound className="mr-2 h-4 w-4" />API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="shadow-lg">
           <form onSubmit={handleProfileSave}>
            <CardHeader>
              <CardTitle className="font-headline">Profile Details</CardTitle>
              <CardDescription>Update your personal information. This information may be used to pre-fill your resume.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Alex User" className="mt-1 focus-gradient-outline" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.user@example.com" className="mt-1 focus-gradient-outline" readOnly disabled />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Short Bio (Optional)</Label>
                <Textarea id="bio" rows={3} className="mt-1 focus-gradient-outline" placeholder="Tell us a bit about yourself... e.g., Passionate lifelong learner and aspiring AI specialist."></Textarea>
              </div>
               <div className="space-y-1">
                <Label htmlFor="linkedinProfile">LinkedIn Profile URL (Optional)</Label>
                <div className="flex items-center gap-2">
                    <Input id="linkedinProfile" placeholder="https://linkedin.com/in/yourprofile" className="mt-1 focus-gradient-outline" />
                    <Button type="button" variant="outline" size="icon" title="Import data from LinkedIn" onClick={handleImportLinkedIn}>
                        <Linkedin className="h-4 w-4"/>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">Link your LinkedIn profile to easily import data for your resume.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="button-animated-gradient">Save Profile Changes</Button>
            </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="shadow-lg">
           <form onSubmit={handlePasswordUpdate}>
            <CardHeader>
              <CardTitle className="font-headline">Password Management</CardTitle>
              <CardDescription>Change your account password regularly to ensure security.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"} className="mt-1 pr-10 focus-gradient-outline" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowCurrentPassword(!showCurrentPassword)} aria-label={showCurrentPassword ? "Hide current password" : "Show current password"}>
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type={showNewPassword ? "text" : "password"} className="mt-1 pr-10 focus-gradient-outline" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowNewPassword(!showNewPassword)} aria-label={showNewPassword ? "Hide new password" : "Show new password"}>
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="relative">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input id="confirmNewPassword" type={showConfirmPassword ? "text" : "password"} className="mt-1 pr-10 focus-gradient-outline" />
                 <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-7 h-7 w-7" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Hide confirm new password" : "Show confirm new password"}>
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-1">Two-Factor Authentication (2FA)</h4>
                <p className="text-sm text-muted-foreground mb-2">Enhance your account security by enabling 2FA.</p>
                <Button type="button" variant="outline" onClick={() => toast({title:"2FA", description: "2FA setup placeholder."})} disabled>Enable 2FA (Coming Soon)</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="button-animated-gradient">Update Password</Button>
            </CardFooter>
           </form>
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
                <div className="mt-3 flex flex-wrap gap-2">
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
                        <div key={pm.id} className="p-3 border rounded-lg bg-muted/30 flex flex-col sm:flex-row justify-between sm:items-center mb-2 shadow-sm gap-2">
                            <div className="flex items-center gap-3">
                                <CreditCard className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-medium">{pm.type} ending in **** {pm.last4} {pm.isDefault && <span className="text-xs text-primary ml-1 px-1.5 py-0.5 bg-primary/10 rounded-full">Default</span>}</p>
                                    <p className="text-xs text-muted-foreground">Expires: {pm.expiry}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 self-end sm:self-center">
                                {!pm.isDefault && <Button variant="ghost" size="sm" onClick={() => handleSetDefaultPaymentMethod(pm.id)} title="Set as Default"><CheckCircle className="h-4 w-4"/></Button>}
                                <Button variant="ghost" size="sm" onClick={() => toast({title:"Edit Payment", description:"Edit payment method functionality placeholder."})} title="Edit"><Edit className="h-4 w-4"/></Button>
                                <Button variant="ghost" size="sm" onClick={() => handleRemovePaymentMethod(pm.id)} title="Remove"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                            </div>
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
                <p className="text-sm text-muted-foreground">Your past invoices will appear here. (No invoices yet - example).</p>
                 {/* Example of an invoice item - loop through these in a real app */}
                <div className="mt-2 p-3 border rounded-lg bg-muted/30 flex flex-col sm:flex-row justify-between sm:items-center text-sm shadow-sm gap-2">
                    <div>
                        <p className="font-medium">Invoice #LMDPRO-2024-001 - July 20, 2024</p>
                        <p className="text-xs text-muted-foreground">Premium Plan - Monthly Subscription Renewal</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <p className="font-semibold">$5.80</p>
                        <Button variant="link" size="sm" className="p-0 h-auto text-primary hover:underline" onClick={() => toast({title:"Download Invoice", description:"PDF download functionality placeholder."})}>Download PDF</Button>
                    </div>
                </div> 
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-lg">
           <form onSubmit={handleNotificationsSave}>
            <CardHeader>
              <CardTitle className="font-headline">Notification Settings</CardTitle>
              <CardDescription>Manage how you receive updates and communications from LMDpro.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg shadow-sm gap-2">
                <div className="flex-1">
                    <Label htmlFor="email-course-updates" className="font-medium">Course Progress & Updates</Label>
                    <p className="text-xs text-muted-foreground">Receive emails about your course progress, new lesson availability, and instructor announcements.</p>
                </div>
                <Switch id="email-course-updates" defaultChecked />
              </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg shadow-sm gap-2">
                <div className="flex-1">
                    <Label htmlFor="email-promotions" className="font-medium">Promotions & New Features</Label>
                    <p className="text-xs text-muted-foreground">Get notified about new LMDpro features, special offers, and platform news.</p>
                </div>
                <Switch id="email-promotions" />
              </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg shadow-sm gap-2">
                <div className="flex-1">
                    <Label htmlFor="inapp-achievements" className="font-medium">In-App Skill Achievements</Label>
                    <p className="text-xs text-muted-foreground">See in-app notifications when you complete a module or acquire a new skill.</p>
                </div>
                <Switch id="inapp-achievements" defaultChecked />
              </div>
              <p className="text-sm text-muted-foreground pt-2">More granular notification controls for specific course activities are coming soon.</p>
            </CardContent>
             <CardFooter>
              <Button type="submit" className="button-animated-gradient">Save Notification Settings</Button>
            </CardFooter>
           </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="apikeys">
          <Card className="shadow-lg">
             <CardHeader>
              <CardTitle className="font-headline text-2xl animated-text-gradient">API Key Management</CardTitle>
              <CardDescription>Generate and manage your API keys for LMDpro services. API access is available on Premium, Teams, and Enterprise plans.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Access LMDpro's powerful AI capabilities programmatically. Integrate personalized learning path generation, video script creation, and resume optimization into your own applications.
                </p>
                <Link href="/api-management" passHref>
                    <Button className="button-animated-gradient">Go to API Management & Pricing</Button>
                </Link>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
