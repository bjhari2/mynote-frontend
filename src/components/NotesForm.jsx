import {
  Container,
  TextField,
  Text,
  TextArea,
  Flex,
  Checkbox,
} from "@radix-ui/themes";
import React, { useState } from "react";

const NotesForm = (props) => {
  const initialNote = {
    title: props.note.title,
    description: props.note.description,
    tags: props.note.tags,
  };

  const [note, setNote] = useState(initialNote);

  const handleSave = () => {};
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Container className="container">
        <Text as="p" size="2" my="3">
          Enter Notes title
        </Text>
        <TextField.Input
          radius="large"
          placeholder="Enter title"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <Text as="p" size="2" my="3">
          Enter Notes description
        </Text>
        <TextArea
          placeholder="Enter description"
          name="description"
          value={note.description}
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
      </Container>
    </>
  );
};

export default NotesForm;
