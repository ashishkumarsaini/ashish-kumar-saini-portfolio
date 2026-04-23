import Link from "next/link"
import { Text, TextSize } from "../typography"
import { Button, ButtonSize, ButtonVariant } from "../button"
import { ArrowRight } from "lucide-react"

export const FooterContactSection = () => {
  return (
    <div className="px-3 mb-10">
      <div className="bg-primary text-secondary rounded-lg p-5 py-20">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div>
            <Text size={TextSize.xxxl} className="font-bold">
              Got any ideas?
            </Text>
          </div>
          <div>
            <Text size={TextSize.base}>
              Let’s build something impactful.
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