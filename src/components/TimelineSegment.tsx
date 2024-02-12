export type TimelineSegmentProps = {
  isCurrent?: boolean
  isEnd?: boolean
}

const TimelineSegment = ({ isCurrent, isEnd }: TimelineSegmentProps) => (
  <div className="flex flex-col items-center">
    <div className="relative h-8 w-8 rounded-full border-2 border-primary bg-background">
      {isCurrent ? <div className="m-1.5 h-4 w-4 rounded-full bg-primary"></div> : null}
    </div>
    <div className={`w-0.5 flex-grow ${className[isEnd ? 'gradient' : 'solid']}`}></div>
  </div>
)

export default TimelineSegment

const className = {
  gradient: 'bg-gradient-to-b from-primary',
  solid: 'bg-primary',
}
