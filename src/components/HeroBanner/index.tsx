import iphoneImage from '../../assets/image-product-home/Iphone.png'
export default function HeroBanner() {
    return (
        <header className="flex flex-col items-center gap-12 pt-20 px-4 bg-[#211C24] md:flex-row md:justify-between md:pt-32 md:px-32 ">

            <div className='flex flex-col justify-center items-center gap-5 lg:items-start lg:gap-3 '>
                <p className='text-2xl text-white/50'>Pro.Beyond.</p>
                <h2 className='text-center'><span className='text-6xl text-white/80 font-extralight'>Iphone 14</span> <br className='md:hidden' /><span className='text-6xl text-white font-semibold'>Pro</span></h2>
                <p className='text-center text-lg text-white/50'>created to change everything for the better.For everypone</p>
                <button className='mt-5 text-lg text-white font-semibold border border-white/50 py-2 px-4'>Shop Now</button>
            </div>

            <div className=''>
                <img src={iphoneImage} alt="iphone-14" className='' />
            </div>

        </header>
    )
}
