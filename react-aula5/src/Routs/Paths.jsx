import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import PagesLayout from "../layouts/PagesLayouts";
import Notfound from "../pages/Notfound";
import Produto from "../pages/Produto";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<PagesLayout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="/Produtos" element={<Produtos/>}></Route>
                        <Route path="/Produto/:id/:nome" element={<Produto/>}></Route>
                    </Route>
                    <Route path="*" element={<Notfound/>} />
                </Routes>
                
            </BrowserRouter>
        </>
    );
}
 
export default Paths;