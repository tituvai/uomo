import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Peragrap from '../Peragrap'
import Flex from '/src/components/Flex'
import SubMitBtn from '/src/components/SubMitBtn'
import Product from '../Product'
import jacket from '/src/assets/jacket.png'
import kriby from '/src/assets/kriby.png'
import clabkiit from '/src/assets/clabkiit.png'
import { MdOutlineClear } from "react-icons/md";

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
                       <Link to={item.path} key={index}><li className={'text-sm inline-block text-menuC font-medium leading-12.5 relative group'}><span className='w-0 h-[2px] bg-menuC  group-hover:w-full absolute left-0 bottom-3 transition-all duration-500'></span>{item.name}</li></Link>
                    ))
                    }
                    </ul>
                </div>

                {/* Dasbord Part Start  */}

                {/* <div className=" 70%">
                    <Hadding className={'text-base text-menuC font-normal'} text={<><span>Hello</span> <span className='font-medium'>alitfn58</span> <span>(not</span> <span className='font-medium'>alitfn58?</span> <Link to={'/'}>Log out</Link> <span>)</span></>} as={'h4'}/>
                    <Peragrap className={'pt-5 pr-85'} peraText={<><span>From your account dashboard you can view your</span> <Link to={'/'} className='border-b-1 border-menuC'>recent orders,</Link> <span>manage your</span> <Link to={'/'} className='border-b-1 border-menuC'>shipping and billing addresses,</Link> <span>and</span> <Link to={'/'} className='border-b-1 border-menuC'>edit your password and account details.</Link></>}/>  
                    
                </div> */}
                   
                {/* Dasbord Part End */}

                {/* Order Part Start  */}

                {/* <div className="w-[70%] border-2 border-categoriC">
                    
                    <div className=" flex justify-between items-center bg-stone-100 p-5">
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'ORDER'} as={'h4'}/>
                        <Hadding className={'w-[20%] text-base text-menuC'} text={'DATE'} as={'h4'}/>
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'STATUS'} as={'h4'}/>
                        <Hadding className={'w-[28%] text-base text-menuC'} text={'TOTAL'} as={'h4'}/>
                        <Hadding className={'w-[18%] text-base text-menuC'} text={'ACTIONS'} as={'h4'}/>

                    </div>
                    <Flex className=" px-5 py-10 border-b-2 border-categoriC">
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'#2418'} as={'h4'}/>
                        <Hadding className={'w-[20%] text-base text-menuC'} text={'October 27, 2020	'} as={'h4'}/>
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'On hold'} as={'h4'}/>
                        <Hadding className={'w-[28%] text-base text-menuC'} text={'$1,200.65 for 3 items'} as={'h4'}/>
                        <div className="w-[16%]">
                            <SubMitBtn className={'px-10'} submit={'VIEW'}/>
                        </div>
                    </Flex>
                    <Flex className=" px-5 py-10 border-b-2 border-categoriC">
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'#2418'} as={'h4'}/>
                        <Hadding className={'w-[20%] text-base text-menuC'} text={'October 27, 2020	'} as={'h4'}/>
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'On hold'} as={'h4'}/>
                        <Hadding className={'w-[28%] text-base text-menuC'} text={'$1,200.65 for 3 items'} as={'h4'}/>
                        <div className="w-[16%]">
                            <SubMitBtn className={'px-10'} submit={'VIEW'}/>
                        </div>
                    </Flex>
                    <Flex className=" px-5 py-10 border-b-2 border-categoriC">
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'#2418'} as={'h4'}/>
                        <Hadding className={'w-[20%] text-base text-menuC'} text={'October 27, 2020	'} as={'h4'}/>
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'On hold'} as={'h4'}/>
                        <Hadding className={'w-[28%] text-base text-menuC'} text={'$1,200.65 for 3 items'} as={'h4'}/>
                        <div className="w-[16%]">
                            <SubMitBtn className={'px-10'} submit={'VIEW'}/>
                        </div>
                    </Flex>
                    <Flex className=" px-5 py-10 border-b-2 border-categoriC">
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'#2418'} as={'h4'}/>
                        <Hadding className={'w-[20%] text-base text-menuC'} text={'October 27, 2020	'} as={'h4'}/>
                        <Hadding className={'w-[16%] text-base text-menuC'} text={'On hold'} as={'h4'}/>
                        <Hadding className={'w-[28%] text-base text-menuC'} text={'$1,200.65 for 3 items'} as={'h4'}/>
                        <div className="w-[16%]">
                            <SubMitBtn className={'px-10'} submit={'VIEW'}/>
                        </div>
                    </Flex>
                </div> */}
                {/* Order Part End */}

                {/* Address Part Start  */}

                {/* <div className="w-[70%]">
                    <Peragrap peraText={"The following addresses will be used on the checkout page by default."}/>
                    <div className="flex justify-between pt-15">
                        <div className="">
                            <Hadding className={'text-lg text-menuC font-medium'} text={'BILLING ADDRESS'} as={'h3'}/>
                            <Peragrap className={'leading-7 pt-5'} peraText={'Daniel Robinson'}/>
                            <Peragrap className={'leading-7'} peraText={'1418 River Drive, Suite 35 Cottonhall, CA 9622'}/>
                            <Peragrap className={'leading-7'} peraText={'United States'}/>
                            <Peragrap className={'pt-10'} peraText={'sale@uomo.com'}/>
                            <Peragrap peraText={'+1 246-345-0695'}/>
                        </div>
                        <div className="">
                            <Hadding className={'text-sm text-menuC font-medium border-b-2 border-menuC'} text={'EDIT'} as={'h3'}/>
                        </div>
                        <div className="">
                            <Hadding className={'text-lg text-menuC font-medium'} text={'BILLING ADDRESS'} as={'h3'}/>
                            <Peragrap className={'leading-7 pt-5'} peraText={'Daniel Robinson'}/>
                            <Peragrap className={'leading-7'} peraText={'1418 River Drive, Suite 35 Cottonhall, CA 9622'}/>
                            <Peragrap className={'leading-7'} peraText={'United States'}/>
                            <Peragrap className={'pt-10'} peraText={'sale@uomo.com'}/>
                            <Peragrap peraText={'+1 246-345-0695'}/>
                        </div>
                        <div className="">
                            <Hadding className={'text-sm text-menuC font-medium border-b-2 border-menuC'} text={'EDIT'} as={'h3'}/>
                        </div>
                    </div>
                </div> */}
                {/* Address Part End */}

                {/* Acount Details Part Start  */}
                {/* <div className="w-[70%]">
                    <form>
                        <div className="flex justify-between">
                            <input className='w-[48%] text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC' type="text" placeholder='First Name' />
                            <input className='w-[48%] text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC' type="text" placeholder='Last Name' />
                        </div>
                            <input className='w-full text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC mt-5' type="text" placeholder='Display Name' />
                            <input className='w-full text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC mt-5' type="text" placeholder='Email Address' />
                            <div className="pt-5"><label className='text-base text-menuC font-medium' htmlFor="#">PASSWORD CHANGE</label></div>
                            <input className='w-full text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC mt-5' type="text" placeholder='Current password (leave blank to leave unchanged) ' />
                            <input className='w-full text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC mt-5' type="text" placeholder='New password (leave blank to leave unchanged) ' />
                            <input className='w-full text-base text-menuC p-5 border-2 border-categoriC placeholder:text-base placeholder:text-deleteC mt-5' type="text" placeholder='New password (Confirm new password ) ' />
                            <SubMitBtn className={'px-13 mt-8'} submit={'SAVE CHANGES'}/>
                    </form>
                </div> */}
                {/* Acount Details Part End */}

                {/* Wishlist Part Start  */}

                <div className="w-[70%]">
                    <Flex>
                        <div className="w-[32%]">
                            <Product productSrc={jacket} productTitle={'Colorful Jacket'} productPrice={'$29'} imgClear={<><MdOutlineClear/></>}/>
                        </div>
                        <div className="w-[32%]">
                            <Product productSrc={kriby} productTitle={'Shirt In Botanical Cheetah Print'} productPrice={'$29'} imgClear={<><MdOutlineClear/></>}/>
                        </div>
                        <div className="w-[32%]">
                            <Product productSrc={clabkiit} productTitle={'Cotton Jersey T-Shirt'} productPrice={'$29'} imgClear={<><MdOutlineClear/></>}/>
                        </div>
                    </Flex>
                </div>
                {/* Wishlist Part End */}
            </div>
        </Container>
    </div>
    </>
  )
}

export default MyAcount