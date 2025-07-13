import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import footerLogo from '/src/assets/logo.png'
import Peragrap from '../Peragrap'
import Hadding from '../Hadding'
import { FaFacebookF, FaTwitter,FaInstagram, FaYoutube  } from "react-icons/fa";
import { Link } from 'react-router-dom'
import visa from '/src/assets/visa.png'

const Footer = () => {
  return (
    <div className="pt-23 pb-6 bg-footerBg">
      <Container>
        <div className={'flex justify-between border-b-2 border-borderC pb-23'}>
            <div className="w-[282px]">
              <Image imgSrc={footerLogo} imgAlt={footerLogo}/>
              <Peragrap className={'py-9'} peraText={'1418 River Drive, Suite 35 Cottonhall, CA 9622 United States'}/>
              <Hadding className={'text-sm text-menuC font-medium leading-6'} text={'sale@uomo.com'} as={'h4'}/>
              <Hadding className={'text-sm text-menuC font-medium leading-6'} text={'+1 246-345-0695'} as={'h4'}/>
              <div className="flex items-center gap-8 pt-7">
                <Link to={'/'}><FaFacebookF className='text-sm text-menuC font-bold'/></Link>
                <Link to={'/'}><FaTwitter className='text-sm text-menuC font-bold' /></Link>
                <Link to={'/'}><FaInstagram  className='text-sm text-menuC font-bold'/></Link>
                <Link to={'/'}><FaYoutube className='text-sm text-menuC font-bold'/></Link> 
              </div> 
            </div>
            <div className="">
              <Hadding className={'text-lg text-menuC font-medium pb-9'} text={'COMPANY'} as={'h3'} />
              <ul>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>About Us</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Careers</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Affiliates</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Blog</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Contact Us</li></Link>                                               
            </ul>
            </div>
            <div className="">
              <Hadding className={'text-lg text-menuC font-medium pb-9'} text={'SHOP'} as={'h3'} />
               <ul>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>New Arrivals</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Accessories</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Men</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Women</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Shop All</li></Link>                                               
            </ul>
            </div>
            <div className="">
              <Hadding className={'text-lg text-menuC font-medium pb-9'} text={'HELP'} as={'h3'} />
               <ul>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Customer Service</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>My Account</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Find a Store</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Legal & Privacy</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Contact</li></Link>
                <Link to={'/'}><li className='text-ms text-menuC  leading-9 group relative'><div className=" w-0 group-hover:w-[30px] h-[2px] bg-menuC transition-all duration-500 absolute bottom-0 left-0"></div>Gift Card</li></Link>                                               
            </ul>
            </div>
            <div className="w-[330px]">
              <Hadding className={'text-lg text-menuC font-medium pb-9'} text={'SUBSCRIBE'} as={'h3'} />
              <Peragrap peraText={'Be the first to get the latest news about trends, promotions, and much more!'}/>
              <div className="relative py-5">
                <input className='w-[330px] p-4 h-[50px] bg-white outline-0 placeholder:text-sm placeholder:text-menuC' type="text" placeholder='Your email address' />
                <button className='text-sm text-menuC font-medium cursor-pointer absolute right-5 top-1/2 -translate-y-1/2'>JOIN</button>
              </div>
              <Hadding className={'text-[15px] text-menuC font-medium py-4'} text={'Secure payments'} as={'h3'} />
              <Image imgSrc={visa} imgAlt={visa}/>
            </div>
        </div>

       <Flex className={'py-5'}>
        <div className="">
          <Peragrap peraText={'©2025 Uomo'}/> 
        </div>
        <div className="flex gap-6">
          <Peragrap peraText={'Language'}/> 
          <Hadding className={'text-sm text-menuC'} text={'United Kingdom  |  English'} as={'h5'}/>
          <Peragrap peraText={'Currency'}/> 
          <Peragrap peraText={'$ USD'}/> 

        </div>
       </Flex>
      </Container>
    </div>
  )
}

export default Footer