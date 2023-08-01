import {Row, Column } from "../Layout";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <Nav className="justify-space-between">
                <Column className="">
                    <Link to="/" className="active">Home</Link>
                </Column>
                <Column className="align-center">
                    <p>Marc Mata</p>
                </Column>
                <Column className="align-right">
                    <Link to="/about" className="active">About Page</Link>
                </Column>
            </Nav>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  &.grow {
    flex: 1 0 0;
  }
  &.justify-center {
    justify-content: center;
  }
`

const Nav = styled(Row)`

`;

const Link = styled(NavLink)`
  color:blue;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: red;
  }
`;



export default Navbar;
