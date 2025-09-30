import React from 'react'

type flexProps = {
  children: React.ReactNode;
  className?: string;
};

const Flex = ({children, className}:flexProps) => {
  return (
    <div className={`flex justify-between items-center flex-wrap ${className}`}>{children}</div>
  )
}

export default Flex