'use client'
import Image from "next/image";

//Import swiper library
import {Swiper,SwiperSlide }from "swiper/react";
import {Navigation,Pagination, Scrollbar} from 'swiper'

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination'



//import newItems from DB
import { newInStore } from "@/data";
const NewItemsSlider = () => {
  //slider configs
  return (
  <Swiper id='New Arrivals' grabCursor={true}


  breakpoints={{
    320:{
      slidesPerView:2,
      spaceBetween:30
    },
    768:{
      slidesPerView:3,
      spaceBetween:30  ,
    }
  }}
 >
    {newInStore.products.map((product,index)=>{
      return(
        <SwiperSlide key={index} className="max-w-[267px]">
           <div className="relative">
            <Image src={product.image.type} height={265} width={400}/>
            <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize ">
              {product.name}
            </div>
            
           </div>
      </SwiperSlide>
      )
      

    })}





  </Swiper>
  )
};

export default NewItemsSlider;
