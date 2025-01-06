import React, { useEffect, useState } from 'react'
import Layout from '../layout';
import { Api } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const router = useNavigate()
  const fetchProducts = async () => {
    const data = await Api('https://api.escuelajs.co/api/v1/products');
    if(data){
      console.log(data);
      setProducts(data)
    }
  }
  const goToProductDetails = (id) => {
    router(`/productDetails/${id}`)
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
                  <li key={id} onClick={() => goToProductDetails(id)}>
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