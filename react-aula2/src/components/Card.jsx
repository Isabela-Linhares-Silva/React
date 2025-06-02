const Card = ({image,Title, category, paragraph}) => {
    return ( 
    <div style={{ border:"1px solid black"}}>
        <img src={image} alt={Title} />
        <h1>{Title}</h1>
        <h4>{category}</h4>
        <p>{paragraph}</p>
    </div>

     );
}
 
export default Card;