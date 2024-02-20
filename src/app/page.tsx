import Avatar from '@/components/Avatar'
import { ExperienceTimeline } from '@/features/experience'
import { PortfolioSection } from '@/features/portfolio'
import { ServicesSection } from '@/features/services'
import { Testimonials } from '@/features/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeTitle />
      <ServicesSection />
      <ExperienceTimeline />
      <PortfolioSection />
      <Testimonials />
    </div>
  )
}

const HomeTitle = () => (
  <div className="flex flex-col items-stretch px-16">
    <h2 className="mb-4 text-center text-[64px] font-semibold leading-[120%]">
      <Image src="/hello.svg" alt="Hello!" className="inline-block" width={70} height={46} />
      <br />
      I&apos;m <span className="text-lime-500">Jakub</span>,<br />
      Graphic Designer
    </h2>
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
