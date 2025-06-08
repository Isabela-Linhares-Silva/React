import { Outlet } from "react-router-dom";
import Fotter from "../componets/Fotter";
import Header from "../componets/Header";

const PagesLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Fotter/>
        </>
    );
}
 
export default PagesLayout;