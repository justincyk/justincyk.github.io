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

            <span className='home_Tag'><h2>Books</h2></span>
            <div className='home_Row'>
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' description={"Book about Crime"} seller={"Bob"}/>
                <Product title="Narnia" price={17.96} image='https://images-na.ssl-images-amazon.com/images/I/51WbmTRk-4L._SX331_BO1,204,203,200_.jpg' description={"Book about a lion and friends"} seller={"Jake"}/>
                {/* <Product title="Hunger Games" price={9.99} image='https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg' description={"Book about survival among different nations"} seller={"Kat"}/> */}
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

            <span className='home_Tag'><h2>Tech</h2></span>
            <div className='home_Row'>
                <Product title='Apple Watch' price={100} image='https://cdn.cultofmac.com/wp-content/uploads/2018/06/Apple-Watch-watchOS-5-alt.jpg' description={"Apple Watch Gen 4"} seller={"Marc"}/>
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

            {/* Change */}
            <span className='home_Tag'><h2>Clothing</h2></span>
            <div className='home_Row'>
                <Product title='Titan Sweatshirt' price={44.99} image='https://www.titanshops.com/images/2408865-CSUF%20CHAMPION%20CLASSIC%20HOODIE%20CORE_navy-1.jpg' description={"CSUF Unisex Sweatshirt. Size: M"} seller={"Kelly"}/>
                <Product title='Hat' price={15.00} image='https://m.media-amazon.com/images/I/71RUxoV0VjL._AC_SX569_.jpg' description={"Black Baseball Hat "} seller={"Marc"}/>
                {/* <Product title='Jacket' price={64.99} image='https://img.joomcdn.net/94dbc89bdc6cdcdf6482894f33d534679a700318_original.jpeg' description={"Men's Denim Jacket. Size: L"} seller={"Kevin"} /> */}
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

            <span className='home_Tag'><h2>Exercise Gear</h2></span>
            <div className='home_Row'>
                <Product title='Indoor Cycling Bike' price={120} image='https://i5.walmartimages.com/asr/165f664b-afda-44de-8c74-d290e242af3d.fbf7cd213869923719f388f40c11f780.jpeg' description={"Cycling Bike, Like New"} seller={"Antoni"}/>
                <Product title='Medicine Ball' price={34.99} image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbJGq54T7bU7OMSjTEntupl8WsDwtx5MDu9TMlJyxvf5H2KU-QYTENeyMJ8RfL2QhN5OxTQLLAP9A1UXD25f9pLcCOKHWqCH1kzr5AZ2Q&usqp=CAE' description={"20lb Medicine Ball"} seller={"Amanda"} />
                {/* <Product title='Yoga Ball' price={15} image='https://i5.walmartimages.com/asr/552f5810-f5cd-4f1c-a031-3342b39b8519_1.16ebbef8f6de71c732148424242653e7.jpeg' description={"Red Yoga Ball with Pump Included"} seller={"Angel"} /> */}
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
            <span className='home_Tag'><h2>Collectibles</h2></span>
            <div className='home_Row'>
                <Product title='Batman Figure' price={49.99} image='https://m.media-amazon.com/images/I/71-yH-5o4oS._AC_SY606_.jpg' description={"Old Batman Action Figure"} seller={"Tiff"}/>
                <Product title='Marvel Collection' price={39.99} image='https://m.media-amazon.com/images/I/91Y2edldmiL._AC_SL1500_.jpg' description={"Marvel Team Action Figures"} seller={"Howard"}/>
                {/* <Product title='Charzard Card' price={1500} image='https://i.ebayimg.com/images/g/BlUAAOSw0lxflHfh/s-l400.jpg' description={"Pristine 10 Charzard Card"} seller={"Blaze"}/> */}
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
            <Link to={'/other_page'}>
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

            <Link to={'/exercise_gear_page'}>
              <span className='home_Tag'><h2>Exercise Gear</h2></span>
            </Link>
            <div className='home_Row'>
              {items.filter((items) => items.item.category === "exercise_gear").map(items => (
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
