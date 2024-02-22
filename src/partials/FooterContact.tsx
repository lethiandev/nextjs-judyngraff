import FooterContactForm from './FooterContactForm'

const FooterContact = () => (
  <section className="px-16 py-[6rem]">
    <header className="mb-16 flex flex-col items-center">
      <h2 className="mb-4 text-center text-5xl font-semibold">
        Get in <span className="text-primary">Touch</span>
      </h2>
      <p className="max-w-[640px] text-center">
        Were you to invest in your company&apos;s design, I would be more than happy to provide
        assistance for <span className="text-primary">all your desires and needs</span>.
      </p>
    </header>
    <FooterContactForm />
  </section>
)

export default FooterContact
