import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/AugART/Teaser/Ingress/freedom_sale_teaser_page_PC_unrec_08._CB441232371_._SL1280_FMjpg_.jpg" alt=""/>

                <div className="home__row">
                    <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                    <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                   
                </div>

                <div className="homr__row">
                <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                </div>
                <div className="homr__row">
                <Product title="Power Bank" price="20.00" image="https://m.media-amazon.com/images/I/31dgS1tTXhL._AC_SR160,160_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
