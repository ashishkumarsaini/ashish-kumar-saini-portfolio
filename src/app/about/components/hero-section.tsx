import { Heading, HeadingLevel, HeadingSize, Text, TextSize, TextType } from "@/components/typography"

export const AboutHeroSection = () => {
  return (
    <div>
      <Text className="font-bold text-end">
        <Text type={TextType.span} size={TextSize.lg}>
          About&nbsp;
        </Text>
        <Text type={TextType.span} size={TextSize.lg} className="text-muted-foreground">
          Me.
        </Text>
      </Text>
      <div className="bg-cover rounded-lg min-h-[360px] sm:h-100 relative mt-4 overflow-hidden" style={{ backgroundImage: `url('../bg-two.png')` }}>
        <div className="bg-white p-4 rounded-br-lg sm:absolute">
          <Heading size={HeadingSize.xxl} level={HeadingLevel.h1} className="flex flex-col text-4xl leading-none sm:text-6xl">
            Full Stack
            <Text type={TextType.span} size={TextSize.xxxxl} className="text-5xl text-muted-foreground sm:text-8xl">Developer</Text>
          </Heading>
        </div>
        <div className="absolute bottom-0 p-4">
          <Text className="text-white">
            I’m a full-stack developer focused on building fast, scalable, and user-friendly web applications. With 5+ years of experience, I work across the entire product lifecycle—from concept to deployment.
          </Text>
        </div>
      </div>
    </div>
  )
}
