import DrawingTablet from "./../../assets/banner-summer/tablet.png"
import macbook from "./../../assets/banner-summer/macbook.png"
import iphone from "./../../assets/banner-summer/iphone.png"
import watch from "./../../assets/banner-summer/watch.png"
import tablet from "./../../assets/banner-summer/phone.png"
export default function SummerBanner() {
    return (
        <>
            <section className="relative bg-black/80 flex flex-col justify-center items-center gap-5 py-32 px-4 overflow-hidden">
                <div className="text-center text-white z-10">
                    <h2 className="text-4xl font-light">
                        Big Summer <span className="font-bold">Sale</span>
                    </h2>
                    <p className="opacity-50 text-lg py-5">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                </div>
                <button className='mt-5 text-lg text-white font-semibold border border-white/50 py-2 px-4 mx-auto'>Shop Now</button>
                <img src={DrawingTablet} alt="tablet" className="absolute transform  top-0 left-0 -translate-y-1/2 -translate-x-1/2 scale-110 md:-translate-y-0 md:scale-125 " />
                <img src={macbook} alt="macbook" className="absolute -top-0 -translate-y-1/4 transform  scale-75 md:translate-x-1/2 md:right-2/3  md:scale-125" />
                <img src={iphone} alt="iphone" className="absolute  -top-2.5 right-0 transform translate-x-1/5 scale-100 md:top-0 md:scale-125" />
                <img src={watch} alt="smartwatch" className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3  scale-75 md:translate-x-1/5 md:scale-125" />
                <img src={tablet} alt="phone" className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3 md:translate-x-1/5 scale-75 md:scale-125" />
            </section>
        </>
    )
}