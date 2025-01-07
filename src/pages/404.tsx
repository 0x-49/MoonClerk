import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import MainLayout from "@/components/layout/main-layout";

export default function NotFound() {
  return (
    <MainLayout>
      <Head>
        <title>Page Not Found | JoinMoonClerk</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let us help you find what you need." />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <a href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </MainLayout>
  );
}
