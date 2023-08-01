import {Column, Row} from "../../components/Layout/index.js";
import styled from "styled-components";

const About = () => {
    return (
        <Container className="grow">
            <BackgroundVideo id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                <source src="../../../public/main-background.mp4" type="video/mp4"></source>
            </BackgroundVideo>
            <Row className="justify-space-between">
                <Column className="align-center">
                   <h1>About</h1>

                </Column>

            </Row>
        </Container>

    )
}

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  //background-image: url("../../../public/main-background.mp4");
  &.grow {
    flex: 1 0 0;
  }
  &.justify-center {
    justify-content: center;
  }
`

const BackgroundVideo = styled.video `
    object-fit: cover;
    min-width: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.9;
`;
export default About

