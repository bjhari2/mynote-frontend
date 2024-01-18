import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import EditDialog from "./EditDialog";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <Flex dir="col" width="auto" className="note-item">
      <Card size="2" style={{ minWidth: 200, maxWidth: 400 }}>
        <Flex align="start" justify="between">
          <Text as="p" size="3" mb="2">
            {note.title}
          </Text>
          <Badge>{note.tags}</Badge>
        </Flex>
        <Text as="p" size="1">
          {note.description}
        </Text>
        <Flex mt="2" gap="2" justify="end">
          <Box>
            <EditDialog note={note} />
          </Box>
          <Box>
            <Button size="1" color="red" variant="soft" radius="large">
              <i className="fa-regular fa-trash-can"></i>
            </Button>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
};

export default NotesItem;
