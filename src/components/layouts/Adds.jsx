import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '/src/components/Image'
import add from '/src/assets/adds.png'
import add1 from '/src/assets/adds1.png'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Button from '../Button'


const Adds = () => {
  return (
    <>
        <div className="py-20">
            <Container>
                <Flex className={'flex-col md:flex-row gap-y-10'}>
                    <div className="lg:w-[49%] lg:h-[400px] relative">
                        <Image className={'w-full'} imgSrc={add} imgAlt={'adds.png'}/>
                        <div className="absolute bottom-9 left-9">
                            <Hadding className={'text-lg text-white font-medium'} text={'STARTING AT $19'} as={'h5'}/>
                            <Hadding className={'text-[26px] text-white font-medium py-1'} text={'Women’s T-Shirts'} as={'h4'}/>
                            <Link to={'/'}><button className={'text-sm text-white font-medium leading-8 cursor-pointer relative group'}><div className="w-[30px] h-[2px] bg-white group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></div>{'SHOP NOW'}</button> </Link>
                        </div>
                    </div>
                    <div className="lg:w-[49%] lg:h-[400px] relative">
                        <Image className={'w-full'} imgSrc={add1} imgAlt={'adds1.png'}/>
                        <div className="absolute bottom-9 left-9">
                            <Hadding className={'text-lg text-menuC font-medium'} text={'STARTING AT $19'} as={'h5'}/>
                            <Hadding className={'text-[26px] text-menuC font-medium py-1'} text={'Men’s Sportswear'} as={'h4'}/>
                            <Button btnText={'SHOP NOW'}/>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Adds