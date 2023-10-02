'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//Import GETNEWITEMS.js FROM DB
import { newInStore } from '@/data';
import NewItemsSlider from './NewItemsSlider';
const NewItems = () => {
const router=useRouter() 
//destructure newitems
const{title,subtitle,link,icon}=newInStore;

  return (
    <section id='New Arrivals'className="section">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* {text} */}
          <div className=" flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
            <p className='max-w-[245px] lg:mb-12 '>{subtitle}</p>
            <div className='hidden lg:flex items-center'>
              <div onClick={()=>router.push('/Offerings')}  className='hover:border-b border-primary lg:items:center 
              cursor-pointer font-medium transition-all'>{link}</div>
              {/* {icon} */}
              <div className='text-3xl'>{icon}</div>
            </div>
          </div>
          

          {/* {New items slider} */}

          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
          <NewItemsSlider/>
          </div>
          





        </div>
   
      </div>
      

    </section>

    );
};

export default NewItems;
