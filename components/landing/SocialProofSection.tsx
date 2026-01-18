import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Finally! No more scrolling through someone's life story to find a recipe. CookPal is a game-changer.",
    author: 'Sarah M.',
    role: 'Home Cook',
    rating: 5,
  },
  {
    quote:
      'The serving scaler is genius. I can actually halve a recipe without doing mental math at 6am.',
    author: 'Mike T.',
    role: 'Meal Prep Enthusiast',
    rating: 5,
  },
  {
    quote:
      'Cook mode keeps my screen on and shows one step at a time. My phone stays clean and I stay focused.',
    author: 'Emily R.',
    role: 'Busy Parent',
    rating: 5,
  },
]

const logos = ['AllRecipes', 'NYT Cooking', 'Bon Appétit', 'Serious Eats', 'Food52']

export function SocialProofSection() {
  return (
    <Section padding="md" className="bg-neutral-50">
      {/* Testimonials */}
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Loved by home cooks
        </h2>
        <p className="text-neutral-600 text-lg">
          Join thousands who&apos;ve simplified their cooking
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, i) => (
          <Card key={i} variant="elevated" padding="lg" className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, j) => (
                <Star
                  key={j}
                  className="w-5 h-5 fill-primary-400 text-primary-400"
                />
              ))}
            </div>
            <blockquote className="text-neutral-700 leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-neutral-900">{testimonial.author}</p>
              <p className="text-sm text-neutral-500">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* As seen in */}
      <div className="text-center">
        <p className="text-sm text-neutral-500 uppercase tracking-wider mb-6">
          Works with recipes from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-semibold text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
