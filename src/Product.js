import React from "react";
import "./Product.css"

function Product({title, image, price, description, seller}){
    return(
        <div className="product_Container">

            <img src={image} />

            <div className="product_Info">
                <p className="product_title"><strong>{title}</strong></p>
                <br />
                <p className="product_description"><em>Description:</em> {description}</p>
                <br />
                <p className="product_seller"><em>Seller:</em> {seller}</p>
                <br />
                <p className="product_price"><em>Price:</em> ${price}</p>
            </div>



        </div>
    )
}

export default Product
