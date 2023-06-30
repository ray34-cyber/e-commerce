import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const index = (props) => {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="font-bold text-2xl text-center">
                    Ingin berjualan ? Daftarkan produk anda dengan cara
                    mendaftar terlebih dahulu!
                </h1>
            </div>
            <div className="container mt-6 mx-auto grid grid-cols-auto justify-items-center lg:grid-cols-3 gap-3">
                {props.products
                    ? props.products.map((product) => {
                          return <Card key={product.id} product={product} />;
                      })
                    : "Tidak ada Produk"}
            </div>
        </>
    );
};

export default index;
