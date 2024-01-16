import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'

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
    </BrowserRouter>
  );
}

export default App;