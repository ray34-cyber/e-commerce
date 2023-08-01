import React, { useState } from "react";
import Main from "../layouts";
import axios from "axios";

const Create = (props) => {
    const [data, setData] = useState({
        nama_produk: "",
        slug: "",
        category_id: 1,
        body: "",
        price: 0,
    });

    const handleNamaProdukChange = (e) => {
        const namaProduk = e.target.value;
        setData((prevData) => ({ ...prevData, nama_produk: namaProduk }));
        axios
            .get(`/dashboard/products/checkSlug?nama_produk=${namaProduk}`)
            .then(() => {
                setData((prevData) => ({ ...prevData, slug: namaProduk }));
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/dashboard/products", data)
            .then(() => {
                window.location.href = "/dashboard/products";
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="container mx-auto flex flex-col md:px-72 mt-10">
            <h1 className="text-center flex-auto text-4xl font-bold">
                Add new product
            </h1>
            <div className="flex-auto md:flex-none">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="nama_produk"
                        >
                            Nama Produk
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nama_produk"
                            type="text"
                            placeholder="Nama Produk"
                            name="nama_produk"
                            onChange={(e) => handleNamaProdukChange(e)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="slug"
                        >
                            Slug
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight input-success focus:outline-none focus:shadow-outline"
                            id="slug"
                            type="text"
                            name="slug"
                            placeholder="Slug"
                            value={data.slug}
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    slug: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="select select-success w-full max-w-xs"
                            name="category_id"
                            value={data.category_id}
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    category_id: e.target.value,
                                }))
                            }
                        >
                            {props.categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name_category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="body"
                        >
                            Description
                        </label>
                        <textarea
                            name="body"
                            id="body"
                            cols="70"
                            rows="5"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 input-success leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Description your product"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    body: e.target.value,
                                }))
                            }
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 input-success leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            name="price"
                            placeholder="Price Product"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    price: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="btn btn-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add new product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Main(Create);
