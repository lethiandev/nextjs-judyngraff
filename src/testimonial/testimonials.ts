import requireTestimonial from './testimonials/index'

export function withTestimonials() {
  const orderedTestimonials = requireTestimonial.keys().sort()
  return orderedTestimonials.map(requireTestimonial)
}
