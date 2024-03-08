import Avatar from '@/components/Avatar'
import Heading from '@/components/Heading'
import Highlight from '@/components/Highlight'
import Section from '@/components/Section'
import SectionHeader from '@/components/SectionHeader'
import { ExperienceTimeline } from '@/features/experience'
import { PortfolioSection } from '@/features/portfolio'
import { Services } from '@/features/services'
import { Testimonials } from '@/features/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeTitle />
      <Section variant="surface">
        <SectionHeader heading={<Highlight>My Portfolio</Highlight>} hr>
          Below are some of my services, to see all the services available,{' '}
          <span>please visit the services section.</span>
        </SectionHeader>
        <Services />
      </Section>
      <ExperienceTimeline />
      <PortfolioSection />
      <Testimonials />
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
