import { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";

const Navbar = ({ categories }) => {
    const [searchValue, setSearchValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const props = usePage().props;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get("search");
        const categoryParam = urlParams.get("category");
        setSearchValue(searchParam || "");
        setCategoryValue(categoryParam || "");
    }, []);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleLogout = (e) => {
        e.preventDefault();

        axios.post("/logout").then(() => {
            window.location.href = "/";
        });
    };

    return (
        <div className="navbar bg-emerald-300 container mx-auto justify-between rounded-xl">
            <Link
                className="btn btn-primary normal-case text-xl flex-shrink-0"
                href="/"
            >
                <img
                    src="./assets/img/nicese-logos.jpeg"
                    className="w-[2.5vw]"
                />
            </Link>
            <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="btn m-1">
                    Kategori
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <Link href={`?category=${category.slug}`}>
                                    {category.name_category}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <form action="/" method="get" className="flex-1 flex items-center">
                {categoryValue && (
                    <input
                        type="hidden"
                        name="category"
                        value={categoryValue}
                        hidden
                    />
                )}

                <div className="flex-1 mr-2">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="p-2 rounded-lg w-full"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary btn-square rounded-r-lg mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </form>
            {props.auth?.user ? (
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                href="/dashboard"
                                className="justify-center text-center"
                            >
                                My dashboard
                            </Link>
                        </li>
                        <hr />
                        <li className="pt-2">
                            <form onSubmit={handleLogout} className="flex">
                                <button type="submit" className="flex-grow">
                                    Logout
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                    <Link href="/login" className="btn btn-base">
                        Login
                    </Link>
                    <Link href="/register" className="btn btn-base">
                        Register
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
