import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Flex from '../Flex'
import Image from '../Image'
import man from '/src/assets/gallrey (1).jpg'
import Vector from '../../assets/icon/Vector'
import HeadPhone from '../../assets/icon/HeadPhone'
import Shield from '../../assets/icon/Shield'
import treeshat from '/src/assets/gallrey (2).jpg'
import glass from '/src/assets/gallrey (3).jpg'
import top from '/src/assets/gallrey (4).jpg'
import jaket from '/src/assets/gallrey (5).jpg'
import longtop from '/src/assets/gallrey (6).jpg'
import bag from '/src/assets/gallery7.jpg'
import jaket2 from '/src/assets/gallrey8 (1).jpg'
import blachshat from '/src/assets/gallrey8 (2).jpg'
import bage1 from '/src/assets/gallrey8 (3).jpg'
import blacktop from '/src/assets/gallrey8 (4).jpg'
import blueshat from '/src/assets/gallrey8 (5).jpg'
import { Link } from 'react-router-dom'
const Gallrey = () => {
  return (
    <>
        <div className="pb-23">
            <Container>
                <div className="text-center pb-7">
                    <Hadding className={'text-[35px] text-menuC'} text={'@UOMO'} as={'h3'}/>
                </div>
                <Flex className={'flex-wrap gap-y-2 pb-25'}>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}><Image className={'w-full h-full'} imgSrc={man}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={treeshat}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={glass}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={top}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={jaket}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={bag}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={jaket2}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={blachshat}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={bage1}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={blacktop}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={blueshat}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    <div className="w-[230px] h-[230px] relative group">
                        <Link to={'/'}>
                        <Image className={'w-full h-full'} imgSrc={longtop}/>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-[230px] h-[230px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                        </Link>
                    </div>
                    
                </Flex>
                <Flex>
                    <div className="text-center">
                        <Vector className={'m-auto mb-5'}/>
                        <Hadding className={'text-lg text-black font-medium uppercase py-1'} text={'FAST AND FREE DELIVERY'} as={'h4'}/>
                        <Hadding className={'text-[15px] text-deleteC '} text={'Free delivery for all orders over $140'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <HeadPhone className={'m-auto mb-5'}/>
                        <Hadding className={'text-lg text-black font-medium uppercase py-1'} text={'24/7 CUSTOMER SUPPORT'} as={'h4'}/>
                        <Hadding className={'text-[15px] text-deleteC '} text={'Friendly 24/7 customer support'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Shield className={'m-auto mb-5'}/>
                        <Hadding className={'text-lg text-black font-medium uppercase py-1'} text={'MONEY BACK GUARANTEE'} as={'h4'}/>
                        <Hadding className={'text-[15px] text-deleteC '} text={'We return money within 30 days'} as={'h5'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Gallrey