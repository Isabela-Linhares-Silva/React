import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import PagesLayout from "../layouts/PagesLayouts";


const Paths = () => {
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<PagesLayout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="/produtos" element={<Produtos/>}></Route>
                    </Route>
                    
                </Routes>
                
            </BrowserRouter>
        </>
    );
}
 
export default Paths;