import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";
import React from "react";

const CartElements = () => {
  const { cart, setCart} = useContext(DataContext);

const deleteProduct= (id) => {
const foundId = cart.find((element)=> element.id === id );

const newCart= cart.filter((element)=> {
  return element !== foundId;

} )
   setCart(newCart);
}

  return cart.map((product) =>{
    return (
      <div className="cardContent" key={product.id}>
        <img src={product.img} alt="product-card" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product}/>
        <h4 className="price">{product.price * product.quanty}$</h4>
        <h3 class="cart-delete-button" onClick={() => deleteProduct(product.id)}> X </h3>
      </div>
    );
  }
  );
}

export default CartElements;