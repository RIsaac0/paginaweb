import { createContext, useState, useEffect} from "react";


export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(savedCart);


    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
   

            const buyProducts = (product) => {
                const productrepeat = cart.find((item)=> item.id === product.id);
                
                if(productrepeat){
                  setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty:
                  productrepeat.quanty + 1} : item)))
                } else{
                  setCart([...cart,product]);
                }
            }

            return (
                <DataContext.Provider value={{ cart, setCart, buyProducts }}>
                    {children}
                </DataContext.Provider>
            );
        };

export default DataProvider;
