import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <Link className="nav__link" to="/">
                    <FontAwesomeIcon className="nav__fontawesome" icon={faHome} />
                    <span className="nav__span" >Home</span>
                </Link>
                <Link className="nav__link" to="/counter">
                    <FontAwesomeIcon className="nav__fontawesome" icon={faPlus} />
                    <span className="nav__span" >Contador</span>
                </Link>
            </nav>
        </>
    );
}