import { Text, TextSize, TextType } from "@/components/typography"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FC } from "react"

export const NavigationMenu: FC<{ isOpened: boolean, onToggle: () => void }> = ({ isOpened, onToggle }) => {
  return (
    <div className={cn("fixed top-0 bottom-0 right-0 p-5 py-25 translate-x-[260px] transition-all duration-300", { "translate-x-0": isOpened })}>
      <div className="h-full text-secondary flex items-center justify-center">
        <nav>
          <ul className="flex flex-col items-end gap-10">
            <li>
              <Link href="/" onClick={onToggle}>
                <Text>
                  <Text type={TextType.span} size={TextSize.xl} className="font-bold">Home.</Text>
                  <Text type={TextType.span} size={TextSize.xs} className="font-bold text-muted-foreground">(01)</Text>
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={onToggle}>
                <Text>
                  <Text type={TextType.span} size={TextSize.xl} className="font-bold">About Me.</Text>
                  <Text type={TextType.span} size={TextSize.xs} className="font-bold text-muted-foreground">(02)</Text>
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/skills-and-projects" onClick={onToggle}>
                <Text>
                  <Text type={TextType.span} size={TextSize.xl} className="font-bold">Skills & Projects</Text>
                  <Text type={TextType.span} size={TextSize.xs} className="font-bold text-muted-foreground">(03)</Text>
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={onToggle}>
                <Text>
                  <Text type={TextType.span} size={TextSize.xl} className="font-bold">Blogs.</Text>
                  <Text type={TextType.span} size={TextSize.xs} className="font-bold text-muted-foreground">(04)</Text>
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onToggle}>
                <Text>
                  <Text type={TextType.span} size={TextSize.xl} className="font-bold">Contact.</Text>
                  <Text type={TextType.span} size={TextSize.xs} className="font-bold text-muted-foreground">(05)</Text>
                </Text>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}