"use client"
import React,{useState,useEffect} from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
//import icons
import {CgMenuRight,CgClose} from 'react-icons/cg'
//import navigation from '@/data ' 
import {navigation} from '../data'
import NavMobile from "./NavMobile"; 
import { headers } from "next/dist/client/components/headers";
const Header = () => {
  const ref = useRef(null);

  const[bkg,setBkg]=useState(false);
  const [mobileNav,setMobileNav]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50 ? setBkg(true) : setBkg(false)
    })
  })
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
   

  return (<header id='#'className={`${bkg?("bg-primary py-4 lg:py-6 "): 'bg-none' } fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
    <div className="container mx-auto">
      <div className="flex justify-between items-center ">
        {/* {logo} */}
        <Link to='Home'>
          <div  onClick={scrollToTop} className="h-6 lg:h-8 text-white cursor-pointer">Furniture Fortress</div>
        </Link>
        {/* {menu icon} */}
        <div  onClick={()=>setMobileNav(!mobileNav)}className="text-2xl text-white md:hidden lg:text-3xl cursor pointer ">
        {mobileNav? <CgClose/>: <CgMenuRight/>}
        </div>
        {/* {nav} */}
        <nav className="hidden md:flex">
          <ul className="md:flex md:gap-x-12">
            {navigation.map((item,index)=>{
              return(
                <li key={index}>
                  <Link className="capitalize cursor-pointer text-white hover:border-b transition-all" to={item.link}>
                    {item.name}
                  </Link>

                </li>
              )
            })}
          </ul>
          
        </nav>
        {/* nav mobile */}
        <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
          <NavMobile/>
        </div>
      </div>
    </div>

  </header>
      
  );
};

export default Header;
