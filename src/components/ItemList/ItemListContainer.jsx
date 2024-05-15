import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProductos from "../../json/productos.json";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos)
        }, 2000)
    })
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems(categoryId ? data.filter(item => item.category == categoryId) : data);
            setLoading(false);
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center-my-3">todo lo que necesitas saber sobre ciudadania italiana</h1>
                {
                    loading ? <Loading /> : <ItemList items={items} />
                }
            </div>
        </div>
    )
};

export default ItemListContainer;
