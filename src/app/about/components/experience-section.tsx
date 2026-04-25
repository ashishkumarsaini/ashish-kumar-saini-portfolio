import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography"

export const ExperiencesSection = () => {
  return (
    <div>
      <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="font-semibold text-center">
        Experiences
      </Heading>

      <div className="max-w-5xl mx-auto space-y-6 mt-10">
        <div className="flex items-center justify-between bg-black text-white p-6 border rounded-sm shadow-sm">
          <div className="flex items-center gap-6">
            <div className="bg-gray-800 px-4 py-2 font-bold">1</div>
            <div>
              <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Software Engineer</Heading>
              <Text size={TextSize.xs}>Destm Technologies, Mohali</Text>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="w-px h-8 bg-gray-600"></div>
            <Text size={TextSize.xs} className="min-w-[135px]">Mar, 2023 - Current</Text>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white p-6 border rounded-sm shadow-sm">
          <div className="flex items-center gap-6">
            <div className="bg-black text-white px-4 py-2 font-bold">2</div>
            <div>
              <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Jr. Software Engineer</Heading>
              <p className="text-sm text-gray-500">Destm Technologies, Mohali</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="w-px h-8 bg-gray-300"></div>
            <Text size={TextSize.xs} className="min-w-[135px]">Nov, 2020 - Mar, 2023</Text>
          </div>
        </div>
      </div>
    </div>
  )
}