import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header/Header";
import Home from "./home/Home";
import Filme from "./filme/Filme";

export default function App() {

    return (
        <>
            <Header />
    
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Home />} />*/}
                    <Route path="/filme" element={<Filme />} />
                </Routes> 
    
            </BrowserRouter>
        </>
    );

}

