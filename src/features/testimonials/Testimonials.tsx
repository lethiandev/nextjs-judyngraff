import Image from 'next/image'
import { Testimonial, defaultTestimonials } from './testimonial'

import profileImage from './profile.png'
import quoteMarkImage from './quotemark.svg'
import starOffImage from './star-off.svg'
import starOnImage from './star-on.svg'

export const Testimonials = ({ testimonials = defaultTestimonials }) => (
  <section className="p-16">
    <header className="mb-16 grid items-center md:grid-cols-2">
      <h2 className="text-5xl font-semibold">
        Client <span className="text-primary">Testimonials</span>
      </h2>
      <p className="text-base">
        Satisfied customer references underscore the success of our collaborations, endorsing my
        value and commitment to{' '}
        <span className="text-nowrap text-primary">exceptional results.</span>
      </p>
    </header>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </section>
)

export default Testimonials

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <article className="flex flex-col gap-6 rounded-[32px] bg-surface p-6 text-on-surface">
    <Rating rating={testimonial.rating} />
    <p className="flex-grow text-xs">{testimonial.quote}</p>
    <div className="flex items-end justify-between">
      <TestimonialAuthor
        name={testimonial.author.name}
        company={testimonial.author.company}
        imageUrl={testimonial.author.profileImageUrl}
      />
      <Image src={quoteMarkImage} alt="Quote Mark" width={70} height={48} />
    </div>
  </article>
)

const TestimonialAuthor = ({ imageUrl = '', name = '', company = '' }) => (
  <div className="flex flex-grow flex-row items-center gap-2">
    <Image
      className="h-12 w-12 rounded-full border-4 border-on-surface"
      src={imageUrl || profileImage}
      alt="John Doe"
    />
    <div className="flex flex-col">
      <p className="font-semibold">{name}</p>
      <p className="text-xs">{company}</p>
    </div>
  </div>
)

const Rating = ({ stars = 5, rating = 0 }) => (
  <div className="flex flex-row items-center gap-1">
    {Array.from({ length: stars }).map((_, index) => (
      <RatingStar isActive={index < Math.round(rating)} />
    ))}
    <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
  </div>
)

const RatingStar = ({ isActive }: { isActive: boolean }) => (
  <Image
    className="mb-0.5 block h-4"
    src={isActive ? starOnImage : starOffImage}
    alt="Rating Star"
    width={16}
    height={16}
  />
)
