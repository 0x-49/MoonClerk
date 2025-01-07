import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - JoinMoonClerk</title>
        <meta name="description" content="Privacy Policy for JoinMoonClerk. Learn how we collect, use, and protect your personal information on our affiliate website for MoonClerk." />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="mb-4">
            Last updated: January 7, 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At JoinMoonClerk, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, and protect your personal information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Contact information (name, email address)</li>
            <li className="mb-2">Usage data (how you interact with our website)</li>
            <li className="mb-2">Device information (browser type, IP address)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Provide and improve our services</li>
            <li className="mb-2">Communicate with you</li>
            <li className="mb-2">Monitor and analyze website usage</li>
            <li className="mb-2">Track affiliate referrals to MoonClerk</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold
            certain information. You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your
            information with MoonClerk when you use our affiliate links to sign up for their service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. However,
            no method of transmission over the internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Access your personal information</li>
            <li className="mb-2">Correct inaccurate information</li>
            <li className="mb-2">Request deletion of your information</li>
            <li className="mb-2">Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us through our
            contact page.
          </p>
        </div>
      </div>
    </>
  );
}
