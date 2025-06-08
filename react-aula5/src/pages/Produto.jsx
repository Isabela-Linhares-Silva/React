import { useParams } from "react-router-dom";

const Produto = () => {
    const {id, nome} = useParams();//pega parametros da url
    return (
    <>
        <h1>Produto #{id} {nome}</h1>
    </>
    );
}
 
export default Produto;