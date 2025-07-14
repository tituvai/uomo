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
                    <div className="flex items-center gap-x-13 text-menuC">
                        <Image imgSrc={logo} imgAlt={logo}/>
                        <div className="">
                            <ul className='flex items-center gap-x-10'>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>HOME</li></Link>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>SHOP</li></Link>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[60px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>COLLECTION</li></Link>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[50px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>JOURNAL</li></Link>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[65px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>LOOKBOOK</li></Link>
                               <Link to={'/'}><li className='text-ms text-menuC font-medium leading-7 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>PAGES</li></Link>                                               
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-7">
                        <Link to={'/'}><Search/></Link>
                        <Link to={'/'}><User/></Link>
                        <Link to={'/'}><Heart/></Link>
                        <Link to={'/'}><Bage/></Link>
                        <Link to={'/'}><Bars/></Link>   
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Header