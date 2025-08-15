import React from 'react'
import BlogProduct from '../BlogProduct'
import Container from '../Container'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Flex from '../Flex'
import blogOne from '/src/assets/blog-5.jpg'
import blogTwo from '/src/assets/blog-6.jpg'
import blogThree from '/src/assets/blog-7.jpg'
import blogFour from '/src/assets/blog-8.jpg'
import blogFive from '/src/assets/blog-9.jpg'
import blogSix from '/src/assets/blog-10.jpg'
import Button from '../Button'

const Blog = () => {
  return (
    <>
    <div className="bg-categoriC py-10">
        <Container>
            <div className="">
                <Hadding className={'text-[35px] text-menuC font-bold'} text={'THE BLOG'} as={'h3'}/>
                <ul className='flex items-center gap-x-8 pt-10'>
                    {
                        [
                            {name:'ALL ', path:'/'},
                            {name:'COMPANY ', path:'/'},
                            {name:'FASHION', path:'/'},
                            {name:'STYLE', path:'/'},
                            {name:'TRENDS', path:'/'},
                            {name:'BEAUTY', path:'/'}
                                                       
                        ].map((item, index)=>(
                            <Link to={'/'} key={index}><li className='text-base text-menuC font-medium group relative'><span className='absolute left-0 bottom-0 w-0 bg-menuC group-hover:w-full h-[2px] translate-x-4 group-hover:translate-x-0 transition-all duration-500'></span>{item.name}</li></Link>
                        ))
                    }
                </ul>
            </div>
        </Container>
    </div>
    <div className="py-20">
        <Container>
            <Flex className={'flex-wrap gap-y-10'}>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogOne} blogAlt={'blog-5.jpg'} blogText={'Woman with good shoes is never be ugly place'} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogTwo} blogAlt={'blog-6.jpg'} blogText={'Heaven upon heaven moveth every have.'} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogThree} blogAlt={'blog-7.jpg'} blogText={"Tree doesn't good void, waters without created"} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogFour} blogAlt={'blog-8.jpg'} blogText={'Given Set was without from god divide rule Hath'} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogFive} blogAlt={'blog-9.jpg'} blogText={'Tree earth fowl given moveth deep lesser After'} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
                <div className="w-[32%]">
                    <BlogProduct blogSrc={blogSix} blogAlt={'blog-10.jpg'} blogText={'Us yielding Fish sea night night the said him two'} blogPera={'Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.'}/>
                </div>
            </Flex>
            <div className="text-center py-15">
                <Hadding className='text-base text-black font-medium py-3' text={'SHOWING 36 of 497 Items'} as={'h5'}/>
                <div className="w-[300px] bg-footerBg h-[6px] rounded-full m-auto">
                    <div className='w-[119px] h-[6px] bg-menuC rounded-full z-10'></div>
                </div>
                <Button className={'mt-4'} btnText={'SHOW MORE'}/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Blog