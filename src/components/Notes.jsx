import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
import { Flex } from "@radix-ui/themes";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <Flex className="notes" justify="center" dir="row" py="3">
      <Flex justify="evenly" gap="4" wrap="wrap">
        {notes.map((note, id) => {
          return <NotesItem key={id} note={note} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Notes;
