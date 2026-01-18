import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Link2, Sparkles, ChefHat } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Paste a link',
    description:
      'Drop any recipe URL from websites, TikTok, Instagram, or YouTube—or snap a photo of a cookbook.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'CookPal extracts everything',
    description:
      'Ingredients, instructions, nutrition, cook time—all structured and ready.',
    color: 'bg-primary-200 text-primary-700',
  },
  {
    number: '03',
    icon: ChefHat,
    title: 'Cook distraction-free',
    description:
      'Scale servings, convert units, enter cook mode, and add to your shopping list.',
    color: 'bg-primary-300 text-primary-800',
  },
]

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" padding="lg">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          How it works
        </h2>
        <p className="text-neutral-600 text-lg">
          From link to dinner in three simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line (hidden on last item and mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 bg-gradient-to-r from-primary-200 to-primary-100" />
            )}

            <Card variant="default" padding="lg" className="text-center relative">
              <div className={`w-16 h-16 rounded-3xl ${step.color} flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>

              <span className="absolute top-4 right-4 text-xs font-bold text-primary-300">
                {step.number}
              </span>

              <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}
