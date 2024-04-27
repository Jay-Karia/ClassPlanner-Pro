import Link from "next/link"
import { Button } from "./ui/button"
import { signOut, auth } from "@/../auth";
import Image from "next/image"

const Sidebar = async () => {

  const session = await auth()

  return (
    <div className="md:border-r p-5 flex flex-col gap-5 justify-between w-full md:w-[350px] md:h-full border-b-2">
      <div className="flex md:flex-col gap-5 flex-row justify-center flex-wrap w-full">

      <Button asChild variant={"special"}>
        <Link href="/generate">
          Generate
        </Link>
      </Button>
      <Button asChild variant={"special"}>
        <Link href="/tables">
          All Tables
        </Link>
      </Button>

      <Button asChild variant={"special"}>
        <Link href="/teachers">
          All Teachers
        </Link>
      </Button>
      </div>
    </div>
  )
}

export default Sidebar