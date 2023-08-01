import React, { useState } from "react";
import styled from "styled-components";

const eventsData = [
    { date: "2023-08-01", event: "Event 1" },
    { date: "2023-08-05", event: "Event 2" },
    { date: "2023-08-10", event: "Event 3" },
    { date: "2023-08-10", event: "Event 4" },
    // Add more events as needed
];

const Home = () => {
    const [selectedEvent, setSelectedEvent] = useState(eventsData[0]);

    const handleDotClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <Container className="grow">
            <BackgroundVideo
                id="background-video"
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
            >
                <source src="../../../public/main-background.mp4" type="video/mp4" />
            </BackgroundVideo>
            <Timeline>
                <TimelineLine />
                {eventsData.map((event) => (
                    <TimelineItem key={event.date}>
                        <TimelineDot
                            active={selectedEvent.date === event.date}
                            onClick={() => handleDotClick(event)}
                        />
                        <TimelineDate>{event.date}</TimelineDate>
                        <TimelineEvent>{event.event}</TimelineEvent>
                    </TimelineItem>
                ))}
            </Timeline>
            <TimelineContent>
                <h1>{selectedEvent.event}</h1>
                <p>{selectedEvent.date}</p>
            </TimelineContent>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  color: white;
  &.grow {
    flex: 1 0 0;
  }
  &.justify-center {
    justify-content: center;
  }
`;

const BackgroundVideo = styled.video`
  object-fit: cover;
  min-width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.9;
`;

const Timeline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const TimelineLine = styled.div`
  flex: 0 0 100%;
  height: 2px;
  position: relative;
  top: 1%;
  transform: translateY(-50%);
  z-index: -1;
  color: white;
  background-color: white;
`;

const TimelineItem = styled.div`
  flex: 0 0 30%;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#007bff" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  position: absolute;
  top: -5px;
  left: 0;
`;

const TimelineDate = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TimelineEvent = styled.div`
  color: #a1a1a1;
`;

const TimelineContent = styled.div`
  max-width: 600px;
  text-align: center;
  margin-top: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    color: #a1a1a1;
  }
`;

export default Home;