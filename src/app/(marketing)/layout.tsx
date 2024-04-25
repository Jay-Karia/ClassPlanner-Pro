import React from 'react'

type MarketingLayoutProps = {
    children: React.ReactNode;
}

const MarketingLayout = ({children}: MarketingLayoutProps) => {
  return (
    <div>
      Marketing Layout
        {children}
    </div>
  )
}

export default MarketingLayout