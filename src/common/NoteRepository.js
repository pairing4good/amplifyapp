import { API } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';

export async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    return apiData.data.listNotes.items;
}

export async function createNote(values) {
    const apiData = await API.graphql({ query: createNoteMutation, variables: { input: values } });
    return apiData.data.createNote;
}

export async function deleteNote({ id }) {
    return await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
}
