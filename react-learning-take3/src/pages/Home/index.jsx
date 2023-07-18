import {Column, Row} from "../../components/Layout/index.js";
import styled from "styled-components";

const Home = () => {
    return (
        <Container className="grow">
            <Row className="justify-space-between">
                <Column className="">
                    <h1>Home</h1>
                </Column>
            </Row>
        </Container>

    )
}
const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  &.grow {
    flex: 1 0 0;
  }
  &.justify-center {
    justify-content: center;
  }
`

export default Home

