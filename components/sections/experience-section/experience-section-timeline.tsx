import { FC, ReactElement } from "react";

type ExperienceSectionTimelineProps = {
  children: ReactElement[];
}
export const ExperienceSectionTimeline: FC<ExperienceSectionTimelineProps> = ({children: timelineItems}) => {

  return (
    <div className="relative px-8">
      {/* Vertical Line */}
      <div className="absolute top-[25px] left-16 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">

        {timelineItems.map((timelineItem, index)=>(
          <div
            key={index}
            className={`relative flex gap-8`}
          >
            {/* Timeline Dot */}
            <div className="absolute top-[25px] left-6 z-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
            <div
              className="flex-1 ml-16"
            >
              {timelineItem}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}