import { Link, usePage } from "@inertiajs/react";
import React from "react";

const Invoice = ({
    order: { name, phone, address, qty, total_price, status },
}) => {
    return (
        <div className="container my-12 mx-auto flex justify-center">
            <div className="basis-1/2 py-8 px-8 flex flex-col items-center shadow-2xl rounded-xl shadow-fuchsia-300">
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
                    <Link href="/" className="btn btn-outline btn-secondary">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
