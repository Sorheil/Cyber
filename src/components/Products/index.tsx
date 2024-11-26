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

import airpod from "./../../assets/Products-banner/apple-airpods-max.png"
import ProductCard from "../ProductCard";
export default function Products() {
    return (
        <section className="py-14 px-4 md:py-16 md:px-40">
            {/* list of products */}
            <div className="flex justify-between font-bold md:justify-start md:gap-5">
                <h3 className="border-b-4 border-black">New Arrival</h3>
                <h3 className="opacity-40">BestSeller</h3>
                <h3 className="opacity-40">Featured Products</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-6 px-4 ">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    )
}