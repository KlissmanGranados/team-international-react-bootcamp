import React from "react";
import { Outlet } from "react-router-dom";
export default function Home() {
    return (
        <>
            <p>
                Agrupación de componentes relacionados con tutoriales de react.
            </p>
            <Outlet />
        </>
    );
}