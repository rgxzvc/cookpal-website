import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { TikTokIcon, YouTubeIcon, InstagramIcon, WebIcon } from '@/components/ui/SocialIcons'
import { X, Check, AlertCircle, Sparkles } from 'lucide-react'

export function ProblemSolutionSection() {
  return (
    <Section padding="lg">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          The recipe web is broken
        </h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          You just want to make dinner, not scroll through ads, pop-ups, and life stories
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <Card variant="outline" padding="lg" className="border-red-200 bg-red-50/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <X className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900">
              Recipe websites today
            </h3>
          </div>

          {/* Mock cluttered page */}
          <div className="bg-white rounded-2xl p-4 border border-red-200 space-y-3">
            <div className="h-4 bg-red-200/50 rounded w-3/4" />
            <div className="h-24 bg-gradient-to-r from-red-100 to-red-200 rounded flex items-center justify-center text-red-400 text-xs">
              <AlertCircle className="w-4 h-4 mr-1" /> AD
            </div>
            <div className="h-3 bg-neutral-200 rounded w-full" />
            <div className="h-3 bg-neutral-200 rounded w-5/6" />
            <div className="h-3 bg-neutral-200 rounded w-4/6" />
            <div className="h-16 bg-gradient-to-r from-red-100 to-red-200 rounded flex items-center justify-center text-red-400 text-xs">
              <AlertCircle className="w-4 h-4 mr-1" /> POP-UP
            </div>
            <div className="h-3 bg-neutral-200 rounded w-full" />
            <div className="h-3 bg-neutral-200 rounded w-3/4" />
            <div className="h-20 bg-neutral-100 rounded flex items-center justify-center text-neutral-400 text-xs">
              📖 Life story...
            </div>
            <div className="h-3 bg-neutral-200 rounded w-full" />
          </div>

          <ul className="mt-6 space-y-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              Endless scrolling past ads
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              Cookie banners and pop-ups
            </li>
            <li className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              Pages of backstory before the recipe
            </li>
          </ul>
        </Card>

        {/* After */}
        <Card variant="outline" padding="lg" className="border-primary-200 bg-primary-50/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900">
              With CookPal
            </h3>
          </div>

          {/* Mock clean card */}
          <div className="bg-white rounded-2xl p-4 border border-primary-200 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-lg" />
              <div className="h-5 bg-primary-200 rounded w-1/2" />
            </div>
            <div className="flex gap-4 py-2">
              <div className="text-center">
                <div className="text-xs text-neutral-400">Time</div>
                <div className="text-sm font-medium text-neutral-700">30 min</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-neutral-400">Cals</div>
                <div className="text-sm font-medium text-neutral-700">450</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-neutral-400">Servings</div>
                <div className="text-sm font-medium text-neutral-700">4</div>
              </div>
            </div>
            <div className="border-t pt-3 space-y-2">
              <div className="flex items-center gap-2">
                <span>🥕</span>
                <span className="text-sm text-neutral-700">Carrots</span>
                <span className="ml-auto text-sm text-neutral-500">2 cups</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧄</span>
                <span className="text-sm text-neutral-700">Garlic</span>
                <span className="ml-auto text-sm text-neutral-500">3 cloves</span>
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-sm text-neutral-600">Prep all ingredients...</span>
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-neutral-600">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>Import from</span>
              <span className="flex items-center gap-1.5 ml-1">
                <WebIcon className="w-4 h-4 text-neutral-500" />
                <TikTokIcon className="w-4 h-4 text-neutral-900" />
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <YouTubeIcon className="w-4 h-4 text-red-500" />
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
              Clean layout with instant nutrition info
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
              Scale servings, convert units
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}
