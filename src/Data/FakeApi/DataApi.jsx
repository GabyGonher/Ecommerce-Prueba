import { useState, useEffect } from "react";


export default function DataApi(id = null) {
  //Se declara variable de estado 
  const [items, setItems] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/' + (id === null ? '' : (isNaN(id) ? `category/${id}` : id));

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setItems(() => data);
      })
      .catch(e => alert(`Ocurrió un error al intentar obtener los artículos: ${e}`));

  }, []);

  return items;
}

