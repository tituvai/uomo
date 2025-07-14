import React from 'react'
import Slider from "react-slick";
import Container from '/src/components/Container'
import Flex from '/src/components/Flex'
import Hadding from '/src/components/Hadding'
import Image from '/src/components/Image'
import Button from '../Button'
import bnnerOne from '/src/assets/BannerOne.png'
import bnner2 from '/src/assets/Banner2.png'


const Banner = () => {

    const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <>

      <div className="slider-container">
      <Slider {...settings} className="custom-dots" >
        <div className="pt-12 bg-[url(/src/assets/bannerBg.png)] bg-no-repeat bg-center bg-cover">
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

        
       <div className="pt-12 bg-[url(/src/assets/bannerBg.png)] bg-no-repeat bg-center bg-cover">
            <Container>
                <Flex>
                    <div className="w-[783px] relative">
                        <Hadding className={'text-sm text-threeC font-medium leading-6 pl-9'} text={'NEW TREND'} as={'h5'}/>
                            <div className="w-[30px] h-[2px] bg-threeC absolute left-0 top-3"></div>
                        <Hadding className={'text-[70px] text-menuC font-mixed leading-20 py-5'} text={<><span>HELLO NEW </span><span className='font-bold'>SEASON</span></>} as={'h5'}/>
                        <Button btnText={'DISCOVER MORE'}/>
                    </div>
                    <div className="">
                        <Image className={'h-[730px]'} imgSrc={bnner2} imgAlt={bnner2}/>
                    </div>
                </Flex>
            </Container>
        </div>
       
      </Slider>
    </div>


        
    </>
  )
}

export default Banner