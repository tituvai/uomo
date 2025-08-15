import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btnText, className}) => {
  return (
    <>
    <Link to={'/'}><button className={`text-sm text-menuC font-medium leading-8 cursor-pointer relative group ${className}`}><div className="w-[60%] h-[2px] bg-menuC group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></div>{btnText}</button> </Link>
    </>
  )
}

export default Button