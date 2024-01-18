import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import {
  Container,
  TextField,
  Text,
  TextArea,
  Flex,
  Checkbox,
  Button,
} from "@radix-ui/themes";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tags: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (note) => {
    addNote(note);
  };
  return (
    <>
      <Container className="container">
        <Container>
          <Text as="label" size="2" my="3">
            Enter Notes title
          </Text>
          <TextField.Input
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
          />
          <Text as="p" size="2" my="3">
            Enter Notes description
          </Text>
          <TextArea
            placeholder="Enter description"
            name="description"
            onChange={handleChange}
          ></TextArea>
          <Text as="p" my="3">
            Tags
          </Text>
          <Flex direction="row" gap="4">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                General
              </Flex>
            </Text>

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                Work
              </Flex>
            </Text>

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                School
              </Flex>
            </Text>

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                Miscellaneous
              </Flex>
            </Text>
          </Flex>
          <Button variant="soft" onClick={handleClick}>
            Add
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default AddNote;
