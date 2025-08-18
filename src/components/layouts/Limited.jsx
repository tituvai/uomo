import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Product from '../Product'
import cap from '/src/assets/cap.png'
import balt from '/src/assets/balt.png'
import balt1 from '/src/assets/balt1.png'
import bage from '/src/assets/bage.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'

const Limited = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: null,
          prevArrow: null
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null
        }
      }
    ]
  };

  return (
    <>
        <div className="">
            <Container>
                <div className="text-center pb-10">
                    <Hadding className={'text-[35px] text-menuC font-mixed'} text={<><span>LIMITED</span><span className='font-extrabold'>EDITION</span></>} as={'h3'}/>
                </div>
                <div className="-ml-5 pb-12">
                      <Slider {...settings}>
                    <div className='pl-4'>
                        <Product productSrc={cap} productAlt={cap} productTitle={'Hosking Blue Area Rug'} productPrice={'$62'}/>
                    </div>
                    <div className='pl-4'>
                        <Product productSrc={balt} productAlt={balt} productTitle={'Cushion Futon Slipcover'} productPrice={'$110'} productDelete={'$180'}/>
                    </div>
                    <div className='pl-4'>
                        <Product productSrc={balt1} productAlt={balt1} productTitle={'Hub Accent Mirror'} productPrice={'$17'}/>
                    </div>
                    <div className='pl-4'>
                        <Product productSrc={bage} productAlt={bage} productTitle={'Hanneman Pouf'} productPrice={'$69'}/>
                    </div>
                    <div className='pl-4'>
                        <Product productSrc={balt} productAlt={balt} productTitle={'Cushion Futon Slipcover'} productPrice={'$99'} productDelete={'$160'}/>
                    </div>
                   
                </Slider> 
                </div> 
            </Container>
        </div>
    </>
  )
}

export default Limited