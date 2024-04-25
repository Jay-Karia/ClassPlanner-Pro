import React from 'react'

type LoginLayoutProps = {
    children: React.ReactNode
}

const LoginLayout = ({children} : LoginLayoutProps) => {
  return (
    <div>
        LoginLayout
        {children}
    </div>
  )
}

export default LoginLayout