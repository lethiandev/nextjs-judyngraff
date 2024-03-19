import Heading from '@/components/Heading'
import Section from '@/components/Section'
import Image from 'next/image'
import { ReactNode } from 'react'

import notesImage from './notes.svg'
import servicesImage from './services.png'

const ServicesPage = () => (
  <>
    <header className="pt-16">
      <Heading level={1} className="mb-6 text-center">
        My <span>Services</span>
      </Heading>
      <p className="mx-auto max-w-[767px] text-center">
        Transforming visions into visuals: my graphic design services bring your ideas to life.
        <br /> From stunning logos and captivating marketing collaterals to websites and mobile
        applications, I&apos;ve got your design needs covered!
      </p>
      <Image className="mx-auto max-w-full" src={servicesImage} alt="Services" aria-hidden />
    </header>
    <main>
      <Section variant="surface">
        <Heading as="h2" level={3} className="mb-2">
          Brand <span>Identity</span>
        </Heading>
        <p className="mb-8">
          Prepare design according to client brief and reference images. Logo design includes:
          <br />• Horizontal and vertical composition
          <br />• Additional monochrome and achromatic versions
          <br />• Files in raster format (JPG, PNG) and vector format (PDF, EPS)
        </p>
        <Subsection label="Bronze" price={100}>
          <p>
            One revision to one chosen logo from two versions (slight modification of shapes, change
            of colors, fonts).
          </p>
        </Subsection>
        <Subsection label="Silver" price={200}>
          <p>
            Three revisions to one chosen logo from three versions (slight modification of shapes,
            change of colors, fonts), business card design included.
          </p>
        </Subsection>
        <Subsection label="Gold" price={350}>
          <p>
            Three revisions to one chosen logo from four versions (slight modification of shapes,
            change of colors, fonts), business card, compliment slip, letterhead, envelope and
            folder design included.
          </p>
        </Subsection>
        <Subsection label="Brand Guidelines" price={200}>
          <p>
            A brand book project incorporating things such as: meaning of the symbol, construction
            of the logo, Protective field, color scheme and examples of logo usage.
          </p>
        </Subsection>
        <Subsection label="Team Crest/Mascot Logo" price={200} />
        <Subsection label="Recreation of an existing Logo" price={30} />
      </Section>
      <Section variant="background">
        <Heading as="h2" level={3} className="mb-2">
          Brand <span>Stationery</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          Your customised stationery helps establish the brand image you created for your business.
          If you need something not listed below, please contact me and I will be happy to help.
          <br /> <strong>*Print order available, please contact me for details.</strong>
        </p>
        <Subsection label="Business Card" price={25} />
        <Subsection label="Compliment Slip" price={25} />
        <Subsection label="Leterhead" price={25} />
        <Subsection label="Envelope" price={25} />
        <Subsection label="Folder" price={50} />
      </Section>
      <Section variant="surface-light">
        <Heading as="h2" level={3} className="mb-2">
          Small <span>Format</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          Small format refers to designs that will be prepared appropriately for later printing.
          <br /> <strong>*Print order available, please contact me for details.</strong>
        </p>
        <Subsection label="One-sided leaflet (up to A4 size)" price={40} hr={false} />
        <Subsection label="Double-sided leaflet (up to A4 size)" price={55} hr={false} />
        <Subsection label="Folding leaflet (up to A5 size)" price={80} />
        <Subsection label="Brochure (up to A5 size)" price={100}>
          <p>Price depends on number of pages.</p>
        </Subsection>
        <Subsection label="Magazine/Book" price={150}>
          <p>Price depends on number of pages.</p>
        </Subsection>
        <Subsection label="Loyalty card" price={25} />
        <Subsection label="Gift voucher" price={25} />
        <Subsection label="Invitation" price={25} />
        <Subsection label="Greeting card" price={25} />
        <Subsection label="One-sided menu (up to A4 size)" price={80} hr={false} />
        <Subsection label="Double-sided menu (up to A4 size)" price={100} hr={false} />
        <Subsection label="Folding menu (up to A5 size)" price={25} />
        <Subsection label="Sticker/Label" price={140} />
        <Subsection label="Packaging" price={150} />
      </Section>
      <Section variant="background">
        <Heading as="h2" level={3} className="mb-2">
          Large <span>Format</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          Large format refers to designs that will be prepared appropriately for later printing.
          <br /> <strong>*Print order available, please contact me for details.</strong>
        </p>
        <Subsection label="Poster" price={40} />
        <Subsection label="One-sided menu (from A3 size)" price={100} hr={false} />
        <Subsection label="Double-sided menu (from A3 size)" price={125} hr={false} />
        <Subsection label="Folding menu (from A4 size)" price={150} />
        <Subsection label="Ad banner/Flags" price={70} />
        <Subsection label="Roll-up banner" price={70} />
        <Subsection label="Pop-up banner" price={70} />
        <Subsection label="Board/Billboard" price={100} />
        <Subsection label="Pavement sign" price={70} />
        <Subsection label="Shop fronts" price={100} />
        <Subsection label="Vehicle graphic" price={100}>
          <p>
            Price depends on complexity of project. The price for the vehicle blueprint is not
            included, this price will be charged in addition.
          </p>
        </Subsection>
      </Section>
      <Section variant="surface">
        <Heading as="h2" level={3} className="mb-2">
          Custom <span>Clothing</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          Whether you want to add a touch of elegance, make a bold statement, or showcase your
          personality, I am here to bring your vision to life.
        </p>
        <Subsection label="Design" price={100}>
          <p>Price depends on complexity of project.</p>
        </Subsection>
        <Subsection label="Extras" price={25}>
          <p>Price depends on complexity of project.</p>
        </Subsection>
      </Section>
      <Section variant="background">
        <Heading as="h2" level={3} className="mb-2">
          Web <span>Design</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          I will create unique, professional and beautiful website mockup or transform an existing
          website design into next level. The project will be created on Figma, it will be fully
          editable.
        </p>
        <Subsection label="Design" price={300}>
          <p>Price depends on complexity of project.</p>
        </Subsection>
        <Subsection label="Development" price="Price will be quoted after consultation">
          <p>
            Website coding available, a quote for the work will be prepared upon receipt of detailed
            information.
          </p>
        </Subsection>
      </Section>
      <Section variant="surface-light">
        <Heading as="h2" level={3} className="mb-2">
          Mobile App <span>Design</span>
        </Heading>
        <p className="mb-8 max-w-[767px]">
          If you have any great app idea and need a designer to provide stunning user interfaces,
          then you&apos;re in the right place! I will create a professional, modern, and unique
          project for your mobile application.
        </p>
        <Subsection label="Design" price={300}>
          <p>Price depends on complexity of project.</p>
        </Subsection>
        <Subsection label="Development" price="Price will be quoted after consultation">
          <p>
            Mobile application coding available, a quote for the work will be prepared upon receipt
            of detailed information.
          </p>
        </Subsection>
      </Section>
      <Section variant="primary" className="relative my-12">
        <Image className="absolute bottom-8 right-12" src={notesImage} alt="Notes" aria-hidden />
        <Heading as="h2" level={3} className="mb-4 text-center">
          Non-Listed Services
        </Heading>
        <p className="mx-auto max-w-[902px] text-center">
          Due to the fact that the range of graphic designs is large, it is not possible to present
          everything on the above list, therefore, in the absence of services in the price list,
          please contact me for information and pricing of your order. Projects are priced
          individually after getting acquainted with its details.
        </p>
      </Section>
    </main>
  </>
)

export default ServicesPage

type SubsectionProps = {
  label: ReactNode
  price: ReactNode
  hr?: boolean
  children?: ReactNode
}

const Subsection = ({ label, price, hr = true, children }: SubsectionProps) => (
  <article className={`group ${!hr ? 'mb-4' : null}`}>
    <div className="flex gap-8">
      <div className="flex flex-grow flex-col gap-2">
        <Heading as="h3" level={4}>
          {label}
        </Heading>
        {children}
      </div>
      <div className="text-nowrap text-xl font-semibold text-primary">
        {typeof price === 'number' ? <>from &pound;{price}</> : price}
      </div>
    </div>
    {hr ? <hr className="my-4 border-current opacity-10 group-last:hidden" /> : null}
  </article>
)
