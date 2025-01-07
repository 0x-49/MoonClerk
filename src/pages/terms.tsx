import React from 'react';
import Head from 'next/head';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | JoinMoonClerk</title>
        <meta name="description" content="Terms of service and user agreement for JoinMoonClerk. Learn about our policies, user obligations, and service terms." />
      </Head>
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            Welcome to JoinMoonClerk. By accessing our website, you agree to these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Website Usage</h2>
          <p className="mb-4">
            This website provides information about MoonClerk's payment processing services and includes affiliate links. We are not directly affiliated with MoonClerk beyond our participation in their affiliate program.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Affiliate Relationship</h2>
          <p className="mb-4">
            We participate in MoonClerk's affiliate program. When you click our links to MoonClerk and make a purchase, we may receive a commission. This does not affect your purchase price.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content Accuracy</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on our website is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and images, is our property or the property of our content suppliers and is protected by copyright laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Conduct</h2>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Use our website for any unlawful purpose</li>
            <li className="mb-2">Attempt to gain unauthorized access to any portion of the website</li>
            <li className="mb-2">Collect any information about other users</li>
            <li className="mb-2">Use the website in any way that could damage or impair its functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
          <p className="mb-4">
            Our website contains links to third-party websites, including MoonClerk. We are not responsible for the content or practices of these websites.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these terms, please contact us through our contact page.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
