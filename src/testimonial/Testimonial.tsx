'use client'

import TestimonialCard from './TestimonialCard'
import { withTestimonials } from './testimonials'

export default function Testimonial() {
  const testimonials = withTestimonials()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(({ author, rating, default: content }, index) => (
        <TestimonialCard key={index} author={author} rating={rating}>
          {content}
        </TestimonialCard>
      ))}
    </div>
  )
}
