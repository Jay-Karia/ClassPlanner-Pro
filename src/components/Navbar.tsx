import Link from "next/link"
import Logo from "./Logo"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div className="flex min-h-14 items-center px-5 justify-between">
            <div className="flex gap-5">
                <Logo />
                <Button asChild variant={"link"}>
                    <Link href="/dashboard">Dashboard</Link>
                </Button>
            </div>
            <div>
                <Button asChild>
                    <Link href="/login">Login</Link>
                </Button>
            </div>
        </div>
    )
}

export default Navbar