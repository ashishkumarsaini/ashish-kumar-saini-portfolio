import { Heading, HeadingSize, Text, TextSize } from "@/components/typography";

const TestPage = () => {
  return (
    <div>
      Text
      <Text size={TextSize.xs}>xs</Text>
      <Text size={TextSize.sm}>sm</Text>
      <Text size={TextSize.base}>base</Text>
      <Text size={TextSize.lg}>lg</Text>
      <Text size={TextSize.xl}>xl</Text>
      <Text size={TextSize.xxl}>xxl</Text>
      <Text size={TextSize.xxxl}>xxxl</Text>
      <Text size={TextSize.xxxxl}>xxxxl</Text>
      Heading
      <Heading size={HeadingSize.xs}>xs</Heading>
      <Heading size={HeadingSize.sm}>sm</Heading>
      <Heading size={HeadingSize.base}>sm</Heading>
      <Heading size={HeadingSize.lg}>xs</Heading>
      <Heading size={HeadingSize.xl}>xs</Heading>
      <Heading size={HeadingSize.xxl}>xs</Heading>
      <Heading size={HeadingSize.xxxl}>xs</Heading>
      <Heading size={HeadingSize.xxxxl}>xs</Heading>
      <Heading size={HeadingSize.xs}>xs</Heading>
      <Heading size={HeadingSize.xs}>xs</Heading>
      <Heading size={HeadingSize.xs}>xs</Heading>
    </div>
  )
}

export default TestPage;