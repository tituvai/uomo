import React, { useState, useEffect } from 'react'
import Hadding from '../Hadding'
import Container from '../Container'
import Button from '../Button'

const DealWork = () => {
 const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 
      (10 * 24 * 60 * 60 * 1000) + 
      (2 * 60 * 60 * 1000) +       
      (20 * 60 * 1000) +           
      (45 * 1000);                 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className="p-5 lg:pt-50 bg-[url(/src/assets/dealBg.png)] bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="relative">
                    <Hadding className={'pl-11 text-sm text-threeC font-medium'} text={'DEAL OF THE WEEK'} as={'h5'}/>
                <div className="w-[40px] h-[2px] bg-threeC absolute left-0 top-2.5"></div>
                    <Hadding className={'py-5 text-3xl lg:text-7xl text-menuC font-mixed'} text={<><span className='font-extrabold'>Spring</span><span>Collection</span></>} as={'h3'}/>
                    <Button btnText={'SHOP NOW'}/>
                </div>
                <div className="flex items-center gap-x-10 py-12">
                    <div className="text-center">
                        <Hadding className={'text-2xl text-menuC font-bold'} text={`${timeLeft.days}`} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'DAYS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-2xl text-menuC font-bold'} text={`${timeLeft.hours}`} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'HOURS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-2xl text-menuC font-bold'} text={`${timeLeft.minutes}`} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'MINS'} as={'h5'}/>
                    </div>
                    <div className="text-center">
                        <Hadding className={'text-2xl text-menuC font-bold'} text={`${timeLeft.seconds}`} as={'h6'}/>
                        <Hadding className={'text-base  text-deleteC'} text={'SEC'} as={'h5'}/>
                    </div>

                </div>
            </Container>
        </div>
    </>
  )
}

export default DealWork