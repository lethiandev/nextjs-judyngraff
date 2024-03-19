import { ImageProps } from 'next/image'

// Searches the directory to create a list of all projects
// Requires webpack as a bundler to work properly
const requireProject = (require as any).context(__dirname, false, /\.mdx$/)

export default requireProject as {
  (key: string): ProjectModule
  keys(): string[]
}

export type ProjectModule = {
  default: React.ComponentType
  metadata?: ProjectMetadata
}

export type ProjectMetadata = {
  title?: string
  imageSrc?: ImageProps['src']
  featured?: boolean
  category?: string
}
