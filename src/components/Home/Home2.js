import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Dhruv.jpeg";
import Tilt from "react-parallax-tilt";
import Techstack from "../About/Techstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import cf from "../../Assets/cf.png";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, I'm Dhruv Chandak, a second-year student at The LNM
              Institute of Information Technology in Jaipur, pursuing Computer
              Science Engineering. My passion for web development drives me to
              spend a significant amount of time learning and experimenting with
              new technology stacks. As a MERN Stack developer, I have hands-on
              experience in building web applications with a focus on front-end
              and back-end technologies. My commitment to the open-source
              community led to my selection in Hacktoberfest 2023, where I
              actively contributed to open-source projects. I pride myself on
              being a fast learner, which has enabled me to quickly grasp new
              concepts and technologies in the ever-evolving field of software
              development. I am excited about the opportunity to bring my
              skills, enthusiasm, and dedication to your software company
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* <Container> */}
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />
          {/* </Container> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dhruvchandak30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruvchandak30/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/dhruv3005"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/dhruv3005/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
