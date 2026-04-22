import { Button, ButtonSizes, ButtonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AboutSection = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-28">
      <h2 className="text-[25px] sm:text-[35px] md:text-[55px] font-semibold">
        About <span className="text-muted-foreground">Me.</span>
      </h2>
      <div className="mt-7 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 aspect-video relative rounded-[10px] overflow-hidden">
          <Image fill src='/about.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="text-[15px] sm:text-[25px] md:text-[35px] font-semibold">
            Building web from concept to <span className="text-muted-foreground">code.</span>
          </h3>
          <p className="text-[22px] mt-5 mb-5">
            Full-stack developer focused on building fast, scalable, and user-centric web applications.
            I specialize in creating seamless digital experiences across the entire stack—from crafting
            intuitive user interfaces to architecting robust backend systems.
          </p>
          <Link href='/about'>
            <Button size={ButtonSizes.XLARGE} className="text-[18px]">
              {`More about me`}
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}