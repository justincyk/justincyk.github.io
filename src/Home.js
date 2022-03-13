import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home(){
    return(
        <div className='home_Container'>
            <div className="homepage_image">
              <img src="https://asi.fullerton.edu/wp-content/uploads/TITANS_Letters.jpg" alt="" />
            </div>

            <div className='home_Row'>
                <span className='home_Tag'><h2>Books</h2></span>
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' description={"Book about Crime"} seller={"Bob"}/>
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' description={"Book about Crime"} seller={"Jake"}/>
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' description={"Book about Crime"} seller={"Charlie"}/>
            </div>

            <div className='home_Row'>
                <span className='home_Tag'><h2>Tech</h2></span>
                <Product title='Apple Watch' price={100} image='https://cdn.cultofmac.com/wp-content/uploads/2018/06/Apple-Watch-watchOS-5-alt.jpg' />
                <Product title='Keyboard' price={39.99} image='https://edge.images.sidelineswap.com/production/026/544/049/e58ad07e8074233f_small.jpeg?height=375' />
                <Product title='PS3' price={90} image='https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/25165550/PS32-e1624654587886.jpg' />
            </div>

            {/* Change */}
            <div className='home_Row'>
                <span className='home_Tag'><h2>Tech</h2></span>
                <Product title='Apple Watch' price={100} image='https://cdn.cultofmac.com/wp-content/uploads/2018/06/Apple-Watch-watchOS-5-alt.jpg' />
                <Product title='Keyboard' price={39.99} image='https://edge.images.sidelineswap.com/production/026/544/049/e58ad07e8074233f_small.jpeg?height=375' />
                <Product title='PS3' price={90} image='https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/25165550/PS32-e1624654587886.jpg' />
            </div>

            {/* Change */}
            <div className='home_Row'>
                <span className='home_Tag'><h2>Tech</h2></span>
                <Product title='Apple Watch' price={100} image='https://cdn.cultofmac.com/wp-content/uploads/2018/06/Apple-Watch-watchOS-5-alt.jpg' />
                <Product title='Keyboard' price={39.99} image='https://edge.images.sidelineswap.com/production/026/544/049/e58ad07e8074233f_small.jpeg?height=375' />
                <Product title='PS3' price={90} image='https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/25165550/PS32-e1624654587886.jpg' />
            </div>

            {/* Change */}
            <div className='home_Row'>
                <span className='home_Tag'><h2>Collectibles</h2></span>
                <Product title='Batman Figure' price={49.99} image='https://m.media-amazon.com/images/I/71-yH-5o4oS._AC_SY606_.jpg' description={"Old Batman Action Figure"} seller={"Tiff"}/>
                <Product title='Marvel Collection' price={39.99} image='https://m.media-amazon.com/images/I/91Y2edldmiL._AC_SL1500_.jpg' description={"Marvel Team Action Figures"} seller={"Howard"}/>
                <Product title='Charzard Card' price={1500} image='https://i.ebayimg.com/images/g/BlUAAOSw0lxflHfh/s-l400.jpg' description={"Pristine 10 Charzard Card"} seller={"Blaze"}/>
            </div>



        </div>


    )
}

export default Home
