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
import Github from "../About/Github";

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
              As a third-year Computer Science Engineering student, I possess a
              robust skill set in both frontend and backend development, with
              proficiency in languages like C, C++, JavaScript, and TypeScript.
              My experience spans across working with frameworks such as React,
              Next.js, and Node.js, and I have a strong grasp of data structures
              and algorithms. I have honed my abilities in Unix/Linux
              environments and am well-versed in tools like Git, GitHub, VS
              Code, and Vim.<br></br>
              <br></br> During my internships and various open-source and
              freelance projects, I have contributed to solutions that have had
              a significant impact, collaborating effectively with teams and
              faculty members. My academic and practical experiences are
              showcased through my portfolio and GitHub repositories.<br></br>
              <br></br> I am passionate about technology and innovation, looking
              forward to applying my skills in areas like mobile development,
              distributed systems, and machine learning. With a commitment to
              continuous learning and excellence, I am eager to contribute to
              and grow within a dynamic and innovative organization.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Container>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />
          </Container>
        </Row>
        <Row>
          <Github />
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
                  href="https://twitter.com/dhruv5Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
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
