import React, { useEffect, useState } from "react";
import { getNotes, addNote } from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleAdd = async () => {
    if (!text) return;
    await addNote({ text });
    setText("");
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notes App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;