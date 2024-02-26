export type Project = {
  id: string
  projectName: string
  imageUrl: string
  description: string
  category: ProjectCategory
  featured?: boolean
}

export type ProjectCategory = 'web-app' | 'brand' | 'clothing' | 'other'

export const defaultProjects: Project[] = [
  {
    id: 'project-1',
    projectName: 'Website',
    imageUrl: '/portfolio/website.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    featured: true,
    category: 'web-app',
  },
  {
    id: 'project-2',
    projectName: 'Mobile App',
    imageUrl: '/portfolio/mobile-app.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    featured: true,
    category: 'brand',
  },
  {
    id: 'project-3',
    projectName: 'Logo Design',
    imageUrl: '/portfolio/logo-design.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    featured: true,
    category: 'clothing',
  },
  {
    id: 'project-4',
    projectName: 'Mobile App',
    imageUrl: '/portfolio/mobile-app.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    category: 'brand',
  },
  {
    id: 'project-5',
    projectName: 'Website',
    imageUrl: '/portfolio/website.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    category: 'web-app',
  },
  {
    id: 'project-6',
    projectName: 'Logo Design',
    imageUrl: '/portfolio/logo-design.jpeg',
    description: 'Lorem ipsum dolor sit amet',
    category: 'other',
  },
]
