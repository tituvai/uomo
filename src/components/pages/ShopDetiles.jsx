import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Flex from "../Flex";
import Hadding from "../Hadding";
import Peragrap from "../Peragrap";
import SubMitBtn from "../SubMitBtn";
import Button from "../Button";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import Product from "../Product";
import crapped from "/src/assets/cropped.png"
import crappadOne from "/src/assets/cropped1.png"
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import calvin from '/src/assets/calvin.png'
import calvinOne from '/src/assets/calvin1.png'
import kriby from '/src/assets/kriby.png'
import kribyOne from '/src/assets/kriby (2).png'
import clabkiit from '/src/assets/clabkiit.png'
import clabkiitOne from '/src/assets/clabkiit (2).png'
import botanclat from '/src/assets/botanclat.png'
import botanclatOne from '/src/assets/botanclat1.png'
import Cotton from '/src/assets/cotton.png'
import CottonOne from '/src/assets/cotton1.png'
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/addCart/addToCartSlice";



const ShopDetiles = () => {
    
  const images = [
    "/src/assets/shopDetelis1.png",
    "/src/assets/shopDeteils2.png",
    "/src/assets/shopDetelis3.png",
    "/src/assets/shopDeteils4.png",
  
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <a className=""><img src={images[i]} alt={`thumb-${i}`}/></a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb custom-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 2nd slider Partt Start 
 var settingsTwo = {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null
        }
      }
    ]
  };

  // Active Class 


  // AddToCart Part Start 

  const product = useSelector((state)=>state.detalis.value)
  
const dispatch = useDispatch()

const handleAddToCart = ()=>{
  dispatch(addCart({title:product.title, price: product.price, image:product.image, size: selectedsize}))
}

// Size Part Start 

const [selectedsize, setSelectedsize]= useState('s')
const [selectedColor, setSelectedColor]= useState('')

// counter Part Start 
const [count, setCount]=useState(1)

const handleIncement = ()=>{
   setCount(count + 1)
}

const handleDecement= ()=>{
  if(count > 1){
    setCount(count-1)
  }
}
 
 
  
  return (
    <>
    <div className="px-3 lg:px-0 mt-25">
        <Container>
            <div className="lg:flex justify-between">
                <div className="lg:w-[50%] pb-10 lg:pb-0">
                    <div className="slider-container w-full lg:pl-30">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                        <div key={index}><img className="w-full h-[600px]" src={product.image} alt={`slide-${index}`}/></div>
                        ))}
                    </Slider>
                    </div>
                </div>
                <div className="lg:w-[46%]">
                    <div className="">
                        <span className="text-base text-menuC font-medium uppercase">Home</span>
                        <span>/</span>
                        <span className="text-base text-menuC font-medium uppercase">The Shop</span>
                    </div>
                    <Hadding className={'text-[26px] text-menuC pt-5'} text={product.title} as={'h4'}/>
                    <Hadding className={'text-[22px] text-menuC font-medium pb-5'} text={product.price} as={'h4'}/>
                    <Peragrap className={'leading-6'} peraText={'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.'}/>
                    <div className="flex flex-wrap gap-y-5 items-center gap-x-5 pt-8">
                        <Hadding className={'text-base text-menuC font-medium pr-10'} text={'SIZES'} as={'h6'}/>
                         {['xs', 's', 'm', 'l', 'xl', 'xxl'].map((size) => (
                            <div
                            key={size}
                            className={`text-base text-menuC w-[40px] h-[40px] flex items-center justify-center border-2 border-categoriC cursor-pointer ${
                                selectedsize === size ? 'ring-2 ring-offset-2 ring-categoriC' : ''
                            }`}
                            style={{ backgroundColor: size }}
                            onClick={() => setSelectedsize(size)}
                            >{size}</div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-5 pt-8">
                        <Hadding className={'text-base text-menuC font-medium pr-10'} text={'COLOR'} as={'h6'}/>
                          {['#000000', '#FF8686', '#7ED321', '#B6B6B6', '#15CBA5'].map((color) => (
                            <div
                            key={color}
                            className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                                selectedColor === color ? 'ring-2 ring-offset-2 ring-hoverC' : ''
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                            ></div>
                        ))}
                    </div>
                    <div className="lg:flex items-center gap-x-10 pt-8">
                          <div className="w-[100px] p-2 border-2 border-categoriC flex justify-between items-center">
                            <span className="text-base text-deleteC font-medium cursor-pointer" onClick={handleIncement}>+</span>
                            <span className="text-base text-deleteC font-medium">{count}</span>
                            <span className="text-2xl text-deleteC font-medium cursor-pointer" onClick={handleDecement}>-</span>
                        </div>
                        <div className="" onClick={handleAddToCart}><SubMitBtn className={'px-18 mt-3 lg:mt-0'} submit={'ADD TO CART'}/></div>
                    </div>
                    <div className="flex items-center gap-x-10 pt-7">
                      <Button className={'flex items-center gap-x-2'} btnText={<><CiHeart className="text-xl"/><span>ADD TO WISHLIST</span></>}/>
                      <Hadding className={'flex items-center gap-x-2'} text={<><IoShareSocialOutline/><span>SHARE</span></>} as={'h4'}/>
                    </div>
                    <Hadding className={'text-base text-menuC leading-7 pt-7'} text={<><span className="text-deleteC pr-2">SKU :</span><span>N/A</span></>} as={'h5'}/>
                    <Hadding className={'text-base text-menuC leading-7'} text={<><span className="text-deleteC pr-2">Categories :</span><span>Casual & Urban Wear, Jackets, Men</span></>} as={'h5'}/>
                    <Hadding className={'text-base text-menuC leading-7'} text={<><span className="text-deleteC pr-2">Tags :</span><span>biker, black, bomber, leather</span></>} as={'h5'}/>
                </div>
            </div>

            <div className="flex lg:items-center justify-center gap-x-5 lg:gap-x-20 pt-20">
              <Hadding className={'text-base text-menuC font-medium relative group'} text={<><span className="w-0 h-[2px] bg-menuC group-hover:w-full absolute left-0-0 bottom-0  transition-all duration-500"></span><span>DESCRIPTION</span></>} as={'h4'}/>
              <Hadding className={'text-base text-menuC font-medium relative group'} text={<><span className="w-0 h-[2px] bg-menuC group-hover:w-full absolute left-0-0 bottom-0  transition-all duration-500"></span><span>ADDITIONAL INFORMATION</span></>} as={'h4'}/>
              <Hadding className={'text-base text-menuC font-medium relative group'} text={<><span className="w-0 h-[2px] bg-menuC group-hover:w-full absolute left-0-0 bottom-0  transition-all duration-500"></span><span>REVIEWS (3)</span></>} as={'h4'}/>                                
            </div>

            <div className="lg:w-[940px] m-auto pt-15">
              <Hadding className={'text-base text-menuC font-medium pb-5'} text={'Sed do eiusmod tempor incididunt ut labore'} as={'h6'}/>
              <Peragrap peraText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}/>
              <div className="lg:flex items-center justify-between pt-15">
                <div className="">
                  <Hadding className={'text-base text-menuC font-medium pb-5'} text={'Why choose product?'} as={'h6'}/>
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Creat by cotton fibric with soft and smooth</span></>}/>        
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Simple, Configurable (e.g. size, color, etc.), bundled</span></>}/>        
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Downloadable/Digital Products, Virtual Products</span></>}/>        
                </div>
                <div className="">
                  <Hadding className={'text-base text-menuC font-medium pb-5 pt-5 lg:pt-0'} text={'Sample Number List'} as={'h6'}/>
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>1</span><span>Create Store-specific attrittbutes on the fly</span></>}/>        
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>2</span><span>Simple, Configurable (e.g. size, color, etc.), bundled</span></>}/>        
                  <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>3</span><span>Downloadable/Digital Products, Virtual Products</span></>}/>        
                </div>
              </div>
                <Hadding className={'text-base text-menuC font-medium pt-10 pb-2'} text={'Lining'} as={'h6'}/>
                <Peragrap peraText={'100% Polyester, Main: 100% Polyester.'}/>
            </div>

            <div className="py-30">
              <Hadding className={'text-[26px] text-menuC pb-8'} text={<><span>RELATED</span> <span className="font-bold">PRODUCTS</span></>} as={'h4'}/>
              <Slider {...settingsTwo} className="-mx-4">
                <div className=" pl-4">
                <Product productSrc={crapped} productAlt={'cropped.png'} productTitle={'Cropped Faux Leather Jacket'} productPrice={'$29'} opacitySrc={crappadOne}/>
                </div>
                <div className=" pl-4">
                  <Product productSrc={calvin} productAlt={'cropped.png'} productTitle={'Calvin Shorts'} productPrice={'$62'} opacitySrc={calvinOne}/>
                </div>
                <div className=" pl-4">
                   <Product productSrc={kriby} productAlt={'kriby.png'} productTitle={'Kirby T-Shirt'} productPrice={'$70'} opacitySrc={kribyOne} opacityAlt={'kriby (2).png'}/>
                </div>
                <div className=" pl-4">
                   <Product productSrc={clabkiit} productAlt={'clabkiit.png'} productTitle={'Cableknit Shawl'} productPrice={'$40'} opacitySrc={clabkiitOne} opacityAlt={'clabkiit (2).png'}/>
                </div>
                <div className=" pl-4">
                   <Product productSrc={botanclat} productAlt={'botanclat.png'} productTitle={'Shirt In Botanical Cheetah Print'} productPrice={'$54'} opacitySrc={botanclatOne} opacityAlt={'botanclat1.png'}/>
                </div>
                <div className=" pl-4">
                  <Product productSrc={Cotton} productAlt={'Cotton.png'} productTitle={'Cotton Jersey T-Shirt'} productPrice={'$55'} opacitySrc={CottonOne} opacityAlt={'Cotton1.png'}/>
                </div>      
              </Slider>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ShopDetiles