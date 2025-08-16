import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Peragrap from '../Peragrap'

const MyAcount = () => {
  return (
    <>
    <div className="pb-50">
        <Container>
            <Hadding className={'text-[35px] text-menuC font-bold py-10'} text={'My account'} as={'h3'}/>
            <div className="flex">
                <div className="w-[25%]">
                    <ul className='flex flex-col'>
                        {
                    [
                        {name: 'DASHBOARD', path: '/'},
                        {name: 'ORDERS', path: '/'},
                        {name: 'DOWNLOADS', path: '/'},
                        {name: 'ADDRESSES', path: '/'},
                        {name: 'ACCOUNT DETAILS', path: '/'},
                        {name: 'WISHLIST', path: '/'},
                        {name: 'LOGOUT', path: '/'}
                    ].map((item, index)=>(
                       <Link to={item.path} key={index}><li className={'text-base inline-block text-menuC font-medium leading-12.5 relative group'}><span className='w-0 h-[2px] bg-menuC  group-hover:w-full absolute left-0 bottom-3 transition-all duration-500'></span>{item.name}</li></Link>
                    ))
                    }
                    </ul>
                </div>

                {/* Dasbord Part Start  */}

                <div className=" 70%">
                    <Hadding className={'text-base text-menuC font-normal'} text={<><span>Hello</span> <span className='font-medium'>alitfn58</span> <span>(not</span> <span className='font-medium'>alitfn58?</span> <Link to={'/'}>Log out</Link> <span>)</span></>} as={'h4'}/>
                    <Peragrap className={'pt-5 pr-85'} peraText={<><span>From your account dashboard you can view your</span> <Link to={'/'} className='border-b-1 border-menuC'>recent orders,</Link> <span>manage your</span> <Link to={'/'} className='border-b-1 border-menuC'>shipping and billing addresses,</Link> <span>and</span> <Link to={'/'} className='border-b-1 border-menuC'>edit your password and account details.</Link></>}/>  
                    
                </div>
                   
                {/* Dasbord Part End */}
            </div>
        </Container>
    </div>
    </>
  )
}

export default MyAcount