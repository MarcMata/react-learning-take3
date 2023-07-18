import {AppWrapper, Container, Row, Column} from "./Components/Layout/";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import styled from "styled-components";
import './components/resets/resets.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <AppWrapper>
                        <Container>
                            <Row className="justify-center">
                                <Column className="justify-center align-center">
                                    <Test>This is a test of whatever we're creating</Test>
                                </Column>
                            </Row>
                        </Container>
                    </AppWrapper>
                }/>
            </Routes>
        </Router>
    )
}
const Test = styled.h1`
    color: red;
`;
export default App