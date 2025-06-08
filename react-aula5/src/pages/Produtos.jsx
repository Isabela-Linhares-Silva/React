import { Link } from "react-router-dom";

const Produtos = () => {
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/Produto/1/Abacate"}>Abacate</Link></li>
                <li><Link to={"/Produto/2/Banana"}>Banana</Link> </li>
                <li><Link to={"/Produto/3/Carambola"}>Carambola</Link></li>
                <li><Link to={"/Produto/4/Espinafre"}>Espinafre</Link></li>
                <li><Link to={"/Produto/5/Framboesa"}>Framboesa</Link></li>
            </ul>
        </>
    );
}
 
export default Produtos;