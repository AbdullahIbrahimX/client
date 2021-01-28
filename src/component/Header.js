import React from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className={"ui secondary pointing menu"}>
            <Link to={"/"} className={"item"}>Streamer</Link>
            <div className={"right menu"}>
                <GoogleAuth/>
                <Link className={"item"} to={"/"} >All Streams</Link>
                <Link className={"item"} to={"/streams/new"} >Create</Link>
            </div>
        </div>
    );
};

export default Header;
