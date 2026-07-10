import Link from 'next/link'

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Instagram' },
  { href: 'mailto:hello@sericaway.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#090909]">
      <div className="container-app py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold text-white tracking-tight">
              Sericaway
            </Link>
            <p className="mt-3 text-sm text-[#52525B] leading-relaxed max-w-xs">
              Intelligent automation for faster, smarter businesses.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-[#A1A1AA] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-[#A1A1AA] uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-[#A1A1AA] uppercase tracking-wider mb-4">
              Social
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3F3F46]">
            &copy; {new Date().getFullYear()} Sericaway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}