import ExperienceBox from './ExperienceBox'
import { Experience } from './experience'

export type ExperienceDescriptionProps = {
  experience: Experience
}

const ExperienceDescription = ({ experience }: ExperienceDescriptionProps) => (
  <ExperienceBox heading={experience.jobTitle}>
    <p className="text-on-background">{experience.jobDescription}</p>
  </ExperienceBox>
)

export default ExperienceDescription
