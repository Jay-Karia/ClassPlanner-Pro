import React from 'react'

type MarketingCardProps = {
    text: string,
    imageFileName: string
}

const MarketingCard = ({text, imageFileName} : MarketingCardProps) => {
  return (
    <div className="w-1/3">
        {/* Image */}

        {/* Text */}
        <div className="flex items-center justify-center">
        {text}
            </div>
    </div>
  )
}

export default MarketingCard