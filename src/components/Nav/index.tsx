import { NavLink } from "react-router-dom"
export default function Nav({ isHidden }: { isHidden: boolean }) {
    const Links = [{ name: "Home", to: "/" }, { name: "About", to: "/about" }, { name: "Contact us", to: "/contact" }, { name: "Blog", to: "/blog" }]
    return (
        <nav
            className={`fixed inset-0 flex flex-col justify-center items-center text-3xl text-white gap-3 backdrop-blur-sm transition-transform duration-500 ${isHidden ? '-translate-x-full' : 'translate-x-0'
                } md:static md:translate-x-0 md:flex-row md:gap-5 md:text-lg md:text-gray-600`}>
            {Links.map((item) => (
                <NavLink to={item.to} className={({ isActive }) => isActive ? "border-b-4 md:border-b-0 md:text-black md:font-bold" : ""} >{item.name}</NavLink>
            ))
            }
        </nav>
    )
}