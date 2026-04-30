import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/products/all')
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error('Error fetching all products:', err));
  }, []);

  const handleSearch = () => {
    if (!searchId) return;
    
    fetch(`http://localhost:3001/api/product/${searchId}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('ไม่พบสินค้า (404 Not Found)');
        }
        return response.json();
      })
      .then((data) => {
        setSearchedProduct(data);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
        setSearchedProduct(null);
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>IT Gadgets Store</h1>
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>ค้นหาสินค้าด้วย ID</h2>
        <input 
          type="text" 
          placeholder="ใส่ ID ของสินค้า..." 
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px 10px' }}>ค้นหา</button>

        <div style={{ marginTop: '15px' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {searchedProduct && (
            <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
              <p><strong>ชื่อ:</strong> {searchedProduct.name}</p>
              <p><strong>แบรนด์:</strong> {searchedProduct.brand}</p>
              <p><strong>ประเภท:</strong> {searchedProduct.type}</p>
              <p><strong>ราคา:</strong> ${searchedProduct.priceUSD}</p>
              <p><strong>สถานะ:</strong> {searchedProduct.inStock ? 'มีสินค้า' : 'สินค้าหมด'}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2>รายการสินค้าทั้งหมด</h2>
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price (USD)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.type}</td>
                <td>${product.priceUSD}</td>
                <td>{product.inStock ? '✅ มีสินค้า' : '❌ หมด'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;