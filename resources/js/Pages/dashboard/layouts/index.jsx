import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Head } from "@inertiajs/react";

const Main = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Head title="Dashboard" />
                <Header />
                <div className="container mx-auto">
                    <div className="row-auto">
                        <Sidebar />

                        <main className="md:grid md:grid-flow-col-dense">
                            <WrappedComponent {...props} />
                        </main>
                    </div>
                </div>
            </>
        );
    };
};

export default Main;
