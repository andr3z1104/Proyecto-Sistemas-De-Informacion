import { db } from "../credenciales";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const createOrUpdateCart = async (
  user,
  product,
  quantity = 1,
  updateCartState
) => {
  if (!user || !product) {
    console.error("User or product is undefined");
    return;
  }

  if (!user.email || !user.uid || !product.ID || !product.precio) {
    console.error("Missing required user or product fields");
    return;
  }

  const cartsRef = collection(db, "carts");

  // Buscar carrito activo para el usuario
  const q = query(
    cartsRef,
    where("email", "==", user.email),
    where("active", "==", true)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // Si el carrito activo existe, actualizarlo
    const cartDoc = querySnapshot.docs[0];
    const cartData = cartDoc.data();

    const existingProductIndex = cartData.products.findIndex(
      (p) => p.ID === product.ID
    );

    if (existingProductIndex > -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      const updatedProducts = cartData.products
        .map((p, index) =>
          index === existingProductIndex
            ? { ...p, quantity: p.quantity + quantity }
            : p
        )
        .filter((p) => p.quantity > 0); // Eliminar productos con cantidad 0

      const updatedSubtotal = cartData.subtotal + product.precio * quantity;

      await updateDoc(doc(db, "carts", cartDoc.id), {
        products: updatedProducts,
        subtotal: updatedSubtotal,
      });
      updateCartState({
        ...cartData,
        products: updatedProducts,
        subtotal: updatedSubtotal,
      });
    } else {
      // Si el producto no está en el carrito, agregarlo
      const updatedProducts = [
        ...cartData.products,
        { ID: product.ID, quantity },
      ];
      const updatedSubtotal = cartData.subtotal + product.precio * quantity;

      await updateDoc(doc(db, "carts", cartDoc.id), {
        products: updatedProducts,
        subtotal: updatedSubtotal,
      });
      updateCartState({
        ...cartData,
        products: updatedProducts,
        subtotal: updatedSubtotal,
      });
    }
  } else {
    // Si no existe un carrito activo, crear uno nuevo
    const newCartRef = doc(cartsRef);
    const newCartData = {
      uid: user.uid,
      email: user.email,
      active: true,
      products: [{ ID: product.ID, quantity }],
      subtotal: product.precio * quantity,
    };
    await setDoc(newCartRef, newCartData);
    updateCartState(newCartData);
  }
};
