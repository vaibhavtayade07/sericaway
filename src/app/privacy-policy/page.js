export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
    <div className="container-app section-padding">
      <article className="prose prose-gray max-w-3xl mx-auto">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500">Last updated: January 2026</p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name and
          email address when you fill out our contact form. We also collect
          standard web analytics data (page views, browser type, referring site).
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to respond to inquiries, improve our services,
          and send occasional updates if you have opted in. We do not sell your
          personal data to third parties.
        </p>

        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and analytics cookies
          to understand usage patterns. You can control cookie preferences in
          your browser settings.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this policy, reach out at{' '}
          <a href="mailto:privacy@sericaway.com">privacy@sericaway.com</a>.
        </p>
      </article>
    </div>
  )
}