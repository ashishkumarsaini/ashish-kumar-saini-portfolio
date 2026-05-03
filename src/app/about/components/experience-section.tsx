import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography"

export const ExperiencesSection = () => {
  return (
    <div>
      <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="font-semibold text-center">
        Experiences
      </Heading>

      <div className="max-w-5xl mx-auto space-y-6 mt-10">
        <div className="flex flex-col gap-5 bg-black text-white p-5 border rounded-sm shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="bg-gray-800 px-4 py-2 font-bold">1</div>
            <div>
              <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Software Engineer</Heading>
              <Text size={TextSize.xs}>Destm Technologies, Mohali</Text>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm sm:justify-end">
            <div className="hidden w-px h-8 bg-gray-600 sm:block"></div>
            <Text size={TextSize.xs} className="min-w-[135px]">Mar, 2023 - Current</Text>
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-white p-5 border rounded-sm shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="bg-black text-white px-4 py-2 font-bold">2</div>
            <div>
              <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Jr. Software Engineer</Heading>
              <p className="text-sm text-gray-500">Destm Technologies, Mohali</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 sm:justify-end">
            <div className="hidden w-px h-8 bg-gray-300 sm:block"></div>
            <Text size={TextSize.xs} className="min-w-[135px]">Nov, 2020 - Mar, 2023</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
