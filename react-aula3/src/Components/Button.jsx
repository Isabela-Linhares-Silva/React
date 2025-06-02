import { useState } from "react";

const Button = () => {
    /* let contador =0
    function increment() {
        contador += 1
        console.log(contador)
    } */
   const [cont,SetCont]= useState(0)


    return (
        <button onClick={()=>SetCont(cont + 1)}>Click me {cont}</button>
    );
}
 
export default Button;