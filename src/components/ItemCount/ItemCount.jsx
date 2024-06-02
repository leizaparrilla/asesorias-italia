import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount ] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

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

    const addToCart = () => {
        if (count <= itemStock) {
            setItemStock(itemStock - count);
            onAdd(count);
            setCount(1);
            setVisible(false);
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
            <div className="row my-1">
                <div className="col-md-4">
                    {visible  ? <button type="button" className="btn bg-light" onClick={addToCart}>Agregar al Carrito</button> : <Link to={"/cart"} className="btn bg-light">Terminar Mi Compra</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
