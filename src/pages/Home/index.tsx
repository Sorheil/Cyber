// style
import './../../App.css'
// components

import HeroBanner from '../../components/HeroBanner'
import FeaturedBanner from '../../components/FeaturedBanner'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import DiscountProducts from '../../components/DiscountProducts'
import SummerBanner from '../../components/SummerBanner'
import Carousel from '../../components/Caroussel'
// images
import airpods from "./../../assets/banner-product/orreillete.png"
import ipad from "./../../assets/banner-product/ipad-pro.png"
import samsung from "./../../assets/banner-product/samsung-galaxy.png"
import macbook from "./../../assets/banner-product/macBook-pro-14.png"

const slides = [
    {
        image: airpods,
        title: 'iPad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking, and ease of use.',
    },
    {
        image: ipad,
        title: 'iPad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking, and ease of use.',
    },
    {
        image: samsung,
        title: 'iPad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking, and ease of use.',
    },
    {
        image: macbook,
        title: 'iPad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking, and ease of use.',
    },

];


export default function Home() {

    return (<>
        <main>
            <HeroBanner />
            <FeaturedBanner />
            <Categories />
            <Products />
            {/* popular products */}
            <div className="w-full">
                <Carousel slides={slides} />
            </div>
            <DiscountProducts />
            <SummerBanner />
        </main>
    </>
    )
}