import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Card = ({
    product: {
        nama_produk,
        price,
        body,
        category: { name_category, slug },
    },
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardClasses = `card w-96 bg-base-100 shadow-xl rounded-lg p-4 ${
        isHovered
            ? "transform hover:scale-105 transition-transform duration-300"
            : ""
    }`;

    console.log(props);
    return (
        <div
            className={cardClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <figure>
                <img
                    src={`https://source.unsplash.com/300x200?${nama_produk}`}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{nama_produk}!</h2>
                <p>{body}</p>
                <p>{price} $</p>
                <div className="card-actions justify-end">
                    <Link
                        className="badge badge-outline"
                        href={`/?category=${slug}`}
                    >
                        {name_category}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
