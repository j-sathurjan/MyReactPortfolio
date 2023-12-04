import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from '../images/profile.jpg'

const greeting = "Hello, I am Sathurjan [BSc.Eng(Hons)]";
const degree = "BSc. Eng (Hons) in Computer Engineering";
const bio1 = "An Engineering Undegraduate";
const bio2 = "Specialised in Computer Engineering";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" src={profile}/>
      <Heading size="md">{greeting}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
