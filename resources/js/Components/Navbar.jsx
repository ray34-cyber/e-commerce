import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showCategories, setShowCategories] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Lakukan operasi pencarian sesuai kebutuhan Anda
    };

    const handleMouseEnter = () => {
        setShowCategories(true);
    };

    const handleMouseLeave = () => {
        setShowCategories(false);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center flex-grow">
                        <Link href="/" className="text-white mr-4">
                            Logo
                        </Link>
                        <Link
                            href="/categories"
                            className="text-white mr-4 cursor-pointer"
                        >
                            Kategori
                        </Link>
                        <div className="w-full relative">
                            <input
                                type="search"
                                className="bg-white h-10 pr-10 rounded-full text-sm focus:outline-none w-full"
                                placeholder="Cari Produk ..."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 mt-3 mr-4"
                            >
                                <svg
                                    className="h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M14.828 13.657a8 8 0 111.415-1.415l5.573 5.573-1.415 1.415-5.573-5.573zM8 15A7 7 0 108 1a7 7 0 000 14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <Link
                            href="/register"
                            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Register
                        </Link>
                        <Link
                            href="/login"
                            className="ml-2 px-4 py-2 bg-gray-700 text-white rounded-md"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
