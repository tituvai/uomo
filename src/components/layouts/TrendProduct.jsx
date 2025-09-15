import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import botanclat from '/src/assets/botanclat.png'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Button from '/src/components/Button'
import botanclat1 from '/src/assets/botanclat1.png'
import calvin from '/src/assets/calvin.png'
import calvin1 from '/src/assets/calvin1.png'
import clabkiit from '/src/assets/clabkiit.png'
import clabkiit1 from '/src/assets/clabkiit (2).png'
import cotton from '/src/assets/cotton.png'
import cotton1 from '/src/assets/cotton1.png'
import cropped from '/src/assets/cropped.png'
import cropped1 from '/src/assets/cropped1.png'
import jacket from '/src/assets/jacket.png'
import jacket1 from '/src/assets/jacket1.png'
import kriby from '/src/assets/kriby.png'
import kriby1 from '/src/assets/kriby (2).png'
import zessi from '/src/assets/zessi.png'
import zessi1 from '/src/assets/zessi1.png'


const TrendProduct = () => {
  return (
    <>
    <div className="py-13 px-3 lg:px-0">
        <Container>
            <div className="text-center">
                <Hadding className={'text-[35px] text-menuC font-mixed'} text={<><span>Our Trendy</span><span className='font-bold'>Products</span></>} as={'h3'}/>
            </div>
            <div className="lg:w-[627px] m-auto py-8">
                <ul className='flex gap-x-10 gap-y-5 justify-center flex-wrap'>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> ALL</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> NEWARRIVALS</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> BEST SELLER</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> TOP RATING</li></Link>                              
                </ul>
            </div>
            <Flex className={'flex-wrap gap-y-6 py-7'}>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={botanclat} productAlt={'botanclat.png'} opacitySrc={botanclat1} opacityAlt={'botanclat1.png'} productTitle={'Shirt In Botanical Cheetah Print'} productPrice={27}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={calvin} productAlt={'calvin.png'} opacitySrc={calvin1} opacityAlt={'calvin1.png'} productTitle={'Calvin Shorts'} productPrice={47}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={clabkiit} productAlt={'clabkiit.png'} opacitySrc={clabkiit1} opacityAlt={'clabkiit (2).png'} productTitle={'Cableknit Shawl'} productPrice={84}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={cotton} productAlt={'cotton.png'} opacitySrc={cotton1} opacityAlt={'cotton1.png'} productTitle={'Cotton Jersey T-Shirt '} productPrice={27} productDelete={'$70'}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={cropped} productAlt={'cropped.png'} opacitySrc={cropped1} opacityAlt={'cropped1.png'} productTitle={'Cropped Faux Leather Jacket'} productPrice={20}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={jacket} productAlt={'jacket.png'} opacitySrc={jacket1} opacityAlt={'jacket1.png'} productTitle={'Colorful Jacket'} productPrice={87} productDelete={'$120'}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={kriby} productAlt={'kriby.png'} opacitySrc={kriby1} opacityAlt={'kriby (2).png'} productTitle={'Kirby T-Shirt'} productPrice={130}/>
                </div>
                <div className="w-[48%] lg:w-[24%]">
                    <Product productSrc={zessi} productAlt={'zessi.png'} opacitySrc={zessi1} opacityAlt={'zessi1.png'} productTitle={'Zessi Dresses'} productPrice={50}/>
                </div>
            </Flex>
            <div className="text-center py-10">
                <Button btnText={'SEE ALL PRODUCT'}/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default TrendProduct