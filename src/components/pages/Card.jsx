import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Peragrap from '../Peragrap'
import Flex from '../Flex'
import Image from '../Image'
import cart from '/src/assets/cart.png'
import cartOne from '/src/assets/cart1.png'
import cartTwo from '/src/assets/cart2.png'
import { MdOutlineClear } from "react-icons/md";
import Button from '../Button'
import SubMitBtn from '../SubMitBtn'
const Card = () => {
  return (
    <>
    <div className="">
        <Container>
            <Hadding className={'text-[35px] text-menuC font-bold py-10'} text={'CART'} as={'h3'}/>

            <div className=" pb-20">
            <Hadding className={'text-lg text-menuC font-medium'} text={'SHOPPING BAG'} as={'h6'}/>
            <Peragrap className={'text-deleteC'} peraText={'Manage Your Items List'}/>
            </div>

            {/* Add To cart Part ##################################### */}
            <div className="flex justify-between pb-30">
                <div className="w-[65%]">
                <Flex className={'pb-3  border-b-2 border-categoriC'}>
                    <Hadding className={'w-[50%] text-base text-menuC font-medium leading-6'} text={'PRODUCT'} as={'h4'}/>
                    <Hadding className={'w-[12%] text-base text-menuC font-medium leading-6'} text={'PRICE'} as={'h4'}/>
                    <Hadding className={'w-[20%] text-base text-menuC font-medium leading-6'} text={'QUANTITY'} as={'h4'}/>
                    <Hadding className={'w-[18%] text-base text-menuC font-medium leading-6'} text={'SUBTOTAL'} as={'h4'}/>
                </Flex>
                <Flex className={'border-b-2 border-categoriC py-5'}>
                    <div className="w-[50%] flex items-center gap-x-4">
                        <Image imgSrc={cart} imgAlt={'cart.png'}/>
                        <div className="">
                        <Hadding className={'text-base text-menuC font-medium'} text={'Zessi Dresses'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'yellow'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'xl'} as={'h6'}/>
                        </div>
                    </div>
                    <div className="w-[12%]">
                        <Hadding className={'text-base text-deleteC font-medium'} text={'$99'} as={'h5'}/>
                    </div>
                    <div className="w-[20%]">
                        <div className="w-[120px] p-3 border-2 border-categoriC flex items-center justify-between">
                            <span className='text-2xl text-deleteC font-medium'>-</span>
                            <span className='text-base text-deleteC font-medium'>3</span>
                            <span className='text-base text-deleteC font-medium'>+</span>
                        </div>
                    </div>
                    <div className="w-[13%]">
                        <Hadding className={'text-base text-menuC font-medium'} text={'$399'} as={'h4'}/>
                    </div>
                    <div className="w-[3%]">
                       <MdOutlineClear className='text-lg text-deleteC'/> 
                    </div>
                </Flex>
                <Flex className={'border-b-2 border-categoriC py-5'}>
                    <div className="w-[50%] flex items-center gap-x-4">
                        <Image imgSrc={cartOne} imgAlt={'cart1.png'}/>
                        <div className="">
                        <Hadding className={'text-base text-menuC font-medium'} text={'Kirby T-Shirt'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'black'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'m'} as={'h6'}/>
                        </div>
                    </div>
                    <div className="w-[12%]">
                        <Hadding className={'text-base text-deleteC font-medium'} text={'$79'} as={'h5'}/>
                    </div>
                    <div className="w-[20%]">
                        <div className="w-[120px] p-3 border-2 border-categoriC flex items-center justify-between">
                            <span className='text-2xl text-deleteC font-medium'>-</span>
                            <span className='text-base text-deleteC font-medium'>4</span>
                            <span className='text-base text-deleteC font-medium'>+</span>
                        </div>
                    </div>
                    <div className="w-[13%]">
                        <Hadding className={'text-base text-menuC font-medium'} text={'$279'} as={'h4'}/>
                    </div>
                    <div className="w-[3%]">
                       <MdOutlineClear className='text-lg text-deleteC'/> 
                    </div>
                </Flex>
                <Flex className={'border-b-2 border-categoriC py-5'}>
                    <div className="w-[50%] flex items-center gap-x-4">
                        <Image imgSrc={cartTwo} imgAlt={'cart2.png'}/>
                        <div className="">
                        <Hadding className={'text-base text-menuC font-medium'} text={'Cableknit Shawl'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'red'} as={'h6'}/>
                        <Hadding className={'text-base text-deleteC'} text={'xxl'} as={'h6'}/>
                        </div>
                    </div>
                    <div className="w-[12%]">
                        <Hadding className={'text-base text-deleteC font-medium'} text={'$87'} as={'h5'}/>
                    </div>
                    <div className="w-[20%]">
                        <div className="w-[120px] p-3 border-2 border-categoriC flex items-center justify-between">
                            <span className='text-2xl text-deleteC font-medium'>-</span>
                            <span className='text-base text-deleteC font-medium'>3</span>
                            <span className='text-base text-deleteC font-medium'>+</span>
                        </div>
                    </div>
                    <div className="w-[13%]">
                        <Hadding className={'text-base text-menuC font-medium'} text={'$268'} as={'h4'}/>
                    </div>
                    <div className="w-[3%]">
                       <MdOutlineClear className='text-lg text-deleteC'/> 
                    </div>
                </Flex>
                <Flex className={'py-10'}>
                    <div className="w-[400px] relative border border-categoriC">
                        <input className=' p-4 placeholder:text-base placeholder:text-deleteC outline-0 ' type="text" placeholder='Coupon Code' />
                        <span className='text-base text-menuC font-medium absolute right-5 top-1/2 -translate-y-1/2'>APPLY COUPON</span>
                    </div>
                    <div className="">
                        <button className='text-base text-menuC px-7 py-4 bg-footerBg cursor-pointer'>UPDATE CART</button>
                    </div>
                </Flex>
            </div>

            {/* Cart Part totals****************************************** */}
            <div className="w-[30%] ">
            <div className="p-7 border-2 border-menuC">
                    <Hadding className={'text-lg text-menuC font-medium'} text={'CART TOTALS'} as={'h3'}/>
                <div className="flex items-center justify-between border-b-2 border-categoriC pb-3">
                    <Hadding className={'text-base text-menuC font-medium'}  text={'SUBTOTAL'} as={'h4'}/>
                    <Hadding className={'text-base text-menuC font-medium'} text={'$1300'} as={'h4'}/>
                </div>
                <div className="flex justify-between pt-3">
                    <Hadding className={'text-base text-menuC font-medium'} text={'SHIPPING'} as={'h4'}/>
                    <div className="">
                        <div className="flex items-center gap-x-3 pb-3">
                            <div className="w-[15px] h-[15px] border-2 border-categoriC"></div>
                            <Hadding className={'text-base text-menuC'} text={'Free shipping'} as={'h6'}/>
                        </div>
                        <div className="flex items-center gap-x-3 pb-3">
                            <div className="w-[15px] h-[15px] border-2 border-categoriC"></div>
                            <Hadding className={'text-base text-menuC'} text={'Flat rate: $49'} as={'h6'}/>
                        </div>
                        <div className="flex items-center gap-x-3 pb-3">
                            <div className="w-[15px] h-[15px] border-2 border-categoriC"></div>
                            <Hadding className={'text-base text-menuC'} text={'Local pickup: $8'} as={'h6'}/>
                        </div>
                        
                        <Hadding className={'text-base text-menuC pb-3'} text={'Shipping to AL.'} as={'h6'}/>
                        <Button btnText={'CHANGE ADDRESS'}/>
                       
                    </div>
                </div>
                 <div className="flex items-center justify-between py-2 border-t-2 border-categoriC mt-5">
                    <Hadding className={'text-base text-menuC font-medium'} text={'VAT'} as={'h6'}/>
                    <Hadding className={'w-[40%] text-base text-menuC font-medium'} text={'$19'} as={'h6'}/>          
                </div>
                 <div className="flex items-center justify-between py-2 border-t-2 border-categoriC mt-5">
                    <Hadding className={'text-base text-menuC font-medium'} text={'TOTAL'} as={'h6'}/>
                    <Hadding className={'w-[40%] text-base text-menuC font-medium'} text={'$1319'} as={'h6'}/>          
                </div>
            </div>
                <div className="pt-5">
                <SubMitBtn className={'w-full'} submit={'PROCEED TO CHECKOUT'}/>
            </div>
            </div>
            </div>
            
        </Container>
    </div>
    </>
  )
}

export default Card