import { useRef } from "react";
const Input = () => {
    const nome= useRef("")
    return (
        <>
            <input type="text" 
            placeholder="Digite um nome:"
            //onChange={(e)=>SetNome(e.target.value)}
           ref={nome}/>
            <button onClick={()=>console.log(nome.current.value)}>Enviar</button>
            <h1>{nome.current.value}</h1>
        </>
    );
}
 
export default Input;