import { Button, AlertDialog, Flex } from "@radix-ui/themes";
import React from "react";
import NotesForm from "./NotesForm";

const EditDialog = (props) => {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button size="1" variant="soft" radius="large">
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Edit Note</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Make changes to the note
          </AlertDialog.Description>

          <NotesForm note={props.note} />

          <Flex justify="end" gap="3" mt="4" mr="3">
            <AlertDialog.Cancel>
              <Button variant="soft" color="red">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="soft">Save</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default EditDialog;
