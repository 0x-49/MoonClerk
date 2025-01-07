import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Join MoonClerk - Accept Recurring & One-Time Online Payments</title>
        <meta name="description" content="Accept recurring & one-time online payments with MoonClerk. No credit card required. No contracts. Cancel anytime." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                You're just 5 minutes from accepting recurring & one-time online payments
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                No credit card required. No contracts. Cancel anytime.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore for Free
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Checkouts</CardTitle>
                    <CardDescription>
                      Simple, fast, great looking, and secure payment forms that maximize successful checkouts.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Automation</CardTitle>
                    <CardDescription>
                      Convert everyday tasks into "set-it and forget-it" automations through integrations.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Billing</CardTitle>
                    <CardDescription>
                      Flexible billing options with control over when, how much, and how often you charge.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bank-level secure and compliant</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">SSL Encryption</h3>
                  <p className="text-muted-foreground">Full SSL encryption for the entire checkout process.</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">PCI-DSS Compliance</h3>
                  <p className="text-muted-foreground">Certified to the most stringent level available.</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">Anti-Fraud Measures</h3>
                  <p className="text-muted-foreground">Automated third party anti-fraud measures.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  <Link href="tel:8006540411" className="text-blue-500 hover:text-blue-400">
                    (800) 654-0411
                  </Link>
                </p>
                <p className="text-lg">
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <Link href="mailto:help@moonclerk.com" className="text-blue-500 hover:text-blue-400">
                    help@moonclerk.com
                  </Link>
                </p>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <Link href="https://twitter.com/moonclerk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Twitter</Button>
                </Link>
                <Link href="https://www.facebook.com/moonclerk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Facebook</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
            <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
              <p>Copyright © 2012-present. MoonClerk is made with care in beautiful Greenville, SC.</p>
              <p className="mt-2">
                <Badge variant="secondary" className="mr-2">Affiliate</Badge>
                This is an affiliate website for MoonClerk. Visit{" "}
                <Link href="https://www.moonclerk.com" className="text-blue-500 hover:text-blue-400">
                  moonclerk.com
                </Link>{" "}
                for the official website.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}