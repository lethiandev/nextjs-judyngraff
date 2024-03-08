import Timeline, { TimelineContent } from '@/components/Timeline'
import { Experience, defaultExperience } from './experience'
import { formatDate } from './utils'
import Heading from '@/components/Heading'

export const ExperienceTimeline = ({ experience = defaultExperience }) => (
  <Timeline>
    {experience.map<TimelineContent>(exp => ({
      leftContent: <ExperienceCompany experience={exp} />,
      rightContent: <ExperienceDescription experience={exp} />,
    }))}
  </Timeline>
)

const ExperienceCompany = ({ experience }: { experience: Experience }) => (
  <div className="mb-4 md:mb-16">
    <Heading level={3} className="mb-2 md:-mt-2">
      {experience.companyName}
    </Heading>
    <p className="font-semibold text-primary">
      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
    </p>
  </div>
)

const ExperienceDescription = ({ experience }: { experience: Experience }) => (
  <div className="mb-4 md:mb-16">
    <Heading level={3} className="mb-2 md:-mt-2">
      {experience.jobTitle}
    </Heading>
    <p>{experience.jobDescription}</p>
  </div>
)
