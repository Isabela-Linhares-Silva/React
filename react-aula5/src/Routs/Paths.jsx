import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Header from "../componets/Header";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/produtos" element={<Produtos/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;