export const metadata = {
  title: 'Terms of Service',
}

export default function TermsOfService() {
  return (
    <div className="container-app section-padding py-1">
      <article className="prose prose-gray max-w-3xl mx-auto">
        <h1>Terms of Service</h1>
        <p className="text-gray-500">Last updated: January 2026</p>

        <h2>1. Services</h2>
        <p>
          Sericaway provides web design, development, and brand strategy
          services. Scope, timeline, and pricing are defined per engagement
          agreement.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          Upon full payment, clients receive full ownership of deliverables.
          Sericaway retains the right to display work in portfolios.
        </p>

        <h2>3. Liability</h2>
        <p>
          Our services are provided &quot;as is.&quot; We are not liable for
          indirect damages arising from use of our services. Liability is
          limited to the amount paid for the specific service.
        </p>

        <h2>4. Contact</h2>
        <p>
          For questions, email{' '}
          <a href="mailto:legal@sericaway.com">legal@sericaway.com</a>.
        </p>
      </article>
    </div>
  )
}