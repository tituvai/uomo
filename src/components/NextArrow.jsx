import React from 'react'
import { LuChevronRight } from "react-icons/lu";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
      <LuChevronRight className='text-5xl text-deleteC cursor-pointer absolute top-1/2 -right-7 -translate-y-1/2' onClick={onClick}/>
  )
}

export default NextArrow