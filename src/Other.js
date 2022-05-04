import React, { useEffect, useState } from "react";
import "./Other.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { firebaseApp } from "./firebase";

function Other() {
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
  };

  // function to update homepage every time an item is uploaded
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="OtherCategory_container">
      <span className="OtherCategory_header">
        <h1>Other</h1>
      </span>

      <div className="Other_products">
        <div className="product">
          {items
            .filter((items) => items.item.category === "other")
            .map((items) => (
              <Product
                title={items.item.title}
                image={items.item.image}
                price={items.item.price}
                description={items.item.description}
                seller={items.item.seller}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Other;
