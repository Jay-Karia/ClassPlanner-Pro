import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const headingFont = localFont({
    src: '@/../../../public/fonts/font.woff2',
})

const Logo = () => {
    return (
        <Link href="/">
            <div className="flex gap-3 h-max hover:opacity-75 transition">
                <Image src="/logo.svg" width={30} height={30} alt="Logo" />
                <h4 className={cn("scroll-m-20 sm:text-lg text-md font-medium tracking-tight", headingFont.className)}>
                    ClassPlanner Pro
                </h4>
            </div>
        </Link>
    )
}

export default Logo