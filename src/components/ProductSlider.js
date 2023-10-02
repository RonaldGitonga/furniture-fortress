'use client'
//import swiper module
import { Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination} from 'swiper'

//import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/slider.css'

//import other components
import Image from 'next/image'
import { products } from '@/data'


//import Icons
import {HiPlus} from 'react-icons/hi'
const ProductSlider = () => {
//destructure pages from products
const {pages}=products;

  return (
  <Swiper

  modules={[Navigation,Pagination]}
  pagination={{clickable:true}}
  navigation={true}
  className='productSlider min-h-[1300px]'
  >
    {pages.map((page,index)=>{
      return(
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] sm:gap-x-2 sm:grid-cols-1 '>
            {page.productList.map((product,index)=>{
              //destructure product
              const{image,name,price,oldPrice}=product;
              return(
                <div className="w-full max-w-[290px] h-[380px] text-left" key={index}>
                  <div className=" border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full
                  max-h-[292px] flex items-center justify-center mb-[15px] relative transition">
                    <Image src={image.type} width={200}  quality={80}/>
                    <div className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full
                    flex justify-center items-center cursor-pointer hover:bg-gray-400 transition'>
                    <HiPlus className="text-xl text-primary"/>
                    </div>
                  </div>
                <div className="font-semibold lg:text-xl">{name}</div>
                <div className=" flex items-center gap-x-3">
                  <div className="">Ksh. {price}</div>
                  {/* {add if discount is true show new price and strikethrough oldprice} */}
                  <div className="text-[15px] text-grey line-through">Ksh. {oldPrice}</div>
                </div>

                </div>
              )

            })}
          </div>
        </SwiperSlide>
      )
    })}





  </Swiper>
)};

export default ProductSlider;
