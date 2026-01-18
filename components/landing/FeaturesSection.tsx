import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PhoneCarousel } from '@/components/ui/PhoneCarousel'
import { TikTokIcon, YouTubeIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import {
  Link,
  Camera,
  FileText,
  Scale,
  Ruler,
  ChefHat,
  FolderHeart,
  ShoppingCart,
  Compass,
  LucideIcon,
} from 'lucide-react'

interface Feature {
  icon?: LucideIcon
  customIcon?: 'social'
  title: string
  description: string
}

interface Screenshot {
  src: string
  alt: string
}

interface FeatureGroup {
  title: string
  description: string
  badge: string
  screenshots: Screenshot[]
  features: Feature[]
}

const featureGroups: FeatureGroup[] = [
  {
    title: 'Import Anything',
    description: 'Get recipes from any source into your library',
    badge: 'Input',
    screenshots: [
      {
        src: '/app_screenshots/Import_From_TikTok.PNG',
        alt: 'CookPal recipe import screen showing URL import, photo scanning, and text paste options',
      },
      {
        src: '/app_screenshots/Recipe_details_ingredients.PNG',
        alt: 'Recipe details showing ingredients with serving size controls',
      },
      {
        src: '/app_screenshots/Recipe_details_instructions.PNG',
        alt: 'Recipe details showing step-by-step instructions',
      },
    ],
    features: [
      {
        icon: Link,
        title: 'URL Import',
        description: 'Paste any recipe link—including TikTok, Instagram, and YouTube—and get a clean, structured card instantly.',
      },
      {
        icon: Camera,
        title: 'Photo Import (OCR)',
        description: 'Snap a photo of a cookbook page or handwritten recipe.',
      },
      {
        icon: FileText,
        title: 'Text Import',
        description: 'Paste raw text from anywhere—emails, PDFs, notes.',
      },
      {
        customIcon: 'social',
        title: 'TikTok, Instagram & YouTube',
        description: 'Paste a video link and we extract the recipe from the description or captions.',
      },
    ],
  },
  {
    title: 'Cook Better',
    description: 'Tools that make following recipes effortless',
    badge: 'Cook',
    screenshots: [
      {
        src: '/app_screenshots/Cook_mode.PNG',
        alt: 'CookPal cook mode showing step-by-step instructions with ingredients for each step',
      },
      {
        src: '/app_screenshots/Recipe_details_instructions.PNG',
        alt: 'Recipe details showing step-by-step instructions',
      },
      {
        src: '/app_screenshots/Unit_Conversion.PNG',
        alt: 'Unit conversion options showing original, metric, and imperial',
      },
      {
        src: '/app_screenshots/Import_ingredients_to_shopping_list.PNG',
        alt: 'Import ingredients to shopping list with checkbox selection',
      },
    ],
    features: [
      {
        icon: Scale,
        title: 'Serving Scaling',
        description: 'Tap +/- to scale ingredients. Works with fractions too.',
      },
      {
        icon: Ruler,
        title: 'Unit Conversion',
        description: 'Switch between original, metric, or imperial with one tap.',
      },
      {
        icon: ChefHat,
        title: 'Cook Mode',
        description: 'Step-by-step view. Screen stays on. Hands stay clean.',
      },
      {
        icon: ShoppingCart,
        title: 'Shopping List',
        description: 'Import ingredients in one tap. Auto-dedupes similar items.',
      },
    ],
  },
  {
    title: 'Stay Organized',
    description: 'Your recipe box, beautifully organized',
    badge: 'Organize',
    screenshots: [
      {
        src: '/app_screenshots/Discover_page.PNG',
        alt: 'CookPal discover page showing curated recipe collections by category',
      },
      {
        src: '/app_screenshots/app_homepage.jpeg',
        alt: 'CookPal home page showing saved recipe collection',
      },
    ],
    features: [
      {
        icon: FolderHeart,
        title: 'Saved Recipes',
        description: 'Organize into categories. Mark favorites. Find fast.',
      },
      {
        icon: Compass,
        title: 'Discover Catalog',
        description: 'Browse curated recipes. Search by ingredient or cuisine.',
      },
    ],
  },
]

function SocialIconsGroup() {
  return (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
      <div className="flex items-center -space-x-1">
        <TikTokIcon className="w-4 h-4 text-white" />
        <InstagramIcon className="w-4 h-4 text-white" />
        <YouTubeIcon className="w-4 h-4 text-white" />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <Section id="features" padding="lg" className="bg-neutral-50">
      <div className="text-center mb-16">
        <Badge variant="primary" className="mb-4">Features</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Everything you need to cook smarter
        </h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          From importing recipes to cooking hands-free, CookPal handles it all
        </p>
      </div>

      <div className="space-y-24">
        {featureGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {/* Hero Layout: Screenshot Carousel + Features */}
            <div className={`flex flex-col ${groupIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Phone Screenshot Carousel */}
              <div className="flex-shrink-0">
                <PhoneCarousel
                  screenshots={group.screenshots}
                  interval={2000}
                />
              </div>

              {/* Features Content */}
              <div className="flex-1">
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" size="sm">
                    {group.badge}
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-neutral-900">
                    {group.title}
                  </h3>
                </div>
                <p className="text-neutral-600 text-lg mb-6">{group.description}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {group.features.map((feature, featureIndex) => (
                    <Card
                      key={featureIndex}
                      variant="elevated"
                      padding="md"
                      hover
                      className="group"
                    >
                      {feature.customIcon === 'social' ? (
                        <SocialIconsGroup />
                      ) : feature.icon ? (
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-3 group-hover:bg-primary-200 transition-colors">
                          <feature.icon className="w-5 h-5 text-primary-600" />
                        </div>
                      ) : null}
                      <h4 className="font-semibold text-neutral-900 mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
