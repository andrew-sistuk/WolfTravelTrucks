import {Route, Routes} from "react-router-dom";
import Category from "./components/Category/Category.jsx";
import React from "react";
import Cup from '../src/assets/icons/cup.svg?react'

function onClick() {
    console.log("clicked");
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Category Icon={Cup} text='Engine'/>}/>
            <Route path="*" element={<p>Something went wrong</p>}/>
        </Routes>

    )
}

export default App
