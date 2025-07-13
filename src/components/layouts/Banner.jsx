import React from 'react'
import Container from '/src/components/Container'
import Flex from '/src/components/Flex'
import Hadding from '/src/components/Hadding'
import Image from '/src/components/Image'
import Button from '../Button'
import bnnerOne from '/src/assets/BannerOne.png'


const Banner = () => {
  return (
    <>
        <div className="pt-12 bg-[url(src/assets/bannerBg.png)] bg-no-repeat bg-center bg-cover">
            <Container>
                <Flex>
                    <div className="w-[783px] relative">
                        <Hadding className={'text-sm text-threeC font-medium leading-6 pl-9'} text={'NEW TREND'} as={'h5'}/>
                            <div className="w-[30px] h-[2px] bg-threeC absolute left-0 top-3"></div>
                        <Hadding className={'text-[70px] text-menuC font-mixed leading-20 py-5'} text={<><span>SUMMER SALE STYLISH </span><span className='font-bold'>WOMENS</span></>} as={'h5'}/>
                        <Button btnText={'DISCOVER MORE'}/>
                    </div>
                    <div className="">
                        <Image imgSrc={bnnerOne} imgAlt={bnnerOne}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Banner