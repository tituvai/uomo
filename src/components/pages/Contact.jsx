import React from 'react'
import Container from '../Container'
import Hadding from '../Hadding'
import Flex from '../Flex'
import Peragrap from '../Peragrap'
import SubMitBtn from '../SubMitBtn'

const Contact = () => {
  return (
    <>
      <div className="bg-categoriC py-10">
        <Container>
          <Hadding className={'text-[35px] text-menuC font-bold'} text={'CONTACT US'} as={'h3'}/>
        </Container>
      </div>
      <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1702543956426!2d90.3800052739697!3d23.74130738912789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1755105606395!5m2!1sen!2sbd" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Contact Part Start  */}
        <div className="py-30">
          <Container>
            <div className="">
              <Flex className={'justify-evenly'}>
                <div className="w-[340px]">
                  <Hadding className={'text-[26px] text-menuC font-medium pb-8'} text={'Store in London'} as={'h5'}/>
                  <Hadding className={'text-base text-menuC leading-6 pb-15'} text={'1418 River Drive, Suite 35 Cottonhall, CA 9622 United States'} as={'h6'}/>
                  <Hadding className={'text-base text-menuC leading-6'} text={'sale@uomo.com'} as={'h6'}/>
                  <Hadding className={'text-base text-menuC leading-6'} text={'+1 246-345-0695'} as={'h6'}/>
                </div>
                <div className="w-[340px]">
                  <Hadding className={'text-[26px] text-menuC font-medium pb-8'} text={'Store in Istanbul'} as={'h5'}/>
                  <Hadding className={'text-base text-menuC leading-6 pb-15'} text={'1418 River Drive, Suite 35 Cottonhall, CA 9622 United States'} as={'h6'}/>
                  <Hadding className={'text-base text-menuC leading-6'} text={'sale@uomo.com'} as={'h6'}/>
                  <Hadding className={'text-base text-menuC leading-6'} text={'+1 246-345-0695'} as={'h6'}/>
                </div>
              </Flex>
              <div className="w-[950px] m-auto pt-20">
                <Hadding className={'text-[26px] text-menuC font-medium'} text={'Get In Touch'} as={'h4'}/>

                <form >
                  <input className='w-[930px] px-5 py-5 border-2 border-categoriC my-5' type="text"  placeholder='name'/>
                  <input className='w-[930px] px-5 py-5 border-2 border-categoriC my-5' type="email"  placeholder='Email'/>
                  <textarea className='w-[930px] p-5 h-[200px] border-2 border-categoriC'  id="" placeholder='Your Review'></textarea>
                   <SubMitBtn className={'px-16 block mt-5'} submit={'SUBMIT'}/> 
                </form>
              </div>
            </div>
          </Container>
        </div>
    </>
  )
}

export default Contact