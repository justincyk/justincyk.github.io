import React, { useEffect, useState } from 'react'
import "./ExerciseGear.css"
import { useStateValue } from './StateProvider'
import { firebaseApp } from './firebase'
import { Link } from "react-router-dom";
import ProductPages from "./ProductPages"

function ExerciseGear() {
  // set up the items and get the function getItems to retrieve the items from the database and set it equal to items array
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

  // function to update exercise page every time an item is uploaded
  useEffect(()=>{
    getItems();
  }, [])

  return (
    <div className="exercise_gear_container">
      <h1>Exercise Gear Items</h1>
      {/* Gets the exercise gear category and displays it on the page */}
      <div className='exercise_gear'>
              {items.filter((items) => items.item.category === "exercise_gear").map(items => (
                <ProductPages className = "exercise_gear_items"
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

export default ExerciseGear