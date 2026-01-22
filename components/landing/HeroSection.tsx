'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { TikTokIcon, YouTubeIcon, InstagramIcon, WebIcon } from '@/components/ui/SocialIcons'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="bg-blob w-96 h-96 bg-primary-200 top-20 -left-48" />
      <div className="bg-blob w-80 h-80 bg-primary-100 top-40 right-0" />
      <div className="bg-blob w-64 h-64 bg-accent-100 bottom-20 left-1/4 opacity-20" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 text-balance">
              Turn any recipe link into a{' '}
              <span className="text-gradient">clean, cookable</span> recipe card
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Import recipes from any website, TikTok, Instagram, or YouTube—and get clean, easy-to-read recipe cards. No ads. No life story. Just the recipe.
            </p>

            {/* Platform icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <span className="text-sm font-medium text-neutral-500">Import from</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full">
                <WebIcon className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-medium text-neutral-600">Web</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full">
                <TikTokIcon className="w-4 h-4 text-neutral-900" />
                <span className="text-sm font-medium text-neutral-600">TikTok</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <InstagramIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Instagram</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-full">
                <YouTubeIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">YouTube</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="https://apps.apple.com/app/cookpal"
                size="lg"
              >
                Download on App Store
              </Button>
              <Button
                href="#how-it-works"
                variant="outline"
                size="lg"
              >
                See How It Works
              </Button>
            </div>

            {/* Store availability */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-sm">
              <span className="flex items-center gap-2 text-neutral-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Free to download
              </span>
              <span className="flex items-center gap-2 text-neutral-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available on App Store
              </span>
              <span className="flex items-center gap-2 text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-neutral-300" />
                Google Play coming soon
              </span>
            </div>
          </div>

          {/* Right content - App screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[3rem] bg-neutral-900 p-2 shadow-2xl">
                <div className="rounded-[2.5rem] overflow-hidden bg-white">
                  <Image
                    src="/app-screenshot.jpeg"
                    alt="CookPal app showing recipe collection"
                    width={320}
                    height={693}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-full" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-300/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
