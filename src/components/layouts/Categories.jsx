import React from 'react'
import Container from '/src/components/Container'
import Flex from '/src/components/Flex'
import Hadding from '/src/components/Hadding'
import Image from '/src/components/Image'
import caTop from '/src/assets/caTop.png'
import { Link } from 'react-router-dom'
import Button from '../Button'
import caThree from '/src/assets/caThree.png'
import caJaget from '/src/assets/caJaget.png'
import Peragrap from '../Peragrap'


const Categories = () => {
  return (
    <>
        <div className="pt-25 pb-12">
            <Container>
                <Flex className={'flex-col md:flex-row gap-y-10'}>
                    <div className="lg:w-[48%] relative">
                        <Image className={'w-full'} imgSrc={caTop} imgAlt={'caTop.png'}/>
                        <div className="absolute bottom-10 left-10">
                            <Hadding className={'text-sm text-menuC'} text={'HOT LIST'} as={'h6'}/>
                            <Hadding className={'text-[26px] text-menuC font-mixed'} text={<><span className='font-bold'>WOMEN</span><span>COLLECTION</span></>} as={'h3'}/>
                            <Link to={'/'}><Button btnText={'SHOP NOW'}/></Link>
                        </div>
                    </div>
                    <div className="lg:w-[49%]">
                        <div className="relative mb-9">
                            <Image className={'w-full'} imgSrc={caThree} imgAlt={'caThree.png'}/>
                            <div className="absolute bottom-6 lg:bottom-10 left-10">
                                <Hadding className={'text-sm text-menuC'} text={'HOT LIST'} as={'h6'}/>
                                <Hadding className={'text-[26px] text-menuC font-mixed'} text={<><span className='font-bold'>MEN</span><span>COLLECTION</span></>} as={'h3'}/>
                                <Link to={'/'}><Button btnText={'SHOP NOW'}/></Link>
                            </div>
                        </div>
                        <div className="lg:flex justify-between">
                            <div className="lg:w-[330px] relative">
                            <Image className={'w-full'} imgSrc={caJaget} imgAlt={'caJaget.png'}/>
                            <div className="absolute bottom-10 left-10">
                                <Hadding className={'text-sm text-menuC'} text={'HOT LIST'} as={'h6'}/>
                                <Hadding className={'text-[26px] text-menuC font-mixed'} text={<><span className='font-bold'>KIDS</span><span>COLLECTION</span></>} as={'h3'}/>
                                <Link to={'/'}><Button btnText={'SHOP NOW'}/></Link>
                            </div>
                        </div>

                            <div className="lg:w-[330px] bg-categoriC py-10 lg:pt-[120px] px-10 mt-10 lg:mt-0">
                                <Hadding className={'text-[26px] text-menuC font-mixed'} text={<><span className='font-bold'>E-GIFT</span><span> CARDS</span></>} as={'h3'}/>
                                <Peragrap className={'pr-8'} peraText={'Surprise someone with the gift they really want.'}/>
                                <Link to={'/'}><Button btnText={'SHOP NOW'}/></Link>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Categories