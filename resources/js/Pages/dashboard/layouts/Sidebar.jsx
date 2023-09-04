import { Link } from "@inertiajs/react";
import React from "react";

const Sidebar = () => {
    const handleLogout = (e) => {
        e.preventDefault();

        axios.post("/logout").then(() => {
            window.location.href = "/";
        });
    };
    return (
        <>
            <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 ">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                        <div className="p-4">
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className={`flex items-center hover:bg-violet-300 rounded-xl font-bold text-sm text-blue-600 py-3 px-4 ${
                                            window.location.pathname ==
                                            "/dashboard"
                                                ? "bg-emerald-200"
                                                : "bg-white"
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="text-lg mr-4"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dashboard/products"
                                        className={`flex items-center hover:bg-violet-300 rounded-xl font-bold text-sm text-blue-600 py-3 px-4 ${
                                            window.location.pathname.startsWith(
                                                "/dashboard/products"
                                            )
                                                ? "bg-emerald-200"
                                                : "bg-white"
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="text-lg mr-4"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                        </svg>
                                        My Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="flex items-center hover:bg-violet-300 rounded-xl font-bold text-sm text-blue-600 py-3 px-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="text-lg mr-4"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <form
                            onSubmit={handleLogout}
                            className=" font-bold text-sm ml-2"
                        >
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-9 px-8 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    className="mr-4"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
