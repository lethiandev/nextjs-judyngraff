'use client'

import ExperienceTimeline from './ExperienceTimeline'
import { withTimeline } from './timeline'

export default function Experience() {
  const experience = withTimeline()
  return <ExperienceTimeline experience={experience} />
}
