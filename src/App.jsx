import "./App.css";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import NoteState from "./context/notes/NoteState";
import AddNotesForm from "./components/NotesForm";

function App() {
  return (
    <>
      <NoteState>
        {/* App structure */}
        <Navbar />
        <div className="container">
          <Home />
        </div>

        {/* Routes of the app */}
        {/* <Routes>
        <Route />
      </Routes> */}
      </NoteState>
    </>
  );
}

export default App;
