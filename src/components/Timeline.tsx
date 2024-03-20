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
    <article key={index} className="grid grid-cols-[64px_1fr] gap-4 md:grid-cols-[1fr_128px_1fr]">
      <div>{segment.leftContent}</div>
      <div className="-order-1 row-span-2 flex justify-center md:order-none md:row-span-1">
        <TimelineSegment isCurrent={isFirst} isEnd={isLast} />
      </div>
      <div>{segment.rightContent}</div>
    </article>
  )
}
