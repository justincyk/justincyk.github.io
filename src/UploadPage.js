import React from 'react'
import { useStateValue } from './StateProvider'
import { useNavigate } from "react-router-dom"


function UploadPage() {
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Function to retrieve the user's input and store it in Basket array
  const handleSubmit = event => {
    event.preventDefault();
    dispatch ({
      type: 'ADD_TO_BASKET',
      item: {
        title: event.target.product_title.value,
        image: event.target.url_image.value,
        price: event.target.product_price.value,
        description: event.target.product_des.value,
        seller: event.target.product_seller.value,
      },
    });
  }
  return (
    <div className="upload">

      <div className="upload__container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <p>Image Url: </p>
            <input type="url" name="url_image" id="" />
            <p>Product Title</p>
            <input type="text" name="product_title" id="" />
            <p>Product Description</p>
            <input type="text" name="product_des" id="" />
            <p>Seller Name</p>
            <input type="text" name="product_seller" id="" />
            <p>Price</p>
            <input type="number" name="product_price" id="" />
          </fieldset>
          <button onClick={navigate("/")} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UploadPage
