import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header/Header";
import Home from "./home/Home";
import Sessoes from "./sessoes/Sessoes";
import Assentos from "./assentos/Assentos";
import Sucesso from "./sucesso/Sucesso";

export default function App() {

    return (
        <>
            <Header />
    
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessoes" element={<Sessoes />} />
                    <Route path="/assentos" element={<Assentos />} />
                    <Route path="sucesso" element={<Sucesso />} />
                </Routes> 
    
            </BrowserRouter>
        </>
    );

}

