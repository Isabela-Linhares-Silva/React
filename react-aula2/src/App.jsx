
import Banner from "./components/Banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
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

      <FormaDeBolo sabor="Cenoura" cobertura="Chocolate "/>

      <Card 
      image={"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/alguns-esportes-dependem-equipamentos-para-serem-praticados-5734865673029.jpg"}
      Title={"Noticia 1"} 
      category={"esporte"} 
      paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio corrupti repudiandae! Aliquam non accusantium, voluptatibus deserunt unde repellat quaerat voluptatem adipisci animi, cumque dignissimos deleniti dolore, commodi dicta est!"}/>

      <Card
      image={"https://br.web.img3.acsta.net/newsv7/20/06/12/18/16/2912051.jpg"} 
      Title={"Noticia 2"} 
      category={"Romance"} 
      paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio corrupti repudiandae! Aliquam non accusantium, voluptatibus deserunt unde repellat quaerat voluptatem adipisci animi, cumque dignissimos deleniti dolore, commodi dicta est!"}/>

      <Card 
      image={"https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/Panico-5-filmes-terror.jpg?w=1200&h=1200&crop=1"}
      Title={"Noticia 3"} 
      category={"Terror"} 
      paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio corrupti repudiandae! Aliquam non accusantium, voluptatibus deserunt unde repellat quaerat voluptatem adipisci animi, cumque dignissimos deleniti dolore, commodi dicta est!"}/>
      <CardDinamico>
        <h1>Noticia 4</h1>
        <img src="https://forbes.com.br/wp-content/uploads/2023/08/Life_Melhores-capitais-da-Europa-4.jpg" alt="" />
        <h4>Dicas de viajem</h4>
        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio corrupti repudiandae! Aliquam non accusantium, voluptatibus deserunt unde repellat quaerat voluptatem adipisci animi, cumque dignissimos deleniti dolore, commodi dicta est!"</p>
      </CardDinamico>
     
        
      
    </> //fragment que é usado só pra ficar como raiz

  );
}
 
export default App;

