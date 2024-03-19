import requireProject from './projects/index'

export function withProjects() {
  return requireProject.keys().map(key => ({
    slug: projectSlugFrom(key)!,
    ...requireProject(key),
  }))
}

export function withProject(slug: string) {
  const projectKey = projectKeyFrom(slug)
  return requireProject(projectKey)
}

// Useful for dynamic props on static mode
export function withProjectSlugs() {
  return requireProject.keys().map(projectSlugFrom)
}

function projectSlugFrom(key: string): string | null {
  return key.match(/\.\/(.+?)\.mdx$/)?.[1] ?? null
}

function projectKeyFrom(slug: string): string {
  return `./${slug}.mdx`
}
