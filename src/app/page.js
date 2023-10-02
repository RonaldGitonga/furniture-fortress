import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FeaturesSecond from '@/components/FeaturesSecond'
import NewItems from '@/components/NewItems'
import Products from '@/components/Products'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'



export default function Home() {

  return (
    <main className="w-full max-w-[1440px] mx-auto bg-white">
  
        <Hero/>
        <Features/>
        <NewItems/>
        <FeaturesSecond/>
        <Products/>
        <Newsletter/>
  
        
    
    </main>
  )
}
