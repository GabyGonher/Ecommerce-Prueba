import { BrowserRouter, useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './App.css'
import Header from './Layout/Header/Header';


// Se definen las rutas del proyecto
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  
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