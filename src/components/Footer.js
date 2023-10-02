//import logo and data
import Logo from '@/assets/img/logo.svg'
import Image from 'next/image';

import {footer} from '@/data'

const Footer = () => {
  return (
  <footer id='Contact'className='bg-primary text-white section  '>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75
      border-gray-700 pb-7 lg:pb-14 mb-14'>
        <a href="#" className='mb-6 lg:mb-0'>
         <div className='text-3xl font-bold'>Furniture Fortress</div>

        </a>
        {/* {socials} */}
        <div className=" flex gap-x-4 ">
        {footer.social.map((item,index)=>{
          return(
            <div className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center
            items-center transtition" key={index}>
              <a href="#">{item.icon}</a>
            </div>
          )

        })}
        </div>
        
      </div>
      {/* {copyrights} */}
      <p className='text-center'>&copy; Furniture Fortress 2023 All rights reserved</p>

    </div>

  </footer>
  )
};

export default Footer;
