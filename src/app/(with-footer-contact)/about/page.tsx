import Heading from '@/components/Heading'
import Section from '@/components/Section'
import Image from 'next/image'

import houseImage from './house.png'
import iconArrowsOut from './icon-arrows-out.svg'
import iconBackpack from './icon-backpack.svg'
import iconUserFocus from './icon-user-focus.svg'
import profileImage from './profile.png'

const AboutPage = () => (
  <>
    <header className="flex flex-col items-center px-16 py-[6rem]">
      <Heading level={1}>
        About <span>Me</span>
      </Heading>
    </header>
    <main>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="-mt-16 hidden flex-col items-center justify-end md:flex">
          <Image className="max-w-full" alt="Profile Picture" src={profileImage} aria-hidden />
        </div>
        <div className="flex flex-col justify-center">
          <Heading level={2} className="mb-8">
            Hi, I&apos;m <span>Jakub!</span>
          </Heading>
          <p className="mb-8">
            I&apos;m a passionate graphic designer with many years of creative experience. I believe
            that design has the power to transform ideas into visual stories, and I&apos;m here to
            help you tell your story in the most compelling way possible.
          </p>
          <p className="mb-8">
            My journey as a graphic designer began at the age of thirteen, when I started to
            familiarise myself with graphic design programs. Over the years, I&apos;ve had the
            privilege of working with a diverse range of clients, from startups to established
            brands. Each project has been a unique opportunity to bring creativity to life.
          </p>
          <p className="mb-8">
            I have a deep love for design in all its forms. Whether it&apos;s crafting a clean and
            modern logo, designing a user-friendly website, or creating eye-catching marketing
            materials, I thrive on the challenge of turning ideas into visually stunning realities.
          </p>
        </div>
      </section>
      <Section variant="surface">
        <div className="flex flex-col items-center">
          <p className="text-[3rem] font-semibold leading-[1.2]">
            Transforming Concepts into Reality: <br />
            Partner for <span className="text-primary">Achieving Success</span>!
          </p>
        </div>
      </Section>
      <Section variant="background">
        <header className="mb-12">
          <Heading level={3} className="mb-4">
            My <span>Approach</span>
          </Heading>
          <p>My design philosophy revolves around three core principles:</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          <ApproachCard count={1} heading="Creativity">
            I believe in pushing the boundaries of creativity to deliver unique and memorable
            designs.
          </ApproachCard>
          <ApproachCard count={2} heading="Functionality">
            Every design should not only look good but also serve its purpose effectively.
          </ApproachCard>
          <ApproachCard count={3} heading="Collaboration">
            I value open communication and collaboration with clients to ensure their vision is
            realized.
          </ApproachCard>
        </div>
      </Section>
      <Section variant="surface-light">
        <header className="mb-8">
          <Heading level={3}>
            Why Choose <span>Me</span>?
          </Heading>
        </header>
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <ChooseMeCard iconUrl={iconBackpack} heading="Experience">
            With 8 years in the field, I bring a wealth of knowledge and expertise to every project.
          </ChooseMeCard>
          <ChooseMeCard iconUrl={iconArrowsOut} heading="Versatility">
            I have experience in a wide range of design disciplines, from branding and print to web
            and digital media.
          </ChooseMeCard>
          <ChooseMeCard iconUrl={iconUserFocus} heading="Client Focused">
            Your satisfaction is my top priority. I&apos;m dedicated to delivering results that
            exceed your expectations.
          </ChooseMeCard>
        </div>
      </Section>
      <Section variant="background">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Heading level={3} className="mb-2">
              Let&apos;s Create <span>Together</span>
            </Heading>
            <p className="mb-8">
              Whether you&apos;re a small business owner looking to establish your brand identity, a
              non-profit in need of captivating visuals, or an individual with a creative project in
              mind, I&apos;m here to bring your ideas to life.
            </p>
            <p className="mb-8">
              Let&apos;s collaborate and turn your vision into reality. Contact me today to discuss
              your project, and let&apos;s embark on a design journey together.
            </p>
            <p className="mb-8">
              Thank you for considering me as your partner in design. I look forward to working with
              you!
            </p>
          </div>
          <div className="-m-16 hidden flex-col items-center justify-end md:flex">
            <Image className="max-w-full" src={houseImage} alt="Creativity" aria-hidden />
          </div>
        </div>
      </Section>
    </main>
  </>
)

export default AboutPage

const ApproachCard = ({ count = 1, heading = '', children = '' }) => (
  <article>
    <h3 className="mb-4 text-xl font-semibold">
      <span className="mr-4 inline-block rounded-full bg-primary text-on-primary">
        <span className="inline-flex h-8 w-8 items-center justify-center">{count}</span>
      </span>
      {heading}
    </h3>
    <p>{children}</p>
  </article>
)

const ChooseMeCard = ({ iconUrl = '', heading = '', children = '' }) => (
  <article className="rounded-[32px] bg-background p-8 text-on-background shadow-lg shadow-gray-100">
    <header className="mb-8 flex flex-col items-center">
      <Image src={iconUrl} width={48} height={48} alt="Icon" aria-hidden />
      <h2 className="text-center text-xl font-semibold">{heading}</h2>
    </header>
    <p>{children}</p>
  </article>
)
