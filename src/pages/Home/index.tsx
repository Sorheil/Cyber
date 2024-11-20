// style
import './../../App.css'
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import SimpleBanner from '../../components/SimpleBanner'

export default function Home() {

    return (<>
        <Header />
        <main>
            <Banner />
            <SimpleBanner />
        </main>
        <Footer />
    </>
    )
}