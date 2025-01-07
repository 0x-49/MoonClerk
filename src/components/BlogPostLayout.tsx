import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BlogPostLayoutProps {
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  description,
  publishDate,
  readTime,
  children,
}: BlogPostLayoutProps) {
  const moonClerkUrl = "https://www.moonclerk.com/?via=maxime-emmanuel";

  return (
    <>
      <Head>
        <title>{title} - JoinMoonClerk Blog</title>
        <meta name="description" content={description} />
      </Head>

      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <time dateTime={publishDate}>{publishDate}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Try MoonClerk free for 14 days. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <a
                  href={moonClerkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Start Free Trial <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
