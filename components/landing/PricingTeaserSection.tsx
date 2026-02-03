import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Check, Sparkles } from 'lucide-react'

export function PricingTeaserSection() {
  return (
    <Section padding="lg" className="bg-neutral-50">
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-4">Pricing</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-neutral-600 text-lg">
          Start free. Upgrade when you need more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Free Plan */}
        <Card variant="elevated" padding="lg">
          <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
            Free
          </h3>
          <p className="text-neutral-600 mb-6">
            Perfect for trying CookPal
          </p>

          <div className="mb-6">
            <span className="font-display text-4xl font-bold text-neutral-900">$0</span>
            <span className="text-neutral-500">/forever</span>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              10 recipe imports
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Serving scaler
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Unit conversion
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Cook mode
            </li>
          </ul>

          <Button variant="outline" fullWidth href="https://apps.apple.com/us/app/cookpal-recipe-organizer/id6757517561">
            Download Free
          </Button>
        </Card>

        {/* Pro Plan */}
        <Card
          variant="elevated"
          padding="lg"
          className="ring-2 ring-primary-400 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
            BEST VALUE
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary-500" />
            <h3 className="font-display text-xl font-bold text-neutral-900">
              Pro
            </h3>
          </div>
          <p className="text-neutral-600 mb-6">
            For passionate home cooks
          </p>

          <div className="mb-2">
            <span className="font-display text-4xl font-bold text-neutral-900">$39.99</span>
            <span className="text-neutral-500">/year</span>
          </div>
          <p className="text-sm text-primary-600 mb-6">
            or $5.99/month
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <strong>Unlimited</strong> recipe imports
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Generate recipe ideas (AI)
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Everything in Free
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
              Priority support
            </li>
          </ul>

          <Button fullWidth href="https://apps.apple.com/us/app/cookpal-recipe-organizer/id6757517561">
            Download & Upgrade
          </Button>
        </Card>
      </div>
    </Section>
  )
}
