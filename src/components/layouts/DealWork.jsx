import React from 'react'
import Hadding from '../Hadding'
import Container from '../Container'
import Button from '../Button'

const DealWork = () => {
  return (
    <>
        <div className="pt-50 bg-[url(/src/assets/dealBg.png)] bg-no-repeat bg-center bg-cover" >
            <Container>
                <div className="relative">
                    <Hadding className={'pl-11 text-sm text-threeC font-medium'} text={'DEAL OF THE WEEK'} as={'h5'}/>
                <div className="w-[40px] h-[2px] bg-threeC absolute left-0 top-2.5"></div>
                    <Hadding className={'py-5 text-7xl text-menuC font-mixed'} text={<><span className='font-extrabold'>Spring</span><span>Collection</span></>} as={'h3'}/>
                    <Button btnText={'SHOP NOW'}/>
                </div>
                <div className="flex items-center gap-x-10 py-12">
                    <div className="text-center">
                        <Hadding className={'text-base text-menuC font-bold'} text={'05'} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'DAYS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-base text-menuC font-bold'} text={'07'} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'HOURS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-base text-menuC font-bold'} text={'34'} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'MINS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-base text-menuC font-bold'} text={'54'} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'SEC'} as={'h5'}/>
                    </div>

                </div>
            </Container>
        </div>
    </>
  )
}

export default DealWork