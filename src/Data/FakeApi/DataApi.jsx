//Se importan hooks de react, utilizados para manejar el estado y para realizar efectos secundarios en componentes determinados
import { useState, useEffect } from "react";

//Se declara el componente
// Recibe como parametro el id del producto
export default function DataApi(id = null) {
  //Se declara variable de estado 
  const [items, setItems] = useState(null);
  // Se emplea el useEfect para hacer una solicitud HTTP
  //
  useEffect(() => {
    //Esta linea de código es utilizada para el PDP 
    //Se agrega a la url original el id del producto 
    // En caso que no exista id se agrega string vacio, 
    //En caso de existir id, se verifica que no sea número para identificar las categorias
    //Se concatena la extension category con el valor de id
    const url = 'https://fakestoreapi.com/products/' + (id === null ? '' : (isNaN(id) ? `category/${id}` : id));
    //A traves del Fetch se realiza la petición GET al sitio
    fetch(url)
      //La respuesta se solicita en format JSON
      .then(res => res.json())
      .then((data) => {
        //Se actualiza el estado Items con la información obtenida
        setItems(() => data);
      })
      //Se agrega catch para en caso de existir alguna falla con el sitio
      .catch(e => alert(`Ocurrió un error al intentar obtener los artículos: ${e}`));

  }, []);
  //el componente devuelve la variable items
  return items;
}

