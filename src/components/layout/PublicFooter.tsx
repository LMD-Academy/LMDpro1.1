
"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, BookOpen, LifeBuoy, FileText as FileTextIcon } from "lucide-react"; 

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { href: "/#features", label: "Features Overview" },
      { href: "/courses", label: "Course Catalog" },
      { href: "/pricing", label: "Pricing Plans" },
      { href: "/resume-builder", label: "Resume Builder" },
      { href: "/video-creation", label: "AI Video Creation" },
    ],
    company: [
      { href: "/about", label: "About LMDpro" },
      { href: "/contact", label: "Contact Us" },
      // { href: "/careers", label: "Careers at LMDpro" }, // Placeholder
      // { href: "/blog", label: "Our Blog" }, // Placeholder
    ],
    resources: [
      { href: "/api-docs", label: "Developer API Docs", icon: FileTextIcon },
      { href: "/docs", label: "Application Docs", icon: BookOpen }, 
      { href: "/support", label: "Help Center & Support", icon: LifeBuoy },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  };

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              <span className="text-xl font-headline font-bold animated-text-gradient">LMDpro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering lifelong learners and professionals with AI-driven education and career development tools. Your journey to mastery starts here.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Platform</h5>
            <ul className="space-y-2 text-sm">
              {footerLinks.platform.map(link => (
                <li key={link.label}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Company</h5>
            <ul className="space-y-2 text-sm">
             {footerLinks.company.map(link => (
                 <li key={link.label}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Resources</h5>
            <ul className="space-y-2 text-sm">
             {footerLinks.resources.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} LMDpro. All rights reserved. Advanced AI-Driven Agentic System for Education.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Twitter / X" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="GitHub Repository" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
            <Link href="#" aria-label="LinkedIn Profile" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

