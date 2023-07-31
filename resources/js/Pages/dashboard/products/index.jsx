import React, { useState } from "react";
import Main from "../layouts";
import { Link } from "@inertiajs/react";
import { BsFillTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

const Products = (props) => {
    const [products, setProducts] = useState([...props?.products]);

    const handleDeleteProduct = async (e, slug) => {
        e.preventDefault();

        try {
            await axios.delete(`/dashboard/products/${slug}`);
            // Jika penghapusan berhasil, update state dengan produk yang sudah dihapus dari daftar
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.slug !== slug)
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col container mx-auto mt-10">
            <h1 className="text-center flex-auto text-4xl font-bold">
                My Products
            </h1>
            <div className="relative overflow-x-auto ml-[5vw] mt-9">
                <Link
                    href="/dashboard/products/create"
                    className="btn btn-primary mb-5"
                >
                    Add new Product
                </Link>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => (
                            <tr
                                key={product.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.nama_produk}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category.name_category}
                                </td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/dashboard/products/${product.slug}/edit`}
                                        className="inline-block"
                                    >
                                        <AiFillEdit
                                            size={25}
                                            className="fill-current text-amber-300"
                                        />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleDeleteProduct(e, product.slug)
                                        }
                                        className="inline-block pl-2"
                                    >
                                        <button type="submit">
                                            <BsFillTrash2Fill
                                                size={25}
                                                className="fill-current text-red-300"
                                            />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main(Products);
