export type Experience = {
  companyName: string
  startDate: string
  endDate?: string
  jobTitle: string
  jobDescription: string
}

export const defaultExperience: Experience[] = [
  {
    companyName: 'Freelance Designer',
    startDate: '2021-10-01',
    jobTitle: 'UI/UX Designer',
    jobDescription:
      'As a UI/UX designer, I design intuitive digital interfaces that balance aesthetics and usability, ensuring seamless and engaging user experiences.',
  },
  {
    companyName: 'Beyond Compare Ltd',
    startDate: '2015-12-01',
    endDate: '2021-09-01',
    jobTitle: 'Graphic Designer',
    jobDescription:
      "I translated concepts into visually appealing print materials. My experience resulted in high-quality, print-ready materials that perfectly matched clients' visions and branding.",
  },
]
