import React from 'react'

const SubMitBtn = ({submit, className}) => {
  return (
    <button className={`py-4 text-base font-medium bg-menuC text-white cursor-pointer ${className}`}>{submit}</button>
  )
}

export default SubMitBtn