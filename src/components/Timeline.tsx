import { ReactNode } from 'react'
import TimelineSegment from './TimelineSegment'

export type TimelineProps = {
  children?: TimelineContent[]
}

export type TimelineContent = {
  leftContent: ReactNode
  rightContent: ReactNode
}

const Timeline = ({ children }: TimelineProps) => (
  <div className="flex flex-col">{(children ?? []).map(wrapTimelineContent)}</div>
)

export default Timeline

const wrapTimelineContent = (segment: TimelineContent, index: number, arr: any[]) => {
  const isFirst = index === 0
  const isLast = index === arr.length - 1

  return (
    <article className="grid grid-cols-3 gap-4 md:grid-cols-5">
      <div className="row-span-2 flex justify-center md:row-span-1">
        <TimelineSegment isCurrent={isFirst} isEnd={isLast} />
      </div>
      <div className="col-span-2 md:-order-1">{segment.leftContent}</div>
      <div className="col-span-2">{segment.rightContent}</div>
    </article>
  )
}
