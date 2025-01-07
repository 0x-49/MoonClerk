import React from 'react';
import Head from 'next/head';

const AffiliateDisclosure = () => {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure - JoinMoonClerk</title>
        <meta name="description" content="Our affiliate disclosure explains our relationship with MoonClerk and how we earn commissions through affiliate links." />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Affiliate Disclosure</h1>
          
          <p>Last updated: January 7, 2025</p>

          <h2>Our Relationship with MoonClerk</h2>
          <p>
            JoinMoonClerk is a participant in the MoonClerk Affiliate Program. This means we
            earn a commission when visitors click on our links to MoonClerk and subsequently
            make a purchase.
          </p>

          <h2>How We Make Money</h2>
          <p>
            When you click on our affiliate links and sign up for MoonClerk's services, we
            receive a commission from MoonClerk. This commission comes at no additional cost
            to you - you pay the same amount whether you use our affiliate link or go
            directly to MoonClerk's website.
          </p>

          <h2>Our Commitment to You</h2>
          <p>
            We are committed to:
          </p>
          <ul>
            <li>Being transparent about our affiliate relationship with MoonClerk</li>
            <li>Providing honest, unbiased information about MoonClerk's services</li>
            <li>Disclosing our affiliate relationship in all relevant content</li>
            <li>Prioritizing your needs and interests above our commission earnings</li>
          </ul>

          <h2>Identifying Affiliate Links</h2>
          <p>
            Our affiliate links include a special tracking code (typically "?via=joinmoonclerk"
            at the end of the URL) that allows MoonClerk to attribute the referral to us.
            All such links on our website are affiliate links unless explicitly stated
            otherwise.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our affiliate relationship with MoonClerk or
            this disclosure, please don't hesitate to contact us through our contact page.
          </p>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosure;
