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
    <div className="py-13">
        <Container>
            <div className="text-center">
                <Hadding className={'text-[35px] text-menuC font-mixed'} text={<><span>Our Trendy</span><span className='font-bold'>Products</span></>} as={'h3'}/>
            </div>
            <div className="w-[627px] m-auto py-8">
                <ul className='flex gap-x-10 justify-center'>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> ALL</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> NEWARRIVALS</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> BEST SELLER</li></Link>
                    <Link to={'/'}><li className='text-base text-deleteC font-medium hover:text-menuC relative group'><div className="w-0 h-[2px] bg-menuC absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div> TOP RATING</li></Link>                              
                </ul>
            </div>
            <Flex className={'flex-wrap gap-y-6 py-7'}>
                <div className="w-[330px]">
                    <Product productSrc={botanclat} productAlt={botanclat} opacitySrc={botanclat1} opacityAlt={botanclat1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={calvin} productAlt={calvin} opacitySrc={calvin1} opacityAlt={calvin1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={clabkiit} productAlt={clabkiit} opacitySrc={clabkiit1} opacityAlt={clabkiit1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={cotton} productAlt={cotton} opacitySrc={cotton1} opacityAlt={cotton1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={cropped} productAlt={cropped} opacitySrc={cropped1} opacityAlt={cropped1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={jacket} productAlt={jacket} opacitySrc={jacket1} opacityAlt={jacket1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={kriby} productAlt={kriby} opacitySrc={kriby1} opacityAlt={kriby1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
                <div className="w-[330px]">
                    <Product productSrc={zessi} productAlt={zessi} opacitySrc={zessi1} opacityAlt={zessi1} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$27'}/>
                </div>
            </Flex>
            <div className="text-center py-10">
                <Button btnText={'SEE ALL PRODUCT'}/>
            </div>
        </Container>
    </div>
  )
}

export default TrendProduct