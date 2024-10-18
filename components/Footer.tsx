import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              AI Business Growth
            </Link>
            <p className="text-muted-foreground">
              Empowering businesses with AI-driven insights and growth strategies.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Analytics</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Marketing</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Finance</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Sales</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Guides</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">API Status</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">About</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Jobs</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Press</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Licenses</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; 2023 AI Business Growth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}