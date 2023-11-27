import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Movies.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets//Carbon.png";
import chatify from "../../Assets/Library.jpg";
import suicide from "../../Assets/Travel.png";
import bitsOfCode from "../../Assets/college.png";
import fest from "../../Assets/fest.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fest}
              isBlog={false}
              title="Hacktoberfest 2023"
              description="Through my participation in Hacktoberfest, I'm proud to have planted a tree in my name in South Africa as a result of successfully completing four Pull Requests, earning a place among the first 50,000 participants. This experience marks a significant milestone in my open-source journey and underscores the impact of my contributions on environmental sustainability. It has been an enriching introduction to the vibrant open-source community, where collaboration and learning have been at the forefront."
              ghLink="https://github.com/dhruvchandak30"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LNMIIT College Website"
              description="I served as both a member of the development team and the team lead for our college website project, overseeing a 10-member team. My role involved coding, content organization, collaboration with faculty, and data collection. This experience enhanced my leadership and project management skills, while also allowing me to contribute hands-on as a developer."
              ghLink="https://github.com/dhruvchandak30/LNMIIT"
              demoLink="https://lnmiit-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Carbon Footprint Calculator"
              description="Our project, conducted in collaboration with IEEE, centered on creating a website to calculate user-specific carbon emissions, awarded virtual badges accordingly, and visualized data in charts. Notably, users could compare their emissions with friends, fostering a sense of competition. Our success in this endeavor was affirmed by winning the associated hackathon."
              ghLink="https://github.com/dhruvchandak30/IEEE_Hackathon"
              demoLink="https://ieee-hackathon-task1-by-justify-content.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movie App"
              description="I created a React-based Movie Application that seamlessly integrates two distinct APIs to provide comprehensive movie information. This app categorizes movies by titles, genres, actors, and more, allowing users to search for movies using various tags. To retrieve movie details, it initially searches for the IMDB code using the movie title and subsequently utilizes the code to fetch movie posters and additional information from the second API. This innovative approach enhances the user experience and access to movie data."
              ghLink="https://github.com/dhruvchandak30/"
              demoLink="https://netflixemail-ab39c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Travel Agency Website"
              description="I have also made a Travel Agency Website using vanila JS. It uses various concepts of HTML, CSS, JS."
              ghLink="https://github.com/dhruvchandak30/Travel-Agency"
              demoLink="https://jadoo-travelagency.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Library Management System (In-Progress)"
              description="I developed a Library Management Website using the MERN stack, with a notable feature of web socket integration. This website enables users to engage with the library team through chat, issue reporting, and feedback submission. The platform also maintains an up-to-date record of the library's book inventory, allowing users to check the availability of books."
              ghLink="https://github.com/dhruvchandak30"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
