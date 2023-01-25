import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../Utilities/constants';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseUrl + 'products')
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-4 pb-2'>Products</h1>
            <button
              className='btn btn-primary btn-lg float-end'
              onClick={() => {
                navigate('/products/new');
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className='row mt-5'>
          {products.map((product) => (
            <div className='col-3'>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
