import React from 'react';
import Rahul from "../../assets/rahul.jpg";
import { Container } from "../../globalStyles";
import { AboutContainer } from "./styles";

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <img src={Rahul} alt="rahul" />
        <div className="paragraph">
          <h2>Me in 10 seconds</h2>
          <ul>
            <li>React JS Developer</li>
            <li>President at Toastmasters Indirangar Pride</li>
            <li>Stoic</li>
            <li>Athlete</li>
          </ul>
        </div>
      </AboutContainer>
    </Container>
  );
}

export default About;