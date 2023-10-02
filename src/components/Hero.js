'use client'

//Will import data from Mongo to populate Hero segment
import { hero } from '@/data';
//Will import Stats from DB admin also
import Stats from './Stats';
import { useRouter } from 'next/navigation';


const Hero = () => {

//destructure response from db
const router=useRouter();
const {title,subtitle,buttonText}=hero

// destructure stats from db

  return (
  
  <section className='h-[850px] bg-hero w-full bg-right bg-cover bg-no-repeat text-white 
  pb-[254px] pt-[225px] relative mb-12 lg:bg-center lg:mb-28'>
    

      <div className='container mx-auto'>
        <h1 className=' text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>
          {title}
        </h1>

        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>
          {subtitle}
        </h2>

    {/*CALL TO ACTION BUTTON */}
      <button className='bg-[rgba(255,255,255,0.4) hover;bg-[rgba(255,255,255,0.5]
        px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition
        lg:px-[80px] lg:py-[16px] lg:mb-[194px]' onClick={()=>{router.push('/Offerings')}}>
        {buttonText}
     
      </button>

    {/* Stats */}

    <div >
      <Stats/>
    </div>



      



      </div>



  </section>
  )
}
export default Hero;
