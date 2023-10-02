import React from 'react';
//import data
import {products} from '../data'
import ProductSlider from './ProductSlider';

const Products = () => {
  //destructure products
  const {title,subtitle}= products;
  return (
    <section id='Shop'className='section text-center mx-auto'>
    <div>
      <div>
        <h2 className='title'>
          {title}
        </h2>
        <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>
          {subtitle}

        </p>
      </div>
      {/* slider */}
      <div>
        <ProductSlider/>
      </div>
    </div>
    </section>
  )
};

export default Products;
