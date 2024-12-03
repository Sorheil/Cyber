import Icon from "../Icon"
import { useState } from "react"
export default function Dropdown({ label, children }: { label: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col gap-4 mb-3">
            <div className="flex justify-between items-center text-xl font-bold py-2 border-b-2"> <p>{label}</p> <button onClick={toggleDropdown} className={`${isOpen ? '-rotate-180' : ''}`}> <Icon name="arrowDown" size={40} /></button></div>
            <div className={`${isOpen ? "block" : "hidden"}`}>{children}</div>
        </div>
    )
}