import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CookPal Privacy Policy - How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <Section padding="lg" containerSize="md">
        <div className="prose prose-neutral max-w-none">
          <h1 className="font-display text-4xl font-bold text-neutral-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 mb-8">Last updated: January 2026</p>

          <p className="lead text-lg text-neutral-600 mb-8">
            At CookPal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by Banana Bread Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and related services.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Information We Collect
          </h2>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Account Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>
              <strong>Email address:</strong> We collect your email address when you create an account. This is used for authentication, account recovery, and important service updates.
            </li>
            <li>
              <strong>Authentication data:</strong> We use secure authentication methods to protect your account.
            </li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Recipe Data
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Recipes you import (URLs, photos, text, social links)</li>
            <li>Recipe modifications (servings, notes, categories)</li>
            <li>Shopping lists and saved recipes</li>
            <li>Your preferences and settings</li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Third-Party Platform Imports
          </h3>
          <p className="text-neutral-700 mb-3">
            When you import recipes from third-party platforms (websites, TikTok, Instagram, YouTube):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>We access only the publicly available content from the URL you provide</li>
            <li>We do not access your social media accounts, login credentials, or private data from these platforms</li>
            <li>We do not share your imported content back to these platforms</li>
            <li>The URLs you import are stored to allow re-fetching and attribution to original sources</li>
          </ul>

          <h3 className="font-display text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Usage Analytics
          </h3>
          <p className="text-neutral-700">
            We collect anonymous usage data to improve our service, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>App usage patterns and feature adoption</li>
            <li>Error reports and crash logs</li>
            <li>Device type and operating system version</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>To provide and maintain our service</li>
            <li>To sync your recipes across devices</li>
            <li>To process recipe imports and generate nutrition data</li>
            <li>To send important updates about your account or service changes</li>
            <li>To improve our app based on usage patterns</li>
            <li>To provide customer support</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Third-Party Services
          </h2>
          <p className="text-neutral-700 mb-4">
            We use trusted third-party services to operate CookPal:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>
              <strong>Supabase:</strong> Database hosting and authentication. Your data is stored securely with enterprise-grade encryption.
            </li>
            <li>
              <strong>RevenueCat:</strong> Subscription management. Handles payment processing through Apple App Store and Google Play.
            </li>
            <li>
              <strong>Analytics services:</strong> Anonymous usage data to improve the app experience.
            </li>
          </ul>
          <p className="text-neutral-700 mt-4">
            We do not sell your personal data to third parties. We do not share your information with advertisers.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Data Storage and Security
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Your data is stored securely on Supabase servers</li>
            <li>Data is encrypted in transit and at rest</li>
            <li>Recipes are also cached locally on your device for offline access</li>
            <li>We implement industry-standard security practices</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Your Rights
          </h2>
          <p className="text-neutral-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>
              <strong>Access:</strong> Request a copy of your personal data
            </li>
            <li>
              <strong>Correction:</strong> Update or correct your information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your account and data
            </li>
            <li>
              <strong>Export:</strong> Export your recipes and data
            </li>
            <li>
              <strong>Opt-out:</strong> Unsubscribe from marketing communications
            </li>
          </ul>
          <p className="text-neutral-700 mt-4">
            To exercise any of these rights, contact us at{' '}
            <a
              href="mailto:bananabreadlabs@gmail.com"
              className="text-primary-600 hover:underline"
            >
              bananabreadlabs@gmail.com
            </a>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-neutral-700">
            CookPal is rated 4+ and is designed for general audiences. We do not knowingly collect personal information from children under 13. The app does not contain any content inappropriate for children, and no age-gated features are included.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Data Retention
          </h2>
          <p className="text-neutral-700">
            We retain your data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-neutral-700">
            We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email. Continued use of CookPal after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-neutral-700">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
