// Searches the directory to create a list of all projects
// Requires webpack as a bundler to work properly
const requireTimeline = (require as any).context(__dirname, false, /\.tsx$/)

export default requireTimeline as {
  (key: string): TimelineModule
  keys(): string[]
}

export type TimelineModule = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  position: React.ReactNode
  default?: React.ReactNode
}
