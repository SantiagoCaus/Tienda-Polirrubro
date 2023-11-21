import { useParams } from "react-router-dom";

import React, { useEffect } from "react";
import storeItems from "../data/products.json";
import { Item } from "./ItemList";

export const ItemList = () => {

const  { id } = useParams();

useEffect(() =>{
  const mypromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
      resolve(product);
    }, 2000);
  });
  mypromise.then((response) =>{
    if (!id) {
  storeItems(response);
    } else {
      const filterByCategory = response.filter(item => item.category === id);
      setItems(filterByCategory);
    }
  });
}, [id]);


  return (
    <div className="items-list">
      {storeItems.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
