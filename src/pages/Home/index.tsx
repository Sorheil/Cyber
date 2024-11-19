// style
import './../../App.css'
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import SimpleBanner from '../../components/SimpleBanner'

export default function Home() {
    const simpleBanner = [{
        id: 1,
        title: "Apple Airpods Max",
        description: "Computational audio. Listen, it's powerful",
        name: 'apple-airpods-max'
    },
    {
        id: 2,
        title: "Apple Vision Pro",
        description: "An immersive way to experience entertainment",
        name: 'apple-vision-pro'
    },
    {
        id: 3,
        title: "Playstation 5",
        description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
        name: 'playstation-5'
    }]
    return (<>
        <Header />
        <main>
            <Banner />
            {simpleBanner.map((item, index) => (
                <SimpleBanner
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    name={item.name}
                />
            ))}
        </main>
        <Footer />
    </>
    )
}