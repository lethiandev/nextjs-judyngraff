import requireTimeline from './timeline/index'

export function withTimeline() {
  const orderedTimeline = requireTimeline.keys().sort()
  return orderedTimeline.map(requireTimeline)
}
