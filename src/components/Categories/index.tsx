import { useRef } from "react";
import Category from "./../Category";
import Icon from "../Icon";

export default function Categories() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = (): void => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = (): void => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const categories = [
        { name: "Phones", icon: "phone" },
        { name: "Smart Watches", icon: "watch" },
        { name: "Cameras", icon: "camera" },
        { name: "Headphones", icon: "headphones" },
        { name: "Computers", icon: "computer" },
        { name: "Gaming", icon: "game" },
        { name: "Computers", icon: "computer" },
        { name: "Cameras", icon: "camera" },
        { name: "Headphones", icon: "headphones" },
        { name: "Smart Watches", icon: "watch" },
        // Ajoutez d'autres catégories ici
    ];

    return (
        <section className="py-12 px-4 bg-gray-50 md:py-16 md:px-40 ">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold md:text-3xl">Browse By Category</h2>
                <div className="flex">
                    <button onClick={scrollLeft}>
                        <Icon name="arrowLeft" size={40} />
                    </button>
                    <button onClick={scrollRight}>
                        <Icon name="arrowRight" size={40} />
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                className="grid grid-flow-col auto-cols-[minmax(150px,1fr)] gap-4 mt-10 overflow-x-auto md:h-32 scrollbar-hide md:overflow-hidden"
            >
                {categories.map((category) => (
                    <Category key={category.name} name={category.name} icon={category.icon} />
                ))}

            </div>
        </section>
    );
}
