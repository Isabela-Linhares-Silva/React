import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: darkslategrey;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: #FFFFFF;
    }
    & nav ul{
        display: flex;
        gap: 30px;
        list-style: none;
        & li a{
            color: #FFFFFF80;
            text-decoration: none;
            font-size: 15px;
            &:hover, &.active{
                color: #FFFFFF;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"Produtos"}>Produtos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}
 
export default Header;