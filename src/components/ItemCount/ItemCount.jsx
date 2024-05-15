import { useState } from "react";

const ItemCount = ({stock}) => {
    const [count, setCount ] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const handleIncrement =() => {
        if (count < itemStock)  {
            setCount(count + 1);
        }
    };

    const handleDecrement =() => {
        if (count > 1)  {
            setCount(count - 1);
        }
    };

    const onAdd = () =>{
        if (count <= itemStock){
            setItemStock(itemStock - count);
            setCount(1);
            console.log("Agregaste " + count + " productos al Carrito!");
       
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-light" onClick={handleDecrement}>-</button>
                        <button type="button" className="btn bg-light">{count}</button>
                        <button type="button" className="btn bg-light" onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {itemStock > 1 ? <button type="button" className="btn bg-light" onClick={onAdd}>Agregar al Carrito</button> : <button type="button" className="btn bg-light"><b>SIN STOCK</b></button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
