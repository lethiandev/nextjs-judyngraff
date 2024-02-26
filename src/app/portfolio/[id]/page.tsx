import { defaultProjects } from '@/features/portfolio'

export { default } from '../page'

export const dynamic = 'force-static'
export const generateStaticParams = () => defaultProjects.map(({ id }) => ({ id }))
