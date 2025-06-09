import { BrowserRouter, Routes , Route} from "react-router-dom";
import Login from "../Pages/Login";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;