import React from 'react';


//import created stats from admin panel
//INSTALL AND IMPORT APOLLO CLIENT

//INSERT GQL QUERY TO FETCH STATS FROM DB VIA MONGOOSE AND GQL
import {stats} from '../data'

const Stats = () => {



  return <div className='bg-accent rounded-[20px] p-12'>
    <div className='flex flex-wrap gap-y-8'>
      {stats.map((item,index)=>{
        return(
          <div key={index} className='min-h-[70px] w-3/6 flex flex-col justify-center 
          odd:border-r lg:flex-1 lg:odd:border-r lg:even:last:border-none lg:even:border-r'>

            <div className="text-2xl font-semibold flex lg:text-4xl pl-1 items-start justify-center">
              {item.value}
              </div>
            <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl ">
              {item.text}
              </div> 

          </div>
        )

      })}

      
    </div>
    
    
    
    
   </div>;
};

export default Stats;
