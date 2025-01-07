import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, ExternalLink } from "lucide-react";

export default function Contact() {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";

  return (
    <>
      <Head>
        <title>Contact MoonClerk Support | JoinMoonClerk</title>
        <meta name="description" content="Get direct support from MoonClerk's dedicated team. As an affiliate partner, we'll guide you to the official support channels for the best assistance." />
        <meta name="keywords" content="MoonClerk support, payment processing support, billing assistance, customer service" />
        <meta property="og:title" content="Contact MoonClerk Support | JoinMoonClerk" />
        <meta property="og:description" content="Get direct support from MoonClerk's dedicated team through their official channels." />
      </Head>

      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact MoonClerk Support</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get expert assistance directly from the MoonClerk team
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reach out to MoonClerk's support team via email
              </p>
              <Button asChild className="w-full">
                <a href="mailto:help@moonclerk.com" target="_blank" rel="noopener noreferrer">
                  help@moonclerk.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Call MoonClerk's support line directly
              </p>
              <Button asChild className="w-full">
                <a href="tel:+18006540411">
                  (800) 654-0411
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Help Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse MoonClerk's knowledge base
              </p>
              <Button asChild className="w-full">
                <a href={`${moonClerkUrl}#help`} target="_blank" rel="noopener noreferrer">
                  Visit Help Center
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Experience MoonClerk's powerful payment solutions for yourself
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a 
                  href={moonClerkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Try MoonClerk Free <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
