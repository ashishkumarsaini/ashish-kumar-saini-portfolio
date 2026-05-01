import { Badge, BadgeSize, BadgeVariant } from "@/components/badge";
import { Button, ButtonSize, ButtonVariant } from "@/components/button";
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
      Button
      <Button size={ButtonSize.xs}>xs</Button>
      <Button size={ButtonSize.sm}>sm</Button>
      <Button size={ButtonSize.base}>base</Button>
      <Button size={ButtonSize.lg}>lg</Button>
      <Button size={ButtonSize.lg} variant={ButtonVariant.primary}>primary</Button>
      <Button size={ButtonSize.lg} variant={ButtonVariant.secondary}>secondary</Button>
      Badge
      <Badge variant={BadgeVariant.primary}>Primary</Badge>
      <Badge variant={BadgeVariant.secondary}>Secondary</Badge>
      <Badge variant={BadgeVariant.primary} size={BadgeSize.sm}>sm</Badge>
      <Badge variant={BadgeVariant.primary} size={BadgeSize.base}>base</Badge>
      <Badge variant={BadgeVariant.primary} size={BadgeSize.lg}>Primary</Badge>
    </div>
  )
}

export default TestPage;