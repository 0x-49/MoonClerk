import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";

  const plans = [
    {
      name: "Starter",
      price: "$15",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to $5,000 in monthly volume",
        "Unlimited forms",
        "Custom branding",
        "Basic integrations",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "$45",
      description: "For growing businesses with higher volume",
      features: [
        "Up to $25,000 in monthly volume",
        "Everything in Starter",
        "Advanced form customization",
        "Priority support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Scale",
      price: "$115",
      description: "For established businesses needing more",
      features: [
        "Up to $75,000 in monthly volume",
        "Everything in Growth",
        "Custom payment retry schedules",
        "Dedicated account manager",
        "Custom integrations"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>MoonClerk Pricing: Simple, Transparent Payment Processing Plans</title>
        <meta name="description" content="Choose the perfect MoonClerk plan for your business. Transparent pricing with no hidden fees. Start your 14-day free trial today." />
        <meta name="keywords" content="MoonClerk pricing, payment processing fees, subscription billing plans, recurring payment pricing" />
        <meta property="og:title" content="MoonClerk Pricing: Simple, Transparent Payment Processing Plans" />
        <meta property="og:description" content="Choose the perfect MoonClerk plan for your business. Transparent pricing with no hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joinmoonclerk.com/pricing" />
      </Head>

      <div className="min-h-screen bg-background">
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </div>
          </section>

          {/* Pricing Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <a
                          href={moonClerkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          Start Free Trial
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What payment methods can I accept?</h3>
                  <p className="text-muted-foreground">
                    MoonClerk allows you to accept all major credit cards and ACH payments through Stripe.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Are there any additional fees?</h3>
                  <p className="text-muted-foreground">
                    Beyond the monthly subscription fee, you'll only pay standard Stripe processing fees (2.9% + 30¢ per transaction).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can change your plan at any time. Your billing will be prorated accordingly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What happens after the free trial?</h3>
                  <p className="text-muted-foreground">
                    After your 14-day free trial, you'll be billed for the plan you selected. You can cancel anytime before the trial ends.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is here to help you choose the right plan for your business.
              </p>
              <Button size="lg" variant="outline">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
