import React, { useState, useEffect } from 'react'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import { FaChevronUp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Product from '../Product'
import axios from 'axios'
import { HiBars3BottomLeft } from "react-icons/hi2";

const Shop = () => {

  // PRODUCT Part Start 1

const [product, setProduct]=useState(true)

const handleProuduct = ()=>{
  setProduct(!product)
}
  // PRODUCT Part End
  // Color Part Start 

  const [color, setColor]=useState(true)

  const heandleColor = ()=>{
  setColor(!color)
  }
  // Color Part End
  // Size Part Start 

  const [size, setSize]= useState(true)

  const handleSize = ()=>{
    setSize(!size)
  }
  // Size Part End

  // Brands Part Start 

  const [brands, setBrands]=useState(true)

  const handleBrands = ()=>{
    setBrands(!brands)
  }
  // Brands Part End

  // Price Part Start 

  const [price, setPrice]=useState(true)

  const hendlePrice = ()=>{
    setPrice(!price)
  }
  // Price Part End
  const [apProduct, setApProduct]=useState([])
  useEffect(()=>{
    async function allProduct(){
      let data = await axios.get('https://tituvai.github.io/bdApiProducts/products/index.json')
     
      setApProduct(data.data.data);
      
      
    }
    allProduct()
  })

  // Filter Part Start 
    const [filter, setFilter]= useState(false)

    const handleFilter = ()=>{
        setFilter(!filter)
    }
  // Filter Part End

  return (
    <>
    <div className="py-15 lg:py-50 bg-categoriC">
    <Container>
        <Hadding className={'text-center text-6xl text-menuC font-bold'} text={'SHOES'} as={'h3'}/>
     <div className=" pt-10">
      
      <ul className='w-full flex gap-x-10 gap-y-3 items-center justify-center flex-wrap'>
        {
          [
          {name:'#STAYHOME', path: '/'},
          {name:'NEW IN', path: '/'},
          {name:'JACKETS ', path: '/'},
          {name:'HOODIES ', path: '/'},
          {name:'MEN', path: '/'},
          {name:'WOMEN', path: '/'},
          {name:'TROUSERS', path: '/'},
          {name:'ACCESSORIES', path: '/'},
          {name:'SHOES', path: '/'}
        ].map((item, index)=>(
          <Link to={item.path} key={index}><li className='text-base text-menuC font-medium relative group'><span className='w-0 group-hover:w-full h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0'></span>{item.name}</li></Link>
        ))
      }
      </ul>
     </div>
    </Container>
    </div>

    <div className="px-2">
      <Container>

        {/* Mobile Part Filter Start ######################################## */}

        <div className="flex items-center gap-x-3 lg:hidden pt-8">
          <span onClick={handleFilter} className='text-lg text-menuC font-medium'>Filter</span>
          <HiBars3BottomLeft onClick={handleFilter} className='text-xl'/>
        </div>

        { filter && <div className="w-full pt-10 px-5">
          <div className="flex  items-center justify-between">
            <Hadding className={'text-menuC text-lg font-medium'} text={'PRODUCT CATEGORIES'} as={'h4'}/>
            <FaChevronUp onClick={handleProuduct} className='text-menuC'/>
          </div>
        { product && <div className="flex flex-col py-8">
            {
            [
              {name:'Dresses', path:'/'},
              {name:'Sweatshirts', path:'/'},
              {name:'Jackets', path:'/'},
              {name:'Jeans', path:'/'},
              {name:'Men', path:'/'},
              {name:'Shorts', path:'/'},
              {name:'Swimwear', path:'/'},
              {name:'T-Shirts & Tops', path:'/'},
              {name:'Trousers', path:'/'},
              {name:'Jumpers & Cardigans', path:'/'}
            ].map((item, index)=>(
              <Link to={item.path} key={index} className='text-menuC text-base leading-8'>{item.name}</Link>
            ))
          }
        </div>}
        {/* color Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'COLOR'} as={'h4'}/>
          <FaChevronUp onClick={heandleColor} className='text-menuC'/>
        </div>
        {color && <div className="w-[70%] flex items-center gap-x-8 flex-wrap py-8 gap-y-8">
            <div className='w-[20px] h-[20px] bg-[#0A2472] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D7BB4F] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#282828] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#B1D6E8] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#9C7539] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D29B48] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#E6AE95] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#BABABA] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D76B67] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#BFDCC4] rounded-full'></div>
        </div>}
        {/* color Part End */}

        
        {/* Size Part Start  */}

            <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'SIZES'} as={'h4'}/>
          <FaChevronUp onClick={handleSize} className='text-menuC'/>
        </div>
        {size && <div className="w-[90%] flex gap-8 flex-wrap py-8">
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>XS</span>
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>S</span>
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>M</span>
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>L</span>
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>XL</span>
          <span className='text-menuC py-2 px-5 text-sm  border-2 border-[#E4E4E4] font-medium'>XXL</span>
        </div>}
        {/* Size Part End */}

        {/* Brends Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'BRANDS'} as={'h4'}/>
          <FaChevronUp onClick={handleBrands} className='text-menuC'/>
        </div>
        {brands && <div className="pb-8">
          <div className="relative my-3">
            <input className='w-full bg-stone-100 p-3 outline-0 placeholder:text-base placeholder:text-deleteC ' type="text" placeholder='Search'/>
            <IoIosSearch className='absolute top-1/2 -translate-y-1/2 right-2 w-[30px] h-[20px] cursor-pointer'/>
          </div>
          <Flex>
            <div className="">
                  <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Adidas'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Balmain'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Balenciaga'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Burberry'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Kenzo'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Givenchy'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Zara'} as={'h4'}/>
            </div>
            </div>
            <div className="text-end">
              <Hadding className={'text-base text-deleteC leading-10'} text={'2'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'7'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'10'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'39'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'95'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'1092'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'48'} as={'h5'}/>
            </div>
          </Flex>
        </div>}

        {/* Brends Part End */}
        {/* Price Ring Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'PRICE'} as={'h4'}/>
          <FaChevronUp onClick={hendlePrice} className='text-menuC'/>
        </div>
        {price && <div className="py-8">
          <div className="ml-4 w-[90%] h-[7px] bg-black rounded-full relative">
            <div className=" w-[20px] h-[20px] rounded-full border-2 border-menuC absolute -left-4 top-1/2 -translate-y-1/2 "></div>
            <div className="w-[20px] h-[20px] rounded-full border-2 border-menuC absolute right-20 top-1/2 -translate-y-1/2" ></div>
          </div>
          <div className="flex items-center justify-between pt-5">
            <Hadding className={'text-base text-deleteC'} text={<><span>Min Price:</span><span className='text-menuC pl-2'>$29</span></>} as={'p'}/>
            <Hadding className={'text-base text-deleteC'} text={<><span>Min Price:</span><span className='text-menuC pl-2'>$937</span></>} as={'p'}/>
          </div>
        </div>}
        {/* Price Ring Part End */}
        </div>}


        {/* Mobile Part Start Filter ##################################### */}


        <div className='flex justify-between'>
         <div className="hidden lg:block w-[30%] pt-10">
          <div className="flex  items-center justify-between">
            <Hadding className={'text-menuC text-lg font-medium'} text={'PRODUCT CATEGORIES'} as={'h4'}/>
            <FaChevronUp onClick={handleProuduct} className='text-menuC'/>
          </div>
        { product && <div className="flex flex-col py-8">
            {
            [
              {name:'Dresses', path:'/'},
              {name:'Sweatshirts', path:'/'},
              {name:'Jackets', path:'/'},
              {name:'Jeans', path:'/'},
              {name:'Men', path:'/'},
              {name:'Shorts', path:'/'},
              {name:'Swimwear', path:'/'},
              {name:'T-Shirts & Tops', path:'/'},
              {name:'Trousers', path:'/'},
              {name:'Jumpers & Cardigans', path:'/'}
            ].map((item, index)=>(
              <Link to={item.path} key={index} className='text-menuC text-base leading-8'>{item.name}</Link>
            ))
          }
        </div>}
        {/* color Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'COLOR'} as={'h4'}/>
          <FaChevronUp onClick={heandleColor} className='text-menuC'/>
        </div>
        {color && <div className="w-[70%] flex items-center gap-x-8 flex-wrap py-8 gap-y-8">
            <div className='w-[20px] h-[20px] bg-[#0A2472] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D7BB4F] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#282828] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#B1D6E8] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#9C7539] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D29B48] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#E6AE95] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#BABABA] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#D76B67] rounded-full'></div>
            <div className='w-[20px] h-[20px] bg-[#BFDCC4] rounded-full'></div>
        </div>}
        {/* color Part End */}

        
        {/* Size Part Start  */}

            <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'SIZES'} as={'h4'}/>
          <FaChevronUp onClick={handleSize} className='text-menuC'/>
        </div>
        {size && <div className="w-[90%] flex gap-8 flex-wrap py-8">
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>XS</span>
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>S</span>
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>M</span>
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>L</span>
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>XL</span>
          <span className='text-menuC py-2 px-6 text-base  border-2 border-[#E4E4E4] font-medium'>XXL</span>
        </div>}
        {/* Size Part End */}

        {/* Brends Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'BRANDS'} as={'h4'}/>
          <FaChevronUp onClick={handleBrands} className='text-menuC'/>
        </div>
        {brands && <div className="pb-8">
          <div className="relative my-3">
            <input className='w-full bg-stone-100 p-3 outline-0 placeholder:text-base placeholder:text-deleteC ' type="text" placeholder='Search'/>
            <IoIosSearch className='absolute top-1/2 -translate-y-1/2 right-2 w-[30px] h-[20px] cursor-pointer'/>
          </div>
          <Flex>
            <div className="">
                  <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Adidas'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Balmain'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Balenciaga'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Burberry'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Kenzo'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Givenchy'} as={'h4'}/>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-[20px] h-[20px] border-2 border-footerBg"></div>
              <Hadding className='text-base text-menuC leading-10' text={'Zara'} as={'h4'}/>
            </div>
            </div>
            <div className="text-end">
              <Hadding className={'text-base text-deleteC leading-10'} text={'2'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'7'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'10'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'39'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'95'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'1092'} as={'h5'}/>
              <Hadding className={'text-base text-deleteC leading-10'} text={'48'} as={'h5'}/>
            </div>
          </Flex>
        </div>}

        {/* Brends Part End */}
        {/* Price Ring Part Start  */}

        <div className="flex  items-center justify-between">
          <Hadding className={'text-menuC text-lg font-medium'} text={'PRICE'} as={'h4'}/>
          <FaChevronUp onClick={hendlePrice} className='text-menuC'/>
        </div>
        {price && <div className="py-8">
          <div className="ml-4 w-[90%] h-[7px] bg-black rounded-full relative">
            <div className=" w-[20px] h-[20px] rounded-full border-2 border-menuC absolute -left-4 top-1/2 -translate-y-1/2 "></div>
            <div className="w-[20px] h-[20px] rounded-full border-2 border-menuC absolute right-20 top-1/2 -translate-y-1/2" ></div>
          </div>
          <div className="flex items-center justify-between pt-5">
            <Hadding className={'text-base text-deleteC'} text={<><span>Min Price:</span><span className='text-menuC pl-2'>$29</span></>} as={'p'}/>
            <Hadding className={'text-base text-deleteC'} text={<><span>Min Price:</span><span className='text-menuC pl-2'>$937</span></>} as={'p'}/>
          </div>
        </div>}
        {/* Price Ring Part End */}
        </div>
          <div className="lg:w-[65%]">
            <div className="lg:flex items-center justify-between py-10">
              <div className="hidden lg:block">
                <span className='text-lg text-menuC font-medium uppercase'><Link to={'/'}>Home</Link></span>
                <span className='text-lg text-menuC font-medium px-1'>/</span>
                <span className='text-lg text-menuC font-medium uppercase'> <Link to={'/'}>The Shop</Link></span>
              </div>
              <div className="flex items-center gap-x-10">
                  <Hadding className={'text-sm text-menuC font-medium leading-6 border-b-2 border-menuC'} text={'DEFAULT SORTING'} as={'h4'}/>
                  <div className="flex items-center gap-x-5">
                    <Hadding className={'text-sm text-menuC font-medium leading-6 uppercase'} text={'view'} as={'h5'}/>
                    <Link className='text-base text-menuC font-medium '>1</Link>
                    <Link className='text-base text-menuC font-medium '>2</Link>
                    <Link className='text-base text-menuC font-medium '>3</Link>
                  </div>
              </div>
            </div>
              <div className="pb-10">
              <Flex className={'flex-wrap gap-y-5'}>
                {apProduct.map((item)=>(
                    <div className="w-[48%] lg:w-[32%]"><Product productTitle={item.title} productSrc={item.image} productPrice={item.price}/></div>
                )) }
              </Flex>
              </div>
             
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Shop
                                            