import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const index = () => {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <div className="container mx-auto grid grid-cols-3 gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default index;
