import { Container, Row, Column } from "../Layout";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <Nav className="justify-space-between">
                <Column className="">
                    <NavLink to="/" className="active">Home</NavLink>
                </Column>
                <Column className="align-right">
                    <NavLink to="/about" className="active">About Page</NavLink>
                </Column>
            </Nav>
        </Container>
    );
}

const Nav = styled(Row)`

`;

export default Navbar;
