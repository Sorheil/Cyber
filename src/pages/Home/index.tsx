// style
import './../../App.css'
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import SimpleBanner from '../../components/SimpleBanner'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import DiscountProducts from '../../components/DiscountProducts'
import BannerSummer from '../../components/BannerSummer'

export default function Home() {

    return (<>
        <Header />
        <main>
            <Banner />
            <SimpleBanner />
            <Categories />
            <Products />
            <DiscountProducts />
            <BannerSummer />
        </main>
        <Footer />
    </>
    )
}