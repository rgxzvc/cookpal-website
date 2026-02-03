import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'

const footerLinks = {
  product: [
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: 'https://apps.apple.com/us/app/cookpal-recipe-organizer/id6757517561', label: 'Download App' },
  ],
  support: [
    { href: '/support', label: 'FAQ' },
    { href: '/support#contact', label: 'Contact' },
    { href: 'mailto:bananabreadlabs@gmail.com', label: 'Email Us' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Logo size={36} />
                <span className="font-display font-bold text-xl text-neutral-900">
                  CookPal
                </span>
              </Link>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Turn any recipe link into a clean, cookable recipe card. No ads.
                No life story. Just the recipe.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Banana Bread Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-neutral-500">
                Made with 🍌 for home cooks everywhere
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
