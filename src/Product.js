import React from "react";
import "./Product.css"

function Product({title, image, price}){
    return(
        <div className="product_Container">
            
            <img src={image} />

            <div className="product_Info">
                <p className="product_Price">{title}</p>
                <p className="product_Price"> <strong>${price}</strong></p>    
                
            </div>

            
            
            
        </div>
    )
}

export default Product