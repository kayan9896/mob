import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase-setup";

export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(database, "goals"), goal);
  } catch (err) {
    console.log("write to DB ", err);
  }
}
