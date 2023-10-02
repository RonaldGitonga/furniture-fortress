'use client'
import { useRouter } from "next/navigation";
//import products from DB
//Replace with api GETALLPRODUCTS
import {products} from '@/data'
import ProductSlider from "@/components/ProductSlider";
import Newsletter from "@/components/Newsletter";




 
//destructure products
const {title,subtitle}=products
function page() {
  return (
   <section className="section text-center">
    <div className="container mx-auto">
      <div>
        <h2 className="title">{title}</h2>
        <p className="max-w-[639px] mx-auto mb-[50px ] lg:mb-[70px]">{subtitle}</p>

        {/* {Slider for products} */}
        <ProductSlider/>

      </div>
    </div>


<Newsletter/>

   </section>
  )
}

export default page