import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const Card = ({
    product: {
        id,
        nama_produk,
        price,
        body,
        category: { name_category, category_slug },
        image,
        slug,
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

    return (
        <div
            className={cardClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <figure>
                {image ? (
                    <img src={`storage/${image}`} alt="Shoes" />
                ) : (
                    <img
                        src={`https://source.unsplash.com/300x200?${nama_produk}`}
                        alt="Shoes"
                    />
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{nama_produk}!</h2>
                <p>
                    {body.length >= 50
                        ? body.replace(body.substring(50, body.length), " ...")
                        : body}
                </p>
                <p>Rp. {price}</p>
                <div className="card-actions justify-end">
                    <Link
                        href={`/order/${slug}`}
                        className="btn btn-outline btn-secondary"
                    >
                        Buy Now
                    </Link>
                </div>
                <Link
                    className="badge badge-outline inline"
                    href={`/?category=${category_slug}`}
                >
                    {name_category}
                </Link>
            </div>
        </div>
    );
};

export default Card;
