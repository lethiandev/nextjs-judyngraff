import Timeline, { TimelineContent } from '@/components/Timeline'
import ExperienceCompany from './ExperienceCompany'
import ExperienceDescription from './ExperienceDescription'
import { Experience, defaultExperience } from './experience'

export type ExperienceTimelineProps = {
  experience?: Experience[]
}

export const ExperienceTimeline = ({ experience = defaultExperience }: ExperienceTimelineProps) => (
  <div className="px-16 py-24 pb-8 text-on-background">
    <h3 className="mb-20 text-5xl font-semibold">
      Education And <span className="text-primary">Experience</span>
    </h3>
    <Timeline>{buildSegmentsFrom(experience)}</Timeline>
  </div>
)

export default ExperienceTimeline

const buildSegmentsFrom = (experience: Experience[]) =>
  experience.map<TimelineContent>(exp => ({
    leftContent: <ExperienceCompany experience={exp} />,
    rightContent: <ExperienceDescription experience={exp} />,
  }))
