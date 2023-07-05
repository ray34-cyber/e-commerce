import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import Paginator from "@/Components/Paginator";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Typewriter from "typewriter-effect";

const Index = (props) => {
    return (
        <>
            <Head title="Home" />
            {props.products.data.length > 0 && (
                <>
                    <Navbar categories={props.categories} />
                    <div className="container mx-auto mt-8">
                        <Typewriter
                            options={{
                                strings: [
                                    "Ingin berjualan?",
                                    "Daftarkan produk anda dengan cara mendaftar akun terlebih dahulu!",
                                ],
                                wrapperClassName:
                                    "font-bold text-5xl text-center block bg-gradient-to-r from-violet-700 to-teal-400 bg-clip-text text-transparent mb-4",
                                loop: true,
                                autoStart: true,
                                cursor: "",
                                pauseFor: 1000,
                            }}
                            onInit={(typewriter) => {
                                typewriter.start();
                            }}
                        />
                    </div>
                </>
            )}

            <div className="container mt-6 mx-auto grid grid-cols-auto justify-items-center lg:grid-cols-3 gap-3">
                {props.products.data.length > 0 ? (
                    props.products.data.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                ) : (
                    <div className="text-center col-start-1 col-end-4">
                        <p>Tidak ada Produk</p>
                        <Link href="/" className="btn btn-info">
                            Kembali
                        </Link>
                    </div>
                )}
            </div>
            {props.products.data.length > 0 ? (
                <div className="container mx-auto flex justify-center mt-14 mb-20">
                    <Paginator products={props.products} />
                </div>
            ) : null}
        </>
    );
};

export default Index;
