import Link from "next/link"
import { Button } from "./ui/button"
import { signOut, auth } from "@/../auth";

const Sidebar = () => {
  return (
    <div className="h-full w-[350px] border-r p-5 flex flex-col gap-5 justify-between">
      <div className="flex flex-col gap-5">

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

      <div>
      <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <Button variant={"secondary"} type="submit">Log out</Button>
            </form>
      </div>
    </div>
  )
}

export default Sidebar