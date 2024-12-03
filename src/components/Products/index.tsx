const products = [
    {
        image: airpod,
        title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$399",
    },
    {
        image: airpod,
        title: "AirPods Pro (2nd generation) with MagSafe Case",
        price: "$249",
    },
    {
        image: airpod,
        title: "Apple MacBook Air 13-inch M2 Chip 256GB",
        price: "$999",
    },
    {
        image: airpod,
        title: "iPhone 15 Pro Max 256GB Titanium Frame",
        price: "$1,199",
    },
    {
        image: airpod,
        title: "Apple iPad Pro 11-inch 128GB Wi-Fi",
        price: "$799",
    },
    {
        image: airpod,
        title: "Apple Magic Keyboard for iPad Pro 11-inch",
        price: "$299",
    },
    {
        image: airpod,
        title: "Apple HomePod mini Smart Speaker",
        price: "$99",
    },
    {
        image: airpod,
        title: "Apple TV 4K 128GB Wi-Fi + Ethernet",
        price: "$149",
    },
    {
        image: airpod,
        title: "Apple Pencil (2nd generation)",
        price: "$129",
    },
    {
        image: airpod,
        title: "Beats Studio Buds – True Wireless Noise Cancelling Earbuds",
        price: "$149",
    },
];


/**
 * Todo
 * add fade in transitions in div for products
 */

import airpod from "./../../assets/Products-banner/apple-airpods-max.png"
import ProductCard from "../ProductCard";
import { useState } from "react";
export default function Products() {
    const [activeContent, setActiveContent] = useState<string>("New Arrival")

    return (
        <section className="py-14 px-4 md:py-16 md:px-40">
            {/* list of products */}
            <div className="flex justify-between font-bold px-0 md:justify-start md:gap-5 ">
                <button className={`${activeContent === "New Arrival" ? " border-b-4 border-black" : "opacity-40"}`} onClick={() => setActiveContent("New Arrival")}>New Arrival</button>
                <button className={`${activeContent === "BestSeller" ? " border-b-4 border-black" : "opacity-40"}`} onClick={() => setActiveContent("BestSeller")}>BestSeller</button>
                <button className={`${activeContent === "Featured Products" ? " border-b-4 border-black" : "opacity-40"}`} onClick={() => { setActiveContent("Featured Products") }}>Featured Products</button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-6  ">
                {activeContent === "New Arrival" && products.map((product, index) => (

                    <ProductCard
                    key={`product1-${index}`}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}

                {activeContent === "BestSeller" && products.map((product, index) => (
                    <ProductCard
                        key={`product2-${index}`}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}

                {activeContent === "Featured Products" && products.map((product, index) => (
                    <ProductCard
                    key={`product3-${index}`}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    )
}