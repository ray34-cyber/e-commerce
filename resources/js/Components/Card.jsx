import React, { useState } from "react";

const Card = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardClasses = `bg-white rounded-lg shadow-lg p-4 ${
        isHovered
            ? "transform hover:scale-105 transition-transform duration-300"
            : ""
    }`;

    // Data dummy untuk card
    const title = "Card Title";
    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const image = "https://dummyimage.com/200x200/ccc/000";

    return (
        <div className="card-wrapper">
            <div
                className={cardClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className="w-32 h-32 mx-auto mb-4 rounded-full"
                    src={image}
                    alt="Card"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;
