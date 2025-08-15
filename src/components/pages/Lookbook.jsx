import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Flex from '../Flex'
import Image from '../Image'
import lookOne from '/src/assets/lookbook-1.jpg'
import lookTwo from '/src/assets/lookbook-2.jpg'
import lookThree from '/src/assets/lookbook-3.jpg'
import lookFour from '/src/assets/lookbook-4.jpg'
import lookFive from '/src/assets/lookbook-5.jpg'
import lookSix from '/src/assets/lookbook-6.jpg'
import Button from '../Button'

const Lookbook = () => {
  return (
    <>
    <div className="bg-categoriC py-10">
      <Container>
        <Hadding className={'text-[35px] text-menuC font-bold'} text={'LOOKBOOK'} as={'h3'}/>
      </Container>
    </div>
    <div className="py-30">
      <Container>
        <Flex>
          <div className="w-[49%]">
            <div className=" relative group">
              <Image imgSrc={lookOne}/>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-white font-medium'} text={'STARTING AT $19'} as={'h6'}/>
                <Hadding className={'text-[26px] text-white font-medium'} text={'Women’s T-Shirts'} as={'h6'}/>
              </div>
            </div>
            <div className=" relative group mt-8">
              <Image imgSrc={lookTwo}/>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-menuC font-medium'} text={'STARTING AT $21'} as={'h6'}/>
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Slim Fit Cotton Shorts'} as={'h6'}/>
              </div>
            </div>
          </div>
         
            <div className="w-[49%] relative group">
              <Image imgSrc={lookThree}/>
              <div className="w-[95%] m-auto h-[795px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[795px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-menuC font-medium'} text={'STARTİNG AT $39'} as={'h6'}/>
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Men’s Sportswear'} as={'h6'}/>
              </div>
            </div>
        </Flex>
        <Flex className={'pt-8'}>
           <div className="w-[49%] relative group">
              <Image imgSrc={lookFour}/>
              <div className="w-[95%] m-auto h-[795px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[795px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-menuC font-medium'} text={'STARTİNG AT $39'} as={'h6'}/>
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Knee-length Cotton Shorts'} as={'h6'}/>
              </div>
            </div>
          <div className="w-[49%]">
            <div className=" relative group">
              <Image imgSrc={lookFive}/>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-menuC font-medium'} text={'STARTING AT $19'} as={'h6'}/>
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Canvas Trainers'} as={'h6'}/>
              </div>
            </div>
            <div className=" relative group mt-8">
              <Image imgSrc={lookSix}/>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-y-3 scale-y-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="w-[95%] m-auto h-[365px] border-white absolute top-4 left-4 border-x-3 scale-x-40 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-700 z-20"></div>
              <div className="bg-black/35 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute left-10 bottom-10">
                <Hadding className={'text-xl text-menuC font-medium'} text={'STARTING AT $21'} as={'h6'}/>
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Slim Fit Cotton Shorts'} as={'h6'}/>
              </div>
            </div>
          </div>
         
           
        </Flex>
        <div className="text-center pt-20">
          <Button btnText={'SHOW MORE'}/>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Lookbook