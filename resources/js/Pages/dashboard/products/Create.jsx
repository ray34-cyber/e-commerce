import React, { useState } from "react";
import Main from "../layouts";
import axios from "axios";
import { useForm } from "@inertiajs/react";

const Create = (props) => {
    // const { data, setData } = useForm({
    //     nama_produk: "",
    //     slug: "",
    //     category_id: "",
    //     body: "",
    //     price: 0,
    // });
    // const [slug, setSlug] = useState("");
    const [nama_produk, setNamaProduk] = useState("");
    const [slug, setSlug] = useState("");
    const [category_id, setCategoryId] = useState(1);
    const [body, setBody] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/dashboard/products", {
                nama_produk,
                slug,
                category_id,
                body,
                price,
            })
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
                            onChange={(e) =>
                                axios
                                    .get(
                                        "/dashboard/products/checkSlug?nama_produk=" +
                                            e.target.value
                                    )
                                    .then(() => {
                                        setNamaProduk(e.target.value);
                                        setSlug(e.target.value);
                                    })
                            }
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
                            value={slug}
                            readOnly
                            disabled
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
                        >
                            {props.categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                    onChange={(e) => setCategoryId(e.target.id)}
                                >
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
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
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
                            onChange={(e) => setPrice(e.target.value)}
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
