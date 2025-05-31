
import Banner from "./components/Banner";
import Header from "./Components/Header";
import { Component1,Component2 } from "./components/Multi_Components"

const App = () => {
  return ( 
    //parte visível do componente
    <> 
      <Header/>
      <Banner/>
      <Component1/>
      <Component2/>
    </> //fragment que é usado só pra ficar como raiz

  );
}
 
export default App;