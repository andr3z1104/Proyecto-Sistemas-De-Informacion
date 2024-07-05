import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../credenciales"


const comentariosRef = collection(db, 'comentarios');

export async function getComments(){

    const comentariosArray = [];
    const querySnapshot = await getDocs(comentariosRef);

    querySnapshot.forEach((doc) => {
        const comentario = doc.data().comentario;
        const estrellas = doc.data().estrellas;
    comentariosArray.push({ comentario, estrellas });
    });
    console.log(comentariosArray)
    return comentariosArray;
}

export async function addComment(comentario, estrellas){
    const docRef = await addDoc(comentariosRef, {
        comentario: comentario,
        estrellas: estrellas
        });
        console.log(`Documento agregado con ID: ${docRef.id}`);
}
