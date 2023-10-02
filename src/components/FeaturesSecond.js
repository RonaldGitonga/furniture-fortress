import React from 'react';
import Image from 'next/image';

//import data from db for second group of features
import { features } from '@/data';

const FeaturesSecond = () => {
  const{title,subtitle,image}=features.feature2;


  return(
  <section id='About'className='section'>
  <div className="container mx-auto"> 
    <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">

         {/* {text} */}
      <div className='flex-1 flex flex-col justify-end '>
        <h2 className='title'>{title}</h2>
        <p className='subtitle'>{subtitle}</p>
   
      </div>
 

      {/* {image} */}
      <div className='flex-1 order-1 lg:-order-1'>
        <Image src={image.type}/>
      </div>
   
    </div>

  </div>

</section>
)}
export default FeaturesSecond;
