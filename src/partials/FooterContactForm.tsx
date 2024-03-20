import Button from '@/components/Button'

const FooterContactForm = () => (
  <form className="mx-auto max-w-[860px]">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Input placeholder="Name" name="name" type="text" />
      <Input placeholder="Email" name="email" type="email" />
      <Input placeholder="Phone" name="phone" type="tel" />
      <Input placeholder="Budget" name="budget" type="text" />
      <textarea
        className="mb-8 rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow-lg shadow-gray-100 outline-primary md:col-span-2"
        placeholder="Message"
        name="message"
        rows={8}
      />
    </div>
    <div className="flex justify-center md:col-span-2">
      <Button>Send Email &rarr;</Button>
    </div>
  </form>
)

export default FooterContactForm

const Input = (props: JSX.IntrinsicElements['input']) => (
  <input
    className="w-full max-w-full rounded-[2rem] bg-background px-6 py-4 placeholder-gray-200 shadow-lg shadow-gray-100 outline-primary"
    {...props}
  />
)
