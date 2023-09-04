import { usePage, useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect } from "react";

const Order = ({ product }) => {
    const {
        id,
        nama_produk,
        price,
        body,
        category: { name_category, category_slug },
        image,
        slug,
    } = product[0];

    const { data, setData, post } = useForm({
        qty: 0,
        name: "",
        phone: "",
        address: "",
        price,
        nama_produk,
        image,
        slug,
    });

    const handleCheckOut = (e) => {
        e.preventDefault();

        post(`/order/${slug}`);
    };
    return (
        <div className="container my-12 mx-auto flex justify-center ">
            <div className="basis-1/2 py-8 px-8 flex flex-col items-center shadow-2xl rounded-xl shadow-fuchsia-300">
                {image ? (
                    <img
                        src={`storage/${image}`}
                        alt="Shoes"
                        className="block"
                    />
                ) : (
                    <img
                        src={`https://source.unsplash.com/300x200?${nama_produk}`}
                        alt="Shoes"
                        className="flex-initial lg:basis-3/4"
                    />
                )}
                <div className="mt-6 w-full">
                    <h1 className="text-3xl">{nama_produk}</h1>
                </div>
                <p className="mt-3">{body}</p>
                <form onSubmit={handleCheckOut} className="mt-5 w-full">
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="qty"
                        >
                            Jumlah Barang
                        </label>
                        <input
                            className="shadow input-success appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="qty"
                            type="number"
                            placeholder="Jumlah yang di pesan"
                            name="qty"
                            onChange={(e) => setData("qty", e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Nama pelanggan
                        </label>
                        <input
                            className="shadow input-success appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukkan nama anda"
                            name="name"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            No Telp
                        </label>
                        <input
                            className="shadow input-success appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Masukkan No HP anda"
                            name="phone"
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="address"
                        >
                            Alamat
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            cols="70"
                            rows="5"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 input-success leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan alamat anda"
                            onChange={(e) => setData("address", e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="btn btn-outline btn-secondary"
                        >
                            Checkout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;
