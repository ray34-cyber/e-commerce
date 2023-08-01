import React, { useEffect, useState } from "react";
import Main from "../layouts";
import axios from "axios";

const Edit = (props) => {
    const [data, setData] = useState({
        nama_produk: props?.product?.nama_produk || "",
        slug: props?.product?.slug || "",
        category_id: props?.product?.category_id || 1,
        body: props?.product?.body || "",
        price: props?.product?.price || 0,
    });
    const [errorMessage, setErrorMessage] = useState({});

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios
                .patch(`/dashboard/products/${props.product.slug}`, data)
                .then(() => {
                    window.location.href = "/dashboard/products";
                });
        } catch (errors) {
            setErrorMessage(errors.response.data.errors);
        }
    };

    const handleNamaProdukChange = (e) => {
        setData((prevData) => ({ ...prevData, nama_produk: e.target.value }));
        axios
            .get("/dashboard/products/checkSlug?nama_produk=" + e.target.value)
            .then(() => {
                setData((prevData) => ({ ...prevData, slug: e.target.value }));
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container mx-auto flex flex-col md:px-72 mt-10">
            <h1 className="text-center flex-auto text-4xl font-bold">
                Edit product
            </h1>
            <div className="flex-auto md:flex-none">
                <form
                    onSubmit={(e) => updateUser(e)}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-3">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="nama_produk"
                        >
                            Nama Produk
                        </label>
                        <input
                            className="shadow appearance-none border input-success rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nama_produk"
                            type="text"
                            placeholder="Nama Produk"
                            name="nama_produk"
                            onChange={handleNamaProdukChange}
                            value={data.nama_produk}
                        />
                    </div>
                    {errorMessage?.nama_produk &&
                        errorMessage?.nama_produk[0] && (
                            <p className="text-red-500">
                                {errorMessage.nama_produk[0]}
                            </p>
                        )}
                    <div className="mb-3">
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
                            value={data.slug}
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    slug: e.target.value,
                                }))
                            }
                        />
                    </div>
                    {errorMessage?.slug && errorMessage?.slug[0] && (
                        <p className="text-red-500">{errorMessage.slug[0]}</p>
                    )}
                    <div className="mb-3">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="select select-success w-full max-w-xs"
                            name="category_id"
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    category_id: parseInt(e.target.value, 10),
                                }))
                            }
                            value={data.category_id}
                        >
                            {props.categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name_category}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errorMessage?.category_id &&
                        errorMessage?.category_id[0] && (
                            <p className="text-red-500">
                                {errorMessage.category_id[0]}
                            </p>
                        )}
                    <div className="mb-1">
                        <label
                            className="block text-gray-700 text-sm font-bold"
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
                            value={data.body}
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    body: e.target.value,
                                }))
                            }
                        ></textarea>
                    </div>
                    {errorMessage?.body && errorMessage?.body[0] && (
                        <p className="text-red-500">{errorMessage.body[0]}</p>
                    )}
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold my-2"
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
                            value={data.price}
                            onChange={(e) =>
                                setData((prevData) => ({
                                    ...prevData,
                                    price: e.target.value,
                                }))
                            }
                        />
                    </div>
                    {errorMessage?.price && errorMessage?.price[0] && (
                        <p className="text-red-500">{errorMessage.price[0]}</p>
                    )}
                    <div className="flex items-center justify-between mt-5">
                        <button
                            className="btn btn-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Edit product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Main(Edit);
