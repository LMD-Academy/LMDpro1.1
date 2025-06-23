
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Shield, GraduationCap } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Google Icon SVG
const GoogleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.36 1.67-4.05 1.67-4.67 0-8.53-3.8-8.53-8.53s3.8-8.53 8.53-8.53c2.45 0 4.15.93 5.4 2.1l2.6-2.6C18.96 1.43 16.14 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.33 0 12.14-4.82 12.14-12.36 0-.8-.08-1.57-.2-2.32H12.48z" />
  </svg>
);

// Apple Icon SVG
const AppleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
    <path d="M12.016 16.136c-.43 0-.84-.04-1.228-.112-1.11-.21-2.22-.63-3.33-1.25-.453-.254-1.22-.675-2.094-1.25-.973-.642-1.92-1.5-2.48-2.61-.555-1.12-.66-2.396-.333-3.665.37-1.428 1.14-2.66 2.3-3.69 1.154-1.033 2.51-1.66 4.053-1.77.41-.03.82-.04 1.22-.04.98 0 2.016.32 2.87.97.43.32.74.52 1.02.52.28 0 .68-.22 1.02-.53.884-.66 1.94-.97 2.87-.97.41 0 .82.01 1.22.04 1.54.11 2.906.737 4.058 1.77 1.16 1.03 1.93 2.262 2.3 3.69.325 1.27.22 2.545-.335 3.666-.56 1.11-1.507 1.968-2.48 2.61-.875.575-1.64.996-2.095 1.25-1.11.62-2.22 1.04-3.33 1.25-.4.072-.81.112-1.228.112zM15.42 2.36a5.13 5.13 0 00-3.414 1.83c-.93 1.074-1.63 2.62-1.88 4.38h6.82a6.382 6.382 0 00-1.526-6.21zm-8.834 1.83C5.65 3.12 4.41 2.36 3.27 2.36c-1.52 0-3.04.79-4.04 2.19C-.896 6.035-.97 8.35.29 10.39c.67 1.09 1.54 1.95 2.68 2.69 1.01.66 2.08 1.13 3.21 1.34.42.08.84.12 1.27.12.39 0 .78-.03 1.16-.09.11-.02.22-.04.33-.06-.01-.06-.01-.11-.02-.17a4.95 4.95 0 01-1.52-3.41h-5.2a3.86 3.86 0 013.33-3.75 3.63 3.63 0 013.35 1.34c.05.06.1.12.16.18.06-.01.12-.02.18-.03-.23-1.68-.89-3.19-1.78-4.25z"/>
  </svg>
);


interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("learner");
  const { toast } = useToast();

  const socialButtons = [
    { name: "Google", icon: GoogleIcon, action: () => toast({title: "Social Login", description: "Continuing with Google (placeholder)..."}) },
    { name: "Apple", icon: AppleIcon, action: () => toast({title: "Social Login", description: "Continuing with Apple (placeholder)..."}) },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    const isAdminAttempt = activeTab === 'admin';
    const isActuallyAdmin = email.toLowerCase().includes('admin'); // Simulated admin check

    if (isAdminAttempt && !isActuallyAdmin) {
        toast({
            title: "Admin Access Only",
            description: "Please use an authorized admin email to log in via the IAM portal.",
            variant: "destructive",
        });
        return;
    }
    
    if (!isAdminAttempt && isActuallyAdmin && mode === "login") {
        toast({
            title: "Admin Account Detected",
            description: "You have logged in as a learner. To access admin features, please use the 'Admin / IAM' tab or the view switcher in your profile menu.",
            duration: 7000,
        });
    } else {
        toast({
            title: mode === "login" ? "Login Successful!" : "Registration Complete!",
            description: "Redirecting to your dashboard...",
        });
    }
    
    // Simulate successful login/registration by setting flags in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('lmdpro_auth_status', 'true');
      localStorage.setItem('lmdpro_user_is_admin', isActuallyAdmin.toString());
    }

    setTimeout(() => {
      window.location.href = isActuallyAdmin && isAdminAttempt ? "/iam" : "/dashboard";
    }, 2000);
  };

  const AuthFormContent = ({ formType }: { formType: "login" | "register" }) => (
     <form onSubmit={handleSubmit} className="space-y-4">
        {formType === "register" && (
            <div>
                <Label htmlFor={`fullName-${formType}`}>Full Name</Label>
                <Input id={`fullName-${formType}`} type="text" placeholder="Your Full Name" required className="mt-1 focus-gradient-outline" />
            </div>
        )}
        <div>
            <Label htmlFor={`email-${formType}`}>Email address</Label>
            <Input id={`email-${formType}`} name="email" type="email" placeholder="you@example.com" required className="mt-1 focus-gradient-outline" />
        </div>
        <div className="relative">
            <Label htmlFor={`password-${formType}`}>Password</Label>
            <Input 
                id={`password-${formType}`} 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required 
                className="mt-1 pr-10 focus-gradient-outline"
            />
            <Button 
                type="button"
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-7 h-7 w-7" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
        </div>
        {formType === "register" && (
            <div className="relative">
                <Label htmlFor={`confirm-password-${formType}`}>Confirm Password</Label>
                <Input 
                    id={`confirm-password-${formType}`} 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                    className="mt-1 pr-10 focus-gradient-outline" 
                />
                <Button 
                    type="button"
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-7 h-7 w-7" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
            </div>
        )}

        {formType === "login" && (
            <div className="text-sm text-right">
                <Link href="/forgot-password" passHref>
                <Button variant="link" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Forgot password?
                </Button>
                </Link>
            </div>
        )}

        <Button type="submit" className="w-full button-animated-gradient">
            {formType === "login" ? "Sign In" : "Create Account"}
        </Button>
    </form>
  );


  return (
    <Card className="w-full max-w-md shadow-xl rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline animated-text-gradient">
          {mode === "login" ? "Welcome to LMDpro" : "Join LMDpro"}
        </CardTitle>
        <CardDescription>
          {mode === "login" ? "Sign in to your Learner or Admin account." : "Create your Learner or Admin account."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <Tabs defaultValue="learner" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="learner"><GraduationCap className="mr-2 h-4 w-4"/>Learner</TabsTrigger>
                <TabsTrigger value="admin"><Shield className="mr-2 h-4 w-4"/>Admin / IAM</TabsTrigger>
            </TabsList>
            <TabsContent value="learner" className="pt-4">
                <AuthFormContent formType={mode} />
            </TabsContent>
            <TabsContent value="admin" className="pt-4">
                <AuthFormContent formType={mode} />
            </TabsContent>
        </Tabs>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {socialButtons.map((social) => ( 
            <Button key={social.name} variant="outline" onClick={social.action} className="flex items-center justify-center gap-2">
              <social.icon />
              <span>{social.name}</span>
            </Button>
          ))}
        </div>
        
      </CardContent>
      <CardFooter className="justify-center text-sm">
        {mode === "login" ? (
          <>
            Don&apos;t have an account?&nbsp;
            <Link href="/register" passHref>
              <Button variant="link" className="p-0 h-auto font-normal text-primary hover:text-primary/80">Sign up</Button>
            </Link>
          </>
        ) : (
          <>
            Already have an account?&nbsp;
            <Link href="/login" passHref>
              <Button variant="link" className="p-0 h-auto font-normal text-primary hover:text-primary/80">Sign in</Button>
            </Link>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
