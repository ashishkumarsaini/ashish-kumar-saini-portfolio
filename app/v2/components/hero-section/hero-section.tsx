import { RotateWords } from "./rotate-text"

export const HeroSection = () => {
  return (
    <div>
      <div className="mt-15 md:mt-20 lg:mt-30">
        <p className="text-[25px]">Hello! I’m Ashish.</p>
        <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
          <span>Full-stack developer with a passion for crafting </span>
          <RotateWords words={[
            'digital tools that people enjoy using.',
            'apps that make life a little easier.',
            'simple solutions to complex problems.'
          ]} />
        </p>
        <div className="grid grid-cols-12 mt-15 items-center gap-7">
          <div className="col-span-4 h-px bg-muted-foreground hidden sm:block"></div>
          <div className="col-span-8 max-sm:col-span-12">
            <p className="text-[20px] w-full text-right">
              A passionate full-stack developer with 5+ years of experience building modern, scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}