import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../credenciales";

export async function updateProfile(email, updatedData) {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnapshot) => {
        const userDocRef = doc(db, "users", docSnapshot.id);
        await updateDoc(userDocRef, updatedData);
      });
      console.log("Perfil actualizado con éxito");
    } else {
      throw new Error("No se encontró un documento con el email especificado");
    }
  } catch (error) {
    console.error("Error al actualizar el perfil:", error);
    throw new Error("Error al actualizar el perfil");
  }
}
