import React from 'react'
import Image from '/src/components/Image'
import Flex from '/src/components/Flex'
import { CiHeart } from "react-icons/ci";
import Hadding from './Hadding'
import { useDispatch } from 'react-redux';
import { addCart } from '../features/addCart/addToCartSlice';
import { Link } from 'react-router-dom';
import { details } from '../features/details/detalisSlice';
import { addWish } from '../features/addCart/wishSlice';
import { IoHeart } from "react-icons/io5";


const Product = ({productSrc, productAlt, productPrice, productDelete, productTitle, opacitySrc, opacityAlt, imgClear}) => {

  const dispatch = useDispatch()

  const AddToHandle = ()=>{
    dispatch(addCart({
      image : productSrc,
      title : productTitle,
      price : productPrice, 
      quantity : 1
    }))
    
  }


  // Detalis Part Start 

  const handleDetalis = ()=>{
    dispatch(details({
      image : productSrc,
      title : productTitle,
      price : productPrice, 
      quantity : 1
    }))
  }

  // Add To Wish Part 

  const handleWish = ()=>{
    dispatch(addWish({
       image : productSrc,
      title : productTitle,
      price : productPrice, 
      quantity : 1
    }))
  }
  return (
    <>
        <div className="relative group">
            <div className="w-full lg:h-[400px] relative group" onClick={handleDetalis}>
              <Link to={'/shopDetiles'}> <Image className={'w-full h-[200px] lg:h-[400px]'} imgSrc={productSrc} imgAlt={productAlt}/>
             
              <Image className={'w-full lg:h-[400px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300'} imgSrc={opacitySrc} imgAlt={opacityAlt}/>
              </Link>
            </div>
            <Flex className={'py-3'}>
                <Hadding className={'text-sm text-deleteC'} text={'Dresses'} as={'h6'}/>
                <CiHeart onClick={handleWish} className='text-deleteC'/> 
            </Flex>
            <Hadding className={'text-base text-menuC'} text={productTitle} as={'h4'}/>
            <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100  p-2">{imgClear}</div>
            <div className="flex items-center gap-x-2 py-2">
                <Hadding className={'text-base text-menuC'} text={productPrice} as={'h4'}/>
                <span className='text-base text-deleteC'><del>{productDelete}</del></span>
                
            </div>
          <button onClick={AddToHandle} className='text-base text-menuC font-semibold py-4 cursor-pointer  lg:w-[270px] bg-white text-center hover:bg-borderC absolute left-1/2 -translate-x-1/2 bottom-30 opacity-0 translate-y-4 transition-all group-hover:translate-y-0  group-hover:opacity-100 duration-700'>ADD TO CARD</button>
        </div>
    </>
  )
}

export default Product