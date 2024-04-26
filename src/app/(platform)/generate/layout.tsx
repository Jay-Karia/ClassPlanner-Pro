import React from 'react'

type GenerateLayoutProps = {
    children: React.ReactNode
}

const GenerateLayout = ({children} : GenerateLayoutProps) => {
  return (
    <div className='h-full w-full'>
        {children}
    </div>
  )
}

export default GenerateLayout