import { BrowserRouter, useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './App.css'
import Header from './Layout/Header/Header';
import DetailProduct from './Pages/Other/DetailProduct';



// Se definen las rutas del proyecto
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/detalles/:id', element: <DetailProduct /> },

  ]);
  return routes;
};


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Header />

    </BrowserRouter>
  );
}

export default App;