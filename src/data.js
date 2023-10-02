// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from '@/assets/img/features-1.jpg';
import Features2Img from '@/assets/img/features-2.jpg';
import ChairImg from '@/assets/img/chair.png';
import BedImg from '@/assets/img/bed.jpg';
import CupboardImg from '@/assets/img/console.png';
import LightingImg from '@/assets/img/lighting.png';
import Product1Img from '@/assets/img/products/product-1.jpg';
import Product2Img from '@/assets/img/products/product-2.jpg';
import Product3Img from '@/assets/img/products/product-3.jpg';
import Product4Img from '@/assets/img/products/product-4.jpg';
import Product5Img from '@/assets/img/products/product-5.jpg';
import Product6Img from '@/assets/img/products/product-6.jpg';
import Product7Img from '@/assets/img/products/product-7.jpg';
import Product8Img from '@/assets/img/products/product-8.jpg';
import Product9Img from '@/assets/img/products/product-9.jpg';
import Product10Img from '@/assets/img/products/product-10.jpg';
import Product11Img from '@/assets/img/products/product-11.jpg';
import Product12Img from '@/assets/img/products/product-12.jpg';
import Product13Img from '@/assets/img/products/product-13.jpg';
import Product14Img from '@/assets/img/products/product-14.jpg';
import Product15Img from '@/assets/img/products/product-15.jpg';
import Product16Img from '@/assets/img/products/product-16.jpg';
import Product17Img from '@/assets/img/products/product-17.jpg';
import Product18Img from '@/assets/img/products/product-18.jpg';
import Product19Img from '@/assets/img/products/product-19.jpg';
import Product20Img from '@/assets/img/products/product-20.jpg';


export const navigation = [
  {
    name: 'home',
    link: '#',
  },
  {
    name: 'features',
    link: 'Features',
  },
  {
    name: 'New Arrivals',
    link: 'New Arrivals',
  },
  {
    name: 'Shop',
    link: 'Shop',
  },

  {
    name: 'contact',
    link: 'Contact',
  },
];

export const hero = {
  title: 'Transforming Spaces, Crafting Comfort',
  subtitle:
  "Discover Your Perfect Oasis. Elevate Your Home with Timeless Furniture."

};

export const stats = [
  {
    value: '7',
    text: 'Years of Experience',
  },
  {
    value: '2',
    text: ' Branches Nationwide',
  },
  {
    value: '10k+',
    text: 'Furnishings Sold',
  },
  {
    value: '260+',
    text: 'Furniture Variants',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'You Imagine, We Curate',
  subtitle:
    'We offer a variety of unique experiences',
  buttonText: 'Shop Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:'Valuation services for our online furniture store offer comprehensive insights into the worth of your furnishings. Our experienced team employs industry-leading methods to assess the market value of your furniture pieces, providing you with a clear understanding of their financial worth. Whether you are buying, selling, or insuring, our valuations empower informed decisions.'
      
        
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Furniture Models',
      subtitle:
        'Our online furniture store continuously evolves its services. From design consultation to customization, we are committed to enhancing your furniture-buying experience. We strive to bring innovation and quality to every aspect of furniture development.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Find the right manufacturer for unique projects',
    subtitle:
      'We bridge the gap between furniture manufacturers and customers. Our platform serves as a direct conduit, ensuring you access top-quality, diverse options, and personalized solutions for your furnishing needs.'
}
}

export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately at promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Chairs',
      image: <ChairImg />,
    },
    {
      name: 'Beds',
      image: <BedImg />,
    },
    {
      name: 'Cupboards',
      image: <CupboardImg />,
    },
    {
      name: 'Lighting',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide  for you are selected from the best with quality in mind',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Indurstrial Stool',
          price: 24000,
          oldPrice: 29000,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Nested Coffee Table',
          price: 12000,
          oldPrice: 16500,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Suspended Shelves',
          price: 16000,
          oldPrice: 19500,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Leather Beanbag',
          price: 9000,
          oldPrice: 11000,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Anthracite Pouff',
          price: 23500,
          oldPrice: 26000,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'L-Sofa',
          price: 6300,
          oldPrice: 7800,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Dining Set',
          price: 39000,
          oldPrice: 42400,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Mahogany Console',
          price: 26500,
          oldPrice: 29000,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Nook Seat',
          price: 15225,
          oldPrice: 17400,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Study Desk',
          price: 10900,
          oldPrice: 11890,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product11Img />,
          icon: <IoMdAddCircle />,
          name: 'Reading Desk',
          price: 10900,
          oldPrice: 11890,
        },
        {
          image: <Product12Img />,
          icon: <IoMdAddCircle />,
          name: 'Office Set',
          price: 27250,
          oldPrice: 30150,
        },
        {
          image: <Product13Img />,
          icon: <IoMdAddCircle />,
          name: 'King Bed Set',
          price: 35200,
          oldPrice: 37400,
        },
        {
          image: <Product14Img />,
          icon: <IoMdAddCircle />,
          name: 'Concentric Chandelier',
          price: 30800,
          oldPrice: 31890,
        },
        {
          image: <Product15Img />,
          icon: <IoMdAddCircle />,
          name: 'Breakfast Table',
          price: 19000,
          oldPrice: 21900,
        },
        {
          image: <Product16Img />,
          icon: <IoMdAddCircle />,
          name: 'Leather Lazy Boy',
          price: 26500,
          oldPrice: 27250,
        },
        {
          image: <Product17Img />,
          icon: <IoMdAddCircle />,
          name: 'Strand Lamp',
          price: 16400,
          oldPrice: 17100,
        },
        {
          image: <Product18Img />,
          icon: <IoMdAddCircle />,
          name: 'Swivel Office Chair',
          price: 12600,
          oldPrice: 13800,
        },
        {
          image: <Product19Img />,
          icon: <IoMdAddCircle />,
          name: 'Coffee Table Industrial',
          price: 14200,
          oldPrice: 17400,
        },
        {
          image: <Product20Img />,
          icon: <IoMdAddCircle />,
          name: 'Cedar Chest Drawers',
          price: 30875,
          oldPrice: 31890,
        },
      ],
    },
  ],
};



export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Furniture Fortress 2022 - All Rights Reserved.',
};
