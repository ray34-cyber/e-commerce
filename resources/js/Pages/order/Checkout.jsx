import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect } from "react";

const Checkout = ({
    image,
    nama_produk,
    slug,
    order: { name, phone, status, total_price, address, qty },
}) => {
    const { data } = useForm({
        name,
        phone,
        status,
        total_price,
        address,
        qty,
    });

    useEffect(() => {
        const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        const myMidtransClientKey = import.meta.env.MIX_MIDTRANS_CLIENT_KEY; //change this according to your client-key

        const script = document.createElement("script");
        script.src = snapSrcUrl;
        script.setAttribute("data-client-key", myMidtransClientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const payment = () => {
        axios.post(`/checkout/${slug}`, data).then((response) =>
            window.snap.pay(response.data, {
                onSuccess: function (result) {
                    window.location.href = `/invoice/${result.order_id}`;
                },
            })
        );
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
                <table className="w-full mt-2 text-xl">
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td> : {name}</td>
                        </tr>
                        <tr>
                            <td>No HP</td>
                            <td> : {phone}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td> : {address}</td>
                        </tr>
                        <tr>
                            <td>Qty</td>
                            <td> : {qty}</td>
                        </tr>
                        <tr>
                            <td>Total bayar</td>
                            <td> : {total_price}</td>
                        </tr>
                        <tr>
                            <td>Status Pembayaran</td>
                            <td> : {status}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-5 w-full flex justify-end">
                    <button
                        onClick={payment}
                        className="btn btn-outline btn-secondary"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
