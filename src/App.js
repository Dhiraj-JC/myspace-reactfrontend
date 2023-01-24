import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(10);

  const baseUrl = 'http://localhost:8000/';

  function onSubmit(event) {
    event.preventDefault();

    const requestBody = {
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
    };

    axios.post(baseUrl + 'products', requestBody).then(() => {
      window.alert('Product saved successfully');
      setProductName('');
      setProductDescription('');
      setProductPrice(10);
      setProductQuantity(1);
    });
  }

  return (
    <>
      <div className='container'>
        <h1>Create Product</h1>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Product Name</label>
            <input
              className='form-control'
              placeholder='Enter product name'
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Product Description</label>
            <input
              className='form-control'
              placeholder='Enter product description'
              value={productDescription}
              onChange={(event) => setProductDescription(event.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Product Quantity</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter product quantity'
              value={productQuantity}
              onChange={(event) => setProductQuantity(event.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Product Price</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter product price'
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
            ></input>
          </div>
          <div className='mb-3'>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
