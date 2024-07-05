import { useEffect, useState } from "react";
import { useUser } from "../Controllers/UserContext";
import { db } from "../credenciales";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const useCart = () => {
  const { user } = useUser();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        const cartsRef = collection(db, "carts");
        const q = query(
          cartsRef,
          where("email", "==", user.email),
          where("active", "==", true)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            setCart(snapshot.docs[0].data());
          } else {
            setCart(null);
          }
          setLoading(false);
        });

        return () => unsubscribe();
      };

      fetchCart();
    } else {
      setCart(null);
      setLoading(false);
    }
  }, [user]);

  return { cart, loading };
};

export default useCart;
