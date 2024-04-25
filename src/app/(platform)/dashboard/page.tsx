import { signOut, auth } from "@/../auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {

    const session = await auth();

    if (!session.user) return null;

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
            <h1>Session</h1>
            {JSON.stringify(session)}
        </div>
    );
}