import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../credenciales";
import { getDocs, collection, query, where } from "firebase/firestore";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        try {
          const q = query(
            collection(db, "users"),
            where("email", "==", authUser.email)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]; // Asumimos que solo hay un documento por correo electrónico
            const userData = userDoc.data();
            console.log("User data from Firestore:", userData);
            setUser({ ...authUser, ...userData });
          } else {
            console.warn("User document does not exist in Firestore");
            setUser(authUser);
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateUser = (updatedData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
