import {Route, Routes} from "react-router-dom";
import Button from "./components/Buttons/Button.jsx";

function onClick() {
    console.log("clicked");
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Button to="/" value='Send' onClick={onClick}/>}/>
            <Route path="*" element={<p>Something went wrong</p>}/>
        </Routes>

    )
}

export default App
