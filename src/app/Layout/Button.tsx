import React from 'react'

type buttonType={
  children: React.ReactNode,
  className?: string
}

const Button = ({children, className}:buttonType) => {
  return (
    <button  className={`px-[48px] py-[16px] bg-primary text-white font-body font-medium rounded-[4px] cursor-pointer hover:bg-orange-700 transition-colors duration-150 ${className}`}>{children || "View Products"}</button>
  )
}

export default Button