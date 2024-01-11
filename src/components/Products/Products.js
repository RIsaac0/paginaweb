import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import "./Products.css";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(DataContext);
  
  useEffect(()=> {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  return data.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>Agregar al Carrito</button>
      </div>
  ));
};


export default Products;
