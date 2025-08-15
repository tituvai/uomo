import React from 'react'
import Image from './Image'
import Hadding from './Hadding'
import Button from './Button'

const BlogProduct = ({blogSrc, blogAlt, blogText, blogPera}) => {
  return (
    
    <>
    <div className="">
        <Image className={'w-full'} imgSrc={blogSrc} imgAlt={blogAlt}/>
    <div className="flex gap-x-5 items-center py-3">
        <span className='text-base text-deleteC leading-6'>BY ADMIN</span>
        <span className='text-base text-deleteC leading-6'>APRIL 05, 2020</span>
    </div>
    <Hadding className={'text-xl text-menuC'} text={blogText} as={'h4'}/>
    <Hadding className={'text-base text-menuC leading-7 py-3'} text={blogPera} as={'p'}/>
    <Button btnText={'CONTINUE READING'}/>
    </div>
    </>
  )
}

export default BlogProduct