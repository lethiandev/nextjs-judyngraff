import requireTestimonial from './testimonials/index'

export function withTestimonials() {
  return requireTestimonial.keys().map(requireTestimonial)
}
