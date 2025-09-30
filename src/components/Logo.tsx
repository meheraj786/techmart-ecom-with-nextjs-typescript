import React from 'react'

interface LogoType{
  className?: string
}

const Logo = ({className}:LogoType) => {
  return (
    <div className={`${className}`}>Logo</div>
  )
}

export default Logo