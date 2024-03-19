import Heading from '@/components/Heading'
import PrototypeAnimation from '@/components/PrototypeAnimation'

export default function ResumePage() {
  return (
    <>
      <header className="mt-16">
        <Heading level={1} className="mb-4 text-center">
          Jakub <span>Nowakowski</span>
        </Heading>
        <p className="mx-auto mb-12 max-w-[863px] text-center">
          A passionate and creative UI/UX designer with 3 years of experience in designing
          user-centered, intuitive, and visually appealing digital products. Proficient in
          translating client needs into compelling user experiences. Seeking an opportunity to
          contribute my skills and expertise to a dynamic design team.
        </p>
        <PrototypeAnimation />
      </header>
      <main></main>
    </>
  )
}
