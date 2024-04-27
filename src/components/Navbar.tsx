import Link from "next/link"
import Logo from "./Logo"
import { Button } from "./ui/button"
import { signOut, auth } from "@/../auth"
import Image from "next/image"

const Navbar = async () => {

    const session = await auth()

    return (
        <div className="flex min-h-14 items-center px-5 justify-between border-b-2">
            <div className="flex gap-5">
                <Logo />
            </div>
            <div>
                {session?.user ? (
                    <div className="flex items-center justify-between">
                    <form
                              action={async () => {
                                  "use server"
                                  await signOut()
                              }}
                          >
                              <Button variant={"secondary"} className="sm:block hidden" type="submit">Log out</Button>
                              <Button variant={"secondary"} className="sm:hidden block" size={"sm"} type="submit">Log out</Button>
                          </form>
                          {session?.user?.image && 
                            <Image height={25} width={25} src={session.user.image} alt="profile" className="rounded-full"/>
                          }
                    </div>
                ) : (
                    <Button asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                )}

            </div>
        </div>
    )
}

export default Navbar