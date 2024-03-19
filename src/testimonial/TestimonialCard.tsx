import Image, { ImageProps } from 'next/image'
import React from 'react'
import TestimonialRating from './TestimonialRating'
import profileImage from './assets/profile.png'
import quoteMarkImage from './assets/quotemark.svg'

export type TestimonialCardProps = {
  rating: number
  author: TestimonialAuthorProps
  children?: React.ReactNode
}

export default function TestimonialCard({ rating, author, children }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-[32px] bg-surface p-6 text-on-surface">
      <TestimonialRating rating={rating} />
      <p className="flex-grow text-xs">{children}</p>
      <div className="flex items-end justify-between">
        <TestimonialAuthor {...author} />
        <Image src={quoteMarkImage} alt="Quote Mark" width={70} height={48} aria-hidden />
      </div>
    </article>
  )
}

type TestimonialAuthorProps = {
  name: string
  imageSrc: ImageProps['src']
  company: string
}

const TestimonialAuthor = ({ imageSrc, name, company }: TestimonialAuthorProps) => (
  <div className="flex flex-grow flex-row items-center gap-2">
    <Image
      className="h-12 w-12 rounded-full border-4 border-on-surface"
      src={imageSrc || profileImage}
      alt="John Doe"
      aria-hidden
    />
    <div className="flex flex-col">
      <p className="font-semibold">{name}</p>
      <p className="text-xs">{company}</p>
    </div>
  </div>
)
