import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {storage} from "../credenciales";
import {nanoid} from "nanoid";
import { addDoc, collection, getDocs, } from "firebase/firestore";
import { db } from "../credenciales";

export async function getImageUrl(productName){
    const imageRef = ref(storage, `images/${productName}.png`)
    const url = await getDownloadURL (ref (storage , imageRef));
    return url;
}

export async function uploadImagen(data){
    const carpeta = ref(storage, `imagenes/${nanoid()}`);
    const result = await uploadBytes(carpeta, data);
    return result.metadata.fullPath
}

export async function deletePhoto(path){
    const imageRef = ref(storage, path);
    deleteObject(imageRef);
}

export const getProducts = async () => {
    const productsCollection = collection( db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productArray = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        cantidad: doc.cantidad,
        categoria: doc.categoria,
        descripcion: doc.descripcion,
        ingredientes: doc.ingredientes
    }));
    return productArray;
};

export const addProduct = async (product) => {
    const productsCollection = collection(db, "products");
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
};

export async function addProducts(){

    const dataProducts = [
    {
        ID: 2,
        nombre: 'Pan Integral',
        categoria: 'Panes',
        descripcion: 'Un pancito para empezar el dia',
        precio: 2,
        cantidad: 20,
        ingredientes : [
            {
                nombreIngred: 'Harina',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Huevo',
                contraIndica: null
            },
            {
                nombreIngred: 'Agua',
                contraIndica: null,
            },
            {
                nombreIngred: 'Mantequilla',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 3,
        nombre: 'Frappe Chocolate',
        categoria: 'Frappe',
        descripcion: 'Un frappe bien frio para terminar el dia',
        precio: 3,
        cantidad: 10,
        ingredientes :[ 
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Hielo',
                contraIndica: null
            },
            {
                nombreIngred: 'Cafe',
                contraIndica: null
            },
            {
                nombreIngred: 'Chocolate',
                contraIndica: null
            }
        ]
    },
    {
        ID: 4,
        nombre: 'Mocca',
        categoria: 'Cafe',
        descripcion: 'Un cafe bien caliente para empezar el dia',
        precio: 3,
        cantidad: 10,
        ingredientes :[ 
            {
                nombreIngred: 'Agua',
                contraIndica: null
            },
            {
                nombreIngred: 'Grano Arabico',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Chocolate',
                contraIndica: null
            }
        ]
    },
    {
        ID: 5,
        nombre: 'Capuccino',
        categoria: 'Cafe',
        descripcion: 'Un cafe bien caliente para empezar el dia',
        precio: 3,
        cantidad: 10,
        ingredientes :[ 
            {
                nombreIngred: 'Agua',
                contraIndica: null
            },
            {
                nombreIngred: 'Grano Arabico',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 6,
        nombre: 'Frappe Cookies & Cream',
        categoria: 'Frappe',
        descripcion: 'Un frappe bien frio para empezar el dia',
        precio: 3,
        cantidad: 10,
        ingredientes :[ 
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Cafe',
                contraIndica: null
            },
            {
                nombreIngred: 'Hielo',
                contraIndica: null
            },
            {
                nombreIngred: 'Galletas',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Crema',
                contraIndica: '(Lacteo)'
            }
        ]
        },
    ]

    const productsCollection = collection( db, "products");
    for (const product of dataProducts) {
        try {
            const docRef = await addDoc(productsCollection,product);
            console.log('Producto agregado con ID:', docRef.id);
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    }

}
