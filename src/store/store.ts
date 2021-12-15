import { createStore } from "redux";
import { notesReducer } from "./reducer/NotesReducer";

export const store = createStore(notesReducer);
