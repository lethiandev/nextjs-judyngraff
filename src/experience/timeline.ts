import requireTimeline from './timeline/index'

export function withTimeline() {
  return requireTimeline.keys().map(requireTimeline)
}
