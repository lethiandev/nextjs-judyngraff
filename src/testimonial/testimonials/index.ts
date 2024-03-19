import { ImageProps } from 'next/image'

// Searches the directory to create a list of all projects
// Requires webpack as a bundler to work properly
const requireTestimonial = (require as any).context(__dirname, false, /\.tsx$/)

export default requireTestimonial as {
  (key: string): TestimonialModule
  keys(): string[]
}

export type TestimonialModule = {
  default: React.ReactNode
  author: TestimonialAuthor
  rating: number
}

export type TestimonialAuthor = {
  name: string
  imageSrc: ImageProps['src']
  company: string
}
