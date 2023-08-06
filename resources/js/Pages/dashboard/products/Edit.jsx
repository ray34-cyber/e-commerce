import React, { useState, useRef } from "react";
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
    const img = useRef(null);
    const imgPreview = useRef(null);

    const handleNamaProdukChange = async (e) => {
        const namaProduk = e.target.value;
        setData((prevData) => ({ ...prevData, nama_produk: namaProduk }));
       await axios
            .get(`/dashboard/products/checkSlug?nama_produk=${namaProduk}`)
            .then((response) => setData((prevData) => ({...prevData, slug: response.data.slug})))
            .catch((errors) => console.log(errors));
    };

    const previewImage = (e) => {
        e.target.style.display = "block";

        const oFReader = new FileReader();
        oFReader.readAsDataURL(img.current.files[0]);

        oFReader.onload = function (oFREvent) {
            imgPreview.current.src = oFREvent.target.result;
        };
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nama_produk", data.nama_produk);
        formData.append("slug", data.slug);
        formData.append("category_id", data.category_id);
        formData.append("body", data.body);
        formData.append("price", data.price);
        formData.append("image", img.current.files[0]);
        formData.append("oldImage", props?.product?.image);
        formData.append("_method", "PATCH")

        await axios
            .post(`/dashboard/products/${props?.product?.slug}`, formData)
            .then(() => {
                window.location.href = "/dashboard/products";
            })
            .catch((errors) => setErrorMessage(errors.response.data.errors));
    };

    return (
        <div className="container mx-auto flex flex-col md:px-72 mt-10">
            <h1 className="text-center flex-auto text-4xl font-bold">
                Edit product
            </h1>
            <div className="flex-auto md:flex-none">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleUpdate}
                    encType="multipart/form-data"
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
                            value={data.nama_produk}
                            onChange={(e) => handleNamaProdukChange(e)}
                        />
                    </div>
                    {errorMessage?.nama_produk && errorMessage?.nama_produk[0] && (
                        <p className="text-red-500">{errorMessage.nama_produk[0]}</p>
                    )}
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
                    {errorMessage?.slug && errorMessage?.slug[0] && (
                        <p className="text-red-500">{errorMessage.slug[0]}</p>
                    )}
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
                    {errorMessage?.category_id && errorMessage?.category_id[0] && (
                        <p className="text-red-500">{errorMessage.category_id[0]}</p>
                    )}
                    <div className="mb-3">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="image"
                        >
                            Product Image
                        </label>
                        {props?.product?.image ? (
                            <img
                                className="max-w-xs block mb-3 rounded-lg shadow-xl"
                                src={`/storage/${props?.product?.image}`}
                                ref={imgPreview}
                            />
                        ) : (
                            <img
                                ref={imgPreview}
                                className="max-w-xs block mb-3 rounded-lg shadow-xl"
                            />
                        )}
                        <input type="hidden" name="oldImage"/>
                        <input
                            id="image"
                            type="file"
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            name="image"
                            ref={img}
                            onChange={(e) => previewImage(e)}
                        />
                    </div>
                    {errorMessage?.image && errorMessage?.image[0] && (
                        <p className="text-red-500">{errorMessage.image[0]}</p>
                    )}
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
                            value={data.body}
                            placeholder="Description your product"
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
                    <div className="mb-2">
                        <label
                            className="block text-gray-700 text-sm font-bold"
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
                        <p className="text-red-500 mb-3">{errorMessage.price[0]}</p>
                    )}
                    <div className="flex items-center justify-between">
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
