'use client'

import { signOut, auth } from "@/../auth";
import { Button } from "@/components/ui/button";

import { usePathname, useSearchParams } from 'next/navigation'
import {useEffect} from 'react'

export default function DashboardPage() {

    // rendering the content depending on the URL
    const pathname = usePathname()
    const searchParams = useSearchParams()

    

    useEffect(()=> {
    }, [pathname, searchParams])

    return (
        <div className="flex flex-col w-full">
            {/* Main Content */}
            
        </div>
    );
}