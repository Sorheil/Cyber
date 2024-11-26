import airpod from "./../../assets/Products-banner/apple-airpods-max.png"
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
    }]
import ProductCard from "../ProductCard"
export default function DiscountProducts() {
    return (
        <section className="py-14 px-4 md:py-16 md:px-40">
            {/* list of products */}
            <h3 className="text-2xl font-bold">Discounts up to -50%</h3>

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