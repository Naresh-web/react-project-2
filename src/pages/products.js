import React, { useEffect, useState } from 'react'
import Layout from '../layout';
import { Api } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const data = await Api('https://api.escuelajs.co/api/v1/products');
    if(data){
      console.log(data);
      setProducts(data)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <Layout>
        <div className="products container">
          <h2>Our Products</h2>
          <div className="productList">
            <ul>
              {
                products.length === 0 ? (<p>Loading...</p>) : (
                  products.map( (item) => {
                const {id, title, images} = item
                return <>
                  <li key={id}>
                  <img src={item.category?.image} alt="" />

                  {title}
                  </li>
                </>
              })
                )
              }
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Products;