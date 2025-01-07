import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

export default function Features() {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";

  const features = [
    {
      title: "Beautiful Payment Forms",
      description: "Create professional, branded payment forms in minutes without any coding.",
      benefits: [
        "Customizable design and branding",
        "Mobile-responsive layouts",
        "Multiple payment options",
        "Custom fields and form logic"
      ]
    },
    {
      title: "Recurring Billing",
      description: "Set up and manage recurring payments with flexible billing options.",
      benefits: [
        "Custom billing schedules",
        "Automatic payment retry",
        "Failed payment notifications",
        "Subscription management"
      ]
    },
    {
      title: "Payment Processing",
      description: "Accept payments securely with built-in Stripe integration.",
      benefits: [
        "Credit card processing",
        "ACH payments",
        "International currencies",
        "PCI compliance"
      ]
    },
    {
      title: "Customer Management",
      description: "Manage your customers and their payment information efficiently.",
      benefits: [
        "Customer profiles",
        "Payment history",
        "Subscription tracking",
        "Customer communications"
      ]
    },
    {
      title: "Integrations",
      description: "Connect MoonClerk with your favorite tools and services.",
      benefits: [
        "Zapier integration",
        "Webhook support",
        "API access",
        "Email service providers"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Get insights into your payment and subscription data.",
      benefits: [
        "Revenue analytics",
        "Customer metrics",
        "Payment reporting",
        "Subscription insights"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>MoonClerk Features: Complete Payment Management Solution</title>
        <meta name="description" content="Discover MoonClerk's powerful features for payment processing, recurring billing, and business automation. Start streamlining your payment operations today." />
        <meta name="keywords" content="MoonClerk features, payment forms, recurring billing, payment processing, customer management, integrations" />
        <meta property="og:title" content="MoonClerk Features: Complete Payment Management Solution" />
        <meta property="og:description" content="Discover MoonClerk's powerful features for payment processing, recurring billing, and business automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joinmoonclerk.com/features" />
      </Head>

      <div className="min-h-screen bg-background">
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Everything You Need to Accept Payments Online
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                MoonClerk provides all the tools you need to manage payments, subscriptions, and customers in one place.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a
                  href={moonClerkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white"
                >
                  Start Your Free Trial <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of businesses using MoonClerk to streamline their payment operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={moonClerkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white"
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
