import React, { useEffect, useState } from 'react'
import { fetchProductDetailsById } from '../services/api'
import { useParams } from 'react-router-dom'

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
        </div>
    </>
  )
}

export default ProductDetails;