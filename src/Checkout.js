import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket, user}, dispatch ] = useStateValue(); 
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_LP_Hero_HolidayDeals_en_US.png"/>

                <div>
                    <h3>Hello, {user.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            ></CheckoutProduct>
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
               
            </div>
        </div>
    )
}

export default Checkout
