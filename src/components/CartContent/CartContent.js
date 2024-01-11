import { useContext } from "react"
import { DataContext } from "../Context/DataContext"
import CartElements from './CartElements';
import './CartContent.css';
import CartTotal from './CartTotal';
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
  const { cart } = useContext(DataContext);
  return (
    <>
    <Navbar/>
    {cart.length > 0 ? (
  
        <>
          
         <CartElements />
        <CartTotal />
  </>
      
    ) : (
      
       <h2 className="cart-message-center"> el carrito esta vacio</h2> 
    )}
    </>
  )

}
 



export default CartContent;
