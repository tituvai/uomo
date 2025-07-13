import React from 'react'
import { LuChevronLeft } from "react-icons/lu";

const PrevArrow = (props) => {
    const {onClick } = props;
  return (
    <LuChevronLeft className='text-5xl text-deleteC absolute top-1/2 -left-7 -translate-y-1/2' onClick={onClick}/>
    
  )
}

export default PrevArrow