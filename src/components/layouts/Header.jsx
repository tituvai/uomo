import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'
import Search from '../../assets/icon/Search'
import User from '../../assets/icon/User'
import Heart from '../../assets/icon/Heart'
import Bage from '../../assets/icon/Bage'
import Bars from '../../assets/icon/Bars'
import { MdOutlineClear } from "react-icons/md";


const Header = () => {

  // Mobile Part Start 

  const [mobileBars, setMobileBars] =useState(false)

  const handleMobileBars = ()=>{
    setMobileBars(!mobileBars)
  }
  // Mobile Part End
    
  return (
    <>
        <div className="py-9">
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
                        <Link to={'/'}><User/></Link>
                        <Link to={'/myAcount'}><Heart/></Link>
                        <Link to={'/card'}><Bage/></Link>
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
                    <Link to={'/card'}><Bage/></Link>
                  </div>
                </Flex>
               
              </div>
                {/* Mobile Phone Device Part End */}
            </Container>
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
                              <Link to={'/'}><User/></Link>
                              <Link to={'/myAcount'}><Heart/></Link>
                            </div>
                     </div>}
        </div>
    </>
  )
}

export default Header