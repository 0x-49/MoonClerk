import React from 'react';
import Head from 'next/head';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How to Automate Your Payment Collection with MoonClerk",
    description: "Learn how to set up automated recurring payments and streamline your billing process using MoonClerk's powerful features.",
    date: "2025-01-07",
    readTime: "8 min read",
    category: "Tutorials",
    slug: "automate-payment-collection-moonclerk"
  },
  {
    id: 2,
    title: "10 Best Practices for Recurring Payment Forms",
    description: "Discover proven strategies to optimize your payment forms for higher conversion rates and better user experience.",
    date: "2025-01-05",
    readTime: "12 min read",
    category: "Best Practices",
    slug: "recurring-payment-form-best-practices"
  },
  {
    id: 3,
    title: "Understanding Payment Processing Fees: A Complete Guide",
    description: "Everything you need to know about payment processing fees, including how to minimize costs and maximize profits.",
    date: "2025-01-03",
    readTime: "15 min read",
    category: "Guides",
    slug: "payment-processing-fees-guide"
  },
  {
    id: 4,
    title: "5 Ways to Reduce Failed Payments and Churn",
    description: "Learn effective strategies to minimize failed payments and reduce customer churn in your subscription business.",
    date: "2025-01-01",
    readTime: "10 min read",
    category: "Strategy",
    slug: "reduce-failed-payments-churn"
  },
  {
    id: 5,
    title: "The Future of Digital Payments: Trends to Watch",
    description: "Stay ahead of the curve with these emerging trends in digital payments and what they mean for your business.",
    date: "2024-12-28",
    readTime: "13 min read",
    category: "Industry Insights",
    slug: "digital-payments-trends"
  },
  {
    id: 6,
    title: "How to Choose the Right Payment Processor for Your Business",
    description: "A comprehensive comparison of payment processors to help you make the best choice for your business needs.",
    date: "2024-12-25",
    readTime: "18 min read",
    category: "Guides",
    slug: "choose-payment-processor-guide"
  }
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Payment Processing Tips & Insights | JoinMoonClerk</title>
        <meta name="description" content="Expert insights, tutorials, and best practices for payment processing, recurring billing, and subscription management." />
      </Head>
      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Payment Processing Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, tutorials, and best practices to help you streamline your payment processing and grow your business.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                <CardTitle className="mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-secondary/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest payment processing tips, tutorials, and industry insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;
