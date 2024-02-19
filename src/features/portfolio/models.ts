export type Project = {
  projectName: string
  imageUrl: string
}

export const defaultProjects: Project[] = [
  { projectName: 'Website', imageUrl: '/portfolio/website.jpeg' },
  { projectName: 'Mobile App', imageUrl: '/portfolio/mobile-app.jpeg' },
  { projectName: 'Logo Design', imageUrl: '/portfolio/logo-design.jpeg' },
]
