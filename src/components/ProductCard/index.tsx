import { useState } from "react";
import Icon from "../Icon";


function ProductCard({ image, title, price }: { image: string, title: string, price: string }) {
    const [liked, setLiked] = useState(false);

    // Fonction pour basculer l'état de "like"
    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div className="max-w-40 relative flex flex-col items-center justify-center gap-3 pt-12 pb-6 px-4 border rounded-xl bg-gray-100 md:max-w-80 md:px-10">
            {/* Like Icon */}
            <div
                onClick={toggleLike}
                className={`cursor-pointer absolute top-2 right-2 md:top-4 md:right-4 ${liked ? "text-red-500" : "text-gray-400"
                    }`}
            >
                {liked ? (<Icon name="heartFilled" size={40} />) : (<Icon name="heart" size={40} />)}
            </div>

            {/* Image du produit */}
            <img src={image} alt={title} className="w-28 h-auto" />

            {/* Titre du produit */}
            <p className="h-12 text-center font-bold overflow-hidden text-ellipsis line-clamp-2">
                {title}
            </p>

            {/* Prix */}
            <p className="text-center text-3xl font-bold">{price}</p>

            {/* Bouton */}
            <button className="w-full text-white bg-black py-2 px-4 rounded-lg">
                Buy Now
            </button>
        </div>
    );
}

export default ProductCard;
