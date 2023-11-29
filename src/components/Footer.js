import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Dhruv Chandak</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/dhruvchandak30"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhruvchandak30/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://codeforces.com/profile/dhruv3005"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/dhruv3005/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
