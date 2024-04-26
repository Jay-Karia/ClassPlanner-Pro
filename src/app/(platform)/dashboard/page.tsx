'use client'

import { signOut, auth } from "@/../auth";
import { Button } from "@/components/ui/button";

import { usePathname, useSearchParams } from 'next/navigation'
import {useEffect} from 'react'

import {useStore} from "@/store"

export default function DashboardPage() {

    // rendering the content depending on the URL
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // store
    const bears = useStore((state) => state.bears)
    const increment = useStore((state)=>state.increasePopulation)

    useEffect(()=> {
    }, [pathname, searchParams])

    return (
        <div className="flex flex-col w-full">
            {/* Main Content */}
            {bears}
            <Button onClick={increment}>Add</Button>
        </div>
    );
}