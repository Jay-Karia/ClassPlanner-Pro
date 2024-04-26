import React from 'react'
import Navbar from "@/components/Navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="w-full h-full bg-slate-50">
      <Navbar />
      {children}
    </div>
  )
}

export default MarketingLayout