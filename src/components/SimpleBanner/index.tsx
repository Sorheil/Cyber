/**TODO
 * -ajouter des images
 * 
 */

// images
import airpods from "./../../assets/Products-banner/apple-airpods-max.png"
import vision from "./../../assets/Products-banner/apple-vision-pro.png"
import ps5 from "./../../assets/Products-banner/playstation-5.png"
import macbook from "./../../assets/Products-banner/macBook-pro-14.png"


export default function SimpleBanner() {

    return (
        <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2">
            {/* airpods */}
            <div className="row-start-1 row-end-2 flex flex-col justify-center items-center py-10 px-4 bg-gray-200
            md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2  md:flex-row md:p-0 md:pr-7">
                <img src={airpods} alt="apple-airpods-max" className="md:h-full md:w-auto md:relative md:transform md:-translate-x-1/2" />
                <div className="text-center flex flex-col gap-3 md:text-left ">
                    <h2 className="text-3xl font-light "> Apple Airpods <span className="font-semibold">Max</span> </h2>
                    <p className="text-lg text-black/50 ">computational audio, Listen, it's powerful</p>
                </div>
            </div>

            {/* apple vision pro */}
            <div className="row-start-2 row-end-3 flex flex-col justify-center items-center bg-black/90 py-10 px-4 
            md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 ">
                <img src={vision} alt="apple-vison-pro"  />
                <div className="text-center flex flex-col gap-3 md:text-left ">
                    <h2 className="text-3xl font-light text-white"> Apple Vision<span className="font-semibold">Pro</span></h2>
                    <p className="text-lg text-white/50 ">An immersive way to experience entertainment</p>
                </div>
            </div>

            {/* ps5 */}
            <div className="row-start-3 row-end-4 flex flex-col justify-center items-center py-10 px-4 
                md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 md:flex-row md:p-0 md:pr-7">
                <img src={ps5} alt="playstation-5" className="md:h-full md:w-auto md:relative md:transform md:-translate-x-1/4" />
                <div className="text-center flex flex-col gap-3">
                    <h2 className="text-3xl font-light md:text-left"> Playstation <span className="font-semibold">5</span></h2>
                    <p className=" md:w-1/2 text-lg text-black/50 md:text-left ">Incredibly powerful CPUs, and an SSD with integrated I/O will redefine your Playstation experience</p>
                </div>
            </div>

            {/* macbook */}
            <div className="row-start-4 row-end-5 flex flex-col justify-center items-center bg-gray-200 py-8 px-4 
            md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-4">
                <img src={macbook} alt="macBook-pro-14" className="md:w-full md:h-auto md:relative " />
                <div className=" text-center flex flex-col gap-3 ">
                    <h2 className="text-3xl font-light "><span className="font-semibold">Macbook</span> Air</h2>
                    <p className=" text-lg text-black/50">The new 15-inch MacBook air makes room for more of what you love with a spacious Liquid Retina display</p>
                    <button className=' w-full text-lg border border-black/50  rounded-md py-2 px-4'>Shop Now</button>
                </div>
            </div>

        </section>
    )
}
