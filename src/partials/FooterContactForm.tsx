import Button from '@/components/Button'

const FooterContactForm = () => (
  <form className="mx-auto grid max-w-[860px] gap-8 md:grid-cols-2">
    <input
      className="rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow outline-primary"
      placeholder="Name"
      type="text"
      name="name"
    />
    <input
      className="rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow outline-primary"
      placeholder="Email"
      type="email"
      name="email"
    />
    <input
      className="rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow outline-primary"
      placeholder="Phone"
      type="tel"
      name="phone"
    />
    <input
      className="rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow outline-primary"
      placeholder="Budget"
      type="text"
      name="budget"
    />
    <textarea
      className="col-span-2 mb-8 rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow outline-primary"
      placeholder="Message"
      name="message"
      rows={8}
    />
    <div className="col-span-2 flex justify-center">
      <Button>Send Email &rarr;</Button>
    </div>
  </form>
)

export default FooterContactForm
