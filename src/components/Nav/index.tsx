import { Link } from "react-router-dom"
interface NavProps {
    isHidden: boolean
}
export default function Nav({ isHidden }: NavProps) {
    return (
        <nav
            className={`fixed inset-0 flex flex-col justify-center items-center text-3xl gap-3 backdrop-blur-sm transition-transform duration-500 ${isHidden ? '-translate-x-full' : 'translate-x-0'
                } md:static md:translate-x-0 md:flex-row md:gap-5 md:text-lg`}
        >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/blog">Blog</Link>
        </nav>

    )
}