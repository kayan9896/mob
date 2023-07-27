import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { database } from "./firebase-setup";

export async function deleteFromDB(docID) {
  try {
    await deleteDoc(doc(database, "goals", docID));
  } catch (err) {
    console.log("delete doc ", err);
  }
}
export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(database, "goals"), goal);
  } catch (err) {
    console.log("write to DB ", err);
  }
}
