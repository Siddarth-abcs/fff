import * as types from "../actionsTypes/filefolderactiontype";
import fire from "../../config/firebase";

// action

const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload
});

// action creators

export const createFolder = (data) => (dispatch) => {
    fire
      .firestore()
      .collection("folders")
      .add(data)
      .then(async (folder) => {
        const folderData = await (await folder.get()).data();
        dispatch(addFolder(folderData));
        alert("Folder created done")
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        // Handle the error, dispatch an error action, etc.
      });
  }
