import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode;
}

export default function DashboardLayout ({children} : DashboardLayoutProps) {
    return (
        <div>
            Dashboard layout
            {children}
        </div>
    )
}