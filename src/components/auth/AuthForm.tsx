
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Chrome, Linkedin, Eye, EyeOff } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"; // For showing messages

// Placeholder icons for Microsoft, Apple, X.com
const MicrosoftIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.57.01H.22v11.36h11.35V.01zm12.21 0H12.43v11.36h11.35V.01zM.22 12.63h11.35v11.36H.22V12.63zm12.21 0H23.78v11.36H12.43V12.63z"/></svg>;
const AppleIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.36,14.71a5.29,5.29,0,0,0-1.91,4.09,5.1,5.1,0,0,0,2,4,4.77,4.77,0,0,0,3.39,1.2,4.84,4.84,0,0,0,3.4-1.25,1.25,1.25,0,0,0,.12-1.79,1.23,1.23,0,0,0-1.8-.12,2.35,2.35,0,0,1-1.66.62,2.28,2.28,0,0,1-1.66-.62,2.59,2.59,0,0,1-.77-1.91,2.5,2.5,0,0,1,.78-1.87,2.31,2.31,0,0,1,1.65-.65h.1A1.24,1.24,0,0,0,20,14.59a1.23,1.23,0,0,0-1.64-.09Zm-7.12-1.66a2.32,2.32,0,0,0-2.52,1.66c-1.45,3.33-3.69,4.79-5.73,4.82a2.87,2.87,0,0,1-2.38-1.38c-1.3-2-1.06-5,.79-7.62a7.84,7.84,0,0,1,3.62-3.32A3.34,3.34,0,0,1,9.25,4.1a2.28,2.28,0,0,0,2.38-1.78,1,1,0,0,0-1-1.11,1,1,0,0,0-1.12,1,4.33,4.33,0,0,1-4.53,3.41,4.48,4.48,0,0,1-2.72-1.11A6.63,6.63,0,0,0,1,12.09c0,4.3,2.38,7.36,4.71,7.39,2,0,3.21-1.39,5.62-1.39s3.4,1.39,5.62,1.39c2.33,0,4.71-3.09,4.71-7.42a6.38,6.38,0,0,0-3.17-5.46,6.74,6.74,0,0,0-5.44-1.13A2.25,2.25,0,0,0,11.24,13.05Z"/></svg>;
const XcomIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;


interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const socialButtons = [
    { name: "Google", icon: Chrome, action: () => toast({title: "Social Login", description: "Continuing with Google (placeholder)..."}) },
    { name: "Microsoft", icon: MicrosoftIcon, action: () => toast({title: "Social Login", description: "Continuing with Microsoft (placeholder)..."}) },
    { name: "Apple", icon: AppleIcon, action: () => toast({title: "Social Login", description: "Continuing with Apple (placeholder)..."}) },
    { name: "GitHub", icon: Github, action: () => toast({title: "Social Login", description: "Continuing with GitHub (placeholder)..."}) },
    { name: "LinkedIn", icon: Linkedin, action: () => toast({title: "Social Login", description: "Continuing with LinkedIn (placeholder)..."}) },
    { name: "X.com", icon: XcomIcon, action: () => toast({title: "Social Login", description: "Continuing with X.com (placeholder)..."}) },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for actual auth logic
    toast({
        title: mode === "login" ? "Login Attempted" : "Registration Attempted",
        description: `This is a placeholder for ${mode} functionality. In a real app, authentication would occur here. Redirecting to dashboard...`
    });
    // Simulate successful login/registration and redirect to dashboard
    // In a real app, you'd use Next.js router after successful authentication
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };


  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline animated-text-gradient">
          {mode === "login" ? "Welcome Back!" : "Create Your LMDpro Account"}
        </CardTitle>
        <CardDescription>
          {mode === "login" ? "Sign in to continue your learning journey." : "Join LMDpro and start enhancing your skills today."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" type="text" placeholder="Your Full Name" required className="mt-1 focus-gradient-outline" />
            </div>
          )}
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" required className="mt-1 focus-gradient-outline" />
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
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
          {mode === "register" && (
            <div className="relative">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
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
        

            {mode === "login" && (
            <div className="text-sm text-right">
                <Link href="/forgot-password" passHref>
                <Button variant="link" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Forgot password?
                </Button>
                </Link>
            </div>
            )}

            <Button type="submit" className="w-full button-animated-gradient">
            {mode === "login" ? "Sign In" : "Create Account"}
            </Button>
        </form>

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

        <div className="grid grid-cols-3 gap-3">
          {socialButtons.slice(0,3).map((social) => ( 
            <Button key={social.name} variant="outline" onClick={social.action} className="flex items-center justify-center gap-2">
              <social.icon />
              <span className="sr-only">{social.name}</span>
            </Button>
          ))}
        </div>
         <div className="grid grid-cols-3 gap-3">
          {socialButtons.slice(3).map((social) => ( 
            <Button key={social.name} variant="outline" onClick={social.action} className="flex items-center justify-center gap-2">
              <social.icon />
              <span className="sr-only">{social.name}</span>
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
            </Link