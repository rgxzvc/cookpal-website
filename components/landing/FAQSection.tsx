'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Which recipe websites are supported?',
    answer:
      'CookPal works with virtually any recipe website—from popular sites like AllRecipes, NYT Cooking, and Bon Appétit to smaller food blogs. Our parser extracts structured recipe data from standard formats and uses AI to handle edge cases.',
  },
  {
    question: 'Does CookPal work offline?',
    answer:
      'Yes! Once you import a recipe, it\'s saved locally on your device. You can view all your saved recipes, use cook mode, and access your shopping list without an internet connection. Only importing new recipes requires connectivity.',
  },
  {
    question: 'How does the nutrition information work?',
    answer:
      'CookPal automatically estimates nutrition facts based on the ingredients in each recipe. When you scale servings, the per-serving nutrition updates automatically. Note: These are estimates and may vary based on specific brands and preparation methods.',
  },
  {
    question: 'What counts as a "recipe import"?',
    answer:
      'Each time you import a new recipe from a URL, photo, text, or social link, it counts as one import. Free users get 5 total imports. Viewing, scaling, or using cook mode on saved recipes doesn\'t count against your limit.',
  },
  {
    question: 'How reliable is importing from social media (YouTube, Instagram, etc.)?',
    answer:
      'We use AI to extract recipes from video descriptions and captions. While it works well for most cooking videos that include written recipes, results may vary for videos that only show cooking without text. We\'re constantly improving our parsing.',
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
      'You can cancel your Pro subscription anytime from your app settings. For annual plans purchased within the last 14 days, contact us for a full refund. Monthly plans aren\'t refundable but you\'ll retain Pro access until the end of your billing period.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq" padding="lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-neutral-600 text-lg">
            Everything you need to know about CookPal
          </p>
        </div>

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
    </Section>
  )
}
