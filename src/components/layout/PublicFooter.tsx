
"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
              <span className="text-xl font-headline font-bold animated-text-gradient">LMDpro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering lifelong learners and professionals with AI-driven education and career development tools.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Platform</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-foreground">Course Catalog</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="/resume-builder" className="text-muted-foreground hover:text-foreground">Resume Builder</Link></li>
              <li><Link href="/video-creation" className="text-muted-foreground hover:text-foreground">Video Creation</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              {/* <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li> */}
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              {/* <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li> */}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/api-docs" className="text-muted-foreground hover:text-foreground">API Documentation</Link></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-foreground">App Documentation</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} LMDpro. All rights reserved. Your journey to mastery starts here.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
