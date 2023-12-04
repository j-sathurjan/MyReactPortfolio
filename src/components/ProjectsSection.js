import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Automated Paddy Crop Disease Classification System",
    description:
      "A research project which classify paddy crop disease images using machine learning and computer vision",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Alphanumeric Code Authentication System",
    description:
      "A gate control system which uses arduino micro controllers where one master node which produce alphanumeric code and authenticate gate pass 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Intrusion Detection System",
    description:
      "This is a system which detect the intruder and swith on alarm and light in the house.🔥️",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Academic Calendar Management System for Faculty",
    description:
      "This is a web based application which is used to schedule meeting and which will notify the students using teams app",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
  {
    title: "School Management System",
    description:
      "This project done for database management module which will help to manage the school informations and data.",
    getImageSrc: () => require("../images/photo5.jpg"),
  },
  {
    title: "Movie Reservation System",
    description:
      "This is a Java based application which is useful to reserve the seats for movies in theater",
    getImageSrc: () => require("../images/photo6.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
