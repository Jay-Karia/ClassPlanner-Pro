import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-max m-2">
      <Image src="/logo.svg" alt="ClassPlanner Pro" width={40} height={40} />
      ClassPlanner Pro
      <Button variant={"outline"}>Click Me</Button>
    </div>
  );
}
