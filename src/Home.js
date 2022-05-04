import React, { useEffect, useState } from 'react'
import "./Home.css"
import Product from "./Product"
import { useStateValue } from './StateProvider'
import { firebaseApp } from './firebase'
import { Link } from "react-router-dom";


function Home(){
    const [{basket, user}, dispatch] = useStateValue();
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

    return(
        <div className='home_Container'>
            <div className="homepage_image">
              <img src="https://asi.fullerton.edu/wp-content/uploads/TITANS_Letters.jpg" alt="" />
            </div>

            <Link to={'/Books'}>
              <span className='home_Tag'><h2>Books</h2></span>
            </Link>
            <div className='home_Row'>
                {items.filter((items) => items.item.category === "book").map(items => (
                <Product
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))}
            </div>

            <Link to={'/Tech'}>
              <span className='home_Tag'><h2>Tech</h2></span>
            </Link>
            <div className='home_Row'>
                <Product title='PS3' price={90} image='https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/25165550/PS32-e1624654587886.jpg' description={"Bluetooth keyboard"} seller={"Jacob"}/>
                {items.filter((items) => items.item.category === "tech").map(items => (
                <Product
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))}
            </div>

            <Link to={'/Clothing'}>
              <span className='home_Tag'><h2>Clothing</h2></span>
            </Link>
            <div className='home_Row'>
                <Product title='Titan Sweatshirt' price={44.99} image='https://www.titanshops.com/images/2408865-CSUF%20CHAMPION%20CLASSIC%20HOODIE%20CORE_navy-1.jpg' description={"CSUF Unisex Sweatshirt. Size: M"} seller={"Kelly"}/>
                <Product title='Hat' price={15.00} image='https://m.media-amazon.com/images/I/71RUxoV0VjL._AC_SX569_.jpg' description={"Black Baseball Hat "} seller={"Marc"}/>
                {items.filter((items) => items.item.category === "clothing").map(items => (
                <Product
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))}
            </div>

            <Link to={'/Exercise'}>
              <span className='home_Tag'><h2>Exercise Gear</h2></span>
            </Link>
            <div className='home_Row'>
                <Product title='Indoor Cycling Bike' price={120} image='https://i5.walmartimages.com/asr/165f664b-afda-44de-8c74-d290e242af3d.fbf7cd213869923719f388f40c11f780.jpeg' description={"Cycling Bike, Like New"} seller={"Antoni"}/>
                <Product title='Medicine Ball' price={34.99} image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbJGq54T7bU7OMSjTEntupl8WsDwtx5MDu9TMlJyxvf5H2KU-QYTENeyMJ8RfL2QhN5OxTQLLAP9A1UXD25f9pLcCOKHWqCH1kzr5AZ2Q&usqp=CAE' description={"20lb Medicine Ball"} seller={"Amanda"} />
                {items.filter((items) => items.item.category === "exercise").map(items => (
                <Product
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))}
            </div>

            {/* Change */}
            <Link to={'/Collectibles'}>
              <span className='home_Tag'><h2>Collectibles</h2></span>
            </Link>
            <div className='home_Row'>
                <Product title='Batman Figure' price={49.99} image='https://m.media-amazon.com/images/I/71-yH-5o4oS._AC_SY606_.jpg' description={"Old Batman Action Figure"} seller={"Tiff"}/>
                <Product title='Marvel Collection' price={39.99} image='https://m.media-amazon.com/images/I/91Y2edldmiL._AC_SL1500_.jpg' description={"Marvel Team Action Figures"} seller={"Howard"}/>
                {items.filter((items) => items.item.category === "collectible").map(items => (
                <Product
                  title={items.item.title}
                  image={items.item.image}
                  price={items.item.price}
                  description={items.item.description}
                  seller={items.item.seller}
                />
              ))}
            </div>


            {/* shows the items that are in the firebase database */}
            <Link to={'/Other'}>
              <span className='home_Tag'><h2>Other</h2></span>
            </Link>
            <div className='home_Row'>
              {items.filter((items) => items.item.category === "other").map(items => (
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


    )
}

export default Home
