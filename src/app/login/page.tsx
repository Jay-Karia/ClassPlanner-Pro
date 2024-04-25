import { Button } from "@/components/ui/button"
import { signIn } from "@/../auth"

const LoginPage = () => {
  return (
    <div>
      LoginPage
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button variant={"default"} type="submit">Signin with Google</Button>
      </form>
    </div>
  )
}

export default LoginPage