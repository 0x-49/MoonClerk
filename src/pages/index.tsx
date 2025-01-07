import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";
  
  return (
    <>
      <Head>
        <title>JoinMoonClerk - Streamline Your Recurring Payments with MoonClerk</title>
        <meta name="description" content="Transform your business with MoonClerk's powerful recurring payment solution. Easy setup, secure payments, and seamless integration. Start your 14-day free trial today." />
        <meta name="keywords" content="MoonClerk, recurring payments, payment processing, subscription billing, online payments, payment forms" />
        <meta property="og:title" content="JoinMoonClerk - Streamline Your Recurring Payments" />
        <meta property="og:description" content="Transform your business with MoonClerk's powerful recurring payment solution. Start your 14-day free trial today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joinmoonclerk.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://joinmoonclerk.com" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Transform Your Business with MoonClerk's Recurring Payments
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your payment process with MoonClerk's powerful, easy-to-use platform. No coding required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a 
                href={moonClerkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Free Trial <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/features">
                Learn More
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            14-day free trial • No credit card required
          </p>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Recurring Payments
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Powerful features to help you manage and grow your business
          </p>
          <Button asChild variant="link" size="lg">
            <Link href="/features">
              View All Features
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 6).map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 md:py-24 text-center bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
        <Button asChild size="lg">
          <Link href="/pricing">
            View Pricing Plans
          </Link>
        </Button>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using MoonClerk for their recurring payments.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a 
              href={moonClerkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Start Free Trial <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact Sales
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Easy Setup",
    description: "Get started in minutes with our intuitive interface. No coding required.",
  },
  {
    title: "Secure Payments",
    description: "Bank-level security with PCI compliance and SSL encryption.",
  },
  {
    title: "Customizable Forms",
    description: "Create branded payment forms that match your website's design.",
  },
  {
    title: "Recurring Billing",
    description: "Automate your recurring payments and subscription management.",
  },
  {
    title: "Payment Analytics",
    description: "Track payments and analyze your business growth with detailed reports.",
  },
  {
    title: "Customer Management",
    description: "Manage customer information and payment history in one place.",
  },
];