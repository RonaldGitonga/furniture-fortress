import './globals.css'
import { Comfortaa} from 'next/font/google'
//import apollo wrapper aka apollo client provider
//import { ApolloWrapper } from "/@lib/apollo-wrapper";

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Furniture Fortress',
  description: 'A Next.js fullstack E-commerce site',
}

export default function RootLayout({ children }) {

  return (
   
    <html lang="en">
      {/* {Wrapper everything with new apollo wrapper} */}
  
        <body className={comfortaa.className}>

          <div className='w-full max-w-[1440px] mx-auto bg-white'>

            <Header/>
            {children}
            <Footer/>
          </div>
        </body>

    </html>

  )
}
