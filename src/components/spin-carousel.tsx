import { FC, ReactNode } from "react"

type SpinCarouselProps = {
  items: unknown[],
  renderContent: (item: unknown) => ReactNode
}

export const SpinCarousel: FC<SpinCarouselProps> = ({ items, renderContent }) => {
  return (
    <>
      <div className="flex items-center justify-center animate-spin">
        {items.map((item, index) => (
          <div key={index} className="p-4">
            {renderContent(item)}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center animate-spin">
        {items.map((item, index) => (
          <div key={index} className="p-4">
            {renderContent(item)}
          </div>
        ))}
      </div>
    </>
  )
}