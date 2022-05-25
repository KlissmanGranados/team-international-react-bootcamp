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
        <BrowserRouter basename="/team-international-react-bootcamp">
            <Nav />
            <main>
                <Routes path="/" element={<Home />}>
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}