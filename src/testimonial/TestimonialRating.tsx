import Image from 'next/image'
import starOffImage from './assets/star-off.svg'
import starOnImage from './assets/star-on.svg'

export default function TestimonialRating({ stars = 5, rating = 0 }) {
  return (
    <div className="flex flex-row items-center gap-1">
      {Array.from({ length: stars }).map((_, index) => (
        <RatingStar key={index} isActive={index < Math.round(rating)} />
      ))}
      <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
    </div>
  )
}

const RatingStar = ({ isActive = false }) => (
  <Image
    className="mb-0.5 block h-4"
    src={isActive ? starOnImage : starOffImage}
    alt="Rating Star"
    width={16}
    height={16}
    aria-hidden
  />
)
