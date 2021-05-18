import React, { useState, useEffect } from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Header'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import Footer from './Footer'
import {createNote, fetchNotes, deleteNote} from '../common/NoteRepository'

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotesCallback();
  }, []);

  async function fetchNotesCallback() {
    const notes = await fetchNotes();
    setNotes(notes);
  }

  async function createNoteCallback() {
    if (!formData.name || !formData.description) return;
    const newNote = await createNote(formData);
    setNotes([ ...notes, newNote ]);
    setFormData(initialFormState);
  }

  async function deleteNoteCallback({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await deleteNote(id);
  }

  return (
    <div className="App">
      <Header />
      <NoteForm formData={formData} 
        setFormDataCallback={setFormData} 
        createNoteCallback={createNoteCallback}/>
      <NoteList notes={notes} 
        deleteNoteCallback={deleteNoteCallback} />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);