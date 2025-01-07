import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function Footer() {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/moonclerk', external: true },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/moonclerk', external: true },
      { name: 'Facebook', href: 'https://www.facebook.com/moonclerk', external: true },
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="flex flex-col lg:col-span-1">
              <Link href="/" className="text-xl font-bold text-primary">
                JoinMoonClerk
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Transform your business with MoonClerk's powerful recurring payment solution. Start your 14-day free trial today.
              </p>
            </div>

            {/* Product Links */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                {footerNavigation.product.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                {footerNavigation.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">Get Started Today</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Ready to transform your payment process? Start your free trial with no credit card required.
              </p>
              <Button asChild className="mt-4">
                <a 
                  href={moonClerkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Start Free Trial <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Follow MoonClerk</h4>
                <div className="flex gap-4">
                  {footerNavigation.social.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              {currentYear} JoinMoonClerk. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              This is an affiliate website for MoonClerk. Visit{' '}
              <a 
                href={moonClerkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MoonClerk
              </a>
              {' '}for the official website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
