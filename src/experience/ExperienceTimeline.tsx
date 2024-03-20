import Timeline, { TimelineContent } from '@/components/Timeline'
import { TimelineModule } from './timeline/index'
import Heading from '@/components/Heading'

export type ExperienceTimelineProps = {
  experience: TimelineModule[]
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <Timeline>
      {experience.map<TimelineContent>(exp => ({
        leftContent: <ExperienceCompany experience={exp} />,
        rightContent: <ExperienceDescription experience={exp} />,
      }))}
    </Timeline>
  )
}

const ExperienceCompany = ({ experience }: { experience: TimelineModule }) => (
  <div className="mb-4 md:mb-16">
    <Heading level={3} className="-mt-2 mb-2">
      {experience.title}
    </Heading>
    <p className="font-semibold text-primary">{experience.subtitle}</p>
  </div>
)

const ExperienceDescription = ({ experience }: { experience: TimelineModule }) => (
  <div className="mb-16">
    <Heading level={3} className="-mt-2 mb-2">
      {experience.position}
    </Heading>
    <p>{experience.default}</p>
  </div>
)
