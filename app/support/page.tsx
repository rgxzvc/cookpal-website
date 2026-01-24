'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ChevronDown, Mail, MessageSquare, ExternalLink } from 'lucide-react'

const faqs = [
  {
    question: 'Which recipe websites are supported?',
    answer:
      'CookPal works with virtually any recipe website—from popular sites like AllRecipes, NYT Cooking, and Bon Appétit to smaller food blogs. Our parser extracts structured recipe data from standard formats and uses AI to handle edge cases.',
  },
  {
    question: 'Does CookPal work offline?',
    answer:
      "Yes! Once you import a recipe, it's saved locally on your device. You can view all your saved recipes, use cook mode, and access your shopping list without an internet connection. Only importing new recipes requires connectivity.",
  },
  {
    question: 'How does the nutrition information work?',
    answer:
      'CookPal automatically estimates nutrition facts based on the ingredients in each recipe. When you scale servings, the per-serving nutrition updates automatically. Note: These are estimates and may vary based on specific brands and preparation methods.',
  },
  {
    question: 'What counts as a "recipe import"?',
    answer:
      "Each time you import a new recipe from a URL, photo, text, or social link, it counts as one import. Free users get 10 total imports. Viewing, scaling, or using cook mode on saved recipes doesn't count against your limit.",
  },
  {
    question: 'How reliable is importing from social media (YouTube, Instagram, etc.)?',
    answer:
      "We use AI to extract recipes from video descriptions and captions. While it works well for most cooking videos that include written recipes, results may vary for videos that only show cooking without text. We're constantly improving our parsing.",
  },
  {
    question: 'Is my data private? Where is it stored?',
    answer:
      'Your recipes and data are stored securely using Supabase with enterprise-grade encryption. We only use your email for authentication and important updates. We never sell your data or share it with advertisers. See our Privacy Policy for details.',
  },
  {
    question: 'Can I export or share my recipes?',
    answer:
      'Yes! You can share any recipe via a link, or export your entire recipe collection. We believe your data belongs to you.',
  },
  {
    question: 'What if I want to cancel? Are there refunds?',
    answer:
      "You can cancel your Pro subscription anytime from your app settings. For annual plans purchased within the last 14 days, contact us for a full refund. Monthly plans aren't refundable but you'll retain Pro access until the end of your billing period.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="pt-24">
      <Section padding="lg">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">Support</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            How can we help?
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our team.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="font-display text-xl font-bold text-neutral-900 mb-2">
              Email Us
            </h2>
            <p className="text-neutral-600 mb-4">
              For general inquiries, bug reports, or account issues.
            </p>
            <a
              href="mailto:bananabreadlabs@gmail.com"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline"
            >
              bananabreadlabs@gmail.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </Card>

          <Card variant="elevated" padding="lg" className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="font-display text-xl font-bold text-neutral-900 mb-2">
              In-App Feedback
            </h2>
            <p className="text-neutral-600 mb-4">
              Have a suggestion? Use our built-in feedback tool.
            </p>
            <p className="text-sm text-neutral-500">
              In the app: <strong>More → Help & Support → Send Suggestion</strong>
            </p>
          </Card>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-neutral-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help? */}
        <div id="contact" className="max-w-xl mx-auto mt-16 text-center">
          <Card variant="default" padding="lg" className="bg-primary-50 border-primary-100">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
              Still need help?
            </h3>
            <p className="text-neutral-600 mb-4">
              Can&apos;t find what you&apos;re looking for? Our team is happy to help.
            </p>
            <a
              href="mailto:bananabreadlabs@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-2xl hover:bg-primary-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </a>
          </Card>
        </div>
      </Section>
    </div>
    </>
  )
}
