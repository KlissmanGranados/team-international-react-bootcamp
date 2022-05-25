import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Counter from "../components/Counter";
import Nav from "../components/Nav";
import Home from "../views/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
            <main>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}