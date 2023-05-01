import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>Damru ki Dukkan</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/51wMfm7Fc3L._SY355_.jpg" alt='watch'/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        Amazfit watch
                    </span>
                    <span>
                        Price:  Rs 8000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:8000.00,name:'Amazfit watch'})}
                        }>
                        Add To Cart</button>
                    <button 
                    style={{marginTop:"10px"}}
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home