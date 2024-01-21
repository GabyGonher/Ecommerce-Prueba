import { useState, useEffect } from "react";


export default function DataApi() {
  //Se declara variable de estado 
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then((data) => {

        setItems(() => data);
      });

  }, []);

  return items;
}

