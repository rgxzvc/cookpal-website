import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'CookPal Terms of Service - Rules and guidelines for using our app.',
}

export default function TermsPage() {
  return (
    <div className="pt-24">
      <Section padding="lg" containerSize="md">
        <div className="prose prose-neutral max-w-none">
          <h1 className="font-display text-4xl font-bold text-neutral-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-neutral-500 mb-8">Last updated: January 2026</p>

          <p className="lead text-lg text-neutral-600 mb-8">
            Welcome to CookPal! These Terms of Service (&quot;Terms&quot;) govern your use of the CookPal mobile application and related services operated by Banana Bread Labs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By using CookPal, you agree to these Terms.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-700">
            By downloading, installing, or using CookPal, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our service.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            2. Description of Service
          </h2>
          <p className="text-neutral-700">
            CookPal is a recipe management application that allows you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Import recipes from URLs, photos, text, and social media</li>
            <li>Organize and save recipes</li>
            <li>Scale servings and convert units</li>
            <li>Use a distraction-free cook mode</li>
            <li>Generate nutrition information</li>
            <li>Create shopping lists</li>
            <li>Generate recipe ideas using AI (Pro feature)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            3. Third-Party Content Sources
          </h2>
          <p className="text-neutral-700 mb-4">
            CookPal can import recipes from third-party platforms including websites, TikTok, Instagram, and YouTube. Please note:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>We are not affiliated with, endorsed by, or sponsored by any of these platforms</li>
            <li>You are responsible for complying with those platforms&apos; terms of service</li>
            <li>Imported content is for <strong>personal, non-commercial use only</strong></li>
            <li>We do not guarantee continued ability to import from any third-party source, as platforms may change their policies or technical implementations</li>
            <li>Recipe content belongs to the original creators; CookPal simply helps you organize it for personal use</li>
            <li>If a content creator or platform requests removal of their content from our service, we will comply</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            4. AI-Generated Content Disclaimer
          </h2>
          <p className="text-neutral-700 mb-4">
            CookPal uses artificial intelligence to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Extract and parse recipe content from various sources</li>
            <li>Estimate nutrition information</li>
            <li>Generate recipe ideas (Pro feature)</li>
          </ul>
          <p className="text-neutral-700 mt-4">
            <strong>Important:</strong> AI-generated content is provided for informational purposes only. While we strive for accuracy, we cannot guarantee that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Nutrition estimates are 100% accurate</li>
            <li>Recipe parsing captures all details correctly</li>
            <li>Generated recipe ideas are safe for all dietary restrictions</li>
          </ul>
          <p className="text-neutral-700 mt-4">
            Always verify ingredient information if you have allergies or dietary restrictions. We are not responsible for any adverse effects resulting from reliance on AI-generated content.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            5. Subscriptions and Billing
          </h2>
          
          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Free Tier
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>20 total recipe imports</li>
            <li>Access to all core features</li>
            <li>No credit card required</li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Pro Subscription
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Monthly: $5.99/month</li>
            <li>Annual: $39.99/year</li>
            <li>Unlimited recipe imports</li>
            <li>AI recipe idea generation</li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Billing Terms
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Subscriptions are billed through Apple App Store or Google Play</li>
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>Manage or cancel subscriptions in your device&apos;s account settings</li>
            <li>Subscription management is handled by RevenueCat</li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Refunds
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Annual subscriptions: Full refund available within 14 days of purchase</li>
            <li>Monthly subscriptions: No prorated refunds, but you retain access until the end of your billing period</li>
            <li>Refund requests: Contact us at bananabreadlabs@gmail.com</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            6. User Conduct
          </h2>
          <p className="text-neutral-700 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Use automated means to access the service (bots, scrapers, etc.)</li>
            <li>Violate the intellectual property rights of recipe authors</li>
            <li>Share your account credentials with others</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-neutral-700 mb-4">
            <strong>Our Content:</strong> The CookPal app, including its design, code, and branding, is owned by Banana Bread Labs and protected by intellectual property laws.
          </p>
          <p className="text-neutral-700 mb-4">
            <strong>Your Content:</strong> You retain ownership of recipes you create. By using CookPal, you grant us a license to store and display your content within the service.
          </p>
          <p className="text-neutral-700">
            <strong>Third-Party Content:</strong> Recipes imported from third-party sources (websites, TikTok, Instagram, YouTube, etc.) remain the intellectual property of their original creators. CookPal facilitates personal organization of this content and does not claim ownership of imported recipes. You may only use imported content for personal, non-commercial purposes.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-neutral-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>CookPal is provided &quot;as is&quot; without warranties of any kind</li>
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability is limited to the amount you paid us in the past 12 months</li>
            <li>We are not responsible for the accuracy of imported recipes or nutrition data</li>
            <li>We are not liable for any health issues arising from recipe content</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            9. Termination
          </h2>
          <p className="text-neutral-700 mb-4">
            <strong>By You:</strong> You may stop using CookPal at any time. To delete your account, contact us or use the in-app account deletion feature.
          </p>
          <p className="text-neutral-700">
            <strong>By Us:</strong> We may suspend or terminate your access if you violate these Terms, engage in fraudulent activity, or for any other reason at our discretion. We will provide notice when reasonably possible.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            10. Changes to Terms
          </h2>
          <p className="text-neutral-700">
            We may update these Terms from time to time. We will notify you of significant changes through the app or via email. Continued use of CookPal after changes constitutes acceptance of the updated Terms. If you disagree with changes, you should stop using the service.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            11. Governing Law
          </h2>
          <p className="text-neutral-700">
            These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts of the United States.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            12. Contact Us
          </h2>
          <p className="text-neutral-700">
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="text-neutral-700 mt-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:bananabreadlabs@gmail.com"
              className="text-primary-600 hover:underline"
            >
              bananabreadlabs@gmail.com
            </a>
          </p>
          <p className="text-neutral-700 mt-2">
            <strong>Company:</strong> Banana Bread Labs
          </p>
        </div>
      </Section>
    </div>
  )
}
