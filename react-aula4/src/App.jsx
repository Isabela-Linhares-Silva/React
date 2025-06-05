import { useEffect, useState } from "react";

const App = () => {
  const[count,setCount]= useState(0);
  const[count2,setCount2]= useState(0);

  useEffect(()=>{
    console.log("UseEffect foi chamado" )
  })

  function BoasVindas() {
    alert("Boas vindas!!!!!!!!")
  }
  
  useEffect(()=>{
    BoasVindas()
    console.log("UseEffect foi chamado uma unica vez" )
  },[])

  useEffect(()=>{
    console.log("UseEffect foi chamado por dependência" )
  },[count2])

  return ( 
    <>
    <h1>Ola mundo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio quibusdam tempore dicta vel, nesciunt dignissimos fuga perferendis libero cupiditate, nisi eveniet deleniti? Aliquid, explicabo rem fugiat nulla dignissimos magni!</p>
    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(count + 1)} >add</button>
    <h2>Count2: {count2}</h2>
    <button onClick={()=>setCount2(count2 + 1)} >add</button>
    </>
    
    
   );
}
 
export default App;
