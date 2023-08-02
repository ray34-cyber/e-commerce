import React, { useState } from "react";
import Main from "../layouts";
import axios from "axios";
import { Head, usePage } from "@inertiajs/react";

const Edit = () => {
    const props = usePage().props;
    const [nama_produk, setNama_produk] = useState(props?.product?.nama_produk);
    const [slug, setslug] = useState(props?.product?.slug);
    const [category_id, setCategory_id] = useState(props?.product?.category_id);
    const [body, setBody] = useState(props?.product?.body);
    const [price, setPrice] = useState(props?.product?.price);
    const [preview, setPreview] = useState(props?.product?.image);
    const [file, setFile] = useState("");
    const [errorMessage, setErrorMessage] = useState({});

    const updateUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nama_produk", nama_produk);
        formData.append("slug", slug);
        formData.append("category_id", category_id);
        formData.append("body", body);
        formData.append("price", price);
        formData.append("image", file);

        try {
            await axios.patch(
                `/dashboard/products/${props.product.slug}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            window.location.href = "/dashboard/products";
        } catch (errors) {
            console.log(errors);
            setErrorMessage(errors.response.data.errors);
        }
    };

    const loadImage = (e) => {
        const image = document.getElementById("image");
        const imagePreview = document.getElementById("imagePreview");

        image.style.display = "block";
        const oFReader = new FileReader();
        oFReader.readAsDataURL(e.target.files[0]);

        oFReader.onload = function (oFREvent) {
            imagePreview.src = oFREvent.target.result;
        };

        const imageFile = e.target.files[0];
        setFile(imageFile);
    };

    const handleNamaProdukChange = (e) => {
        setNama_produk(e.target.value);
        axios
            .get("/dashboard/products/checkSlug?nama_produk=" + e.target.value)
            .then(() => {
                setslug(e.target.value);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Head title="Edit Product" />
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
                                value={nama_produk}
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
                                value={slug}
                                onChange={(e) => setslug(e.target.value)}
                            />
                        </div>
                        {errorMessage?.slug && errorMessage?.slug[0] && (
                            <p className="text-red-500">
                                {errorMessage.slug[0]}
                            </p>
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
                                onChange={(e) => setCategory_id(e.target.value)}
                                value={category_id}
                            >
                                {props.categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
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
                        <div className="mb-3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="image"
                            >
                                Product Image
                            </label>
                            {preview ? (
                                <img
                                    src={`/storage/${preview}`}
                                    className="max-w-xs block mb-3 rounded-lg shadow-xl"
                                    id="imagePreview"
                                />
                            ) : (
                                <img className="max-w-xs block mb-3 rounded-lg shadow-xl" />
                            )}
                            <input
                                id="image"
                                type="file"
                                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                                name="image"
                                onChange={(e) => {
                                    loadImage(e);
                                }}
                            />
                        </div>
                        {errorMessage?.image && errorMessage?.image[0] && (
                            <p className="text-red-500">
                                {errorMessage.image[0]}
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
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                        </div>
                        {errorMessage?.body && errorMessage?.body[0] && (
                            <p className="text-red-500">
                                {errorMessage.body[0]}
                            </p>
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
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        {errorMessage?.price && errorMessage?.price[0] && (
                            <p className="text-red-500">
                                {errorMessage.price[0]}
                            </p>
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
        </>
    );
};

export default Main(Edit);
