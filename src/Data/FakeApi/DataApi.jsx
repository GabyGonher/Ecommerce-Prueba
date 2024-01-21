import { useState, useEffect } from "react";


export default function DataApi(id = null) {
  //Se declara variable de estado 
  const [items, setItems] = useState(null);

  useEffect(() => {
    const url = id === null ? 'https://fakestoreapi.com/products/' : `https://fakestoreapi.com/products/${id}`
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setItems(() => data);
      });

  }, []);

  return items;
}

