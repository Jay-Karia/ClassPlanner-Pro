import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode;
}

export default function DashboardLayout ({children} : DashboardLayoutProps) {
    return (
        <div className="h-full w-full">
            <Sidebar />
            {children}
        </div>
    )
}