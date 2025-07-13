import React from 'react'
import Image from '/src/components/Image'
import Flex from '/src/components/Flex'
import { CiHeart } from "react-icons/ci";
import Hadding from './Hadding'


const Product = ({productSrc, productAlt, productPrice, productDelete, productTitle, opacitySrc, opacityAlt}) => {
  return (
    <>
        <div className="relative group w-[330px]">
            <div className="w-[330px] h-[400px] relative group">
              <Image className={'w-full h-[400px]'} imgSrc={productSrc} imgAlt={productAlt}/>
              <Image className={'w-full h-[400px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300'} imgSrc={opacitySrc} imgAlt={opacityAlt}/>
            </div>
            <Flex className={'py-3'}>
                <Hadding className={'text-sm text-deleteC'} text={'Dresses'} as={'h6'}/>
                <CiHeart className='text-deleteC'/>
            </Flex>
            <Hadding className={'text-base text-menuC'} text={productTitle} as={'h4'}/>
            <div className="flex items-center gap-x-2 py-2">
                <Hadding className={'text-base text-menuC'} text={productPrice} as={'h4'}/>
                <span className='text-base text-deleteC'><del>{productDelete}</del></span>
                
            </div>
            <div className="w-[300px] absolute left-1/5 bottom-1/4 opacity-0 translate-y-4 transition-all group-hover:translate-y-0  group-hover:opacity-100 duration-700">
              <button className='text-base text-menuC font-semibold py-4 px-12 bg-white'>ADD TO CARD</button>
            </div>
        </div>
    </>
  )
}

export default Product