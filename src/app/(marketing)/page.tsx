import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local"
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils";
import Image from "next/image"
import MarketingCard from "@/components/MarketingCard";

const headingFont = localFont({
  src: '@/../../../../public/fonts/font.woff2',
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
})

export default function MarketingPage() {
  return (
    <div className="flex flex-col gap-24 w-full items-center">
      <div className="mt-10 flex flex-col items-center gap-5">
        {/* <Image src="/logo.svg" width={30} height={30} alt="Logo" /> */}
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", headingFont.className)}>
          <span className="text-blue-700">ClassPlanner</span> Pro
        </h1>
        <div className=
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        >
          Unlocking Efficiency, Empowering Education: Seamlessly Craft and Manage Your School Schedules with Ease
        </div>

        <div className="flex gap-4 mt-5 justify-around w-max">
          <Button variant={"primary"} asChild>
            <Link href="/generate">
          Generate
          </Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link href="https://github.com/Jay-Karia/ClassPlanner-Pro" target="_blank">
          GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Illustrations */}
      <div className="w-max p-5 flex justify-center flex-wrap gap-14 items-center border-2">
        <MarketingCard text="1. Add Teachers" imageFileName="createSchool.png"/>
        <MarketingCard text="2. Add Subjects" imageFileName="createSchool.png"/>
        <MarketingCard text="3. Generate" imageFileName="createSchool.png"/>
      </div>
    </div>
  );
} 