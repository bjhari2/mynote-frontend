import React from "react";
import { Container, Heading, Flex, Box } from "@radix-ui/themes";
import Notes from "./Notes";
import "../assets/home.css";
import AddNote from "./AddNote";

const Home = () => {
  return (
    <>
      <Container className="container">
        <Flex direction="row" height="100%" wrap="wrap" gap="4">
          <Box grow="1">
            <Container
              my="4"
              p="6"
              className="heading-card"
              style={{
                background: "var(--gray-a2)",
                borderRadius: "var(--radius-4)",
              }}
            >
              <Heading as="h1">Welcome User!</Heading>
            </Container>
            <AddNote />
          </Box>
        </Flex>
        <Heading as="h2">Your notes</Heading>
        <Notes />
      </Container>
    </>
  );
};

export default Home;
