import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home(){
    return(
        <div className='home_Container'>
            
            <div className='home_Row'>
                <span className='home_Tag'>Books</span>
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' />
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' />
                <Product title="Crime and Punishment" price={9.99} image='https://u-mercari-images.mercdn.net/photos/m83702213756_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1643496851' />
            </div>

            <div className='home_Row'>
                <span className='home_Tag'>Tech</span>
                <Product title='Apple Watch' price={100} image='https://cdn.cultofmac.com/wp-content/uploads/2018/06/Apple-Watch-watchOS-5-alt.jpg' />
                <Product title='Keyboard' price={39.99} image='https://edge.images.sidelineswap.com/production/026/544/049/e58ad07e8074233f_small.jpeg?height=375' />
                <Product title='PS3' price={90} image='https://media.threatpost.com/wp-content/uploads/sites/103/2021/06/25165550/PS32-e1624654587886.jpg' />
                
            </div>
        
        
        
        
        </div>


    )
}

export default Home