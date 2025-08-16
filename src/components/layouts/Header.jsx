import React from 'react'
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

const Header = () => {

    
  return (
    <>
        <div className="py-9">
            <Container>
                <Flex>
                    <div className=" text-menuC flex items-center gap-x-20">
                        <Image imgSrc={logo} imgAlt={logo}/>

                         <ul className='flex items-center gap-x-10'>
                                  {
                                        [
                                          {name:'HOME', path: '/'},
                                          {name:'SHOP', path: '/shop'},
                                          {name:'BLOG', path: '/blog'},
                                          {name:'LOOKBOOK', path: '/lookbook'},
                                          {name:'CONTACT', path: '/contact'},
                                        ].map((item, index)=>(
                                          <Link to={item.path} key={index}><li className='text-ms text-menuC font-medium leading-7 group relative'><span className='w-0 group-hover:w-full h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0'></span>{item.name}</li></Link>
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
            </Container>
        </div>
    </>
  )
}

export default Header