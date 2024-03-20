import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Highlight from '@/components/Highlight'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import Experience from '@/experience/Experience'
import Portfolio from '@/portfolio/Portfolio'
import Service from '@/service/Service'
import Testimonial from '@/testimonial/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeTitle />
      <Section variant="surface">
        <SectionHeader heading={<Highlight>My Services</Highlight>} hr>
          Below are some of my services, to see all the services available,{' '}
          <span className="text-primary">please visit the services section.</span>
        </SectionHeader>
        <Service />
      </Section>
      <Section variant="background">
        <SectionHeader heading={<Highlight>Education And Experience</Highlight>} />
        <Experience />
      </Section>
      <Section variant="surface-light">
        <SectionHeader heading={<Highlight>My Portfolio</Highlight>} hr>
          <div className="flex justify-end">
            <Button type="button">See More</Button>
          </div>
        </SectionHeader>
        <Portfolio featuredOnly />
      </Section>
      <Section variant="background">
        <SectionHeader heading={<Highlight>Client Testimonials</Highlight>}>
          Satisfied customer references underscore the success of our collaborations, endorsing my
          value and commitment to <span>exceptional results.</span>
        </SectionHeader>
        <Testimonial />
      </Section>
    </div>
  )
}

const HomeTitle = () => (
  <div className="flex flex-col items-stretch px-16">
    <Heading level={1} className="my-4 text-center leading-[1.20]">
      <Image src="/hello.svg" alt="Hello!" className="mx-auto mb-2 block" width={70} height={46} />
      I&apos;m <span>Jakub</span>,<br />
      Graphic Designer
    </Heading>
    <div className="grid grid-cols-5 gap-8">
      <div>
        <p>
          Great seller, Great service, Great product, can&apos;t have better then this Strong
          recommended 5
        </p>
      </div>
      <div className="col-span-3 -mt-16">
        <div className="mx-auto max-w-[700px]">
          <Avatar />
        </div>
      </div>
      <div></div>
    </div>
  </div>
)
