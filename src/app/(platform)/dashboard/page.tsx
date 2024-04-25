import { signOut } from "@/../auth";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div>
            This is DashboardPage
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <Button variant={"default"} type="submit">Log out</Button>
            </form>
        </div>
    );
}