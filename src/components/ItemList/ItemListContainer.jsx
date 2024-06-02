import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, getFirestore, addDoc, } from "firebase/firestore";
import arrayProductos from "../../json/productos.json"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const resultQuery = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        getDocs(resultQuery).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
                setLoading(false);
                console.log(items);
            } else {
                console.log("No existen Documentos!");
                setItems([]);
            }
        });
    }, [categoryId]);



    //los productos ya estan cargados
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto =>{
            addDoc(itemsCollection, producto)
        } )
console.log("productos cargados")
},[]);*/

    return (
        <div className="container my-5">
            <div className="row">
                {
                    loading ? <Loading /> : <ItemList items={items} />
                }
            </div>
        </div>
    )
};

export default ItemListContainer;
