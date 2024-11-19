
interface SimpleBannerProps {
    id: number;
    title: string;
    description: string;
    name: string
}
export default function SimpleBanner({ id, title, description, name }: SimpleBannerProps) {
    const srcImg = `src/assets/products-banner/${name}.png`
    const isDark = id % 2 === 0
    return (
        <article className={`flex flex-col items-center gap-3 px-4 py-10 ${isDark ? 'bg-[#353535]' : 'bg-white'}`}>
            <div>
                <img src={srcImg} alt={name} />
            </div>
            <h3 className={`text-4xl font-light ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
            <p className={`text-lg text-center text-black/50 ${isDark ? 'text-white/25' : 'text-black/50'}`} >{description}</p>
        </article>
    )
}