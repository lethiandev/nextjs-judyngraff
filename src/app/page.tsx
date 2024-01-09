import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import PanelBox from '@/components/PanelBox'
import PanelService from '@/components/PanelService'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col">
      <HomeTitle />
      <Services />
      <Portfolio />
    </main>
  )
}

const Services = () => (
  <PanelBox>
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <h3 className="text-5xl font-semibold text-white">
        My <span className="text-lime-500">Services</span>
      </h3>
      <p className="text-white">
        Below are some of my services, to see all the services available,{' '}
        <span className="text-lime-500">please visit the services section.</span>
      </p>
    </div>
    <hr className="my-8 border-neutral-700" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <PanelService label="Web Design" src="/services/web-design.jpg" color="#DDA17C" />
      <PanelService label="Mobile App Design" src="/services/mobile-app.jpg" color="#417EAA" />
      <PanelService label="Brand Identity" src="/services/brand-identity.jpg" color="#407757" />
      <PanelService label="Custom Clothing" src="/services/custom-clothing.jpg" color="#B25F47" />
    </div>
  </PanelBox>
)

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

const Portfolio = () => (
  <PanelBox variant="light">
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <h3 className="text-5xl font-semibold text-black">
        My <span className="text-lime-500">Portfolio</span>
      </h3>
      <div className="flex justify-end gap-4">
        <Button>See More</Button>
        <Button variant="outline">See More</Button>
        <Button variant="link">See More</Button>
      </div>
    </div>
    <hr className="my-8 border-zinc-300" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <PanelService label="Web Design" src="/services/web-design.jpg" color="#DDA17C" />
      <PanelService label="Mobile App Design" src="/services/mobile-app.jpg" color="#417EAA" />
      <PanelService label="Brand Identity" src="/services/brand-identity.jpg" color="#407757" />
      <PanelService label="Custom Clothing" src="/services/custom-clothing.jpg" color="#B25F47" />
    </div>
  </PanelBox>
)
