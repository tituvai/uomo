import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Flex from '../Flex'
import Peragrap from '../Peragrap'
import Button from '../Button'
import SubMitBtn from '../SubMitBtn'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
    <div className="">
        <Container>
            <Hadding className={'text-menuC text-[35px] font-bold py-10'} text={'SHIPPING AND CHECKOUT'} as={'h3'}/>

            <div className="flex justify-between pb-40">
                <div className="w-[65%]">
                    <Hadding className={'text-base text-menuC font-medium py-5'} text={'BILLING DETAILS'} as={'h4'}/>

                    <form>
                        <div className="flex justify-between">
                        <input className='w-[48%] border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4' type="text" placeholder='First Name'/>
                        <input className='w-[48%] border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4' type="text" placeholder='Last Name'/>
                        </div>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Company Name (optional)'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Country / Region *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Street Address *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Town / City *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Postcode / ZIP *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Province *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Phone *'/>
                        <input className='w-full border-2 border-categoriC outline-0 text-base text-menuC placeholder:text-base placeholder:text-deleteC p-4 mt-6' type="text" placeholder='Your Mail'/>
                        <Hadding className={'text-base text-menuC flex items-center gap-x-3 pt-5'} text={<><div className='w-[15px] h-[15px] border-2 border-categoriC'></div><span>CREATE AN ACCOUNT?</span></>} as={'h5'}/>
                        <Hadding className={'text-base text-menuC flex items-center gap-x-3 py-5'} text={<><div className='w-[15px] h-[15px] border-2 border-categoriC'></div><span>SHIP TO A DIFFERENT ADDRESS?</span></>} as={'h5'}/>
                        <textarea className='h-[200px] w-full p-5 border-2 border-categoriC outline-0' placeholder='Order Notes (optional)'></textarea>
                    </form>
                </div>
                <div className="w-[30%]">
                    <div className="p-8 border-2 border-menuC">
                            <Hadding className={'text-lg text-menuC font-medium pb-8'} text={'YOUR ORDER'} as={'h4'}/>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-menuC font-medium'} text={'PRODUCT'} as={'h5'}/>
                            <Hadding className={'text-base text-menuC font-medium'} text={'SUBTOTAL'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Zessi Dresses x2'} as={'h5'}/>
                            <Hadding className={'text-base text-deleteC font-medium'} text={'$32.50'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Kirby T-Shirt'} as={'h5'}/>
                            <Hadding className={'text-base text-deleteC font-medium'} text={'$29.90'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-menuC font-medium'} text={'SUBTOTAL'} as={'h5'}/>
                            <Hadding className={'text-base text-menuC font-medium'} text={'$89.90'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-menuC font-medium'} text={'SHIPPING'} as={'h5'}/>
                            <Hadding className={'text-base text-menuC font-medium'} text={'Free shipping'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-menuC font-medium'} text={'VAT'} as={'h5'}/>
                            <Hadding className={'text-base text-menuC font-medium'} text={'$19'} as={'h5'}/>
                        </Flex>
                        <Flex className="pt-5 pb-2 border-b-2 border-categoriC">
                            <Hadding className={'text-base text-menuC font-medium'} text={'TOTAL'} as={'h5'}/>
                            <Hadding className={'text-base text-menuC font-medium'} text={'$1319'} as={'h5'}/>
                        </Flex>
                    </div>
                    <div className="p-8 border-2 border-categoriC mt-5">
                        <div className="flex gap-x-3">
                            <div className="w-[15px] h-[15px] rounded-full border-2 border-deleteC"></div>
                           <div className="w-[300px]">
                             <Hadding className={'text-base text-menuC font-medium'} text={'Direct bank transfer'} as={'h6'}/>
                            <Peragrap peraText={'Make your payment directly into our bank account. Please use your Order ID as the payment reference.Your order will not be shipped until the funds have cleared in our account.'}/>
                           </div>
                        </div>
                        <div className="flex gap-x-3 pt-5">
                            <div className="w-[15px] h-[15px] rounded-full border-2 border-deleteC"></div>
                            <Hadding className={'text-base text-menuC font-medium'} text={'Check payments'} as={'h6'}/>
                        </div>
                        <div className="flex gap-x-3 pt-5">
                            <div className="w-[15px] h-[15px] rounded-full border-2 border-deleteC"></div>
                             <Hadding className={'text-base text-menuC font-medium '} text={'Cash on delivery'} as={'h6'}/>
                        </div>
                        <div className="flex gap-x-3 pt-5">
                            <div className="w-[15px] h-[15px] rounded-full border-2 border-deleteC"></div>
                           <div className="w-[300px]">
                             <Hadding className={'text-base text-menuC font-medium '} text={'PayPal'} as={'h6'}/>
                            <Peragrap peraText={'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'}/>
                           </div>
                        </div>
                    </div>
                    <Link to={'/oderConpleat'}><SubMitBtn className={'w-full mt-5'} submit={'PLACE ORDER'}/></Link>   
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Checkout