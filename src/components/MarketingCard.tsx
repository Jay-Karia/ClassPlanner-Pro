import React from 'react'

type MarketingCardProps = {
    text: string,
    imageFileName: string
}

const MarketingCard = ({text, imageFileName} : MarketingCardProps) => {
  return (
    <div className="w-1/3 flex flex-col items-center justify-center">
        {/* Image */}
      {/* <div className="max-w-[300px] border-2" style={{aspectRatio: 2}}> */}
        {/* </div> */}
        {/* Text */}
        <div className="">
        {text}
            </div>
    </div>
  )
}

export default MarketingCard