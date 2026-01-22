import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Check, X, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'CookPal pricing plans. Start free with 20 imports, or go Pro for unlimited recipes and AI-powered recipe ideas.',
}

const features = [
  { name: 'Recipe imports', free: '20 total', pro: 'Unlimited' },
  { name: 'URL import', free: true, pro: true },
  { name: 'Photo import (OCR)', free: true, pro: true },
  { name: 'Text import', free: true, pro: true },
  { name: 'Social links import', free: true, pro: true },
  { name: 'Serving scaler', free: true, pro: true },
  { name: 'Unit conversion', free: true, pro: true },
  { name: 'Cook mode', free: true, pro: true },
  { name: 'Nutrition info', free: true, pro: true },
  { name: 'Shopping list', free: true, pro: true },
  { name: 'Saved recipes & categories', free: true, pro: true },
  { name: 'Generate Recipe Ideas (AI)', free: false, pro: true },
  { name: 'Priority support', free: false, pro: true },
]

export default function PricingPage() {
  return (
    <div className="pt-24">
      <Section padding="lg">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">Pricing</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Simple, fair pricing
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Start free with 20 recipe imports. Upgrade to Pro for unlimited imports
            and AI-powered recipe ideas.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* Free Plan */}
          <Card variant="elevated" padding="lg">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
              Free
            </h2>
            <p className="text-neutral-600 mb-6">
              Great for trying CookPal
            </p>

            <div className="mb-8">
              <span className="font-display text-5xl font-bold text-neutral-900">
                $0
              </span>
              <span className="text-neutral-500 text-lg">/forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>20 recipe imports</strong> total
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  All import methods (URL, photo, text, social)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Serving scaler, unit conversion, cook mode
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Shopping list & saved recipes
                </span>
              </li>
            </ul>

          <Button variant="outline" fullWidth href="https://apps.apple.com/app/cookpal">
            Download Free
          </Button>
          </Card>

          {/* Pro Plan */}
          <Card
            variant="elevated"
            padding="lg"
            className="ring-2 ring-primary-400 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge variant="primary" className="shadow-lg">
                MOST POPULAR
              </Badge>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-primary-500" />
              <h2 className="font-display text-2xl font-bold text-neutral-900">
                Pro
              </h2>
            </div>
            <p className="text-neutral-600 mb-6">
              For passionate home cooks
            </p>

            <div className="mb-2">
              <span className="font-display text-5xl font-bold text-neutral-900">
                $39.99
              </span>
              <span className="text-neutral-500 text-lg">/year</span>
            </div>
            <p className="text-primary-600 font-medium mb-8">
              or $5.99/month • Save 44% with annual
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Unlimited</strong> recipe imports
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Generate Recipe Ideas</strong> with AI
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Everything in Free
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Priority support
                </span>
              </li>
            </ul>

            <Button fullWidth href="https://apps.apple.com/app/cookpal">
              Download & Upgrade
            </Button>

            <p className="text-center text-sm text-neutral-500 mt-4">
              Cancel anytime • Managed by RevenueCat
            </p>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-neutral-900 text-center mb-8">
            Full feature comparison
          </h2>

          <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-neutral-50 border-b border-neutral-200">
              <div className="p-4 md:p-6 font-semibold text-neutral-900">
                Feature
              </div>
              <div className="p-4 md:p-6 font-semibold text-neutral-900 text-center">
                Free
              </div>
              <div className="p-4 md:p-6 font-semibold text-neutral-900 text-center bg-primary-50">
                Pro
              </div>
            </div>

            {/* Table rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index < features.length - 1 ? 'border-b border-neutral-100' : ''
                }`}
              >
                <div className="p-4 md:p-6 text-neutral-700">{feature.name}</div>
                <div className="p-4 md:p-6 flex items-center justify-center">
                  {typeof feature.free === 'boolean' ? (
                    feature.free ? (
                      <Check className="w-5 h-5 text-primary-500" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-300" />
                    )
                  ) : (
                    <span className="text-neutral-600">{feature.free}</span>
                  )}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center bg-primary-50/50">
                  {typeof feature.pro === 'boolean' ? (
                    feature.pro ? (
                      <Check className="w-5 h-5 text-primary-500" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-300" />
                    )
                  ) : (
                    <span className="font-medium text-primary-700">
                      {feature.pro}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ/Notes */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="font-display text-xl font-bold text-neutral-900 mb-6">
            Frequently asked pricing questions
          </h3>
          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">
                What counts as an import?
              </h4>
              <p className="text-neutral-600">
                Each time you save a new recipe from a URL, photo, text, or social
                link, it counts as one import. Viewing or cooking saved recipes
                doesn&apos;t count.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">
                Can I cancel anytime?
              </h4>
              <p className="text-neutral-600">
                Yes! Cancel your Pro subscription anytime from your app settings.
                You&apos;ll keep Pro access until the end of your billing period.
                Subscriptions are managed through RevenueCat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">
                What about refunds?
              </h4>
              <p className="text-neutral-600">
                Annual plans purchased within 14 days are eligible for a full
                refund. Contact us at{' '}
                <a
                  href="mailto:bananabreadlabs@gmail.com"
                  className="text-primary-600 hover:underline"
                >
                  bananabreadlabs@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
