import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'
import Search from '../../assets/icon/Search'
import User from '../../assets/icon/User'
import { FaRegHeart } from "react-icons/fa";
import Bage from '../../assets/icon/Bage'
import Bars from '../../assets/icon/Bars'
import { MdOutlineClear } from "react-icons/md";
import Hadding from '../Hadding'
import { useDispatch, useSelector } from 'react-redux'
import { MdClear } from "react-icons/md";
import { removewish } from '../../features/addCart/wishSlice'
import { addCart } from '../../features/addCart/addToCartSlice'



const Header = () => {

  // Mobile Part Start 

  const [mobileBars, setMobileBars] =useState(false)

  const handleMobileBars = ()=>{
    setMobileBars(!mobileBars)
  }
  // Mobile Part End

  // menu Part Start 

   const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
    

  // bage Count Part 

  const data = useSelector ((state)=> state.cart.value)

  const totalItem = data.reduce((total, item)=> total+ item.quantity, 0)


  // Product wish Part Start 

  const wishProduct = useSelector((state)=>state.wish.value)
  const dispatch = useDispatch()

  // Add To Cart Wish 

  const handleAddToCart = (productCart)=>{
    dispatch(addCart({title:productCart.title, price:productCart.price, image:productCart.image}))   
}

// wish Hide Show Part 
const [wishHide, setWishHide]= useState(false)
const handleHideShow =()=>{
  setWishHide(!wishHide)
}

// count wish Part 
  const totalWish = wishProduct.reduce((total, item)=> total+ item.quantity, 0)

  return (
    <>
        <div className={`fixed top-0 left-0 w-full py-9  z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0 bg-white' : '-translate-y-full bg-white'}`}>
            <Container>
              <div className="hidden lg:block">
                  <Flex>
                    <div className=" text-menuC flex items-center gap-x-20">
                        <Link to={'/'}><Image imgSrc={logo} imgAlt={'logo.png'}/></Link>

                         <ul className='flex items-center gap-x-10'>
                                  {
                                        [
                                          {name:'HOME', path: '/'},
                                          {name:'SHOP', path: '/shop'},
                                          {name:'BLOG', path: '/blog'},
                                          {name:'LOOKBOOK', path: '/lookbook'},
                                          {name:'CONTACT', path: '/contact'},
                                        ].map((item, index)=>(
                                          <Link to={item.path} key={index}><li className='text-sm text-menuC font-medium leading-7 group relative'><span className='w-0 group-hover:w-full h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0'></span>{item.name}</li></Link>
                                        ))
                                      }                                              
                            </ul>
                    </div>

                    <div className="flex items-center gap-7">
                        <Link to={'/'}><Search/></Link>
                        <Link  to={'/myAcount'}><User/></Link>
                         <div className="relative">
                          <FaRegHeart onClick={handleHideShow} className="cursor-pointer size-5 text-menuC" />
                          <Hadding className={'absolute -top-4 -right-3 text-base font-normal'} text={totalWish} as={'h4'}/>
                           {wishHide && <div className="w-[500px] bg-black rounded py-4 px-5 absolute top-8 right-0">
                            <MdClear onClick={handleHideShow}  className='text-white text-2xl mb-3 cursor-pointer'/>
                            <div className="">
                              <ul className='flex justify-between'>
                                <li className='w-[300px] text-white text-base font-medium font-sans'>Product</li>
                                <li className='w-[200px] text-white text-base font-medium font-sans'>Price</li>
                              </ul>
                            </div>
                            <div className="">
                              <ul>
                                {wishProduct.map((item)=>(
                                  <div className="flex justify-between items-center py-2">
                                    <div className="w-[250px] flex items-center gap-x-2">
                                      <img className='w-15' src={item.image} />
                                      <li className='text-white'>{item.title}</li>
                                    </div>
                                  <li className='text-white'>{item.price}</li>
                                  <button onClick={handleAddToCart} className='text-white cursor-pointer'>Add To Cart</button>
                                  <MdClear onClick={()=>{dispatch(removewish(item.title))}} className='text-white cursor-pointer'/>
                                  </div>
                                ))}
                              </ul>
                            </div>
                          </div>}
                        </div>
                        <div className="relative">
                          <Link to={'/card'}><Bage/></Link>
                          <Hadding className={'text-base font-normal absolute -top-4 -right-2'} text={totalItem} as={'h3'}/>
                        </div>
                        <Link to={'/'}><Bars/></Link>   
                    </div>
                </Flex>
              </div>

                {/* Mobile Phone Device Part Start  */}

              <div className="lg:hidden px-5">
                  <Flex>
                  <div className="">
                    {mobileBars ? <MdOutlineClear onClick={handleMobileBars} className='text-2xl'/> : <span onClick={handleMobileBars}><Bars/></span>}
                     
                  </div>
                  <div className="">
                    <Link to={'/'}><Image imgSrc={logo} imgAlt={'logo.png'}/></Link>                 
                  </div>
                  <div className="">
                   <div className="relative">
                          <Link to={'/card'}><Bage/></Link>
                          <Hadding className={'text-base font-normal absolute -top-3 -right-1'} text={totalItem} as={'h3'}/>
                        </div>
                  </div>
                </Flex>
               
              </div>
                {/* Mobile Phone Device Part End */}
                { mobileBars && <div className="bg-stone-100 p-5 mt-5">
                      <input className='w-full p-2 border-1 border-categoriC outline-0' type="text" placeholder='Search' />
                       <ul className='py-5'>
                                  {
                                        [
                                          {name:'HOME', path: '/'},
                                          {name:'SHOP', path: '/shop'},
                                          {name:'BLOG', path: '/blog'},
                                          {name:'LOOKBOOK', path: '/lookbook'},
                                          {name:'CONTACT', path: '/contact'},
                                        ].map((item, index)=>(
                                          <Link to={item.path} key={index}><li className='text-sm text-menuC font-medium leading-8 group relative'><span className='w-0 group-hover:w-full h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0'></span>{item.name}</li></Link>
                                        ))
                                      }                                              
                            </ul>
                            <div className="flex items-center gap-x-3">
                              <Link to={'/myAcount'}><User/></Link>
                              <div className="">
                                <FaRegHeart  onClick={handleHideShow}/>
                              </div>
                            </div>
                     </div>}
            </Container>
             
        </div>
    </>
  )
}

export default Header