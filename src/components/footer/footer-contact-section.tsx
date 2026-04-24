import Link from "next/link"
import { Text, TextSize, TextType } from "../typography"
import { Button, ButtonSize, ButtonVariant } from "../button"
import { ArrowRight } from "lucide-react"
// import a from '../../../public/bg-one.png'

export const FooterContactSection = () => {
  return (
    <div className="p-2 md:p-4 mb-5 md:mb-10">
      <div className="text-secondary rounded-lg p-5 py-20" style={{ backgroundImage: `url("../bg-one.png")` }}>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div>
            <Text size={TextSize.base}>
              Got any ideas?
            </Text>
          </div>
          <div>
            <Text size={TextSize.xxxl} className="font-bold text-neutral-400">
              Let’s build something&nbsp;
              <Text type={TextType.span} size={TextSize.xxxl} className="text-secondary">impactful.</Text>
            </Text>
          </div>
          <div>
            <Link href="/contact">
              <Button size={ButtonSize.lg} variant={ButtonVariant.secondary} className="flex items-center gap-2">
                <span>Contact Me</span>
                <ArrowRight size={15} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}