import './App.css';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Layout from './Components/Layout';
import CreateProduct from './Components/CreateProduct';
import Products from './Components/Products';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Dashboard />}/>
          <Route path='products' element={<Products />}/>
          <Route path='products/new' element={<CreateProduct />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
