import { Link, Head, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const index = ({ flash }) => {
    const [showMessageRegistration, setShowMessageRegistration] =
        useState(true);
    const [showMessageLogin, setShowMessageLogin] = useState(true);
    const { setData, post, errors } = useForm({
        username: "",
        password: "",
    });

    useEffect(() => {
        setTimeout(() => {
            setShowMessageRegistration(false);
        }, 2900);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessageLogin(true);
        post("/login");

        setTimeout(() => {
            setShowMessageLogin(false);
        }, 2900);
    };

    return (
        <>
            {showMessageRegistration && flash.registrationSuccess && (
                <div
                    className="alert container mx-auto mt-0 lg:mt-10 alert-success absolute z-10 top-0 left-0 right-0
                     animate-fadeOut"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-white text-xl">
                        {flash.registrationSuccess}
                    </span>
                </div>
            )}
            {showMessageLogin && flash.loginFailed && (
                <div
                    className="alert container mx-auto mt-0 lg:mt-10 alert-error absolute z-10 top-0 left-0 right-0
                     animate-fadeOut"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-white text-xl">
                        {flash.loginFailed}
                    </span>
                </div>
            )}
            <Head title="Login" />
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-teal-500 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">
                            GoShopping
                        </h1>
                        <p className="text-white mt-1 text-3xl mb-6">
                            The most popular e-commerce
                        </p>
                        <Link
                            href="/"
                            className="flex flex-col items-center text-2xl text-emerald-400"
                        >
                            <BsFillArrowLeftSquareFill
                                size={40}
                                className="mb-3 text-current text-cyan-400 animate-animateArrowLeft"
                            />
                            Kembali berbelanja
                        </Link>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form className="bg-white" onSubmit={handleSubmit}>
                        <p className="text-3xl font-normal text-gray-600 mb-7">
                            Please Login
                        </p>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none"
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                        </div>
                        {errors?.username && (
                            <p className="text-red-500">{errors.username}</p>
                        )}
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                        {errors?.password && (
                            <p className="text-red-500">{errors.password}</p>
                        )}
                        <button
                            type="submit"
                            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                        >
                            Login
                        </button>

                        <div className="flex justify-center mt-4">
                            <small className="text-lg">
                                Belum daftar?{" "}
                                <Link
                                    className="text-blue-600"
                                    href="/register"
                                >
                                    Daftar akun
                                </Link>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default index;
