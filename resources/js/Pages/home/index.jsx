import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import Typewriter from "typewriter-effect";

const index = (props) => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <Head title="Home" />
            {props.products.length > 0 && <Navbar />}
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
            <div className="container mt-6 mx-auto grid grid-cols-auto justify-items-center lg:grid-cols-3 gap-3 justify-center">
                {props.products.length ? (
                    props.products.map((product) => {
                        return <Card key={product.id} product={product} />;
                    })
                ) : (
                    <div className="text-center">
                        <p>Tidak ada Produk</p>
                        <button className="btn btn-info" onClick={handleGoBack}>
                            Kembali
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default index;
