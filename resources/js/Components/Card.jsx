import React, { useState } from "react";

const Card = () => {
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
                <img
                    src="https://source.unsplash.com/300x200?shoes"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
