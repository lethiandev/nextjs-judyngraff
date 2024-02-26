import { defaultProjects } from '@/features/portfolio'

export default function PortfolioModal({ params }: { params: { id: string } }) {
  const project = defaultProjects.find(project => project.id === params.id)!

  return (
    <div className="flex flex-col gap-8">
      <h2 id="modal-title" className="text-2xl">
        {project.projectName}
      </h2>
    </div>
  )
}
