import { signOut } from "firebase/auth";
import { auth } from "../credenciales";

export async function logOut(){
    await signOut(auth)
}