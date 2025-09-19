import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Peragrap from '../Peragrap'
import { ImCheckmark } from "react-icons/im";
import Flex from '../Flex';

const OderConpleted = () => {
  return (
    <>
    <div className="pb-40 mt-25">
        <Container>
           <div className="text-2xl text-center lg:text-left pb-5">
             <Hadding className={'text-[35px] text-menuC font-bold py-10'} text={'Order received'} as={'h3'}/>
            <Hadding className={'text-lg text-menuC font-medium'} text={'CONFIRMATION'} as={'h3'}/>
            <Peragrap className={'text-deleteC'} peraText={'Review And Submit Your Order'}/>
           </div>
            <div className="w-[70px] h-[70px] rounded-full bg-[#B9A16B] m-auto flex justify-center items-center"><ImCheckmark className='text-white text-3xl'/></div>
            <div className="text-center py-8">
                <Hadding className={'text-2xl lg:text-[35px] text-menuC'} text={'Your order is completed!'} as={'h4'}/>
                <Peragrap className={'text-deleteC'} peraText={'Thank you. Your order has been received.'}/>
            </div>
            <div className="lg:w-[900px] m-auto">
                <div className="w-full border-2 border-dashed border-gray-400 p-8">
                    <div className="lg:flex items-center lg:gap-x-20">
                        <div className="pb-3 lg:pb-0">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Order Number'} as={'h5'}/>
                            <Hadding className={'text-lg text-menuC font-medium'} text={'13119'} as={'h5'}/>
                        </div>
                        <div className="pb-3 lg:pb-0">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Date'} as={'h5'}/>
                            <Hadding className={'text-lg text-menuC font-medium'} text={'27/11/2020'} as={'h5'}/>
                        </div>
                        <div className="pb-3 lg:pb-0">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Total'} as={'h5'}/>
                            <Hadding className={'text-lg text-menuC font-medium'} text={'$40.10'} as={'h5'}/>
                        </div>
                        <div className="">
                            <Hadding className={'text-base text-deleteC font-medium'} text={'Payment Method'} as={'h5'}/>
                            <Hadding className={'text-lg text-menuC font-medium'} text={'Direct Bank Transfer'} as={'h5'}/>
                        </div>
                    </div>
                </div>
                <div className="w-full border-2 border-gray-400 p-10 mt-10">
                    <Hadding className={'text-lg text-menuC font-medium pb-8'} text={'ORDER DETAILS'} as={'h4'}/>
                    <Flex className={'border-b-2 border-categoriC'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'PRODUCT'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'SUBTOTAL'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC pt-5'}>
                    <div className="">
                    <Hadding className={'text-base text-deleteC font-medium leading-8'} text={'Zessi Dresses x2'} as={'h6'}/>  
                    <Hadding className={'text-base text-deleteC font-medium leading-8'} text={'Kirby T-Shirt'} as={'h6'}/>  
                    </div>
                    <div className="">
                    <Hadding className={'text-base text-deleteC font-medium leading-8'} text={'$32.50'} as={'h6'}/> 
                    <Hadding className={'text-base text-deleteC font-medium leading-8'} text={'$29.90'} as={'h6'}/> 
                    </div> 
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC py-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'PRODUCT'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'SUBTOTAL'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC py-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'SUBTOTAL'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'$89.90'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC py-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'SHIPPING'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC leading-8'} text={'Free shipping'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC py-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'VAT'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'$19'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'border-b-2 border-categoriC py-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'PAYMENT METHOD'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC  leading-8'} text={'Direct bank transfer'} as={'h6'}/>  
                    </Flex>
                    <Flex className={'pt-4'}>
                    <Hadding className={'text-base text-menuC font-medium leading-8'} text={'TOTAL'} as={'h6'}/>  
                    <Hadding className={'text-base text-menuC font-medium  leading-8'} text={'$1319'} as={'h6'}/>  
                    </Flex>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default OderConpleted