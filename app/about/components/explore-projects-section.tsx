import { Button, ButtonSizes } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const ExploreProjectsSection = () => {
  return (
    <div className="grid grid-cols-12 gap-10 pt-20 lg:pt-30">
      <div className="col-span-12 lg:col-span-6 flex flex-row lg:flex-col gap-10">
        <div>
          <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
            5<span className="text-muted-foreground">+</span>
          </p>
          <p>years of experience</p>
        </div>
        <div>
          <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
            6<span className="text-muted-foreground">+</span>
          </p>
          <p>projects worked on</p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <p className="text-[20px]">
          I believe great products are built at the intersection of engineering and user experience. That’s why I focus on writing maintainable code, optimizing performance, and solving real-world problems with practical, scalable solutions.
        </p>
        <p className="text-[20px] mt-7">
          Currently, I’m exploring advanced frontend patterns, system design, and performance engineering to build even more efficient and resilient applications.
        </p>
        <div className="mt-7">
          <Link href='/projects'>
            <Button size={ButtonSizes.XLARGE} className="text-[18px]">
              {`Explore Projects`}
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}