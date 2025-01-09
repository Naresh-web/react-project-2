import React, { useEffect, useState } from 'react'
import { fetchProductDetailsById } from '../services/api'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams();
  const [productDetails, setproductDetails] = useState({})
    const fetchProductDetails = async () => {
        const data = await fetchProductDetailsById(params.id);
        if(data){
          setproductDetails(data)
          console.log(data);
        }
    }
    useEffect(() => {
      fetchProductDetails()
    }, [])
  return (
    <>
        <div className="productDetails">
            <div className="imagearea">
              <img src={productDetails.category?.image} alt="" />
            </div>
            <div className="content">
              {productDetails.title}
            </div>
            <br/>
            <div className="backtohome">
            <Link to='/products'>
              <button type="button">Back to products</button>
            </Link>
            </div>
        </div>
    </>
  )
}

export default ProductDetails;