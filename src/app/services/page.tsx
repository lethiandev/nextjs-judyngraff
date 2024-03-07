import Heading from '@/components/Heading'
import Section from '@/components/Section'
import Image from 'next/image'
import { ReactNode } from 'react'

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
        <h2 className="mb-4 text-4xl font-semibold">
          Brand <span className="text-primary">Identity</span>
        </h2>
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
        <Subsection label="Team Crest/Mascot Logo" price={200} />
        <Subsection label="Recreation of an existing Logo" price={30} />
      </Section>
    </main>
  </>
)

export default ServicesPage

type SubsectionProps = {
  label: ReactNode
  price: ReactNode
  children?: ReactNode
}

const Subsection = ({ label, price, children }: SubsectionProps) => (
  <article className="after:my-4 after:block after:border-b-[1px] after:border-current after:opacity-10 last:after:hidden">
    <div className="flex gap-8">
      <div className="flex flex-grow flex-col gap-2">
        <h3 className="flex text-xl font-semibold">{label}</h3>
        {children}
      </div>
      <div className="text-nowrap text-xl font-semibold text-primary">
        {typeof price === 'number' ? <>from &pound;{price}</> : price}
      </div>
    </div>
  </article>
)
