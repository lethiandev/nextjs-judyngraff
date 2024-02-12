import ExperienceBox from './ExperienceBox'
import { Experience } from './experience'

export type ExperienceCompanyProps = {
  experience: Experience
}

const ExperienceCompany = ({ experience }: ExperienceCompanyProps) => (
  <ExperienceBox heading={experience.companyName}>
    <p className="font-semibold text-primary">
      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
    </p>
  </ExperienceBox>
)

export default ExperienceCompany

const formatDate = (date: string | undefined) =>
  date ? new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' }) : 'Present'
