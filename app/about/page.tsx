import { Button, ButtonSizes } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutMePage = () => {
  return (
    <div>
      <section className="pt-8 md:pt-10 lg:pt-12">
        <div>
          <p className="text-[25px]">About Me</p>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
                Full-stack <span className="text-muted-foreground">developer</span>
              </p>
              <p className="text-[20px] mt-7">
                I’m a full-stack developer with a strong focus on building modern web applications that are fast, scalable, and user-friendly. Over the past 5+ years, I’ve developed a deep understanding of both frontend and backend systems, allowing me to work across the entire product lifecycle—from concept to deployment.
              </p>
              <div className="mt-7">
                <Link href='/contact'>
                  <Button size={ButtonSizes.XLARGE} className="text-[18px]">
                    {`Let's Connect`}
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 aspect-video relative rounded-[10px] overflow-hidden">
              <Image fill src='/about.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10 pt-20 lg:pt-30">
            <div className="col-span-12 max-lg:order-2 lg:col-span-6 aspect-video relative rounded-[10px] overflow-hidden">
              <Image fill src='/about-2.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-span-12 max-lg:order-1 lg:col-span-6">
              <p className="text-[20px] mt-7">
                My core expertise lies in JavaScript ecosystems, particularly React on the frontend and Node.js on the backend. I enjoy working on complex user interfaces, optimizing performance, and designing APIs that are efficient and easy to maintain.
              </p>
              <p className="text-[20px] mt-7">
                Outside of work, I spend time exploring new technologies, building side projects, and continuously refining my skills. I believe in learning by building and constantly pushing my limits to grow as a developer.
              </p>
              <div className="mt-7">
                <Link href='/skills-and-experience'>
                  <Button size={ButtonSizes.XLARGE} className="text-[18px]">
                    {`Skills and Experiences`}
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10 pt-20 lg:pt-30">
            <div className="col-span-12 lg:col-span-6 flex flex-row lg:flex-col gap-10">
              <div>
                <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
                  5<span className="text-muted-foreground">+</span>
                </p>
                <p>years of experience</p>
              </div>
              <div>
                <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
                  6<span className="text-muted-foreground">+</span>
                </p>
                <p>projects worked on</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[20px]">
                I believe great products are built at the intersection of engineering and user experience. That’s why I focus on writing maintainable code, optimizing performance, and solving real-world problems with practical, scalable solutions.
              </p>
              <p className="text-[20px] mt-7">
                Currently, I’m exploring advanced frontend patterns, system design, and performance engineering to build even more efficient and resilient applications.
              </p>
              <div className="mt-7">
                <Link href='/projects'>
                  <Button size={ButtonSizes.XLARGE} className="text-[18px]">
                    {`Explore Projects`}
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10 pt-20 lg:pt-30">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[35px] md:text-[55px] lg:text-[75px] font-bold leading-[60px] md:leading-[100px]">
                Certifications
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMePage;