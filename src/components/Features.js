import React from 'react';
import Image from 'next/image';

import { features } from '@/data';

const Features = () => {

  //destructure features
  const{title,subtitle,image,buttonText,items}=features;


  return <section  id='Features' className='section'>
<div href='features'className="container mx-auto"> 
  <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">

    {/* {image} */}
    <div className='flex-1 order-1 lg:-order-1 '>
      <Image src={image.type} />
    </div>
    {/* {text} */}
    <div className='flex-1 flex flex-col justify-end '>
      <h2 className='title'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
      {/* {items} */}
      <div>
         {items.map((item,index)=>{

          const{title,subtitle,icon}=item
          return(
            <div className='flex mb-6 lg:last:mb-0'>
              <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
              <div>
                <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
                <p>{subtitle}</p>
              </div>
            </div>


          )



         })}

      </div>


    </div>


  </div>



</div>




  </section>
};

export default Features;
