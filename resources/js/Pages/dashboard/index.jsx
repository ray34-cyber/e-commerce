import React from "react";
import Main from "./layouts";

const Dashboard = (props) => {
    return (
        <>
            <div className="container mx-auto mt-8">
                <h1 className="ml-[5vw] font-bold border-b-2 border-cyan-400">
                    Welcome back, {props.auth.user.full_name}
                </h1>
            </div>
        </>
    );
};

export default Main(Dashboard);
