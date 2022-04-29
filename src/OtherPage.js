import React, { useEffect, useState } from 'react'
import "./OtherPage.css"
import { useStateValue } from './StateProvider'
import { firebaseApp } from './firebase'
import { Link } from "react-router-dom";
import ProductPages from "./ProductPages"

function OtherPage() {
  // set up the items and get the function getITems to retrieve the items from the database and set it equal to items array
  const [items, setItems] = useState([]);

    // function to retrieve items from firebase database
    const getItems = () => {
      const getFromFirebase = firebaseApp.firestore().collection("items");
      getFromFirebase.onSnapshot((querySnapShot) => {
        const saveFirebaseItems = [];
        querySnapShot.forEach((doc) => {
          saveFirebaseItems.push(doc.data());
      });
      setItems(saveFirebaseItems);
    });
  }

  // function to update homepage every time an item is uploaded
  useEffect(()=>{
    getItems();
  }, [])

  return (
    <div className="other_container">
      <h1>Other Type of Items</h1>
      {/* Gets the other category and displays it on the page */}
      <div className='other'>
              {items.filter((items) => items.item.category === "other").map(items => (
                <ProductPages className = "other_items"
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))
              }
        </div>
    </div>
  )
}

export default OtherPage
