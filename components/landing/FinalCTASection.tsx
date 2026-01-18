import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to cook without the clutter?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Import recipes from any website, TikTok, Instagram, or YouTube. 
            Download CookPal today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://apps.apple.com/app/cookpal"
              size="lg"
              className="bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl"
            >
              Download on App Store
            </Button>
            <Button
              href="/support"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              Have Questions?
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-200">
            Free to download • Available on iOS • Google Play coming soon
          </p>
        </div>
      </Container>
    </section>
  )
}
