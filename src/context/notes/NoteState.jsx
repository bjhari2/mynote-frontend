import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "659e84130918d010acdf6aea",
      user: "658fd27f325aed0430d2411b",
      title: "My Note",
      description: "Description of the note",
      tags: "General",
      timestamp: "2024-01-10T11:48:35.243Z",
      __v: 0,
    },
    {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    },
    {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    },
    {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    },
    {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    },
    {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tags) => {
    const note = {
      _id: "659e84260918d010acdf6aec",
      user: "658fd27f325aed0430d2411b",
      title: "My Note 2",
      description: "Description of the note 2",
      tags: "General",
      timestamp: "2024-01-10T11:48:54.821Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
